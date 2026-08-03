// import { useState, useEffect } from "react";
// import { useParams, Link } from "react-router-dom";
// import {
//   ArrowLeft,
//   MapPin,
//   Mail,
//   Phone,
//   Music,
//   Award,
//   Globe,
//   ChevronRight,
//   User,
//   Calendar,
//   ExternalLink,
//   Heart,
// } from "lucide-react";
// import { Helmet } from "react-helmet-async";
// import { FaInstagram, FaYoutube, FaFacebookF, FaTwitter } from "react-icons/fa";

// import { getArtistById } from "../../api/artist.api";

// import "./ArtistDetail.css";

// const ArtistDetail = () => {
//   const { id } = useParams();
//   const [artist, setArtist] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5050/api';
//   const IMAGE_BASE_URL = API_BASE_URL.replace('/api', '');

//   useEffect(() => {
//     const fetchArtist = async () => {
//       try {
//         setLoading(true);
//         const res = await getArtistById(id);
//         const data = res.data?.data || res.data;
//         setArtist(data);
//       } catch (err) {
//         console.error("Failed to fetch artist:", err);
//         setError("Artist not found.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     if (id) fetchArtist();
//   }, [id]);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);

//   const getImageUrl = (artist) => {
//     if (!artist) return null;
//     const img = artist.image || artist.photo;
//     if (!img) return null;
//     if (img.startsWith('http')) return img;
//     return `${IMAGE_BASE_URL}/uploads/artists/${img}`;
//   };

//   const getSocialLink = (artist, platform) => {
//     if (!artist?.socialLinks) return null;
//     let links = artist.socialLinks;
//     if (typeof links === 'string') {
//       try { links = JSON.parse(links); } catch (e) { return null; }
//     }
//     return links[platform] || null;
//   };

//   const getInitials = (name) => {
//     if (!name) return "?";
//     return name.split(" ").map(w => w.charAt(0)).join("").toUpperCase().slice(0, 2);
//   };

//   if (loading) {
//     return (
//       <div className="artist-detail">
//         <div className="artist-detail__loading">
//           <div className="spinner" />
//           <p>Loading artist details...</p>
//         </div>
//       </div>
//     );
//   }

//   if (error || !artist) {
//     return (
//       <div className="artist-detail">
//         <div className="artist-detail__error">
//           <User size={48} />
//           <h2>{error || "Artist Not Found"}</h2>
//           <p>The artist you're looking for doesn't exist or has been removed.</p>
//           <Link to="/artists" className="artist-detail__back-btn">
//             <ArrowLeft size={18} /> Back to Artists
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   const imageUrl = getImageUrl(artist);
//   const instagramUrl = getSocialLink(artist, 'instagram');
//   const youtubeUrl = getSocialLink(artist, 'youtube');
//   const facebookUrl = getSocialLink(artist, 'facebook');
//   const twitterUrl = getSocialLink(artist, 'twitter');
//   const websiteUrl = getSocialLink(artist, 'website');

//   return (
//     <>
//       <Helmet>
//         <title>{artist.name} | KITD Artists</title>
//         <meta name="description" content={artist.biography?.substring(0, 160) || `${artist.name} - ${artist.danceForm} artist at KITD Germany`} />
//       </Helmet>

//       <div className="artist-detail">

//         {/* Breadcrumb */}
//         <div className="artist-detail__breadcrumb">
//           <div className="artist-detail__container">
//             <Link to="/">Home</Link>
//             <ChevronRight size={14} />
//             <Link to="/artists">Artists</Link>
//             <ChevronRight size={14} />
//             <span>{artist.name}</span>
//           </div>
//         </div>

//         {/* Hero Section */}
//         <section className="artist-detail__hero">
//           <div className="artist-detail__container">
//             <div className="artist-detail__hero-grid">
//               {/* Image */}
//               <div className="artist-detail__hero-image">
//                 {imageUrl ? (
//                   <img src={imageUrl} alt={artist.name} />
//                 ) : (
//                   <div className="artist-detail__hero-placeholder">
//                     <User size={64} />
//                     <span>{getInitials(artist.name)}</span>
//                   </div>
//                 )}
//               </div>

//               {/* Info */}
//               <div className="artist-detail__hero-info">
//                 <Link to="/artists" className="artist-detail__back-link">
//                   <ArrowLeft size={18} /> Back to Artists
//                 </Link>
                
//                 {artist.danceForm && (
//                   <span className="artist-detail__badge">
//                     <Music size={14} /> {artist.danceForm}
//                   </span>
//                 )}

//                 <h1 className="artist-detail__name">{artist.name}</h1>
                
//                 {artist.stageName && (
//                   <p className="artist-detail__stage-name">🎭 {artist.stageName}</p>
//                 )}

//                 <div className="artist-detail__meta">
//                   {artist.city && (
//                     <span className="artist-detail__meta-item">
//                       <MapPin size={16} /> {artist.city}{artist.country ? `, ${artist.country}` : ''}
//                     </span>
//                   )}
//                   {artist.experience && (
//                     <span className="artist-detail__meta-item">
//                       <Award size={16} /> {artist.experience} {artist.experience === "1" ? "year" : "years"} experience
//                     </span>
//                   )}
//                 </div>

//                 {/* Contact */}
//                 <div className="artist-detail__contact">
//                   {artist.email && (
//                     <a href={`mailto:${artist.email}`} className="artist-detail__contact-item">
//                       <Mail size={16} /> {artist.email}
//                     </a>
//                   )}
//                   {artist.mobile && (
//                     <a href={`tel:${artist.mobile}`} className="artist-detail__contact-item">
//                       <Phone size={16} /> {artist.mobile}
//                     </a>
//                   )}
//                 </div>

//                 {/* Social Links */}
//                 <div className="artist-detail__social">
//                   {instagramUrl && (
//                     <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="artist-detail__social-link instagram">
//                       <FaInstagram size={18} />
//                     </a>
//                   )}
//                   {youtubeUrl && (
//                     <a href={youtubeUrl} target="_blank" rel="noopener noreferrer" className="artist-detail__social-link youtube">
//                       <FaYoutube size={18} />
//                     </a>
//                   )}
//                   {facebookUrl && (
//                     <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="artist-detail__social-link facebook">
//                       <FaFacebookF size={18} />
//                     </a>
//                   )}
//                   {twitterUrl && (
//                     <a href={twitterUrl} target="_blank" rel="noopener noreferrer" className="artist-detail__social-link twitter">
//                       <FaTwitter size={18} />
//                     </a>
//                   )}
//                   {websiteUrl && (
//                     <a href={websiteUrl} target="_blank" rel="noopener noreferrer" className="artist-detail__social-link website">
//                       <Globe size={18} />
//                     </a>
//                   )}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Biography Section */}
//         {artist.biography && (
//           <section className="artist-detail__bio">
//             <div className="artist-detail__container">
//               <div className="artist-detail__bio-grid">
//                 <div className="artist-detail__bio-main">
//                   <h2>About {artist.name.split(' ')[0]}</h2>
//                   <p>{artist.biography}</p>
//                 </div>

//                 {/* Quick Info Card */}
//                 <div className="artist-detail__bio-sidebar">
//                   <div className="artist-detail__info-card">
//                     <h3>Quick Facts</h3>
//                     <ul>
//                       {artist.danceForm && (
//                         <li>
//                           <Music size={16} />
//                           <div><strong>Dance Form</strong><span>{artist.danceForm}</span></div>
//                         </li>
//                       )}
//                       {artist.city && (
//                         <li>
//                           <MapPin size={16} />
//                           <div><strong>Location</strong><span>{artist.city}{artist.country ? `, ${artist.country}` : ''}</span></div>
//                         </li>
//                       )}
//                       {artist.experience && (
//                         <li>
//                           <Award size={16} />
//                           <div><strong>Experience</strong><span>{artist.experience} years</span></div>
//                         </li>
//                       )}
//                     </ul>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>
//         )}

//         {/* CTA */}
//         <section className="artist-detail__cta">
//           <div className="artist-detail__container">
//             <div className="artist-detail__cta-wrapper">
//               <Heart size={24} />
//               <h2>Inspired by {artist.name}?</h2>
//               <p>Join KITD and become part of Germany's growing Indian Classical Dance community.</p>
//               <div className="artist-detail__cta-buttons">
//                 <Link to="/membership" className="artist-detail__cta-btn artist-detail__cta-btn--primary">
//                   Become a Member <ArrowLeft size={18} style={{ transform: 'rotate(180deg)' }} />
//                 </Link>
//                 <Link to="/artists" className="artist-detail__cta-btn artist-detail__cta-btn--secondary">
//                   View All Artists <ExternalLink size={18} />
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// };

// export default ArtistDetail;







import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  MapPin,
  Mail,
  Phone,
  ChevronRight,
  User,
  ExternalLink,
} from "lucide-react";
import { Helmet } from "react-helmet-async";
import { FaInstagram, FaYoutube, FaFacebookF, FaTwitter } from "react-icons/fa";

import { getArtistById } from "../../api/artist.api";

import "./ArtistDetail.css";

// Import images
import contactcta from "../../assets/contactcta.png";

const ArtistDetail = () => {
  const { id } = useParams();
  const [artist, setArtist] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5050/api';
  const IMAGE_BASE_URL = API_BASE_URL.replace('/api', '');

  useEffect(() => {
    const fetchArtist = async () => {
      try {
        setLoading(true);
        const res = await getArtistById(id);
        const data = res.data?.data || res.data;
        setArtist(data);
      } catch (err) {
        console.error("Failed to fetch artist:", err);
        setError("Artist not found.");
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchArtist();
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getImageUrl = (artist) => {
    if (!artist) return null;
    const img = artist.image || artist.photo;
    if (!img) return null;
    if (img.startsWith('http://') || img.startsWith('https://')) return img;
    return `${IMAGE_BASE_URL}/uploads/artists/${img}`;
  };

  const getSocialLink = (artist, platform) => {
    if (!artist?.socialLinks) return null;
    let links = artist.socialLinks;
    if (typeof links === 'string') {
      try { links = JSON.parse(links); } catch (e) { return null; }
    }
    return links[platform] || null;
  };

  const getInitials = (name) => {
    if (!name) return "?";
    return name.split(" ").map(w => w.charAt(0)).join("").toUpperCase().slice(0, 2);
  };

  if (loading) {
    return (
      <div className="ad-page">
        <div className="ad-page__loading">
          <div className="ad-page__spinner" />
          <p>Loading artist details...</p>
        </div>
      </div>
    );
  }

  if (error || !artist) {
    return (
      <div className="ad-page">
        <div className="ad-page__error">
          <h2>{error || "Artist Not Found"}</h2>
          <p>The artist you're looking for doesn't exist or has been removed.</p>
          <Link to="/artists" className="ad-page__back-btn">
            <ArrowLeft size={18} strokeWidth={1.5} /> Back to Artists
          </Link>
        </div>
      </div>
    );
  }

  const imageUrl = getImageUrl(artist);
  const instagramUrl = getSocialLink(artist, 'instagram');
  const youtubeUrl = getSocialLink(artist, 'youtube');
  const facebookUrl = getSocialLink(artist, 'facebook');
  const twitterUrl = getSocialLink(artist, 'twitter');
  const websiteUrl = getSocialLink(artist, 'website');

  return (
    <>
      <Helmet>
        <title>{artist.name} | KITD Artists</title>
        <meta name="description" content={artist.biography?.substring(0, 160) || `${artist.name} - ${artist.danceForm} artist at KITD Germany`} />
      </Helmet>

      <div className="ad-page">

        {/* Breadcrumb */}
        <div className="ad-page__breadcrumb">
          <div className="ad-page__container">
            <Link to="/">Home</Link>
            <ChevronRight size={14} strokeWidth={1.5} />
            <Link to="/artists">Artists</Link>
            <ChevronRight size={14} strokeWidth={1.5} />
            <span>{artist.name}</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="ad-page__hero">
          <div className="ad-page__container">
            <div className="ad-page__hero-grid">
              {/* Image */}
              <div className="ad-page__hero-image">
                {imageUrl ? (
                  <img src={imageUrl} alt={artist.name} />
                ) : (
                  <div className="ad-page__hero-placeholder">
                    <span className="ad-page__hero-placeholder-text">{getInitials(artist.name)}</span>
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="ad-page__hero-info">
                <Link to="/artists" className="ad-page__back-link">
                  <ArrowLeft size={18} strokeWidth={1.5} /> Back to Artists
                </Link>
                
                {artist.danceForm && (
                  <span className="ad-page__badge">{artist.danceForm}</span>
                )}

                <h1 className="ad-page__name">{artist.name}</h1>
                
                {artist.stageName && (
                  <p className="ad-page__stage-name">{artist.stageName}</p>
                )}

                <div className="ad-page__meta">
                  {artist.city && (
                    <span className="ad-page__meta-item">
                      <MapPin size={16} strokeWidth={1.5} /> {artist.city}{artist.country ? `, ${artist.country}` : ''}
                    </span>
                  )}
                  {artist.experience && (
                    <span className="ad-page__meta-item">
                      <span className="ad-page__meta-icon">✦</span> {artist.experience} {artist.experience === "1" ? "year" : "years"} experience
                    </span>
                  )}
                </div>

                {/* Contact */}
                <div className="ad-page__contact">
                  {artist.email && (
                    <a href={`mailto:${artist.email}`} className="ad-page__contact-item">
                      <Mail size={16} strokeWidth={1.5} /> {artist.email}
                    </a>
                  )}
                  {artist.mobile && (
                    <a href={`tel:${artist.mobile}`} className="ad-page__contact-item">
                      <Phone size={16} strokeWidth={1.5} /> {artist.mobile}
                    </a>
                  )}
                </div>

                {/* Social Links */}
                <div className="ad-page__social">
                  {instagramUrl && (
                    <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="ad-page__social-link" aria-label="Instagram">
                      <FaInstagram size={18} />
                    </a>
                  )}
                  {youtubeUrl && (
                    <a href={youtubeUrl} target="_blank" rel="noopener noreferrer" className="ad-page__social-link" aria-label="YouTube">
                      <FaYoutube size={18} />
                    </a>
                  )}
                  {facebookUrl && (
                    <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="ad-page__social-link" aria-label="Facebook">
                      <FaFacebookF size={18} />
                    </a>
                  )}
                  {twitterUrl && (
                    <a href={twitterUrl} target="_blank" rel="noopener noreferrer" className="ad-page__social-link" aria-label="Twitter">
                      <FaTwitter size={18} />
                    </a>
                  )}
                  {websiteUrl && (
                    <a href={websiteUrl} target="_blank" rel="noopener noreferrer" className="ad-page__social-link" aria-label="Website">
                      <span className="ad-page__social-link-text">Website</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Biography Section */}
        {artist.biography && (
          <section className="ad-page__bio">
            <div className="ad-page__container">
              <div className="ad-page__bio-grid">
                <div className="ad-page__bio-main">
                  <h2>About {artist.name.split(' ')[0]}</h2>
                  <p>{artist.biography}</p>
                </div>

                {/* Quick Info Card */}
                <div className="ad-page__bio-sidebar">
                  <div className="ad-page__info-card">
                    <h3>Quick Facts</h3>
                    <ul>
                      {artist.danceForm && (
                        <li>
                          <div className="ad-page__info-icon">✦</div>
                          <div>
                            <strong>Dance Form</strong>
                            <span>{artist.danceForm}</span>
                          </div>
                        </li>
                      )}
                      {artist.city && (
                        <li>
                          <div className="ad-page__info-icon">📍</div>
                          <div>
                            <strong>Location</strong>
                            <span>{artist.city}{artist.country ? `, ${artist.country}` : ''}</span>
                          </div>
                        </li>
                      )}
                      {artist.experience && (
                        <li>
                          <div className="ad-page__info-icon">✦</div>
                          <div>
                            <strong>Experience</strong>
                            <span>{artist.experience} years</span>
                          </div>
                        </li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="ad-page__cta">
          <div className="ad-page__cta-bg">
            <img src={contactcta} alt="KITD Community" loading="lazy" />
            <div className="ad-page__cta-overlay" />
          </div>
          <div className="ad-page__container">
            <div className="ad-page__cta-wrapper">
              <h2>Inspired by {artist.name.split(' ')[0]}?</h2>
              <p>Join KITD and become part of Germany's growing Indian Classical Dance community.</p>
              <div className="ad-page__cta-buttons">
                <Link to="/membership" className="ad-page__cta-btn ad-page__cta-btn--primary">
                  Become a Member <ArrowLeft size={18} strokeWidth={1.5} style={{ transform: 'rotate(180deg)' }} />
                </Link>
                <Link to="/artists" className="ad-page__cta-btn ad-page__cta-btn--secondary">
                  View All Artists <ExternalLink size={18} strokeWidth={1.5} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ArtistDetail;