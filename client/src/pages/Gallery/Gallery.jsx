// src/components/home/GallerySection/GallerySection.jsx

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Image as ImageIcon, ArrowRight } from "lucide-react";

import { getAllGallery } from "../../api/gallery.api";

import "./GallerySection.css";

const GallerySection = () => {
  const [gallery, setGallery] = useState([]);

  useEffect(() => {
    fetchGallery();
  }, []);

  const fetchGallery = async () => {
    try {
      const res = await getAllGallery({
        page: 1,
        limit: 6,
      });

      const data =
        res.data?.data?.gallery ||
        res.data?.data?.galleries ||
        res.data?.data ||
        [];

      setGallery(Array.isArray(data) ? data : []);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <section className="gallery-section">

      <div className="container">

        <div className="section-header">

          <span className="section-tag">
            GALLERY
          </span>

          <h2>
            Moments That Celebrate
            <br />
            Art, Culture & Community
          </h2>

          <p>
            Explore memorable performances, workshops,
            festivals, and cultural events organized by KITD.
          </p>

        </div>

        <div className="gallery-grid">

          {gallery.map((item) => (

            <div
              className="gallery-card"
              key={item.id}
            >

              <img
                src={item.image}
                alt={item.title}
              />

              <div className="gallery-overlay">

                <ImageIcon size={34} />

                <h3>{item.title}</h3>

              </div>

            </div>

          ))}

        </div>

        <div className="gallery-footer">

          <Link
            to="/gallery"
            className="gallery-btn"
          >
            View Full Gallery

            <ArrowRight size={18} />

          </Link>

        </div>

      </div>

    </section>
  );
};

export default GallerySection;