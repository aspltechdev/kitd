// src/components/home/ArtistsSection/ArtistsSection.jsx

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";

import { getAllArtists } from "../../api/artist.api";

import "./ArtistsSection.css";

const ArtistsSection = () => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    fetchArtists();
  }, []);

  const fetchArtists = async () => {
    try {
      const res = await getAllArtists({
        page: 1,
        limit: 4,
      });

      const data =
        res.data?.data?.artists ||
        res.data?.data ||
        [];

      setArtists(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="artists-section">

      <div className="container">

        <div className="section-header">

          <span className="section-tag">
            FEATURED ARTISTS
          </span>

          <h2>
            Celebrating the Artists
            <br />
            Behind KITD
          </h2>

          <p>
            Discover talented performers, teachers,
            and cultural ambassadors preserving
            Indian Classical Dance traditions.
          </p>

        </div>

        <div className="artists-grid">

          {artists.map((artist) => (

            <div
              className="artist-card"
              key={artist.id}
            >

              <div className="artist-image">

                <img
                  src={artist.photo}
                  alt={artist.name}
                />

              </div>

              <div className="artist-content">

                <span className="artist-style">
                  {artist.danceForm}
                </span>

                <h3>
                  {artist.name}
                </h3>

                <div className="artist-city">

                  <MapPin size={16} />

                  {artist.city}

                </div>

                <p>
                  {artist.biography?.slice(0, 120)}
                  ...
                </p>

                <Link
                  to={`/artists/${artist.slug}`}
                  className="artist-btn"
                >
                  View Profile

                  <ArrowRight size={18} />

                </Link>

              </div>

            </div>

          ))}

        </div>

        <div className="artist-footer">

          <Link
            to="/artists"
            className="view-all-artists"
          >
            Explore All Artists
          </Link>

        </div>

      </div>

    </section>
  );
};

export default ArtistsSection;