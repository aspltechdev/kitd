import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import "./Socialwall.css";

const instagramPosts = [
  {
    id: "ig-1",
    link: "https://www.instagram.com/p/DF2KP_XpbjY/",
  },
  {
    id: "ig-2",
    link: "https://www.instagram.com/p/DVjQonbimZr/",
  },
  {
    id: "ig-3",
    link: "https://www.instagram.com/reel/DVHSLR3CidD/",
  },
  {
    id: "ig-4",
    link: "https://www.instagram.com/reel/DUExXOPCNVa/",
  },
  {
    id: "ig-5",
    link: "https://www.instagram.com/p/DXY7XFzCiB7/",
  },
];

const facebookPosts = [
  {
    id: "fb-1",
    embedUrl:
      "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fv%2F1HTz38JZWr%2F&show_text=false&width=350&t=0",
  },
  {
    id: "fb-2",
    embedUrl:
      "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fv%2F196Nhf5aUi%2F&show_text=false&width=350&t=0",
  },
  {
    id: "fb-3",
    embedUrl:
      "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fv%2F1FeGfTD9CK%2F&show_text=false&width=350&t=0",
  },
  {
    id: "fb-4",
    embedUrl:
      "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fv%2F17Mxumitvq%2F&show_text=false&width=350&t=0",
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
            Every Rhythm, Every Recital,{" "}
            <span className="sw-highlight">Shared With You</span>
          </h2>

          <p className="sw-header-desc">
            Catch highlights from our performances, workshops, and cultural
            celebrations — straight from our social media, where every post
            captures a piece of KITD's growing story across Germany.
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
    </section>
  );
}