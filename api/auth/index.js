/* eslint-env node */
import process from "node:process";

export default function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).send("Method Not Allowed");
  }

  const { GITHUB_CLIENT_ID, OAUTH_REDIRECT_URI } = process.env ?? {};

  if (!GITHUB_CLIENT_ID || !OAUTH_REDIRECT_URI) {
    return res
      .status(500)
      .json({ error: "Missing GITHUB_CLIENT_ID or OAUTH_REDIRECT_URI" });
  }

  const currentUrl = new URL(req.url, `https://${req.headers.host}`);
  const state = currentUrl.searchParams.get("state");
  const scope = currentUrl.searchParams.get("scope") ?? "repo";

  const authUrl = new URL("https://github.com/login/oauth/authorize");
  authUrl.searchParams.set("client_id", GITHUB_CLIENT_ID);
  authUrl.searchParams.set("redirect_uri", OAUTH_REDIRECT_URI);
  authUrl.searchParams.set("scope", scope);

  if (state) {
    authUrl.searchParams.set("state", state);
  }

  res.writeHead(302, {
    Location: authUrl.toString(),
  });
  return res.end();
}
