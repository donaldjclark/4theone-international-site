import { Link } from "react-router-dom";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <section className="py-24 bg-gradient-to-br from-charcoal via-slate to-primary text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-7xl font-bold mb-14 font-ivy tracking-wide">
            Our <span className="text-sand">Vision</span>
          </h1>
          <div className="space-y-10 text-[1.6rem] max-w-6xl mx-auto leading-relaxed text-justify font-ivy tracking-normal">
            <p>
              We exist to see lives transformed through personal encounters with Jesus Christ. Our mandate is to equip believers to carry revival and host the manifest presence of God, releasing His glory into a world covered in darkness (<span className="italic">Isaiah 60</span>).
            </p>
            <p>
              We embrace the Great Commission—<span className="italic">“Go therefore and make disciples of all nations…”</span> (<span className="italic">Matthew 28:19–20</span>). We are called not only to preach the Gospel but to disciple nations by training and equipping the Body of Christ for the coming revival (<span className="italic">Ephesians 4:12</span>).
            </p>
            <p>
              Like Paul, who was sent out from Antioch, Praise Tabernacle serves as our apostolic center—a place of sending, refreshing, and restoring. From here, we are commissioned by God to evangelize, equip, and disciple, and then return to be renewed for the next assignment.
            </p>
            <p>
              Our vision is simple yet bold: to see people set free, nations discipled, and the earth filled with the knowledge of the glory of the Lord. We equip believers to carry revival, disciple nations, and host God’s presence—bringing His glory to the darkest places of the earth.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-charcoal mb-8">Our Heart</h2>
          <p className="text-lg text-slate max-w-4xl mx-auto">
            4theOne International was born from a divine encounter with the heart of God for revival.
          </p>
          <div className="mt-12 flex gap-6 justify-center">
            <Link to="/events" className="bg-primary text-white px-8 py-4 rounded-full font-bold">
              Events
            </Link>
            <Link to="/partner" className="border-2 border-primary text-primary px-8 py-4 rounded-full font-bold">
              Partner
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
