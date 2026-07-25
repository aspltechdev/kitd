// // src/components/home/ArtistsSection/ArtistsSection.jsx

// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { ArrowRight, MapPin } from "lucide-react";

// import { getAllArtists } from "../../api/artist.api";

// import "./ArtistsSection.css";

// const ArtistsSection = () => {
//   const [artists, setArtists] = useState([]);

//   useEffect(() => {
//     fetchArtists();
//   }, []);

//   const fetchArtists = async () => {
//     try {
//       const res = await getAllArtists({
//         page: 1,
//         limit: 4,
//       });

//       const data =
//         res.data?.data?.artists ||
//         res.data?.data ||
//         [];

//       setArtists(data);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <section className="artists-section">

//       <div className="container">

//         <div className="section-header">

//           <span className="section-tag">
//             FEATURED ARTISTS
//           </span>

//           <h2>
//             Celebrating the Artists
//             <br />
//             Behind KITD
//           </h2>

//           <p>
//             Discover talented performers, teachers,
//             and cultural ambassadors preserving
//             Indian Classical Dance traditions.
//           </p>

//         </div>

//         <div className="artists-grid">

//           {artists.map((artist) => (

//             <div
//               className="artist-card"
//               key={artist.id}
//             >

//               <div className="artist-image">

//                 <img
//                   src={artist.photo}
//                   alt={artist.name}
//                 />

//               </div>

//               <div className="artist-content">

//                 <span className="artist-style">
//                   {artist.danceForm}
//                 </span>

//                 <h3>
//                   {artist.name}
//                 </h3>

//                 <div className="artist-city">

//                   <MapPin size={16} />

//                   {artist.city}

//                 </div>

//                 <p>
//                   {artist.biography?.slice(0, 120)}
//                   ...
//                 </p>

//                 <Link
//                   to={`/artists/${artist.slug}`}
//                   className="artist-btn"
//                 >
//                   View Profile

//                   <ArrowRight size={18} />

//                 </Link>

//               </div>

//             </div>

//           ))}

//         </div>

//         <div className="artist-footer">

//           <Link
//             to="/artists"
//             className="view-all-artists"
//           >
//             Explore All Artists
//           </Link>

//         </div>

//       </div>

//     </section>
//   );
// };

// export default ArtistsSection;


// src/components/home/ArtistsSection/ArtistsSection.jsx

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Users } from "lucide-react";

import { getAllArtists } from "../../api/artist.api";

import "./ArtistsSection.css";

// Fallback artists based on KITD network
const FALLBACK_ARTISTS = [
  {
    id: 1,
    name: "Dr. Ananya Sharma",
    photo: "https://images.pexels.com/photos/8021124/pexels-photo-8021124.jpeg?auto=compress&cs=tinysrgb&w=400&h=500",
    danceForm: "Bharatanatyam",
    role: "Performer & Teacher",
    city: "Berlin",
    biography: "An accomplished Bharatanatyam artist with over 20 years of experience in performance and teaching across Europe and India.",
    slug: "ananya-sharma",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    photo: "https://images.pexels.com/photos/6898854/pexels-photo-6898854.jpeg?auto=compress&cs=tinysrgb&w=400&h=500",
    danceForm: "Kathak",
    role: "Choreographer & Educator",
    city: "Munich",
    biography: "A dedicated Kathak practitioner and choreographer known for blending traditional techniques with contemporary expressions.",
    slug: "rajesh-kumar",
  },
  {
    id: 3,
    name: "Maya Patel",
    photo: "https://images.pexels.com/photos/6898858/pexels-photo-6898858.jpeg?auto=compress&cs=tinysrgb&w=400&h=500",
    danceForm: "Odissi",
    role: "Classical Dancer & Researcher",
    city: "Frankfurt",
    biography: "An Odissi dancer and researcher committed to preserving the authentic traditions of classical Indian dance through performance and scholarship.",
    slug: "maya-patel",
  },
  {
    id: 4,
    name: "Vikram Iyer",
    photo: "https://images.pexels.com/photos/31521700/pexels-photo-31521700.jpeg?auto=compress&cs=tinysrgb&w=400&h=500",
    danceForm: "Kuchipudi",
    role: "Performer & Cultural Ambassador",
    city: "Hamburg",
    biography: "A passionate Kuchipudi artist dedicated to promoting Indian Classical Dance through performances, workshops, and cultural exchange programmes.",
    slug: "vikram-iyer",
  },
];

const ArtistsSection = () => {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    fetchArtists();
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    const section = document.querySelector('.artists-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const fetchArtists = async () => {
    try {
      const res = await getAllArtists({ page: 1, limit: 4 });
      const data = res.data?.data?.artists || res.data?.data || [];
      
      if (Array.isArray(data) && data.length > 0) {
        setArtists(data);
      } else {
        setArtists(FALLBACK_ARTISTS);
      }
    } catch (err) {
      console.log("Using fallback artists:", err);
      setArtists(FALLBACK_ARTISTS);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={`artists-section ${isVisible ? 'visible' : ''}`}>
      <div className="artists-container">
        
        {/* Section Header */}
        <div className="artists-header">
          <div className="artists-eyebrow">
            <span className="artists-eyebrow-line" />
            <span className="artists-eyebrow-text">Our Artist Community</span>
          </div>
          
          <h2 className="artists-title">
            Discover the Diverse Artists
            <br />
            of the
            <span className="artists-title-accent"> KITD Network</span>
          </h2>
          
          <p className="artists-subtitle">
            Explore the diverse community of dancers, teachers, choreographers, 
            and cultural practitioners who contribute to preserving and promoting 
            Indian Classical Dance throughout Germany.
          </p>
        </div>

        {/* Artists Grid */}
        {!loading && artists.length > 0 && (
          <div className="artists-grid">
            {artists.map((artist, index) => (
              <div
                className="artist-card"
                key={artist.id || index}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                {/* Artist Image */}
                <div className="artist-card-image">
                  <img
                    src={artist.photo}
                    alt={artist.name}
                    loading="lazy"
                  />
                  <div className="artist-card-overlay" />
                </div>

                {/* Artist Content */}
                <div className="artist-card-content">
                  {/* Dance Form Badge */}
                  <div className="artist-dance-form">
                    {artist.danceForm}
                  </div>

                  {/* Name & Role */}
                  <h3 className="artist-card-name">
                    {artist.name}
                  </h3>
                  
                  <p className="artist-card-role">
                    {artist.role}
                  </p>

                  {/* Location with Dance Form */}
                  <div className="artist-card-meta">
                    <span className="artist-card-dance">
                      {artist.danceForm}
                    </span>
                    <span className="artist-card-separator">•</span>
                    <span className="artist-card-location">
                      <MapPin size={12} strokeWidth={1.5} />
                      {artist.city}
                    </span>
                  </div>

                  {/* Biography */}
                  <p className="artist-card-bio">
                    {artist.biography?.length > 100
                      ? `${artist.biography.slice(0, 100)}...`
                      : artist.biography}
                  </p>

                  {/* Link */}
                  <Link
                    to={`/artists/${artist.slug || artist.id}`}
                    className="artist-card-link"
                  >
                    <span>Meet the Artist</span>
                    <ArrowRight size={15} strokeWidth={1.5} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Empty State */}
        {!loading && artists.length === 0 && (
          <div className="artists-empty">
            <div className="artists-empty-icon">
              <Users size={48} strokeWidth={1} />
            </div>
            <h3 className="artists-empty-title">
              Artist Directory Coming Soon
            </h3>
            <p className="artists-empty-text">
              We are building a diverse directory of artists, teachers, 
              and cultural practitioners from across Germany. Stay tuned 
              as we expand our growing network.
            </p>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="artists-loading">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="artist-card-skeleton">
                <div className="skeleton-image" />
                <div className="skeleton-content">
                  <div className="skeleton-badge" />
                  <div className="skeleton-name" />
                  <div className="skeleton-role" />
                  <div className="skeleton-meta" />
                  <div className="skeleton-text" />
                  <div className="skeleton-link" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Bottom CTA */}
        {artists.length > 0 && (
          <div className="artists-cta-wrapper">
            <Link to="/artists" className="artists-cta">
              <span>View Artist Directory</span>
              <span className="artists-cta-icon">
                <ArrowRight size={16} strokeWidth={1.5} />
              </span>
            </Link>
          </div>
        )}

      </div>
    </section>
  );
};

export default ArtistsSection;