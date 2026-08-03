// // // // // src/components/home/ArtistsSection/ArtistsSection.jsx

// // // // import { useEffect, useState } from "react";
// // // // import { Link } from "react-router-dom";
// // // // import { ArrowRight, MapPin } from "lucide-react";

// // // // import { getAllArtists } from "../../api/artist.api";

// // // // import "./ArtistsSection.css";

// // // // const ArtistsSection = () => {
// // // //   const [artists, setArtists] = useState([]);

// // // //   useEffect(() => {
// // // //     fetchArtists();
// // // //   }, []);

// // // //   const fetchArtists = async () => {
// // // //     try {
// // // //       const res = await getAllArtists({
// // // //         page: 1,
// // // //         limit: 4,
// // // //       });

// // // //       const data =
// // // //         res.data?.data?.artists ||
// // // //         res.data?.data ||
// // // //         [];

// // // //       setArtists(data);
// // // //     } catch (err) {
// // // //       console.log(err);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <section className="artists-section">

// // // //       <div className="container">

// // // //         <div className="section-header">

// // // //           <span className="section-tag">
// // // //             FEATURED ARTISTS
// // // //           </span>

// // // //           <h2>
// // // //             Celebrating the Artists
// // // //             <br />
// // // //             Behind KITD
// // // //           </h2>

// // // //           <p>
// // // //             Discover talented performers, teachers,
// // // //             and cultural ambassadors preserving
// // // //             Indian Classical Dance traditions.
// // // //           </p>

// // // //         </div>

// // // //         <div className="artists-grid">

// // // //           {artists.map((artist) => (

// // // //             <div
// // // //               className="artist-card"
// // // //               key={artist.id}
// // // //             >

// // // //               <div className="artist-image">

// // // //                 <img
// // // //                   src={artist.photo}
// // // //                   alt={artist.name}
// // // //                 />

// // // //               </div>

// // // //               <div className="artist-content">

// // // //                 <span className="artist-style">
// // // //                   {artist.danceForm}
// // // //                 </span>

// // // //                 <h3>
// // // //                   {artist.name}
// // // //                 </h3>

// // // //                 <div className="artist-city">

// // // //                   <MapPin size={16} />

// // // //                   {artist.city}

// // // //                 </div>

// // // //                 <p>
// // // //                   {artist.biography?.slice(0, 120)}
// // // //                   ...
// // // //                 </p>

// // // //                 <Link
// // // //                   to={`/artists/${artist.slug}`}
// // // //                   className="artist-btn"
// // // //                 >
// // // //                   View Profile

// // // //                   <ArrowRight size={18} />

// // // //                 </Link>

// // // //               </div>

// // // //             </div>

// // // //           ))}

// // // //         </div>

// // // //         <div className="artist-footer">

// // // //           <Link
// // // //             to="/artists"
// // // //             className="view-all-artists"
// // // //           >
// // // //             Explore All Artists
// // // //           </Link>

// // // //         </div>

// // // //       </div>

// // // //     </section>
// // // //   );
// // // // };

// // // // export default ArtistsSection;


// // // // src/components/home/ArtistsSection/ArtistsSection.jsx

// // // import { useEffect, useState } from "react";
// // // import { Link } from "react-router-dom";
// // // import { ArrowRight, MapPin, Users } from "lucide-react";

// // // import { getAllArtists } from "../../api/artist.api";

// // // import "./ArtistsSection.css";

// // // // Fallback artists based on KITD network
// // // const FALLBACK_ARTISTS = [
// // //   {
// // //     id: 1,
// // //     name: "Dr. Ananya Sharma",
// // //     photo: "https://images.pexels.com/photos/8021124/pexels-photo-8021124.jpeg?auto=compress&cs=tinysrgb&w=400&h=500",
// // //     danceForm: "Bharatanatyam",
// // //     role: "Performer & Teacher",
// // //     city: "Berlin",
// // //     biography: "An accomplished Bharatanatyam artist with over 20 years of experience in performance and teaching across Europe and India.",
// // //     slug: "ananya-sharma",
// // //   },
// // //   {
// // //     id: 2,
// // //     name: "Rajesh Kumar",
// // //     photo: "https://images.pexels.com/photos/6898854/pexels-photo-6898854.jpeg?auto=compress&cs=tinysrgb&w=400&h=500",
// // //     danceForm: "Kathak",
// // //     role: "Choreographer & Educator",
// // //     city: "Munich",
// // //     biography: "A dedicated Kathak practitioner and choreographer known for blending traditional techniques with contemporary expressions.",
// // //     slug: "rajesh-kumar",
// // //   },
// // //   {
// // //     id: 3,
// // //     name: "Maya Patel",
// // //     photo: "https://images.pexels.com/photos/6898858/pexels-photo-6898858.jpeg?auto=compress&cs=tinysrgb&w=400&h=500",
// // //     danceForm: "Odissi",
// // //     role: "Classical Dancer & Researcher",
// // //     city: "Frankfurt",
// // //     biography: "An Odissi dancer and researcher committed to preserving the authentic traditions of classical Indian dance through performance and scholarship.",
// // //     slug: "maya-patel",
// // //   },
// // //   {
// // //     id: 4,
// // //     name: "Vikram Iyer",
// // //     photo: "https://images.pexels.com/photos/31521700/pexels-photo-31521700.jpeg?auto=compress&cs=tinysrgb&w=400&h=500",
// // //     danceForm: "Kuchipudi",
// // //     role: "Performer & Cultural Ambassador",
// // //     city: "Hamburg",
// // //     biography: "A passionate Kuchipudi artist dedicated to promoting Indian Classical Dance through performances, workshops, and cultural exchange programmes.",
// // //     slug: "vikram-iyer",
// // //   },
// // // ];

// // // const ArtistsSection = () => {
// // //   const [artists, setArtists] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [isVisible, setIsVisible] = useState(false);

// // //   useEffect(() => {
// // //     fetchArtists();
    
// // //     const observer = new IntersectionObserver(
// // //       ([entry]) => {
// // //         if (entry.isIntersecting) {
// // //           setIsVisible(true);
// // //         }
// // //       },
// // //       { threshold: 0.15 }
// // //     );

// // //     const section = document.querySelector('.artists-section');
// // //     if (section) observer.observe(section);

// // //     return () => {
// // //       if (section) observer.unobserve(section);
// // //     };
// // //   }, []);

// // //   const fetchArtists = async () => {
// // //     try {
// // //       const res = await getAllArtists({ page: 1, limit: 4 });
// // //       const data = res.data?.data?.artists || res.data?.data || [];
      
// // //       if (Array.isArray(data) && data.length > 0) {
// // //         setArtists(data);
// // //       } else {
// // //         setArtists(FALLBACK_ARTISTS);
// // //       }
// // //     } catch (err) {
// // //       console.log("Using fallback artists:", err);
// // //       setArtists(FALLBACK_ARTISTS);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   return (
// // //     <section className={`artists-section ${isVisible ? 'visible' : ''}`}>
// // //       <div className="artists-container">
        
// // //         {/* Section Header */}
// // //         <div className="artists-header">
// // //           <div className="artists-eyebrow">
// // //             <span className="artists-eyebrow-line" />
// // //             <span className="artists-eyebrow-text">Our Artist Community</span>
// // //           </div>
          
// // //           <h2 className="artists-title">
// // //             Discover the Diverse Artists
// // //             <br />
// // //             of the
// // //             <span className="artists-title-accent"> KITD Network</span>
// // //           </h2>
          
// // //           <p className="artists-subtitle">
// // //             Explore the diverse community of dancers, teachers, choreographers, 
// // //             and cultural practitioners who contribute to preserving and promoting 
// // //             Indian Classical Dance throughout Germany.
// // //           </p>
// // //         </div>

// // //         {/* Artists Grid */}
// // //         {!loading && artists.length > 0 && (
// // //           <div className="artists-grid">
// // //             {artists.map((artist, index) => (
// // //               <div
// // //                 className="artist-card"
// // //                 key={artist.id || index}
// // //                 style={{ transitionDelay: `${index * 0.1}s` }}
// // //               >
// // //                 {/* Artist Image */}
// // //                 <div className="artist-card-image">
// // //                   <img
// // //                     src={artist.photo}
// // //                     alt={artist.name}
// // //                     loading="lazy"
// // //                   />
// // //                   <div className="artist-card-overlay" />
// // //                 </div>

// // //                 {/* Artist Content */}
// // //                 <div className="artist-card-content">
// // //                   {/* Dance Form Badge */}
// // //                   <div className="artist-dance-form">
// // //                     {artist.danceForm}
// // //                   </div>

// // //                   {/* Name & Role */}
// // //                   <h3 className="artist-card-name">
// // //                     {artist.name}
// // //                   </h3>
                  
// // //                   <p className="artist-card-role">
// // //                     {artist.role}
// // //                   </p>

// // //                   {/* Location with Dance Form */}
// // //                   <div className="artist-card-meta">
// // //                     <span className="artist-card-dance">
// // //                       {artist.danceForm}
// // //                     </span>
// // //                     <span className="artist-card-separator">•</span>
// // //                     <span className="artist-card-location">
// // //                       <MapPin size={12} strokeWidth={1.5} />
// // //                       {artist.city}
// // //                     </span>
// // //                   </div>

// // //                   {/* Biography */}
// // //                   <p className="artist-card-bio">
// // //                     {artist.biography?.length > 100
// // //                       ? `${artist.biography.slice(0, 100)}...`
// // //                       : artist.biography}
// // //                   </p>

// // //                   {/* Link */}
// // //                   <Link
// // //                     to={`/artists/${artist.slug || artist.id}`}
// // //                     className="artist-card-link"
// // //                   >
// // //                     <span>Meet the Artist</span>
// // //                     <ArrowRight size={15} strokeWidth={1.5} />
// // //                   </Link>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         )}

// // //         {/* Empty State */}
// // //         {!loading && artists.length === 0 && (
// // //           <div className="artists-empty">
// // //             <div className="artists-empty-icon">
// // //               <Users size={48} strokeWidth={1} />
// // //             </div>
// // //             <h3 className="artists-empty-title">
// // //               Artist Directory Coming Soon
// // //             </h3>
// // //             <p className="artists-empty-text">
// // //               We are building a diverse directory of artists, teachers, 
// // //               and cultural practitioners from across Germany. Stay tuned 
// // //               as we expand our growing network.
// // //             </p>
// // //           </div>
// // //         )}

// // //         {/* Loading State */}
// // //         {loading && (
// // //           <div className="artists-loading">
// // //             {[1, 2, 3, 4].map((item) => (
// // //               <div key={item} className="artist-card-skeleton">
// // //                 <div className="skeleton-image" />
// // //                 <div className="skeleton-content">
// // //                   <div className="skeleton-badge" />
// // //                   <div className="skeleton-name" />
// // //                   <div className="skeleton-role" />
// // //                   <div className="skeleton-meta" />
// // //                   <div className="skeleton-text" />
// // //                   <div className="skeleton-link" />
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         )}

// // //         {/* Bottom CTA */}
// // //         {artists.length > 0 && (
// // //           <div className="artists-cta-wrapper">
// // //             <Link to="/artists" className="artists-cta">
// // //               <span>View Artist Directory</span>
// // //               <span className="artists-cta-icon">
// // //                 <ArrowRight size={16} strokeWidth={1.5} />
// // //               </span>
// // //             </Link>
// // //           </div>
// // //         )}

// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default ArtistsSection;

// // // src/components/home/ArtistsSection/ArtistsSection.jsx

// // // import { useEffect, useState, useRef } from "react";
// // // import { Link } from "react-router-dom";
// // // import { ArrowRight, MapPin, Users, Sparkles } from "lucide-react";

// // // import { getAllArtists } from "../../api/artist.api";

// // // import "./ArtistsSection.css";

// // // // Fallback artists based on KITD network
// // // const FALLBACK_ARTISTS = [
// // //   {
// // //     id: 1,
// // //     name: "Dr. Ananya Sharma",
// // //     photo: "https://images.pexels.com/photos/8021124/pexels-photo-8021124.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000",
// // //     danceForm: "Bharatanatyam",
// // //     role: "Performer & Teacher",
// // //     city: "Berlin",
// // //     biography: "An accomplished Bharatanatyam artist with over 20 years of experience in performance and teaching across Europe and India.",
// // //     slug: "ananya-sharma",
// // //     gradient: "linear-gradient(135deg, rgba(139, 30, 63, 0.3) 0%, rgba(50, 15, 25, 0.28) 100%)",
// // //     featured: true,
// // //   },
// // //   {
// // //     id: 2,
// // //     name: "Rajesh Kumar",
// // //     photo: "https://images.pexels.com/photos/6898854/pexels-photo-6898854.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000",
// // //     danceForm: "Kathak",
// // //     role: "Choreographer & Educator",
// // //     city: "Munich",
// // //     biography: "A dedicated Kathak practitioner and choreographer known for blending traditional techniques with contemporary expressions.",
// // //     slug: "rajesh-kumar",
// // //     gradient: "linear-gradient(135deg, rgba(139, 30, 63, 0.3) 0%, rgba(50, 15, 25, 0.28) 100%)",
// // //     featured: false,
// // //   },
// // //   {
// // //     id: 3,
// // //     name: "Maya Patel",
// // //     photo: "https://images.pexels.com/photos/6898858/pexels-photo-6898858.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000",
// // //     danceForm: "Odissi",
// // //     role: "Classical Dancer & Researcher",
// // //     city: "Frankfurt",
// // //     biography: "An Odissi dancer and researcher committed to preserving the authentic traditions of classical Indian dance through performance and scholarship.",
// // //     slug: "maya-patel",
// // //     gradient: "linear-gradient(135deg, rgba(139, 30, 63, 0.3) 0%, rgba(50, 15, 25, 0.28) 100%)",
// // //     featured: false,
// // //   },
// // //   {
// // //     id: 4,
// // //     name: "Vikram Iyer",
// // //     photo: "https://images.pexels.com/photos/31521700/pexels-photo-31521700.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000",
// // //     danceForm: "Kuchipudi",
// // //     role: "Performer & Cultural Ambassador",
// // //     city: "Hamburg",
// // //     biography: "A passionate Kuchipudi artist dedicated to promoting Indian Classical Dance through performances, workshops, and cultural exchange programmes.",
// // //     slug: "vikram-iyer",
// // //     gradient: "linear-gradient(135deg, rgba(139, 30, 63, 0.3) 0%, rgba(50, 15, 25, 0.28) 100%)",
// // //     featured: false,
// // //   },
// // // ];

// // // const ArtistsSection = () => {
// // //   const [artists, setArtists] = useState([]);
// // //   const [loading, setLoading] = useState(true);
// // //   const [isVisible, setIsVisible] = useState(false);
// // //   const [hoveredCard, setHoveredCard] = useState(null);
// // //   const sectionRef = useRef(null);

// // //   useEffect(() => {
// // //     fetchArtists();
    
// // //     const observer = new IntersectionObserver(
// // //       ([entry]) => {
// // //         if (entry.isIntersecting) {
// // //           setIsVisible(true);
// // //         }
// // //       },
// // //       { threshold: 0.15 }
// // //     );

// // //     if (sectionRef.current) {
// // //       observer.observe(sectionRef.current);
// // //     }

// // //     return () => {
// // //       if (sectionRef.current) {
// // //         observer.unobserve(sectionRef.current);
// // //       }
// // //     };
// // //   }, []);

// // //   const fetchArtists = async () => {
// // //     try {
// // //       const res = await getAllArtists({ page: 1, limit: 4 });
// // //       const data = res.data?.data?.artists || res.data?.data || [];
      
// // //       if (Array.isArray(data) && data.length > 0) {
// // //         const artistsWithGradient = data.map((artist, index) => ({
// // //           ...artist,
// // //           gradient: FALLBACK_ARTISTS[index]?.gradient || "linear-gradient(135deg, rgba(139,30,63,0.85) 0%, rgba(60,10,30,0.92) 100%)",
// // //           featured: index === 0 ? true : false,
// // //         }));
// // //         setArtists(artistsWithGradient);
// // //       } else {
// // //         setArtists(FALLBACK_ARTISTS);
// // //       }
// // //     } catch (err) {
// // //       console.log("Using fallback artists:", err);
// // //       setArtists(FALLBACK_ARTISTS);
// // //     } finally {
// // //       setLoading(false);
// // //     }
// // //   };

// // //   return (
// // //     <section className={`kitd-artists ${isVisible ? 'kitd-artists--visible' : ''}`} ref={sectionRef}>
// // //       {/* Decorative Background Elements */}
// // //       <div className="kitd-artists__deco kitd-artists__deco--1" />
// // //       <div className="kitd-artists__deco kitd-artists__deco--2" />
// // //       <div className="kitd-artists__deco kitd-artists__deco--3" />

// // //       <div className="kitd-artists__container">
        
// // //         {/* Section Header */}
// // //         <div className="kitd-artists__header">
// // //           <div className="kitd-artists__eyebrow">
// // //             <span className="kitd-artists__eyebrow-line" />
// // //             <span className="kitd-artists__eyebrow-text">Our Artist Community</span>
// // //           </div>
          
// // //           <h2 className="kitd-artists__title">
// // //             Discover the Diverse Artists
// // //             <br />
// // //             of the
// // //             <span className="kitd-artists__title-accent"> KITD Network</span>
// // //           </h2>
          
// // //           <p className="kitd-artists__subtitle">
// // //             Explore the diverse community of dancers, teachers, choreographers, 
// // //             and cultural practitioners who contribute to preserving and promoting 
// // //             Indian Classical Dance throughout Germany.
// // //           </p>
// // //         </div>

// // //         {/* Artists Grid */}
// // //         {!loading && artists.length > 0 && (
// // //           <div className="kitd-artists__grid">
// // //             {artists.map((artist, index) => (
// // //               <div
// // //                 className={`kitd-artists__card ${hoveredCard === index ? 'kitd-artists__card--hovered' : ''} ${artist.featured ? 'kitd-artists__card--featured' : ''}`}
// // //                 key={artist.id || index}
// // //                 style={{ transitionDelay: `${index * 0.1}s` }}
// // //                 onMouseEnter={() => setHoveredCard(index)}
// // //                 onMouseLeave={() => setHoveredCard(null)}
// // //               >
// // //                 {artist.featured && (
// // //                   <div className="kitd-artists__card-badge">
// // //                     <Sparkles size={12} />
// // //                     <span>Featured</span>
// // //                   </div>
// // //                 )}
                
// // //                 <div 
// // //                   className="kitd-artists__card-bg"
// // //                   style={{ backgroundImage: `url(${artist.photo})` }}
// // //                 />
                
// // //                 <div 
// // //                   className="kitd-artists__card-overlay"
// // //                   style={{ background: artist.gradient }}
// // //                 />
                
// // //                 <div className="kitd-artists__card-wrapper">
// // //                   {/* Top Section */}
// // //                   <div className="kitd-artists__card-top">
// // //                     <div className="kitd-artists__card-dance">
// // //                       {artist.danceForm}
// // //                     </div>
// // //                   </div>

// // //                   {/* Content */}
// // //                   <div className="kitd-artists__card-body">
// // //                     <div className="kitd-artists__card-header">
// // //                       <h3 className="kitd-artists__card-name">
// // //                         {artist.name}
// // //                       </h3>
// // //                       <p className="kitd-artists__card-role">
// // //                         {artist.role}
// // //                       </p>
// // //                     </div>

// // //                     <div className="kitd-artists__card-location">
// // //                       <MapPin size={14} strokeWidth={1.5} />
// // //                       <span>{artist.city}</span>
// // //                     </div>

// // //                     <p className="kitd-artists__card-bio">
// // //                       {artist.biography?.length > 100
// // //                         ? `${artist.biography.slice(0, 100)}...`
// // //                         : artist.biography}
// // //                     </p>

// // //                     <Link
// // //                       to={`/artists/${artist.slug || artist.id}`}
// // //                       className="kitd-artists__card-link"
// // //                     >
// // //                       <span>Meet the Artist</span>
// // //                       <ArrowRight size={15} strokeWidth={1.5} />
// // //                     </Link>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         )}

// // //         {/* Empty State */}
// // //         {!loading && artists.length === 0 && (
// // //           <div className="kitd-artists__empty">
// // //             <div className="kitd-artists__empty-icon">
// // //               <Users size={48} strokeWidth={1} />
// // //             </div>
// // //             <h3 className="kitd-artists__empty-title">
// // //               Artist Directory Coming Soon
// // //             </h3>
// // //             <p className="kitd-artists__empty-text">
// // //               We are building a diverse directory of artists, teachers, 
// // //               and cultural practitioners from across Germany. Stay tuned 
// // //               as we expand our growing network.
// // //             </p>
// // //           </div>
// // //         )}

// // //         {/* Loading State */}
// // //         {loading && (
// // //           <div className="kitd-artists__loading">
// // //             {[1, 2, 3, 4].map((item) => (
// // //               <div key={item} className="kitd-artists__skeleton">
// // //                 <div className="kitd-artists__skeleton-image" />
// // //                 <div className="kitd-artists__skeleton-content">
// // //                   <div className="kitd-artists__skeleton-badge" />
// // //                   <div className="kitd-artists__skeleton-name" />
// // //                   <div className="kitd-artists__skeleton-role" />
// // //                   <div className="kitd-artists__skeleton-location" />
// // //                   <div className="kitd-artists__skeleton-text" />
// // //                   <div className="kitd-artists__skeleton-link" />
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>
// // //         )}

// // //         {/* Bottom CTA */}
// // //         {artists.length > 0 && (
// // //           <div className="kitd-artists__cta-wrapper">
// // //             <Link to="/artists" className="kitd-artists__cta">
// // //               <span>View Artist Directory</span>
// // //               <span className="kitd-artists__cta-icon">
// // //                 <ArrowRight size={16} strokeWidth={1.5} />
// // //               </span>
// // //             </Link>
// // //           </div>
// // //         )}

// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default ArtistsSection;

// // // src/components/home/ArtistsSection/ArtistsSection.jsx

// // import { useEffect, useState, useRef } from "react";
// // import { Link } from "react-router-dom";
// // import { ArrowRight, MapPin, Users, Sparkles, Star } from "lucide-react";

// // import { getAllArtists } from "../../api/artist.api";

// // import "./ArtistsSection.css";

// // // Fallback artists based on KITD network
// // const FALLBACK_ARTISTS = [
// //   {
// //     id: 1,
// //     name: "Dr. Ananya Sharma",
// //     photo: "https://images.pexels.com/photos/14469571/pexels-photo-14469571.jpeg",
// //     danceForm: "Bharatanatyam",
// //     role: "Performer & Teacher",
// //     city: "Berlin",
// //     biography: "An accomplished Bharatanatyam artist with over 20 years of experience in performance and teaching across Europe and India.",
// //     slug: "ananya-sharma",
// //     gradient: "linear-gradient(135deg, rgba(139, 30, 63, 0.3) 0%, rgba(50, 15, 25, 0.28) 100%)",
// //     featured: true,
// //   },
// //   {
// //     id: 2,
// //     name: "Rajesh Kumar",
// //     photo: "https://images.pexels.com/photos/34717650/pexels-photo-34717650.jpeg",
// //     danceForm: "Kathak",
// //     role: "Choreographer & Educator",
// //     city: "Munich",
// //     biography: "A dedicated Kathak practitioner and choreographer known for blending traditional techniques with contemporary expressions.",
// //     slug: "rajesh-kumar",
// //     gradient: "linear-gradient(135deg, rgba(139, 30, 63, 0.3) 0%, rgba(50, 15, 25, 0.28) 100%)",
// //     featured: false,
// //   },
// //   {
// //     id: 3,
// //     name: "Maya Patel",
// //     photo: "https://images.pexels.com/photos/30481577/pexels-photo-30481577.jpeg",
// //     danceForm: "Odissi",
// //     role: "Classical Dancer & Researcher",
// //     city: "Frankfurt",
// //     biography: "An Odissi dancer and researcher committed to preserving the authentic traditions of classical Indian dance through performance and scholarship.",
// //     slug: "maya-patel",
// //     gradient: "linear-gradient(135deg, rgba(139, 30, 63, 0.3) 0%, rgba(50, 15, 25, 0.28) 100%)",
// //     featured: false,
// //   },
// //   {
// //     id: 4,
// //     name: "Vikram Iyer",
// //     photo: "https://images.pexels.com/photos/15279925/pexels-photo-15279925.jpeg",
// //     danceForm: "Kuchipudi",
// //     role: "Performer & Cultural Ambassador",
// //     city: "Hamburg",
// //     biography: "A passionate Kuchipudi artist dedicated to promoting Indian Classical Dance through performances, workshops, and cultural exchange programmes.",
// //     slug: "vikram-iyer",
// //     gradient: "linear-gradient(135deg, rgba(139, 30, 63, 0.3) 0%, rgba(50, 15, 25, 0.28) 100%)",
// //     featured: false,
// //   },
// //   {
// //     id: 5,
// //     name: "Priya Singh",
// //     photo: "https://images.pexels.com/photos/30481580/pexels-photo-30481580.jpeg",
// //     danceForm: "Bharatanatyam",
// //     role: "Dancer & Choreographer",
// //     city: "Berlin",
// //     biography: "A versatile Bharatanatyam dancer and choreographer exploring contemporary narratives through classical vocabulary.",
// //     slug: "priya-singh",
// //     gradient: "linear-gradient(135deg, rgba(139, 30, 63, 0.3) 0%, rgba(50, 15, 25, 0.28) 100%)",
// //     featured: false,
// //   },
// //   {
// //     id: 6,
// //     name: "Arjun Reddy",
// //     photo: "https://images.pexels.com/photos/30444653/pexels-photo-30444653.jpeg",
// //     danceForm: "Kathak",
// //     role: "Performer & Teacher",
// //     city: "Munich",
// //     biography: "A Kathak performer and teacher dedicated to preserving the rich tradition of North Indian classical dance.",
// //     slug: "arjun-reddy",
// //     gradient: "linear-gradient(135deg, rgba(139, 30, 63, 0.3) 0%, rgba(50, 15, 25, 0.28) 100%)",
// //     featured: false,
// //   },
// // ];

// // const ArtistsSection = () => {
// //   const [artists, setArtists] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [isVisible, setIsVisible] = useState(false);
// //   const [hoveredCard, setHoveredCard] = useState(null);
// //   const sectionRef = useRef(null);

// //   useEffect(() => {
// //     fetchArtists();
    
// //     const observer = new IntersectionObserver(
// //       ([entry]) => {
// //         if (entry.isIntersecting) {
// //           setIsVisible(true);
// //         }
// //       },
// //       { threshold: 0.15 }
// //     );

// //     if (sectionRef.current) {
// //       observer.observe(sectionRef.current);
// //     }

// //     return () => {
// //       if (sectionRef.current) {
// //         observer.unobserve(sectionRef.current);
// //       }
// //     };
// //   }, []);

// //   const fetchArtists = async () => {
// //     try {
// //       const res = await getAllArtists({ page: 1, limit: 6 });
// //       const data = res.data?.data?.artists || res.data?.data || [];
      
// //       if (Array.isArray(data) && data.length > 0) {
// //         const artistsWithGradient = data.map((artist, index) => ({
// //           ...artist,
// //           gradient: FALLBACK_ARTISTS[index]?.gradient || "linear-gradient(135deg, rgba(139,30,63,0.88) 0%, rgba(60,10,30,0.92) 100%)",
// //           featured: index === 0 ? true : false,
// //         }));
// //         setArtists(artistsWithGradient);
// //       } else {
// //         setArtists(FALLBACK_ARTISTS);
// //       }
// //     } catch (err) {
// //       console.log("Using fallback artists:", err);
// //       setArtists(FALLBACK_ARTISTS);
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   // Duplicate artists for seamless marquee
// //   const marqueeArtists = [...artists, ...artists, ...artists];

// //   return (
// //     <section className={`kitd-artists ${isVisible ? 'kitd-artists--visible' : ''}`} ref={sectionRef}>
// //       {/* Decorative Background Elements */}
// //       <div className="kitd-artists__deco kitd-artists__deco--1" />
// //       <div className="kitd-artists__deco kitd-artists__deco--2" />
// //       <div className="kitd-artists__deco kitd-artists__deco--3" />

// //       <div className="kitd-artists__container">
        
// //         {/* Section Header */}
// //         <div className="kitd-artists__header">
// //           <div className="kitd-artists__eyebrow">
// //             <span className="kitd-artists__eyebrow-line" />
// //             <span className="kitd-artists__eyebrow-text">Our Artist Community</span>
// //           </div>
          
// //           <h2 className="kitd-artists__title">
// //             Meet the Artists
// //             <br />
// //             of the
// //             <span className="kitd-artists__title-accent"> KITD Network</span>
// //           </h2>
          
// //           <p className="kitd-artists__subtitle">
// //             Explore the diverse community of dancers, teachers, choreographers, 
// //             and cultural practitioners who contribute to preserving and promoting 
// //             Indian Classical Dance throughout Germany.
// //           </p>
// //         </div>

// //         {/* Artists Marquee - Right to Left */}
// //         {!loading && artists.length > 0 && (
// //           <div className="kitd-artists__marquee-wrapper">
// //             <div className="kitd-artists__marquee">
// //               <div className="kitd-artists__marquee-track">
// //                 {marqueeArtists.map((artist, index) => (
// //                   <div
// //                     className={`kitd-artists__marquee-card ${hoveredCard === index ? 'kitd-artists__marquee-card--hovered' : ''}`}
// //                     key={`${artist.id}-${index}`}
// //                     onMouseEnter={() => setHoveredCard(index)}
// //                     onMouseLeave={() => setHoveredCard(null)}
// //                   >
// //                     <div 
// //                       className="kitd-artists__marquee-bg"
// //                       style={{ backgroundImage: `url(${artist.photo})` }}
// //                     />
                    
// //                     <div 
// //                       className="kitd-artists__marquee-overlay"
// //                       style={{ background: artist.gradient }}
// //                     />
                    
// //                     <div className="kitd-artists__marquee-content">
// //                       {artist.featured && (
// //                         <div className="kitd-artists__marquee-badge">
// //                           <Star size={10} />
// //                           <span>Featured</span>
// //                         </div>
// //                       )}
                      
// //                       <div className="kitd-artists__marquee-top">
// //                         <div className="kitd-artists__marquee-dance">
// //                           {artist.danceForm}
// //                         </div>
// //                       </div>

// //                       <div className="kitd-artists__marquee-body">
// //                         <h4 className="kitd-artists__marquee-name">
// //                           {artist.name}
// //                         </h4>
// //                         <p className="kitd-artists__marquee-role">
// //                           {artist.role}
// //                         </p>
// //                         <div className="kitd-artists__marquee-location">
// //                           <MapPin size={12} strokeWidth={1.5} />
// //                           <span>{artist.city}</span>
// //                         </div>
// //                         <Link
// //                           to={`/artists/${artist.slug || artist.id}`}
// //                           className="kitd-artists__marquee-link"
// //                         >
// //                           <span>View</span>
// //                           <ArrowRight size={12} strokeWidth={1.5} />
// //                         </Link>
// //                       </div>
// //                     </div>
// //                   </div>
// //                 ))}
// //               </div>
// //             </div>
// //           </div>
// //         )}

// //         {/* Empty State */}
// //         {!loading && artists.length === 0 && (
// //           <div className="kitd-artists__empty">
// //             <div className="kitd-artists__empty-icon">
// //               <Users size={48} strokeWidth={1} />
// //             </div>
// //             <h3 className="kitd-artists__empty-title">
// //               Artist Directory Coming Soon
// //             </h3>
// //             <p className="kitd-artists__empty-text">
// //               We are building a diverse directory of artists, teachers, 
// //               and cultural practitioners from across Germany. Stay tuned 
// //               as we expand our growing network.
// //             </p>
// //           </div>
// //         )}

// //         {/* Loading State */}
// //         {loading && (
// //           <div className="kitd-artists__loading">
// //             <div className="kitd-artists__loading-track">
// //               {[1, 2, 3, 4, 5, 6].map((item) => (
// //                 <div key={item} className="kitd-artists__loading-card">
// //                   <div className="kitd-artists__loading-image" />
// //                   <div className="kitd-artists__loading-content">
// //                     <div className="kitd-artists__loading-badge" />
// //                     <div className="kitd-artists__loading-name" />
// //                     <div className="kitd-artists__loading-role" />
// //                     <div className="kitd-artists__loading-location" />
// //                     <div className="kitd-artists__loading-link" />
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         )}

// //         {/* Bottom CTA */}
// //         {artists.length > 0 && (
// //           <div className="kitd-artists__cta-wrapper">
// //             <Link to="/artists" className="kitd-artists__cta">
// //               <span>View All Artists</span>
// //               <span className="kitd-artists__cta-icon">
// //                 <ArrowRight size={16} strokeWidth={1.5} />
// //               </span>
// //             </Link>
// //           </div>
// //         )}

// //       </div>
// //     </section>
// //   );
// // };

// // export default ArtistsSection;


// import { useEffect, useState, useRef } from "react";
// import { Link } from "react-router-dom";
// import { ArrowRight, MapPin, Users, Sparkles, Star } from "lucide-react";

// import { getAllArtists } from "../../api/artist.api";

// import "./ArtistsSection.css";

// // Fallback artists based on KITD network
// const FALLBACK_ARTISTS = [
//   {
//     id: 1,
//     name: "Dr. Ananya Sharma",
//     photo: "https://images.pexels.com/photos/14469571/pexels-photo-14469571.jpeg",
//     danceForm: "Bharatanatyam",
//     role: "Performer & Teacher",
//     city: "Berlin",
//     biography: "An accomplished Bharatanatyam artist with over 20 years of experience in performance and teaching across Europe and India.",
//     slug: "ananya-sharma",
//     featured: true,
//   },
//   {
//     id: 2,
//     name: "Rajesh Kumar",
//     photo: "https://images.pexels.com/photos/34717650/pexels-photo-34717650.jpeg",
//     danceForm: "Kathak",
//     role: "Choreographer & Educator",
//     city: "Munich",
//     biography: "A dedicated Kathak practitioner and choreographer known for blending traditional techniques with contemporary expressions.",
//     slug: "rajesh-kumar",
//     featured: false,
//   },
//   {
//     id: 3,
//     name: "Maya Patel",
//     photo: "https://images.pexels.com/photos/30481577/pexels-photo-30481577.jpeg",
//     danceForm: "Odissi",
//     role: "Classical Dancer & Researcher",
//     city: "Frankfurt",
//     biography: "An Odissi dancer and researcher committed to preserving the authentic traditions of classical Indian dance through performance and scholarship.",
//     slug: "maya-patel",
//     featured: false,
//   },
//   {
//     id: 4,
//     name: "Vikram Iyer",
//     photo: "https://images.pexels.com/photos/15279925/pexels-photo-15279925.jpeg",
//     danceForm: "Kuchipudi",
//     role: "Performer & Cultural Ambassador",
//     city: "Hamburg",
//     biography: "A passionate Kuchipudi artist dedicated to promoting Indian Classical Dance through performances, workshops, and cultural exchange programmes.",
//     slug: "vikram-iyer",
//     featured: false,
//   },
//   {
//     id: 5,
//     name: "Priya Singh",
//     photo: "https://images.pexels.com/photos/30481580/pexels-photo-30481580.jpeg",
//     danceForm: "Bharatanatyam",
//     role: "Dancer & Choreographer",
//     city: "Berlin",
//     biography: "A versatile Bharatanatyam dancer and choreographer exploring contemporary narratives through classical vocabulary.",
//     slug: "priya-singh",
//     featured: false,
//   },
//   {
//     id: 6,
//     name: "Arjun Reddy",
//     photo: "https://images.pexels.com/photos/30444653/pexels-photo-30444653.jpeg",
//     danceForm: "Kathak",
//     role: "Performer & Teacher",
//     city: "Munich",
//     biography: "A Kathak performer and teacher dedicated to preserving the rich tradition of North Indian classical dance.",
//     slug: "arjun-reddy",
//     featured: false,
//   },
// ];

// const ArtistsSection = () => {
//   const [artists, setArtists] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [isVisible, setIsVisible] = useState(false);
//   const [hoveredCard, setHoveredCard] = useState(null);
//   const sectionRef = useRef(null);

//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5050/api';
//   const IMAGE_BASE_URL = API_BASE_URL.replace('/api', '');

//   useEffect(() => {
//     fetchArtists();
    
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.15 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => {
//       if (sectionRef.current) {
//         observer.unobserve(sectionRef.current);
//       }
//     };
//   }, []);

//   const fetchArtists = async () => {
//     try {
//       const res = await getAllArtists({ page: 1, limit: 6 });
      
//       // Check if response has data
//       let artistsData = [];
//       if (res.data?.data) {
//         if (Array.isArray(res.data.data)) {
//           artistsData = res.data.data;
//         } else if (res.data.data.artists) {
//           artistsData = res.data.data.artists;
//         }
//       } else if (Array.isArray(res.data)) {
//         artistsData = res.data;
//       }
      
//       if (artistsData.length > 0) {
//         const formattedArtists = artistsData.map((artist, index) => ({
//           ...artist,
//           // Fix image URL
//           photo: artist.image 
//             ? `${IMAGE_BASE_URL}/uploads/artists/${artist.image}`
//             : FALLBACK_ARTISTS[index % FALLBACK_ARTISTS.length]?.photo || 
//               `https://images.pexels.com/photos/${Math.floor(Math.random() * 100000)}/pexels-photo-${Math.floor(Math.random() * 100000)}.jpeg`,
//           // Ensure danceForm exists
//           danceForm: artist.danceForm || "Classical Dance",
//           // Ensure role exists
//           role: artist.role || "Artist",
//           // Ensure city exists
//           city: artist.city || "Germany",
//           // Ensure slug exists
//           slug: artist.slug || `artist-${artist.id}`,
//           featured: index === 0 ? true : false,
//         }));
//         setArtists(formattedArtists);
//       } else {
//         setArtists(FALLBACK_ARTISTS);
//       }
//     } catch (err) {
//       console.log("Using fallback artists:", err);
//       setArtists(FALLBACK_ARTISTS);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Duplicate artists for seamless marquee
//   const marqueeArtists = [...artists, ...artists, ...artists];

//   return (
//     <section className={`kitd-artists ${isVisible ? 'kitd-artists--visible' : ''}`} ref={sectionRef}>
//       {/* Decorative Background Elements */}
//       <div className="kitd-artists__deco kitd-artists__deco--1" />
//       <div className="kitd-artists__deco kitd-artists__deco--2" />
//       <div className="kitd-artists__deco kitd-artists__deco--3" />

//       <div className="kitd-artists__container">
        
//         {/* Section Header */}
//         <div className="kitd-artists__header">
//           <div className="kitd-artists__eyebrow">
//             <span className="kitd-artists__eyebrow-line" />
//             <span className="kitd-artists__eyebrow-text">Our Artist Community</span>
//           </div>
          
//           <h2 className="kitd-artists__title">
//             Meet the Artists
//             <br />
//             of the
//             <span className="kitd-artists__title-accent"> KITD Network</span>
//           </h2>
          
//           <p className="kitd-artists__subtitle">
//             Explore the diverse community of dancers, teachers, choreographers, 
//             and cultural practitioners who contribute to preserving and promoting 
//             Indian Classical Dance throughout Germany.
//           </p>
//         </div>

//         {/* Artists Marquee - Right to Left */}
//         {!loading && artists.length > 0 && (
//           <div className="kitd-artists__marquee-wrapper">
//             <div className="kitd-artists__marquee">
//               <div className="kitd-artists__marquee-track">
//                 {marqueeArtists.map((artist, index) => (
//                   <div
//                     className={`kitd-artists__marquee-card ${hoveredCard === index ? 'kitd-artists__marquee-card--hovered' : ''}`}
//                     key={`${artist.id}-${index}`}
//                     onMouseEnter={() => setHoveredCard(index)}
//                     onMouseLeave={() => setHoveredCard(null)}
//                   >
//                     <div 
//                       className="kitd-artists__marquee-bg"
//                       style={{ backgroundImage: `url(${artist.photo})` }}
//                     />
                    
//                     <div className="kitd-artists__marquee-overlay" />
                    
//                     <div className="kitd-artists__marquee-content">
//                       {artist.featured && (
//                         <div className="kitd-artists__marquee-badge">
//                           <Star size={10} />
//                           <span>Featured</span>
//                         </div>
//                       )}
                      
//                       <div className="kitd-artists__marquee-top">
//                         <div className="kitd-artists__marquee-dance">
//                           {artist.danceForm}
//                         </div>
//                       </div>

//                       <div className="kitd-artists__marquee-body">
//                         <h4 className="kitd-artists__marquee-name">
//                           {artist.name}
//                         </h4>
//                         <p className="kitd-artists__marquee-role">
//                           {artist.role}
//                         </p>
//                         <div className="kitd-artists__marquee-location">
//                           <MapPin size={12} strokeWidth={1.5} />
//                           <span>{artist.city}</span>
//                         </div>
//                         <Link
//                           to={`/artists/${artist.slug || artist.id}`}
//                           className="kitd-artists__marquee-link"
//                         >
//                           <span>View</span>
//                           <ArrowRight size={12} strokeWidth={1.5} />
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Empty State */}
//         {!loading && artists.length === 0 && (
//           <div className="kitd-artists__empty">
//             <div className="kitd-artists__empty-icon">
//               <Users size={48} strokeWidth={1} />
//             </div>
//             <h3 className="kitd-artists__empty-title">
//               Artist Directory Coming Soon
//             </h3>
//             <p className="kitd-artists__empty-text">
//               We are building a diverse directory of artists, teachers, 
//               and cultural practitioners from across Germany. Stay tuned 
//               as we expand our growing network.
//             </p>
//           </div>
//         )}

//         {/* Loading State */}
//         {loading && (
//           <div className="kitd-artists__loading">
//             <div className="kitd-artists__loading-track">
//               {[1, 2, 3, 4, 5, 6].map((item) => (
//                 <div key={item} className="kitd-artists__loading-card">
//                   <div className="kitd-artists__loading-image" />
//                   <div className="kitd-artists__loading-content">
//                     <div className="kitd-artists__loading-badge" />
//                     <div className="kitd-artists__loading-name" />
//                     <div className="kitd-artists__loading-role" />
//                     <div className="kitd-artists__loading-location" />
//                     <div className="kitd-artists__loading-link" />
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {/* Bottom CTA */}
//         {artists.length > 0 && (
//           <div className="kitd-artists__cta-wrapper">
//             <Link to="/artists" className="kitd-artists__cta">
//               <span>View All Artists</span>
//               <span className="kitd-artists__cta-icon">
//                 <ArrowRight size={16} strokeWidth={1.5} />
//               </span>
//             </Link>
//           </div>
//         )}

//       </div>
//     </section>
//   );
// };

// export default ArtistsSection;

import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin, Users, Sparkles, Star } from "lucide-react";

import { getAllArtists } from "../../api/artist.api";
import artist1 from "../../assets/ar1.jpg";
import artist2 from "../../assets/ar2.jpg";
import artist3 from "../../assets/ar3.jpg";
import artist4 from "../../assets/ar4.jpg";
import artist5 from "../../assets/artist5.jpg";
import artist6 from "../../assets/artist6.jpg";
import "./ArtistsSection.css";

// Fallback artists based on KITD network
const FALLBACK_ARTISTS = [
  {
    id: 1,
    name: "Dr. Ananya Sharma",
    photo: artist1,
    danceForm: "Bharatanatyam",
    role: "Performer & Teacher",
    city: "Berlin",
    biography:
      "An accomplished Bharatanatyam artist with over 20 years of experience in performance and teaching across Europe and India.",
    slug: "ananya-sharma",
    featured: true,
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    photo: artist2,
    danceForm: "Kathak",
    role: "Choreographer & Educator",
    city: "Munich",
    biography:
      "A dedicated Kathak practitioner and choreographer known for blending traditional techniques with contemporary expressions.",
    slug: "rajesh-kumar",
    featured: false,
  },
  {
    id: 3,
    name: "Maya Patel",
    photo: artist3,
    danceForm: "Odissi",
    role: "Classical Dancer & Researcher",
    city: "Frankfurt",
    biography:
      "An Odissi dancer and researcher committed to preserving the authentic traditions of classical Indian dance through performance and scholarship.",
    slug: "maya-patel",
    featured: false,
  },
  {
    id: 4,
    name: "Vikram Iyer",
    photo: artist4,
    danceForm: "Kuchipudi",
    role: "Performer & Cultural Ambassador",
    city: "Hamburg",
    biography:
      "A passionate Kuchipudi artist dedicated to promoting Indian Classical Dance through performances, workshops, and cultural exchange programmes.",
    slug: "vikram-iyer",
    featured: false,
  },
  {
    id: 5,
    name: "Priya Singh",
    photo: artist5,
    danceForm: "Bharatanatyam",
    role: "Dancer & Choreographer",
    city: "Berlin",
    biography:
      "A versatile Bharatanatyam dancer and choreographer exploring contemporary narratives through classical vocabulary.",
    slug: "priya-singh",
    featured: false,
  },
  {
    id: 6,
    name: "Arjun Reddy",
    photo: artist6,
    danceForm: "Kathak",
    role: "Performer & Teacher",
    city: "Munich",
    biography:
      "A Kathak performer and teacher dedicated to preserving the rich tradition of North Indian classical dance.",
    slug: "arjun-reddy",
    featured: false,
  },
];
const ArtistsSection = () => {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const sectionRef = useRef(null);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5050/api';
  const IMAGE_BASE_URL = API_BASE_URL.replace('/api', '');

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const fetchArtists = async () => {
    try {
      const res = await getAllArtists({ page: 1, limit: 6 });
      
      // Log the response for debugging
      console.log("Artists API Response:", res);
      
      // Extract artists data from response
      let artistsData = [];
      
      // Handle different response structures
      if (res?.data?.data) {
        if (Array.isArray(res.data.data)) {
          artistsData = res.data.data;
        } else if (res.data.data.artists) {
          artistsData = res.data.data.artists;
        }
      } else if (Array.isArray(res?.data)) {
        artistsData = res.data;
      } else if (Array.isArray(res)) {
        artistsData = res;
      }
      
      console.log("Extracted artists data:", artistsData);
      
      if (artistsData.length > 0) {
        const formattedArtists = artistsData.map((artist, index) => {
          // Construct image URL properly
          let imageUrl = FALLBACK_ARTISTS[index % FALLBACK_ARTISTS.length]?.photo;
          
          if (artist.image) {
            // Check if image already has full URL or is just a filename
            if (artist.image.startsWith('http://') || artist.image.startsWith('https://')) {
              imageUrl = artist.image;
            } else {
              // Construct URL with proper path
              imageUrl = `${IMAGE_BASE_URL}/uploads/artists/${artist.image}`;
            }
          }
          
          console.log(`Artist ${index} image URL:`, imageUrl);
          
          return {
            id: artist.id,
            name: artist.name || artist.stageName || "Artist",
            photo: imageUrl,
            // Use danceForm from API or fallback
            danceForm: artist.danceForm || "Classical Dance",
            // Use role from API or generate from experience
            role: artist.role || (artist.experience ? `${artist.experience} Artist` : "Artist"),
            // Use city or fallback
            city: artist.city || artist.state || "Germany",
            biography: artist.biography || `A dedicated ${artist.danceForm || 'classical dance'} artist.`,
            slug: artist.slug || `artist-${artist.id}`,
            featured: index === 0 ? true : false,
          };
        });
        setArtists(formattedArtists);
      } else {
        setArtists(FALLBACK_ARTISTS);
      }
    } catch (err) {
      console.error("Error fetching artists:", err);
      setArtists(FALLBACK_ARTISTS);
    } finally {
      setLoading(false);
    }
  };

  // Duplicate artists for seamless marquee
  const marqueeArtists = artists.length > 0 ? [...artists, ...artists, ...artists] : [];

  return (
    <section className={`kitd-artists ${isVisible ? 'kitd-artists--visible' : ''}`} ref={sectionRef}>
      {/* Decorative Background Elements */}
      <div className="kitd-artists__deco kitd-artists__deco--1" />
      <div className="kitd-artists__deco kitd-artists__deco--2" />
      <div className="kitd-artists__deco kitd-artists__deco--3" />

      <div className="kitd-artists__container">
        
        {/* Section Header */}
        <div className="kitd-artists__header">
          <div className="kitd-artists__eyebrow">
            <span className="kitd-artists__eyebrow-line" />
            <span className="kitd-artists__eyebrow-text">Our Artist Community</span>
          </div>
          
          <h2 className="kitd-artists__title">
            Meet the Artists
            <br />
            of the
            <span className="kitd-artists__title-accent"> KITD Network</span>
          </h2>
          
          <p className="kitd-artists__subtitle">
            Explore the diverse community of dancers, teachers, choreographers, 
            and cultural practitioners who contribute to preserving and promoting 
            Indian Classical Dance throughout Germany.
          </p>
        </div>

        {/* Artists Marquee - Right to Left */}
        {!loading && artists.length > 0 && (
          <div className="kitd-artists__marquee-wrapper">
            <div className="kitd-artists__marquee">
              <div className="kitd-artists__marquee-track">
                {marqueeArtists.map((artist, index) => (
                  <div
                    className={`kitd-artists__marquee-card ${hoveredCard === index ? 'kitd-artists__marquee-card--hovered' : ''}`}
                    key={`${artist.id}-${index}`}
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div 
                      className="kitd-artists__marquee-bg"
                      style={{ 
                        backgroundImage: `url(${artist.photo})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    />
                    
                    <div className="kitd-artists__marquee-overlay" />
                    
                    <div className="kitd-artists__marquee-content">
                      {artist.featured && (
                        <div className="kitd-artists__marquee-badge">
                          <Star size={10} />
                          <span>Featured</span>
                        </div>
                      )}
                      
                      <div className="kitd-artists__marquee-top">
                        <div className="kitd-artists__marquee-dance">
                          {artist.danceForm}
                        </div>
                      </div>

                      <div className="kitd-artists__marquee-body">
                        <h4 className="kitd-artists__marquee-name">
                          {artist.name}
                        </h4>
                        <p className="kitd-artists__marquee-role">
                          {artist.role}
                        </p>
                        <div className="kitd-artists__marquee-location">
                          <MapPin size={12} strokeWidth={1.5} />
                          <span>{artist.city}</span>
                        </div>
                        <Link
                          to={`/artists/${artist.slug}`}
                          className="kitd-artists__marquee-link"
                        >
                          <span>View</span>
                          <ArrowRight size={12} strokeWidth={1.5} />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!loading && artists.length === 0 && (
          <div className="kitd-artists__empty">
            <div className="kitd-artists__empty-icon">
              <Users size={48} strokeWidth={1} />
            </div>
            <h3 className="kitd-artists__empty-title">
              Artist Directory Coming Soon
            </h3>
            <p className="kitd-artists__empty-text">
              We are building a diverse directory of artists, teachers, 
              and cultural practitioners from across Germany. Stay tuned 
              as we expand our growing network.
            </p>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="kitd-artists__loading">
            <div className="kitd-artists__loading-track">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="kitd-artists__loading-card">
                  <div className="kitd-artists__loading-image" />
                  <div className="kitd-artists__loading-content">
                    <div className="kitd-artists__loading-badge" />
                    <div className="kitd-artists__loading-name" />
                    <div className="kitd-artists__loading-role" />
                    <div className="kitd-artists__loading-location" />
                    <div className="kitd-artists__loading-link" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        {artists.length > 0 && (
          <div className="kitd-artists__cta-wrapper">
            <Link to="/artists" className="kitd-artists__cta">
              <span>View All Artists</span>
              <span className="kitd-artists__cta-icon">
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