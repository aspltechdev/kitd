import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import "./Socialwall.css";

/* ============================================
   AWARDS & RECOGNITION SECTION — COMMENTED OUT
   Uncomment this whole block (glob import, data,
   component) plus the <AwardsRecognition /> usage
   further down to bring it back.
   ============================================

// =======================
// Awards & Skill Development Images
// -----------------------------------
// This glob grabs EVERY image in src/assets whose name starts with
// "csr" or "skill" (any case, any of jpg/jpeg/JPG/png) so mismatched
// capitalization or extensions (e.g. csr1.JPG vs csr1.jpg) can never
// break the build again. { eager: true, import: "default" } returns
// a plain { "/full/path/filename.ext": url } object immediately.
// =======================
const awardImageModules = import.meta.glob(
  "../../assets/{csr,skill}*.{jpg,jpeg,JPG,JPEG,png,PNG}",
  { eager: true, import: "default" }
);

// Build a lookup like { csr1: url, skill4: url, ... } regardless of
// the exact case/extension the file was saved with.
const awardImages = {};
Object.entries(awardImageModules).forEach(([path, url]) => {
  const fileName = path.split("/").pop(); // e.g. "csr1.JPG"
  const key = fileName.replace(/\.[^.]+$/, "").toLowerCase(); // "csr1"
  awardImages[key] = url;
});

const awardsData = [
  {
    id: "award-1",
    year: "2025",
    title: "Best NGO for Rural Education",
    org: "National CSR Council",
    image: awardImages["csr1"],
  },
  {
    id: "award-2",
    year: "2024",
    title: "Excellence in Community Service",
    org: "State Social Welfare Board",
    image: awardImages["csr2"],
  },
  {
    id: "award-3",
    year: "2024",
    title: "Outstanding Contribution to Women Empowerment",
    org: "District Development Authority",
    image: awardImages["csr3"],
  },
  {
    id: "award-4",
    year: "2023",
    title: "Champion of Change Award",
    org: "Rotary Club International",
    image: awardImages["csr4"],
  },
  {
    id: "award-5",
    year: "2023",
    title: "Top Grassroots Foundation",
    org: "India NGO Awards",
    image: awardImages["skill1"],
  },
  {
    id: "award-6",
    year: "2022",
    title: "Recognition for Blood Donation Drives",
    org: "Indian Red Cross Society",
    image: awardImages["skill2"],
  },
];

function AwardsRecognition() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  return (
    <section className="aw-section" ref={sectionRef}>
      <div className="aw-container">
        <motion.div
          className="aw-header"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.33, 0.1, 0.25, 1] }}
        >
          <div className="aw-header-tag">
            <span className="aw-header-tag-line" />
            <span className="aw-header-tag-text">Awards &amp; Recognition</span>
          </div>
          <h2 className="aw-header-title">
            Honoured For Our <span className="aw-text-red">Impact</span>
          </h2>
          <p className="aw-header-desc">
            Every recognition reflects the trust of the communities we serve
            and the dedication of our volunteers, partners, and donors.
          </p>
        </motion.div>

        <div className="aw-grid">
          {awardsData.map((award, index) => (
            <motion.div
              className="aw-card"
              key={award.id}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.1 + index * 0.08,
                ease: [0.33, 0.1, 0.25, 1],
              }}
            >
              <div className="aw-card-img-wrap">
                <img
                  src={award.image}
                  alt={award.title}
                  className="aw-card-img"
                  loading="lazy"
                />
                <span className="aw-card-year">{award.year}</span>
              </div>
              <div className="aw-card-body">
                <h3 className="aw-card-title">{award.title}</h3>
                <p className="aw-card-org">{award.org}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

   ============================================ */

const instagramPosts = [
  {
    id: "ig-1",
    link: "https://www.instagram.com/reel/DZpTfJeSjtI/",
  },
  {
    id: "ig-2",
    link: "https://www.instagram.com/p/DZpSJnIEnPv/",
  },
  {
    id: "ig-3",
    link: "https://www.instagram.com/reel/DYziybcyZdW/",
  },
  {
    id: "ig-4",
    link: "https://www.instagram.com/reel/DX1sRRESqId/",
  },
  {
    id: "ig-5",
    link: "https://www.instagram.com/reel/DVgD89NklT7/",
  },
];

const facebookPosts = [
 {
  id: "fb-1",
  embedUrl:
    "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fuvagaifoundation%2Fposts%2Fpfbid02dqCJmppVaJdzM1t4QPvHnQEM5GWH869N8Lwz8DxRdC2uVj5EEtpM3GPWnBowg5fgl&show_text=true&width=350",
},
{
  id: "fb-2",
  embedUrl:
    "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1380508440699700%2F&show_text=false&width=350&t=0",
},
{
  id: "fb-3",
  embedUrl:
    "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fuvagaifoundation%2Fposts%2Fpfbid02HzSzAKBFLvJ499yKSbsGKSETyDHvLjbKUD3AePiYekHPvqBfyTwiCynsANfEbFmrl&show_text=true&width=350",
},
{
  id: "fb-4",
  embedUrl:
    "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fuvagaifoundation%2Fposts%2Fpfbid022hzPwFzbmXHKQtfZkvRMbx1YkyHVsLtaJsRAFijCFjBbb843M5idRpiWEsEnb2Mml&show_text=true&width=350",
},
{
  id: "fb-5",
  embedUrl:
    "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fuvagaifoundation%2Fposts%2Fpfbid02dqCJmppVaJdzM1t4QPvHnQEM5GWH869N8Lwz8DxRdC2uVj5EEtpM3GPWnBowg5fgl&show_text=true&width=350",
},
];

function loadInstagramEmbedScript() {
  const existingScript = document.getElementById("sw-instagram-embed-script");
  if (existingScript) {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
    return;
  }

  const script = document.createElement("script");
  script.id = "sw-instagram-embed-script";
  script.src = "https://www.instagram.com/embed.js";
  script.async = true;
  script.onload = () => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    }
  };
  document.body.appendChild(script);
}

function InstagramEmbed({ link }) {
  const containerRef = useRef(null);

  useEffect(() => {
    loadInstagramEmbedScript();
  }, [link]);

  return (
    <div className="sw-embed-wrap" ref={containerRef}>
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={link}
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: 0,
          borderRadius: "12px",
          margin: "0",
          maxWidth: "320px",
          minWidth: "280px",
          width: "100%",
        }}
      >
        <a href={link} target="_blank" rel="noopener noreferrer">
          View this post on Instagram
        </a>
      </blockquote>
    </div>
  );
}

function FacebookEmbed({ embedUrl }) {
  return (
    <div className="sw-embed-wrap sw-fb-embed">
      <iframe
        src={embedUrl}
        title="Facebook post"
        className="sw-fb-iframe"
        style={{
          border: "none",
          overflow: "hidden",
          width: "320px",
          height: "380px",
          borderRadius: "12px",
          background: "#FFF",
        }}
        scrolling="no"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      />
    </div>
  );
}

export default function SocialWall() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });
  const [activeTab, setActiveTab] = useState("instagram");

  useEffect(() => {
    loadInstagramEmbedScript();
  }, []);

  useEffect(() => {
    if (activeTab === "instagram") {
      loadInstagramEmbedScript();
    }
  }, [activeTab]);

  const activePosts = activeTab === "instagram" ? instagramPosts : facebookPosts;
  const marqueeItems = [...activePosts, ...activePosts];

  return (
    <>
      {/* Awards & Recognition Section — commented out.
          Uncomment the block above and this line to restore it. */}
      {/* <AwardsRecognition /> */}

      <section className="sw-section" ref={sectionRef}>
        <div className="sw-container">
          
          {/* Header */}
          <motion.div
            className="sw-header"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.33, 0.1, 0.25, 1] }}
          >
            <div className="sw-header-tag">
              <span className="sw-header-tag-line" />
              <span className="sw-header-tag-text">Social Wall</span>
            </div>
            <h2 className="sw-header-title">
              Moments, As They <span className="sw-text-red">Happen</span>
            </h2>
            <p className="sw-header-desc">
              Real classrooms, real volunteers, real progress — straight from our 
              social media, where every post is a small part of the bigger mission.
            </p>

            {/* Toggle Tabs */}
            <div className="sw-tabs">
              <button
                className={`sw-tab ${activeTab === "instagram" ? "sw-tab-active sw-tab-ig" : ""}`}
                onClick={() => setActiveTab("instagram")}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor"/>
                </svg>
                Instagram
              </button>
              <button
                className={`sw-tab ${activeTab === "facebook" ? "sw-tab-active sw-tab-fb" : ""}`}
                onClick={() => setActiveTab("facebook")}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3V2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Facebook
              </button>
            </div>
          </motion.div>
        </div>

        {/* Single Marquee Row */}
        <div className="sw-marquee-wrap" key={`marquee-${activeTab}`}>
          <motion.div 
            className="sw-marquee-track"
            animate={{
              x: [0, "-50%"],
            }}
            transition={{
              x: {
                duration: 40,
                repeat: Infinity,
                ease: "linear",
              },
            }}
          >
            {marqueeItems.map((post, index) => (
              <div className="sw-marquee-item" key={`${post.id}-${index}`}>
                {activeTab === "instagram" ? (
                  <InstagramEmbed link={post.link} />
                ) : (
                  <FacebookEmbed embedUrl={post.embedUrl} />
                )}
              </div>
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        {/* <div className="sw-container">
          <motion.div
            className="sw-cta"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <a
              href={
                activeTab === "instagram"
                  ? "https://www.instagram.com/uvagaifoundation"
                  : "https://www.facebook.com/uvagaifoundation"
              }
              target="_blank"
              rel="noopener noreferrer"
              className={`sw-cta-btn ${activeTab === "instagram" ? "sw-cta-ig" : "sw-cta-fb"}`}
            >
              <span>
                {activeTab === "instagram" ? "Follow on Instagram" : "Follow on Facebook"}
              </span>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 9H15M15 9L10 4M15 9L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </motion.div>
        </div> */}
      </section>
    </>
  );
}