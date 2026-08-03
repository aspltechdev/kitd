// // // // src/pages/Artists/ArtistsPage.jsx

// // // import { useState, useEffect } from "react";
// // // import { Link } from "react-router-dom";
// // // import {
// // //   ArrowRight,
// // //   Search,
// // //   MapPin,
// // //   Users,
// // //   Sparkles,
// // //   Filter,
// // //   ChevronRight,
// // //   Mail,
// // //   Star,
// // // } from "lucide-react";
// // // import { Helmet } from "react-helmet-async";

// // // import "./ArtistsPage.css";

// // // // Featured artists
// // // const featuredArtists = [
// // //   {
// // //     id: 1,
// // //     name: "Dr. Ananya Sharma",
// // //     photo: "https://images.pexels.com/photos/8021124/pexels-photo-8021124.jpeg?auto=compress&cs=tinysrgb&w=400&h=500",
// // //     danceForm: "Bharatanatyam",
// // //     city: "Berlin",
// // //     role: "Performer & Teacher",
// // //     bio: "An accomplished Bharatanatyam artist with over 20 years of experience in performance and teaching across Europe and India. Specializing in the Pandanallur style.",
// // //     slug: "ananya-sharma",
// // //     featured: true,
// // //   },
// // //   {
// // //     id: 2,
// // //     name: "Rajesh Kumar Iyer",
// // //     photo: "https://images.pexels.com/photos/6898854/pexels-photo-6898854.jpeg?auto=compress&cs=tinysrgb&w=400&h=500",
// // //     danceForm: "Kathak",
// // //     city: "Munich",
// // //     role: "Choreographer & Educator",
// // //     bio: "A dedicated Kathak practitioner and choreographer known for blending traditional techniques with contemporary expressions. Trained under Guru Munna Shukla.",
// // //     slug: "rajesh-kumar-iyer",
// // //     featured: true,
// // //   },
// // //   {
// // //     id: 3,
// // //     name: "Maya Patel",
// // //     photo: "https://images.pexels.com/photos/6898858/pexels-photo-6898858.jpeg?auto=compress&cs=tinysrgb&w=400&h=500",
// // //     danceForm: "Odissi",
// // //     city: "Frankfurt",
// // //     role: "Classical Dancer & Researcher",
// // //     bio: "An Odissi dancer and researcher committed to preserving the authentic traditions of classical Indian dance through performance, scholarship, and community teaching.",
// // //     slug: "maya-patel",
// // //     featured: true,
// // //   },
// // // ];

// // // // All artists directory
// // // const allArtists = [
// // //   ...featuredArtists,
// // //   {
// // //     id: 4,
// // //     name: "Vikram Desai",
// // //     photo: "https://images.pexels.com/photos/31521700/pexels-photo-31521700.jpeg?auto=compress&cs=tinysrgb&w=400&h=500",
// // //     danceForm: "Kuchipudi",
// // //     city: "Hamburg",
// // //     role: "Performer & Cultural Ambassador",
// // //     bio: "A passionate Kuchipudi artist dedicated to promoting Indian Classical Dance through performances, workshops, and cultural exchange programmes.",
// // //     slug: "vikram-desai",
// // //     featured: false,
// // //   },
// // //   {
// // //     id: 5,
// // //     name: "Priya Menon",
// // //     photo: "https://images.pexels.com/photos/8021124/pexels-photo-8021124.jpeg?auto=compress&cs=tinysrgb&w=400&h=500",
// // //     danceForm: "Mohiniyattam",
// // //     city: "Cologne",
// // //     role: "Teacher & Performer",
// // //     bio: "A Mohiniyattam specialist with a focus on introducing Kerala's classical dance form to German audiences through performances and educational programmes.",
// // //     slug: "priya-menon",
// // //     featured: false,
// // //   },
// // //   {
// // //     id: 6,
// // //     name: "Arun Nair",
// // //     photo: "https://images.pexels.com/photos/6898854/pexels-photo-6898854.jpeg?auto=compress&cs=tinysrgb&w=400&h=500",
// // //     danceForm: "Sattriya",
// // //     city: "Berlin",
// // //     role: "Researcher & Choreographer",
// // //     bio: "A Sattriya dance practitioner and researcher documenting the traditions of Assam's classical dance form while teaching and performing across Germany.",
// // //     slug: "arun-nair",
// // //     featured: false,
// // //   },
// // // ];

// // // // Filter options
// // // const danceForms = [
// // //   "All Dance Forms",
// // //   "Bharatanatyam",
// // //   "Kathak",
// // //   "Odissi",
// // //   "Kuchipudi",
// // //   "Mohiniyattam",
// // //   "Sattriya",
// // // ];

// // // const cities = [
// // //   "All Cities",
// // //   "Berlin",
// // //   "Munich",
// // //   "Hamburg",
// // //   "Frankfurt",
// // //   "Cologne",
// // // ];

// // // const roles = ["All", "Performer", "Teacher", "Choreographer", "Researcher"];

// // // const ArtistsPage = () => {
// // //   const [isVisible, setIsVisible] = useState({});
// // //   const [searchQuery, setSearchQuery] = useState("");
// // //   const [selectedDanceForm, setSelectedDanceForm] = useState("All Dance Forms");
// // //   const [selectedCity, setSelectedCity] = useState("All Cities");
// // //   const [selectedRole, setSelectedRole] = useState("All");
// // //   const [filteredArtists, setFilteredArtists] = useState(allArtists);

// // //   useEffect(() => {
// // //     window.scrollTo(0, 0);

// // //     const observer = new IntersectionObserver(
// // //       (entries) => {
// // //         entries.forEach((entry) => {
// // //           if (entry.isIntersecting) {
// // //             setIsVisible((prev) => ({
// // //               ...prev,
// // //               [entry.target.dataset.section]: true,
// // //             }));
// // //           }
// // //         });
// // //       },
// // //       { threshold: 0.1 }
// // //     );

// // //     document.querySelectorAll("[data-section]").forEach((section) => {
// // //       observer.observe(section);
// // //     });

// // //     return () => observer.disconnect();
// // //   }, []);

// // //   // Filter artists
// // //   useEffect(() => {
// // //     let result = allArtists;

// // //     if (searchQuery) {
// // //       result = result.filter(
// // //         (artist) =>
// // //           artist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // //           artist.danceForm.toLowerCase().includes(searchQuery.toLowerCase()) ||
// // //           artist.city.toLowerCase().includes(searchQuery.toLowerCase())
// // //       );
// // //     }

// // //     if (selectedDanceForm !== "All Dance Forms") {
// // //       result = result.filter((artist) => artist.danceForm === selectedDanceForm);
// // //     }

// // //     if (selectedCity !== "All Cities") {
// // //       result = result.filter((artist) => artist.city === selectedCity);
// // //     }

// // //     if (selectedRole !== "All") {
// // //       result = result.filter((artist) => artist.role.includes(selectedRole));
// // //     }

// // //     setFilteredArtists(result);
// // //   }, [searchQuery, selectedDanceForm, selectedCity, selectedRole]);

// // //   const featuredOnly = allArtists.filter((a) => a.featured);

// // //   return (
// // //     <>
// // //       <Helmet>
// // //         <title>Artists | KITD - Classical Indian Dance Germany</title>
// // //         <meta
// // //           name="description"
// // //           content="Explore the talented community of dancers, teachers, choreographers and cultural practitioners in the KITD artist directory across Germany."
// // //         />
// // //       </Helmet>

// // //       <div className="artists-page">
// // //         {/* ============================================ */}
// // //         {/* HERO SECTION */}
// // //         {/* ============================================ */}
// // //         <section className="art-hero">
// // //           <div className="art-hero-bg" />
// // //           <div className="art-hero-container">
// // //             <div className="art-hero-content">
// // //               <div className="art-hero-eyebrow">
// // //                 <span className="art-hero-eyebrow-line" />
// // //                 <span className="art-hero-eyebrow-text">Our Artist Community</span>
// // //               </div>
// // //               <h1 className="art-hero-title">
// // //                 Connecting Artists,
// // //                 <br />
// // //                 Teachers & Cultural
// // //                 <br />
// // //                 <span className="art-hero-title-accent">Practitioners Across Germany</span>
// // //               </h1>
// // //               <p className="art-hero-description">
// // //                 Explore the talented community of dancers, teachers, choreographers, 
// // //                 and cultural practitioners who contribute to preserving and promoting 
// // //                 Indian Classical Dance through performances, education, and collaboration 
// // //                 across Germany.
// // //               </p>
// // //             </div>
// // //           </div>
// // //         </section>

// // //         {/* ============================================ */}
// // //         {/* BREADCRUMB */}
// // //         {/* ============================================ */}
// // //         <div className="art-breadcrumb">
// // //           <div className="art-container">
// // //             <Link to="/">Home</Link>
// // //             <ChevronRight size={14} strokeWidth={1.5} />
// // //             <span>Artists</span>
// // //           </div>
// // //         </div>

// // //         {/* ============================================ */}
// // //         {/* ABOUT THE ARTIST COMMUNITY */}
// // //         {/* ============================================ */}
// // //         <section className="art-about" data-section="about">
// // //           <div className="art-container">
// // //             <div className={`art-about-wrapper ${isVisible.about ? "visible" : ""}`}>
// // //               <div className="art-about-eyebrow">
// // //                 <span className="art-about-eyebrow-line" />
// // //                 <span className="art-about-eyebrow-text">About the Community</span>
// // //               </div>
// // //               <h2 className="art-about-title">
// // //                 A Diverse Network of
// // //                 <span className="art-about-title-accent"> Classical Artists</span>
// // //               </h2>
// // //               <p className="art-about-description">
// // //                 KITD brings together artists from different Indian Classical Dance 
// // //                 traditions, creating opportunities for collaboration, learning, cultural 
// // //                 exchange, and community engagement. Our Artist Directory celebrates the 
// // //                 expertise and dedication of members who contribute to strengthening the 
// // //                 Indian Classical Dance community in Germany.
// // //               </p>
// // //             </div>
// // //           </div>
// // //         </section>

// // //         {/* ============================================ */}
// // //         {/* SEARCH & FILTER */}
// // //         {/* ============================================ */}
// // //         <section className="art-filter" data-section="filter">
// // //           <div className="art-container">
// // //             <div className={`art-filter-wrapper ${isVisible.filter ? "visible" : ""}`}>
// // //               <div className="art-filter-header">
// // //                 <Filter size={18} strokeWidth={1.5} />
// // //                 <span>Search & Filter Artists</span>
// // //               </div>
// // //               <div className="art-filter-controls">
// // //                 <div className="art-search-box">
// // //                   <Search size={16} strokeWidth={1.5} />
// // //                   <input
// // //                     type="text"
// // //                     placeholder="Search by name, dance form, or city..."
// // //                     value={searchQuery}
// // //                     onChange={(e) => setSearchQuery(e.target.value)}
// // //                   />
// // //                 </div>
// // //                 <div className="art-filter-selects">
// // //                   <select
// // //                     value={selectedDanceForm}
// // //                     onChange={(e) => setSelectedDanceForm(e.target.value)}
// // //                   >
// // //                     {danceForms.map((form) => (
// // //                       <option key={form} value={form}>{form}</option>
// // //                     ))}
// // //                   </select>
// // //                   <select
// // //                     value={selectedCity}
// // //                     onChange={(e) => setSelectedCity(e.target.value)}
// // //                   >
// // //                     {cities.map((city) => (
// // //                       <option key={city} value={city}>{city}</option>
// // //                     ))}
// // //                   </select>
// // //                   <select
// // //                     value={selectedRole}
// // //                     onChange={(e) => setSelectedRole(e.target.value)}
// // //                   >
// // //                     {roles.map((role) => (
// // //                       <option key={role} value={role}>{role}</option>
// // //                     ))}
// // //                   </select>
// // //                 </div>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </section>

// // //         {/* ============================================ */}
// // //         {/* FEATURED ARTISTS */}
// // //         {/* ============================================ */}
// // //         <section className="art-featured" data-section="featured">
// // //           <div className="art-container">
// // //             <div className="art-featured-header">
// // //               <div className="art-featured-eyebrow">
// // //                 <Star size={14} strokeWidth={1.5} />
// // //                 <span className="art-featured-eyebrow-text">Featured Artists</span>
// // //               </div>
// // //               <h2 className="art-featured-title">Meet Our Distinguished Members</h2>
// // //             </div>

// // //             <div className={`art-featured-grid ${isVisible.featured ? "visible" : ""}`}>
// // //               {featuredOnly.map((artist, index) => (
// // //                 <div
// // //                   className="art-featured-card"
// // //                   key={artist.id}
// // //                   style={{ transitionDelay: `${index * 0.1}s` }}
// // //                 >
// // //                   <div className="art-featured-image">
// // //                     <img src={artist.photo} alt={artist.name} loading="lazy" />
// // //                     <div className="art-featured-badge">{artist.danceForm}</div>
// // //                   </div>
// // //                   <div className="art-featured-content">
// // //                     <div className="art-featured-meta">
// // //                       <MapPin size={12} strokeWidth={1.5} />
// // //                       <span>{artist.city}</span>
// // //                       <span className="art-meta-dot">•</span>
// // //                       <span>{artist.role}</span>
// // //                     </div>
// // //                     <h3 className="art-featured-name">{artist.name}</h3>
// // //                     <p className="art-featured-bio">{artist.bio}</p>
// // //                     <Link to={`/artists/${artist.slug}`} className="art-featured-link">
// // //                       <span>Meet the Artist</span>
// // //                       <ArrowRight size={14} strokeWidth={1.5} />
// // //                     </Link>
// // //                   </div>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </section>

// // //         {/* ============================================ */}
// // //         {/* ARTIST DIRECTORY */}
// // //         {/* ============================================ */}
// // //         <section className="art-directory" data-section="directory">
// // //           <div className="art-container">
// // //             <div className="art-directory-header">
// // //               <h2 className="art-directory-title">Artist Directory</h2>
// // //               <p className="art-directory-count">
// // //                 {filteredArtists.length} artist{filteredArtists.length !== 1 ? "s" : ""} found
// // //               </p>
// // //             </div>

// // //             <div className={`art-directory-grid ${isVisible.directory ? "visible" : ""}`}>
// // //               {filteredArtists.length > 0 ? (
// // //                 filteredArtists.map((artist, index) => (
// // //                   <div
// // //                     className="art-directory-card"
// // //                     key={artist.id}
// // //                     style={{ transitionDelay: `${index * 0.06}s` }}
// // //                   >
// // //                     <div className="art-directory-image">
// // //                       <img src={artist.photo} alt={artist.name} loading="lazy" />
// // //                     </div>
// // //                     <div className="art-directory-content">
// // //                       <span className="art-directory-dance">{artist.danceForm}</span>
// // //                       <div className="art-directory-location">
// // //                         <MapPin size={12} strokeWidth={1.5} />
// // //                         <span>{artist.city}</span>
// // //                       </div>
// // //                       <h3 className="art-directory-name">{artist.name}</h3>
// // //                       <p className="art-directory-role">{artist.role}</p>
// // //                       <p className="art-directory-bio">
// // //                         {artist.bio.length > 80 ? `${artist.bio.slice(0, 80)}...` : artist.bio}
// // //                       </p>
// // //                       <Link to={`/artists/${artist.slug}`} className="art-directory-link">
// // //                         <span>View Profile</span>
// // //                         <ArrowRight size={13} strokeWidth={1.5} />
// // //                       </Link>
// // //                     </div>
// // //                   </div>
// // //                 ))
// // //               ) : (
// // //                 <div className="art-directory-empty">
// // //                   <Users size={40} strokeWidth={1} />
// // //                   <h3>No artists found</h3>
// // //                   <p>Try adjusting your search or filter criteria.</p>
// // //                 </div>
// // //               )}
// // //             </div>
// // //           </div>
// // //         </section>

// // //         {/* ============================================ */}
// // //         {/* BECOME AN ARTIST MEMBER CTA */}
// // //         {/* ============================================ */}
// // //         <section className="art-join" data-section="join">
// // //           <div className="art-join-bg" />
// // //           <div className="art-container">
// // //             <div className={`art-join-wrapper ${isVisible.join ? "visible" : ""}`}>
// // //               <h2 className="art-join-title">Join Our Artist Community</h2>
// // //               <p className="art-join-description">
// // //                 Are you a dancer, teacher, choreographer, or researcher passionate 
// // //                 about Indian Classical Dance? Become part of KITD's growing artist 
// // //                 network and collaborate with professionals across Germany.
// // //               </p>
// // //               <div className="art-join-buttons">
// // //                 <Link to="/membership" className="art-join-btn art-join-btn-primary">
// // //                   <span>Apply for Membership</span>
// // //                   <ArrowRight size={18} strokeWidth={1.5} />
// // //                 </Link>
// // //                 <Link to="/contact" className="art-join-btn art-join-btn-secondary">
// // //                   <Mail size={16} strokeWidth={1.5} />
// // //                   <span>Contact KITD</span>
// // //                 </Link>
// // //               </div>
// // //             </div>
// // //           </div>
// // //         </section>

// // //         {/* ============================================ */}
// // //         {/* CONTACT CTA */}
// // //         {/* ============================================ */}
// // //         <section className="art-contact" data-section="contact">
// // //           <div className="art-container">
// // //             <div className={`art-contact-wrapper ${isVisible.contact ? "visible" : ""}`}>
// // //               <h3 className="art-contact-title">Have Questions?</h3>
// // //               <p className="art-contact-text">
// // //                 Reach out to KITD to learn more about artist membership, collaborations, 
// // //                 performances, and community initiatives.
// // //               </p>
// // //               <Link to="/contact" className="art-contact-link">
// // //                 <span>Get in Touch</span>
// // //                 <ArrowRight size={15} strokeWidth={1.5} />
// // //               </Link>
// // //             </div>
// // //           </div>
// // //         </section>
// // //       </div>
// // //     </>
// // //   );
// // // };

// // // export default ArtistsPage;



// // // src/pages/Artists/ArtistsPage.jsx

// // import { useState, useEffect } from "react";
// // import { Link } from "react-router-dom";
// // import {
// //   ArrowRight,
// //   Search,
// //   MapPin,
// //   Users,
// //   Sparkles,
// //   Filter,
// //   ChevronRight,
// //   Mail,
// //   Star,
// //   Award,
// //   Music,
// // } from "lucide-react";
// // import { Helmet } from "react-helmet-async";

// // import "./ArtistsPage.css";

// // // Featured artists with Bharatanatyam images
// // const featuredArtists = [
// //   {
// //     id: 1,
// //     name: "Dr. Ananya Sharma",
// //     photo: "https://images.unsplash.com/photo-1535525383415-5c42b4c2b2c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
// //     danceForm: "Bharatanatyam",
// //     city: "Berlin",
// //     role: "Performer & Teacher",
// //     bio: "An accomplished Bharatanatyam artist with over 20 years of experience in performance and teaching across Europe and India. Specializing in the Pandanallur style.",
// //     slug: "ananya-sharma",
// //     featured: true,
// //     gradient: "linear-gradient(135deg, rgba(139,30,63,0.85) 0%, rgba(60,10,30,0.92) 100%)",
// //   },
// //   {
// //     id: 2,
// //     name: "Rajesh Kumar Iyer",
// //     photo: "https://images.unsplash.com/photo-1508700115894-8b2f1ae8f0b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
// //     danceForm: "Kathak",
// //     city: "Munich",
// //     role: "Choreographer & Educator",
// //     bio: "A dedicated Kathak practitioner and choreographer known for blending traditional techniques with contemporary expressions. Trained under Guru Munna Shukla.",
// //     slug: "rajesh-kumar-iyer",
// //     featured: true,
// //     gradient: "linear-gradient(135deg, rgba(139,30,63,0.85) 0%, rgba(50,15,25,0.92) 100%)",
// //   },
// //   {
// //     id: 3,
// //     name: "Maya Patel",
// //     photo: "https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
// //     danceForm: "Odissi",
// //     city: "Frankfurt",
// //     role: "Classical Dancer & Researcher",
// //     bio: "An Odissi dancer and researcher committed to preserving the authentic traditions of classical Indian dance through performance, scholarship, and community teaching.",
// //     slug: "maya-patel",
// //     featured: true,
// //     gradient: "linear-gradient(135deg, rgba(139,30,63,0.85) 0%, rgba(70,20,40,0.92) 100%)",
// //   },
// // ];

// // // All artists directory
// // const allArtists = [
// //   ...featuredArtists,
// //   {
// //     id: 4,
// //     name: "Vikram Desai",
// //     photo: "https://images.unsplash.com/photo-1528605248644-14dd04022da1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
// //     danceForm: "Kuchipudi",
// //     city: "Hamburg",
// //     role: "Performer & Cultural Ambassador",
// //     bio: "A passionate Kuchipudi artist dedicated to promoting Indian Classical Dance through performances, workshops, and cultural exchange programmes.",
// //     slug: "vikram-desai",
// //     featured: false,
// //     gradient: "linear-gradient(135deg, rgba(139,30,63,0.85) 0%, rgba(40,10,20,0.92) 100%)",
// //   },
// //   {
// //     id: 5,
// //     name: "Priya Menon",
// //     photo: "https://images.unsplash.com/photo-1535525383415-5c42b4c2b2c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
// //     danceForm: "Mohiniyattam",
// //     city: "Cologne",
// //     role: "Teacher & Performer",
// //     bio: "A Mohiniyattam specialist with a focus on introducing Kerala's classical dance form to German audiences through performances and educational programmes.",
// //     slug: "priya-menon",
// //     featured: false,
// //     gradient: "linear-gradient(135deg, rgba(139,30,63,0.85) 0%, rgba(60,10,30,0.92) 100%)",
// //   },
// //   {
// //     id: 6,
// //     name: "Arun Nair",
// //     photo: "https://images.unsplash.com/photo-1508700115894-8b2f1ae8f0b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=500&q=80",
// //     danceForm: "Sattriya",
// //     city: "Berlin",
// //     role: "Researcher & Choreographer",
// //     bio: "A Sattriya dance practitioner and researcher documenting the traditions of Assam's classical dance form while teaching and performing across Germany.",
// //     slug: "arun-nair",
// //     featured: false,
// //     gradient: "linear-gradient(135deg, rgba(139,30,63,0.85) 0%, rgba(50,15,25,0.92) 100%)",
// //   },
// // ];

// // // Filter options
// // const danceForms = [
// //   "All Dance Forms",
// //   "Bharatanatyam",
// //   "Kathak",
// //   "Odissi",
// //   "Kuchipudi",
// //   "Mohiniyattam",
// //   "Sattriya",
// // ];

// // const cities = [
// //   "All Cities",
// //   "Berlin",
// //   "Munich",
// //   "Hamburg",
// //   "Frankfurt",
// //   "Cologne",
// // ];

// // const roles = ["All", "Performer", "Teacher", "Choreographer", "Researcher"];

// // const ArtistsPage = () => {
// //   const [isVisible, setIsVisible] = useState({});
// //   const [hoveredCard, setHoveredCard] = useState(null);
// //   const [searchQuery, setSearchQuery] = useState("");
// //   const [selectedDanceForm, setSelectedDanceForm] = useState("All Dance Forms");
// //   const [selectedCity, setSelectedCity] = useState("All Cities");
// //   const [selectedRole, setSelectedRole] = useState("All");
// //   const [filteredArtists, setFilteredArtists] = useState(allArtists);

// //   useEffect(() => {
// //     window.scrollTo(0, 0);

// //     const observer = new IntersectionObserver(
// //       (entries) => {
// //         entries.forEach((entry) => {
// //           if (entry.isIntersecting) {
// //             setIsVisible((prev) => ({
// //               ...prev,
// //               [entry.target.dataset.section]: true,
// //             }));
// //           }
// //         });
// //       },
// //       { threshold: 0.1 }
// //     );

// //     document.querySelectorAll("[data-section]").forEach((section) => {
// //       observer.observe(section);
// //     });

// //     return () => observer.disconnect();
// //   }, []);

// //   // Filter artists
// //   useEffect(() => {
// //     let result = allArtists;

// //     if (searchQuery) {
// //       result = result.filter(
// //         (artist) =>
// //           artist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
// //           artist.danceForm.toLowerCase().includes(searchQuery.toLowerCase()) ||
// //           artist.city.toLowerCase().includes(searchQuery.toLowerCase())
// //       );
// //     }

// //     if (selectedDanceForm !== "All Dance Forms") {
// //       result = result.filter((artist) => artist.danceForm === selectedDanceForm);
// //     }

// //     if (selectedCity !== "All Cities") {
// //       result = result.filter((artist) => artist.city === selectedCity);
// //     }

// //     if (selectedRole !== "All") {
// //       result = result.filter((artist) => artist.role.includes(selectedRole));
// //     }

// //     setFilteredArtists(result);
// //   }, [searchQuery, selectedDanceForm, selectedCity, selectedRole]);

// //   const featuredOnly = allArtists.filter((a) => a.featured);

// //   return (
// //     <>
// //       <Helmet>
// //         <title>Artists | KITD - Classical Indian Dance Germany</title>
// //         <meta
// //           name="description"
// //           content="Explore the talented community of dancers, teachers, choreographers and cultural practitioners in the KITD artist directory across Germany."
// //         />
// //       </Helmet>

// //       <div className="kitd-artists-page">

// //         {/* ============================================ */}
// //         {/* HERO SECTION */}
// //         {/* ============================================ */}
// //         <section className="kitd-artists-page__hero">
// //           <div className="kitd-artists-page__hero-bg">
// //             <img 
// //               src="https://images.unsplash.com/photo-1535525383415-5c42b4c2b2c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
// //               alt="KITD Artists"
// //               loading="eager"
// //             />
// //             <div className="kitd-artists-page__hero-overlay" />
// //             <div className="kitd-artists-page__hero-gradient" />
// //           </div>
          
// //           <div className="kitd-artists-page__hero-container">
// //             <div className="kitd-artists-page__hero-content">
// //               <div className="kitd-artists-page__hero-eyebrow">
// //                 <span className="kitd-artists-page__hero-eyebrow-line" />
// //                 <span className="kitd-artists-page__hero-eyebrow-text">Our Artist Community</span>
// //               </div>
// //               <h1 className="kitd-artists-page__hero-title">
// //                 Connecting Artists,
// //                 <br />
// //                 Teachers &amp; Cultural
// //                 <br />
// //                 <span className="kitd-artists-page__hero-title-accent">Practitioners Across Germany</span>
// //               </h1>
// //               <p className="kitd-artists-page__hero-description">
// //                 Explore the talented community of dancers, teachers, choreographers, 
// //                 and cultural practitioners who contribute to preserving and promoting 
// //                 Indian Classical Dance through performances, education, and collaboration 
// //                 across Germany.
// //               </p>
// //             </div>
// //           </div>
// //         </section>

// //         {/* ============================================ */}
// //         {/* BREADCRUMB */}
// //         {/* ============================================ */}
// //         <div className="kitd-artists-page__breadcrumb">
// //           <div className="kitd-artists-page__container">
// //             <Link to="/">Home</Link>
// //             <ChevronRight size={14} strokeWidth={1.5} />
// //             <span>Artists</span>
// //           </div>
// //         </div>

// //         {/* ============================================ */}
// //         {/* SEARCH & FILTER */}
// //         {/* ============================================ */}
// //         <section className="kitd-artists-page__filter" data-section="filter">
// //           <div className="kitd-artists-page__container">
// //             <div className={`kitd-artists-page__filter-wrapper ${isVisible.filter ? "visible" : ""}`}>
// //               <div className="kitd-artists-page__filter-header">
// //                 <Filter size={18} strokeWidth={1.5} />
// //                 <span>Search &amp; Filter Artists</span>
// //               </div>
// //               <div className="kitd-artists-page__filter-controls">
// //                 <div className="kitd-artists-page__search-box">
// //                   <Search size={16} strokeWidth={1.5} />
// //                   <input
// //                     type="text"
// //                     placeholder="Search by name, dance form, or city..."
// //                     value={searchQuery}
// //                     onChange={(e) => setSearchQuery(e.target.value)}
// //                   />
// //                 </div>
// //                 <div className="kitd-artists-page__filter-selects">
// //                   <select
// //                     value={selectedDanceForm}
// //                     onChange={(e) => setSelectedDanceForm(e.target.value)}
// //                   >
// //                     {danceForms.map((form) => (
// //                       <option key={form} value={form}>{form}</option>
// //                     ))}
// //                   </select>
// //                   <select
// //                     value={selectedCity}
// //                     onChange={(e) => setSelectedCity(e.target.value)}
// //                   >
// //                     {cities.map((city) => (
// //                       <option key={city} value={city}>{city}</option>
// //                     ))}
// //                   </select>
// //                   <select
// //                     value={selectedRole}
// //                     onChange={(e) => setSelectedRole(e.target.value)}
// //                   >
// //                     {roles.map((role) => (
// //                       <option key={role} value={role}>{role}</option>
// //                     ))}
// //                   </select>
// //                 </div>
// //               </div>
// //             </div>
// //           </div>
// //         </section>

// //         {/* ============================================ */}
// //         {/* FEATURED ARTISTS */}
// //         {/* ============================================ */}
// //         <section className="kitd-artists-page__featured" data-section="featured">
// //           <div className="kitd-artists-page__container">
// //             <div className="kitd-artists-page__featured-header">
// //               <div className="kitd-artists-page__featured-eyebrow">
// //                 <Star size={14} strokeWidth={1.5} />
// //                 <span className="kitd-artists-page__featured-eyebrow-text">Featured Artists</span>
// //               </div>
// //               <h2 className="kitd-artists-page__featured-title">Meet Our Distinguished Members</h2>
// //             </div>

// //             <div className={`kitd-artists-page__featured-grid ${isVisible.featured ? "visible" : ""}`}>
// //               {featuredOnly.map((artist, index) => (
// //                 <div
// //                   className={`kitd-artists-page__featured-card ${hoveredCard === artist.id ? 'kitd-artists-page__featured-card--hovered' : ''}`}
// //                   key={artist.id}
// //                   style={{ transitionDelay: `${index * 0.1}s` }}
// //                   onMouseEnter={() => setHoveredCard(artist.id)}
// //                   onMouseLeave={() => setHoveredCard(null)}
// //                 >
// //                   <div className="kitd-artists-page__featured-image">
// //                     <img src={artist.photo} alt={artist.name} loading="lazy" />
// //                     <div 
// //                       className="kitd-artists-page__featured-overlay"
// //                       style={{ background: artist.gradient }}
// //                     />
// //                     <span className="kitd-artists-page__featured-badge">{artist.danceForm}</span>
// //                   </div>
// //                   <div className="kitd-artists-page__featured-content">
// //                     <div className="kitd-artists-page__featured-meta">
// //                       <MapPin size={12} strokeWidth={1.5} />
// //                       <span>{artist.city}</span>
// //                       <span className="kitd-artists-page__meta-dot">•</span>
// //                       <span>{artist.role}</span>
// //                     </div>
// //                     <h3 className="kitd-artists-page__featured-name">{artist.name}</h3>
// //                     <p className="kitd-artists-page__featured-bio">{artist.bio}</p>
// //                     <Link to={`/artists/${artist.slug}`} className="kitd-artists-page__featured-link">
// //                       <span>Meet the Artist</span>
// //                       <ArrowRight size={14} strokeWidth={1.5} />
// //                     </Link>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </section>

// //         {/* ============================================ */}
// //         {/* ARTIST DIRECTORY */}
// //         {/* ============================================ */}
// //         <section className="kitd-artists-page__directory" data-section="directory">
// //           <div className="kitd-artists-page__container">
// //             <div className="kitd-artists-page__directory-header">
// //               <h2 className="kitd-artists-page__directory-title">Artist Directory</h2>
// //               <p className="kitd-artists-page__directory-count">
// //                 {filteredArtists.length} artist{filteredArtists.length !== 1 ? "s" : ""} found
// //               </p>
// //             </div>

// //             <div className={`kitd-artists-page__directory-grid ${isVisible.directory ? "visible" : ""}`}>
// //               {filteredArtists.length > 0 ? (
// //                 filteredArtists.map((artist, index) => (
// //                   <div
// //                     className={`kitd-artists-page__directory-card ${hoveredCard === `dir-${artist.id}` ? 'kitd-artists-page__directory-card--hovered' : ''}`}
// //                     key={artist.id}
// //                     style={{ transitionDelay: `${index * 0.06}s` }}
// //                     onMouseEnter={() => setHoveredCard(`dir-${artist.id}`)}
// //                     onMouseLeave={() => setHoveredCard(null)}
// //                   >
// //                     <div className="kitd-artists-page__directory-image">
// //                       <img src={artist.photo} alt={artist.name} loading="lazy" />
// //                       {artist.featured && (
// //                         <span className="kitd-artists-page__directory-badge">
// //                           <Star size={10} />
// //                           Featured
// //                         </span>
// //                       )}
// //                     </div>
// //                     <div className="kitd-artists-page__directory-content">
// //                       <span className="kitd-artists-page__directory-dance">{artist.danceForm}</span>
// //                       <div className="kitd-artists-page__directory-location">
// //                         <MapPin size={12} strokeWidth={1.5} />
// //                         <span>{artist.city}</span>
// //                       </div>
// //                       <h3 className="kitd-artists-page__directory-name">{artist.name}</h3>
// //                       <p className="kitd-artists-page__directory-role">{artist.role}</p>
// //                       <p className="kitd-artists-page__directory-bio">
// //                         {artist.bio.length > 80 ? `${artist.bio.slice(0, 80)}...` : artist.bio}
// //                       </p>
// //                       <Link to={`/artists/${artist.slug}`} className="kitd-artists-page__directory-link">
// //                         <span>View Profile</span>
// //                         <ArrowRight size={13} strokeWidth={1.5} />
// //                       </Link>
// //                     </div>
// //                   </div>
// //                 ))
// //               ) : (
// //                 <div className="kitd-artists-page__directory-empty">
// //                   <Users size={40} strokeWidth={1} />
// //                   <h3>No artists found</h3>
// //                   <p>Try adjusting your search or filter criteria.</p>
// //                 </div>
// //               )}
// //             </div>
// //           </div>
// //         </section>

// //         {/* ============================================ */}
// //         {/* CTA SECTION */}
// //         {/* ============================================ */}
// //         <section className="kitd-artists-page__cta" data-section="cta">
// //           <div className="kitd-artists-page__cta-bg">
// //             <img 
// //               src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
// //               alt="KITD Community"
// //               loading="lazy"
// //             />
// //             <div className="kitd-artists-page__cta-overlay" />
// //           </div>
          
// //           <div className="kitd-artists-page__container">
// //             <div className={`kitd-artists-page__cta-wrapper ${isVisible.cta ? "visible" : ""}`}>
// //               <h2 className="kitd-artists-page__cta-title">Join Our Artist Community</h2>
// //               <p className="kitd-artists-page__cta-text">
// //                 Are you a dancer, teacher, choreographer, or researcher passionate 
// //                 about Indian Classical Dance? Become part of KITD's growing artist 
// //                 network and collaborate with professionals across Germany.
// //               </p>
// //               <div className="kitd-artists-page__cta-buttons">
// //                 <Link to="/membership" className="kitd-artists-page__cta-btn kitd-artists-page__cta-btn--primary">
// //                   <span>Apply for Membership</span>
// //                   <ArrowRight size={18} strokeWidth={1.5} />
// //                 </Link>
// //                 <Link to="/contact" className="kitd-artists-page__cta-btn kitd-artists-page__cta-btn--secondary">
// //                   <Mail size={16} strokeWidth={1.5} />
// //                   <span>Contact KITD</span>
// //                 </Link>
// //               </div>
// //             </div>
// //           </div>
// //         </section>
// //       </div>
// //     </>
// //   );
// // };

// // export default ArtistsPage;




// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import {
//   ArrowRight,
//   Search,
//   MapPin,
//   Users,
//   Filter,
//   ChevronRight,
//   Mail,
//   Star,
//   Music,
//   User,
//   Globe,
// } from "lucide-react";
// import { Helmet } from "react-helmet-async";

// import { getPublicArtists } from "../../api/artist.api";

// import "./ArtistsPage.css";

// const cardGradients = [
//   "linear-gradient(135deg, rgba(139,30,63,0.85) 0%, rgba(60,10,30,0.92) 100%)",
//   "linear-gradient(135deg, rgba(139,30,63,0.85) 0%, rgba(50,15,25,0.92) 100%)",
//   "linear-gradient(135deg, rgba(139,30,63,0.85) 0%, rgba(70,20,40,0.92) 100%)",
//   "linear-gradient(135deg, rgba(139,30,63,0.85) 0%, rgba(40,10,20,0.92) 100%)",
//   "linear-gradient(135deg, rgba(139,30,63,0.70) 0%, rgba(60,10,30,0.75) 100%)",
//   "linear-gradient(135deg, rgba(139,30,63,0.80) 0%, rgba(50,15,25,0.85) 100%)",
// ];

// const danceForms = ["All Dance Forms", "Bharatanatyam", "Kathak", "Odissi", "Kuchipudi", "Mohiniyattam", "Sattriya", "Manipuri", "Kathakali", "Sattriya", "Other"];
// const cities = ["All Cities"];

// const ArtistsPage = () => {
//   const [artists, setArtists] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [isVisible, setIsVisible] = useState({});
//   const [hoveredCard, setHoveredCard] = useState(null);
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedDanceForm, setSelectedDanceForm] = useState("All Dance Forms");
//   const [selectedCity, setSelectedCity] = useState("All Cities");
//   const [filteredArtists, setFilteredArtists] = useState([]);

//   const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5050/api';
//   const IMAGE_BASE_URL = API_BASE_URL.replace('/api', '');

//   // ✅ Fetch artists from API
//   useEffect(() => {
//     const fetchArtists = async () => {
//       try {
//         setLoading(true);
//         const res = await getPublicArtists();
//         const data = res.data?.data || res.data || [];
        
//         const publicArtists = Array.isArray(data)
//           ? data.filter(a => a.isPublic)
//           : [];

//         // Extract unique cities for filter
//         const uniqueCities = [...new Set(publicArtists.map(a => a.city).filter(Boolean))];
//         cities.push(...uniqueCities);

//         setArtists(publicArtists);
//         setFilteredArtists(publicArtists);
//       } catch (err) {
//         console.error("Failed to fetch artists:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchArtists();
//   }, []);

//   useEffect(() => {
//     window.scrollTo(0, 0);
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) setIsVisible((prev) => ({ ...prev, [entry.target.dataset.section]: true }));
//         });
//       },
//       { threshold: 0.1 }
//     );
//     document.querySelectorAll("[data-section]").forEach((s) => observer.observe(s));
//     return () => observer.disconnect();
//   }, [loading]);

//   // Filter artists
//   useEffect(() => {
//     let result = artists;
//     if (searchQuery) {
//       result = result.filter(a =>
//         a.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         a.danceForm?.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         a.city?.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         a.stageName?.toLowerCase().includes(searchQuery.toLowerCase())
//       );
//     }
//     if (selectedDanceForm !== "All Dance Forms") {
//       result = result.filter(a => a.danceForm === selectedDanceForm);
//     }
//     if (selectedCity !== "All Cities") {
//       result = result.filter(a => a.city === selectedCity);
//     }
//     setFilteredArtists(result);
//   }, [searchQuery, selectedDanceForm, selectedCity, artists]);

//   const getImageUrl = (artist) => {
//     const img = artist.image || artist.photo;
//     if (!img) return null;
//     if (img.startsWith('http')) return img;
//     return `${IMAGE_BASE_URL}/uploads/artists/${img}`;
//   };

//   const getSocialLink = (artist, platform) => {
//     if (!artist.socialLinks) return null;
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

//   return (
//     <>
//       <Helmet>
//         <title>Artists | KITD - Classical Indian Dance Germany</title>
//         <meta name="description" content="Explore the talented community of dancers, teachers, choreographers and cultural practitioners in the KITD artist directory across Germany." />
//       </Helmet>

//       <div className="kitd-artists-page">

//         {/* HERO */}
//         <section className="kitd-artists-page__hero">
//           <div className="kitd-artists-page__hero-bg">
//             <img src="https://images.unsplash.com/photo-1535525383415-5c42b4c2b2c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="KITD Artists" loading="eager" />
//             <div className="kitd-artists-page__hero-overlay" />
//             <div className="kitd-artists-page__hero-gradient" />
//           </div>
//           <div className="kitd-artists-page__hero-container">
//             <div className="kitd-artists-page__hero-content">
//               <div className="kitd-artists-page__hero-eyebrow">
//                 <span className="kitd-artists-page__hero-eyebrow-line" />
//                 <span className="kitd-artists-page__hero-eyebrow-text">Our Artist Community</span>
//               </div>
//               <h1 className="kitd-artists-page__hero-title">
//                 Connecting Artists, Teachers &amp; Cultural<br />
//                 <span className="kitd-artists-page__hero-title-accent">Practitioners Across Germany</span>
//               </h1>
//               <p className="kitd-artists-page__hero-description">
//                 Explore the talented community of dancers, teachers, choreographers, and cultural practitioners across Germany.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* BREADCRUMB */}
//         <div className="kitd-artists-page__breadcrumb">
//           <div className="kitd-artists-page__container">
//             <Link to="/">Home</Link><ChevronRight size={14} /><span>Artists</span>
//           </div>
//         </div>

//         {/* LOADING */}
//         {loading && (
//           <section className="kitd-artists-page__directory">
//             <div className="kitd-artists-page__container" style={{ textAlign: 'center', padding: 60 }}>
//               <div style={{ width: 40, height: 40, border: '3px solid #e5e7eb', borderTopColor: '#8B1E3F', borderRadius: '50%', animation: 'spin 0.8s linear infinite', margin: '0 auto 16px' }} />
//               <p style={{ color: '#6b7280' }}>Loading artists...</p>
//             </div>
//           </section>
//         )}

//         {/* SEARCH & FILTER */}
//         {!loading && (
//           <section className="kitd-artists-page__filter" data-section="filter">
//             <div className="kitd-artists-page__container">
//               <div className={`kitd-artists-page__filter-wrapper ${isVisible.filter ? "visible" : ""}`}>
//                 <div className="kitd-artists-page__filter-header">
//                   <Filter size={18} /><span>Search & Filter Artists</span>
//                 </div>
//                 <div className="kitd-artists-page__filter-controls">
//                   <div className="kitd-artists-page__search-box">
//                     <Search size={16} />
//                     <input type="text" placeholder="Search by name, dance form, or city..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
//                   </div>
//                   <div className="kitd-artists-page__filter-selects">
//                     <select value={selectedDanceForm} onChange={(e) => setSelectedDanceForm(e.target.value)}>
//                       {danceForms.map(f => <option key={f} value={f}>{f}</option>)}
//                     </select>
//                     <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
//                       <option value="All Cities">All Cities</option>
//                       {[...new Set(artists.map(a => a.city).filter(Boolean))].map(c => <option key={c} value={c}>{c}</option>)}
//                     </select>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>
//         )}

//         {/* ARTIST DIRECTORY */}
//         {!loading && (
//           <section className="kitd-artists-page__directory" data-section="directory">
//             <div className="kitd-artists-page__container">
//               <div className="kitd-artists-page__directory-header">
//                 <h2>Artist Directory</h2>
//                 <p>{filteredArtists.length} artist{filteredArtists.length !== 1 ? "s" : ""} found</p>
//               </div>

//               <div className={`kitd-artists-page__directory-grid ${isVisible.directory ? "visible" : ""}`}>
//                 {filteredArtists.length > 0 ? (
//                   filteredArtists.map((artist, index) => {
//                     const imageUrl = getImageUrl(artist);
//                     return (
//                       <div
//                         className={`kitd-artists-page__directory-card ${hoveredCard === artist.id ? 'kitd-artists-page__directory-card--hovered' : ''}`}
//                         key={artist.id}
//                         style={{ transitionDelay: `${index * 0.06}s` }}
//                         onMouseEnter={() => setHoveredCard(artist.id)}
//                         onMouseLeave={() => setHoveredCard(null)}
//                       >
//                         <div className="kitd-artists-page__directory-image">
//                           {imageUrl ? (
//                             <img src={imageUrl} alt={artist.name} loading="lazy" />
//                           ) : (
//                             <div className="kitd-artists-page__directory-placeholder">
//                               <User size={32} />
//                               <span>{getInitials(artist.name)}</span>
//                             </div>
//                           )}
//                           <div className="kitd-artists-page__directory-overlay" style={{ background: cardGradients[index % cardGradients.length] }} />
//                           {artist.danceForm && (
//                             <span className="kitd-artists-page__directory-badge">
//                               <Music size={10} /> {artist.danceForm}
//                             </span>
//                           )}
//                         </div>
//                         <div className="kitd-artists-page__directory-content">
//                           <h3>{artist.name}</h3>
//                           {artist.stageName && <p className="stage-name">🎭 {artist.stageName}</p>}
//                           {artist.city && (
//                             <div className="location">
//                               <MapPin size={12} /><span>{artist.city}{artist.country ? `, ${artist.country}` : ''}</span>
//                             </div>
//                           )}
//                           {artist.biography && (
//                             <p className="bio">{artist.biography.length > 100 ? `${artist.biography.slice(0, 100)}...` : artist.biography}</p>
//                           )}
//                           <Link to={`/artists/${artist.id}`} className="view-link">
//                             <span>View Profile</span><ArrowRight size={13} />
//                           </Link>
//                         </div>
//                       </div>
//                     );
//                   })
//                 ) : (
//                   <div className="kitd-artists-page__directory-empty">
//                     <Users size={40} /><h3>No artists found</h3><p>Try adjusting your search or filter criteria.</p>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </section>
//         )}

//         {/* CTA */}
//         <section className="kitd-artists-page__cta" data-section="cta">
//           <div className="kitd-artists-page__cta-bg">
//             <img src="https://images.unsplash.com/photo-1518837695005-2083093ee35b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" alt="Community" loading="lazy" />
//             <div className="kitd-artists-page__cta-overlay" />
//           </div>
//           <div className="kitd-artists-page__container">
//             <div className={`kitd-artists-page__cta-wrapper ${isVisible.cta ? "visible" : ""}`}>
//               <h2>Join Our Artist Community</h2>
//               <p>Are you a dancer, teacher, choreographer, or researcher? Become part of KITD's growing artist network.</p>
//               <div className="kitd-artists-page__cta-buttons">
//                 <Link to="/membership" className="kitd-artists-page__cta-btn kitd-artists-page__cta-btn--primary">
//                   <span>Apply for Membership</span><ArrowRight size={18} />
//                 </Link>
//                 <Link to="/contact" className="kitd-artists-page__cta-btn kitd-artists-page__cta-btn--secondary">
//                   <Mail size={16} /><span>Contact KITD</span>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// };

// export default ArtistsPage;


import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Search,
  MapPin,
  Users,
  Filter,
  ChevronRight,
  Mail,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

import { getPublicArtists } from "../../api/artist.api";

import "./ArtistsPage.css";

// Import images
import acthero from "../../assets/acthero.png";
import contactcta from "../../assets/contactcta.png";
import abt1 from "../../assets/abt1.png";

const cardGradients = [
  "linear-gradient(135deg, rgba(26,2,54,0.85) 0%, rgba(26,2,54,0.92) 100%)",
  "linear-gradient(135deg, rgba(26,2,54,0.85) 0%, rgba(26,2,54,0.88) 100%)",
  "linear-gradient(135deg, rgba(26,2,54,0.85) 0%, rgba(26,2,54,0.90) 100%)",
  "linear-gradient(135deg, rgba(26,2,54,0.85) 0%, rgba(26,2,54,0.92) 100%)",
  "linear-gradient(135deg, rgba(26,2,54,0.70) 0%, rgba(26,2,54,0.75) 100%)",
  "linear-gradient(135deg, rgba(26,2,54,0.80) 0%, rgba(26,2,54,0.85) 100%)",
];

const danceForms = ["All Dance Forms", "Bharatanatyam", "Kathak", "Odissi", "Kuchipudi", "Mohiniyattam", "Sattriya", "Manipuri", "Kathakali", "Other"];
const cities = ["All Cities"];

const ArtistsPage = () => {
  const [artists, setArtists] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isVisible, setIsVisible] = useState({});
  const [hoveredCard, setHoveredCard] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDanceForm, setSelectedDanceForm] = useState("All Dance Forms");
  const [selectedCity, setSelectedCity] = useState("All Cities");
  const [filteredArtists, setFilteredArtists] = useState([]);

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5050/api';
  const IMAGE_BASE_URL = API_BASE_URL.replace('/api', '');

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        setLoading(true);
        const res = await getPublicArtists();
        console.log("Artists API Response:", res);
        
        let artistsData = [];
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
        
        const publicArtists = Array.isArray(artistsData)
          ? artistsData.filter(a => a.isPublic !== false)
          : [];

        const uniqueCities = [...new Set(publicArtists.map(a => a.city).filter(Boolean))];
        cities.length = 0;
        cities.push("All Cities", ...uniqueCities);

        setArtists(publicArtists);
        setFilteredArtists(publicArtists);
      } catch (err) {
        console.error("Failed to fetch artists:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchArtists();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.dataset.section]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll("[data-section]").forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [loading]);

  useEffect(() => {
    let result = artists;
    if (searchQuery) {
      result = result.filter(a =>
        a.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.danceForm?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.city?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        a.stageName?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    if (selectedDanceForm !== "All Dance Forms") {
      result = result.filter(a => a.danceForm === selectedDanceForm);
    }
    if (selectedCity !== "All Cities") {
      result = result.filter(a => a.city === selectedCity);
    }
    setFilteredArtists(result);
  }, [searchQuery, selectedDanceForm, selectedCity, artists]);

  const getImageUrl = (artist) => {
    const img = artist.image || artist.photo;
    if (!img) return null;
    if (img.startsWith('http://') || img.startsWith('https://')) return img;
    return `${IMAGE_BASE_URL}/uploads/artists/${img}`;
  };

  const getInitials = (name) => {
    if (!name) return "?";
    return name.split(" ").map(w => w.charAt(0)).join("").toUpperCase().slice(0, 2);
  };

  return (
    <>
      <Helmet>
        <title>Artists | KITD - Classical Indian Dance Germany</title>
        <meta name="description" content="Explore the talented community of dancers, teachers, choreographers and cultural practitioners in the KITD artist directory across Germany." />
      </Helmet>

      <div className="ap-artists">

        {/* HERO */}
        <section className="ap-artists__hero">
          <div className="ap-artists__hero-bg">
            <img src={acthero} alt="KITD Artists" loading="eager" />
            <div className="ap-artists__hero-overlay" />
            <div className="ap-artists__hero-gradient" />
          </div>
          <div className="ap-artists__hero-container">
            <div className="ap-artists__hero-content">
              <div className="ap-artists__hero-eyebrow">
                <span className="ap-artists__hero-eyebrow-line" />
                <span className="ap-artists__hero-eyebrow-text">Our Artist Community</span>
              </div>
              <h1 className="ap-artists__hero-title">
                Connecting Artists, Teachers &amp; Cultural<br />
                <span className="ap-artists__hero-title-accent">Practitioners Across Germany</span>
              </h1>
              <p className="ap-artists__hero-description">
                Explore the talented community of dancers, teachers, choreographers, and cultural practitioners across Germany.
              </p>
            </div>
          </div>
        </section>

        {/* BREADCRUMB */}
        <div className="ap-artists__breadcrumb">
          <div className="ap-artists__container">
            <Link to="/">Home</Link>
            <ChevronRight size={14} strokeWidth={1.5} />
            <span>Artists</span>
          </div>
        </div>

        {/* LOADING */}
        {loading && (
          <section className="ap-artists__directory">
            <div className="ap-artists__container" style={{ textAlign: 'center', padding: '60px' }}>
              <div className="ap-artists__spinner" />
              <p style={{ color: '#6b7280', marginTop: '16px' }}>Loading artists...</p>
            </div>
          </section>
        )}

        {/* SEARCH & FILTER */}
        {!loading && (
          <section className="ap-artists__filter" data-section="filter">
            <div className="ap-artists__container">
              <div className={`ap-artists__filter-wrapper ${isVisible.filter ? "visible" : ""}`}>
                <div className="ap-artists__filter-header">
                  <Filter size={18} strokeWidth={1.5} />
                  <span>Search & Filter Artists</span>
                </div>
                <div className="ap-artists__filter-controls">
                  <div className="ap-artists__search-box">
                    <Search size={16} strokeWidth={1.5} />
                    <input 
                      type="text" 
                      placeholder="Search by name, dance form, or city..." 
                      value={searchQuery} 
                      onChange={(e) => setSearchQuery(e.target.value)} 
                    />
                  </div>
                  <div className="ap-artists__filter-selects">
                    <select value={selectedDanceForm} onChange={(e) => setSelectedDanceForm(e.target.value)}>
                      {danceForms.map(f => <option key={f} value={f}>{f}</option>)}
                    </select>
                    <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
                      {cities.map(c => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ARTIST DIRECTORY */}
        {!loading && (
          <section className="ap-artists__directory" data-section="directory">
            <div className="ap-artists__container">
              <div className="ap-artists__directory-header">
                <h2>Artist Directory</h2>
                <p>{filteredArtists.length} artist{filteredArtists.length !== 1 ? "s" : ""} found</p>
              </div>

              <div className={`ap-artists__directory-grid ${isVisible.directory ? "visible" : ""}`}>
                {filteredArtists.length > 0 ? (
                  filteredArtists.map((artist, index) => {
                    const imageUrl = getImageUrl(artist);
                    return (
                      <div
                        className={`ap-artists__directory-card ${hoveredCard === artist.id ? 'ap-artists__directory-card--hovered' : ''}`}
                        key={artist.id}
                        style={{ transitionDelay: `${index * 0.06}s` }}
                        onMouseEnter={() => setHoveredCard(artist.id)}
                        onMouseLeave={() => setHoveredCard(null)}
                      >
                        <div className="ap-artists__directory-image">
                          {imageUrl ? (
                            <img src={imageUrl} alt={artist.name} loading="lazy" />
                          ) : (
                            <div className="ap-artists__directory-placeholder">
                              <span className="ap-artists__directory-placeholder-text">{getInitials(artist.name)}</span>
                            </div>
                          )}
                          <div className="ap-artists__directory-overlay" style={{ background: cardGradients[index % cardGradients.length] }} />
                          {artist.danceForm && (
                            <span className="ap-artists__directory-badge">{artist.danceForm}</span>
                          )}
                        </div>
                        <div className="ap-artists__directory-content">
                          <h3>{artist.name}</h3>
                          {artist.stageName && <p className="ap-artists__directory-stage">{artist.stageName}</p>}
                          {artist.city && (
                            <div className="ap-artists__directory-location">
                              <MapPin size={12} strokeWidth={1.5} />
                              <span>{artist.city}{artist.country ? `, ${artist.country}` : ''}</span>
                            </div>
                          )}
                          {artist.biography && (
                            <p className="ap-artists__directory-bio">
                              {artist.biography.length > 100 ? `${artist.biography.slice(0, 100)}...` : artist.biography}
                            </p>
                          )}
                          <Link to={`/artists/${artist.id}`} className="ap-artists__directory-link">
                            <span>View Profile</span>
                            <ArrowRight size={13} strokeWidth={1.5} />
                          </Link>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="ap-artists__directory-empty">
                    <Users size={40} strokeWidth={1.5} />
                    <h3>No artists found</h3>
                    <p>Try adjusting your search or filter criteria.</p>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="ap-artists__cta" data-section="cta">
          <div className="ap-artists__cta-bg">
            <img src={contactcta} alt="Community" loading="lazy" />
            <div className="ap-artists__cta-overlay" />
          </div>
          <div className="ap-artists__container">
            <div className={`ap-artists__cta-wrapper ${isVisible.cta ? "visible" : ""}`}>
              <h2>Join Our Artist Community</h2>
              <p>Are you a dancer, teacher, choreographer, or researcher? Become part of KITD's growing artist network.</p>
              <div className="ap-artists__cta-buttons">
                <Link to="/membership" className="ap-artists__cta-btn ap-artists__cta-btn--primary">
                  <span>Apply for Membership</span>
                  <ArrowRight size={18} strokeWidth={1.5} />
                </Link>
                <Link to="/contact" className="ap-artists__cta-btn ap-artists__cta-btn--secondary">
                  <span>Contact KITD</span>
                  <ArrowRight size={18} strokeWidth={1.5} />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ArtistsPage;