/* eslint-env node */
import process from "node:process";

function htmlResponse(body) {
  return `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8" /><title>Authentication</title></head><body>${body}</body></html>`;
}

export default async function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).send("Method Not Allowed");
  }

  const { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET, OAUTH_REDIRECT_URI, CMS_ALLOWED_ORIGIN } =
    process.env ?? {};

  if (!GITHUB_CLIENT_ID || !GITHUB_CLIENT_SECRET || !OAUTH_REDIRECT_URI) {
    res.status(500).send(
      htmlResponse("<p>Missing GitHub OAuth environment variables. Check server configuration.</p>")
    );
    return;
  }

  const currentUrl = new URL(req.url, `https://${req.headers.host}`);
  const code = currentUrl.searchParams.get("code");
  const state = currentUrl.searchParams.get("state") ?? "";

  if (!code) {
    res.status(400).send(htmlResponse("<p>Missing OAuth code.</p>"));
    return;
  }

  try {
    const tokenResponse = await fetch("https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        client_id: GITHUB_CLIENT_ID,
        client_secret: GITHUB_CLIENT_SECRET,
        redirect_uri: OAUTH_REDIRECT_URI,
        code,
        state,
      }),
    });

    const tokenJson = await tokenResponse.json();

    if (!tokenResponse.ok || !tokenJson.access_token) {
      const errorDescription = tokenJson.error_description || tokenResponse.statusText;
      res.status(401).send(
        htmlResponse(renderCloseScript({
          success: false,
          error: errorDescription || "OAuth exchange failed",
          origin: CMS_ALLOWED_ORIGIN,
        }))
      );
      return;
    }

    res.status(200).send(
      htmlResponse(
        renderCloseScript({
          success: true,
          token: tokenJson.access_token,
          origin: CMS_ALLOWED_ORIGIN,
        })
      )
    );
  } catch (error) {
    res.status(500).send(
      htmlResponse(
        renderCloseScript({
          success: false,
          error: error instanceof Error ? error.message : "Unknown error",
          origin: CMS_ALLOWED_ORIGIN,
        })
      )
    );
  }
}

function renderCloseScript({ success, token, error, origin }) {
  let targetOrigin = "*";

  if (origin) {
    try {
      targetOrigin = JSON.stringify(new URL(origin).origin);
    } catch {
      targetOrigin = JSON.stringify(origin);
    }
  }

  const messages = success
    ? [
        { type: "object", value: { provider: "github", token } },
        { type: "string", value: `authorization:github:success:${token}` },
      ]
    : [
        {
          type: "object",
          value: { provider: "github", error: error || "Authorization failed" },
        },
        {
          type: "string",
          value: `authorization:github:error:${error ?? "Authorization failed"}`,
        },
      ];

  const payloadScript = messages
    .map((message) => {
      if (message.type === "object") {
        const serialized = JSON.stringify(message.value);
        return `sendMessage(JSON.parse(${JSON.stringify(serialized)}));`;
      }
      return `sendMessage(${JSON.stringify(message.value)});`;
    })
    .join("\n");

  return `<script>
  (function() {
    function sendMessage(message) {
      if (!window.opener) {
        return;
      }
      try {
        window.opener.postMessage(message, ${targetOrigin});
      } catch (err) {
        console.error('Failed to post message', err);
      }
    }

    ${payloadScript}

    if (window.close) {
      window.close();
    }
  })();
</script>`;
}
