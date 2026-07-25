// src/pages/Artists/ArtistsPage.jsx

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Search,
  MapPin,
  Users,
  Sparkles,
  Filter,
  ChevronRight,
  Mail,
  Star,
} from "lucide-react";
import { Helmet } from "react-helmet-async";

import "./ArtistsPage.css";

// Featured artists
const featuredArtists = [
  {
    id: 1,
    name: "Dr. Ananya Sharma",
    photo: "https://images.pexels.com/photos/8021124/pexels-photo-8021124.jpeg?auto=compress&cs=tinysrgb&w=400&h=500",
    danceForm: "Bharatanatyam",
    city: "Berlin",
    role: "Performer & Teacher",
    bio: "An accomplished Bharatanatyam artist with over 20 years of experience in performance and teaching across Europe and India. Specializing in the Pandanallur style.",
    slug: "ananya-sharma",
    featured: true,
  },
  {
    id: 2,
    name: "Rajesh Kumar Iyer",
    photo: "https://images.pexels.com/photos/6898854/pexels-photo-6898854.jpeg?auto=compress&cs=tinysrgb&w=400&h=500",
    danceForm: "Kathak",
    city: "Munich",
    role: "Choreographer & Educator",
    bio: "A dedicated Kathak practitioner and choreographer known for blending traditional techniques with contemporary expressions. Trained under Guru Munna Shukla.",
    slug: "rajesh-kumar-iyer",
    featured: true,
  },
  {
    id: 3,
    name: "Maya Patel",
    photo: "https://images.pexels.com/photos/6898858/pexels-photo-6898858.jpeg?auto=compress&cs=tinysrgb&w=400&h=500",
    danceForm: "Odissi",
    city: "Frankfurt",
    role: "Classical Dancer & Researcher",
    bio: "An Odissi dancer and researcher committed to preserving the authentic traditions of classical Indian dance through performance, scholarship, and community teaching.",
    slug: "maya-patel",
    featured: true,
  },
];

// All artists directory
const allArtists = [
  ...featuredArtists,
  {
    id: 4,
    name: "Vikram Desai",
    photo: "https://images.pexels.com/photos/31521700/pexels-photo-31521700.jpeg?auto=compress&cs=tinysrgb&w=400&h=500",
    danceForm: "Kuchipudi",
    city: "Hamburg",
    role: "Performer & Cultural Ambassador",
    bio: "A passionate Kuchipudi artist dedicated to promoting Indian Classical Dance through performances, workshops, and cultural exchange programmes.",
    slug: "vikram-desai",
    featured: false,
  },
  {
    id: 5,
    name: "Priya Menon",
    photo: "https://images.pexels.com/photos/8021124/pexels-photo-8021124.jpeg?auto=compress&cs=tinysrgb&w=400&h=500",
    danceForm: "Mohiniyattam",
    city: "Cologne",
    role: "Teacher & Performer",
    bio: "A Mohiniyattam specialist with a focus on introducing Kerala's classical dance form to German audiences through performances and educational programmes.",
    slug: "priya-menon",
    featured: false,
  },
  {
    id: 6,
    name: "Arun Nair",
    photo: "https://images.pexels.com/photos/6898854/pexels-photo-6898854.jpeg?auto=compress&cs=tinysrgb&w=400&h=500",
    danceForm: "Sattriya",
    city: "Berlin",
    role: "Researcher & Choreographer",
    bio: "A Sattriya dance practitioner and researcher documenting the traditions of Assam's classical dance form while teaching and performing across Germany.",
    slug: "arun-nair",
    featured: false,
  },
];

// Filter options
const danceForms = [
  "All Dance Forms",
  "Bharatanatyam",
  "Kathak",
  "Odissi",
  "Kuchipudi",
  "Mohiniyattam",
  "Sattriya",
];

const cities = [
  "All Cities",
  "Berlin",
  "Munich",
  "Hamburg",
  "Frankfurt",
  "Cologne",
];

const roles = ["All", "Performer", "Teacher", "Choreographer", "Researcher"];

const ArtistsPage = () => {
  const [isVisible, setIsVisible] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDanceForm, setSelectedDanceForm] = useState("All Dance Forms");
  const [selectedCity, setSelectedCity] = useState("All Cities");
  const [selectedRole, setSelectedRole] = useState("All");
  const [filteredArtists, setFilteredArtists] = useState(allArtists);

  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({
              ...prev,
              [entry.target.dataset.section]: true,
            }));
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll("[data-section]").forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  // Filter artists
  useEffect(() => {
    let result = allArtists;

    if (searchQuery) {
      result = result.filter(
        (artist) =>
          artist.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          artist.danceForm.toLowerCase().includes(searchQuery.toLowerCase()) ||
          artist.city.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedDanceForm !== "All Dance Forms") {
      result = result.filter((artist) => artist.danceForm === selectedDanceForm);
    }

    if (selectedCity !== "All Cities") {
      result = result.filter((artist) => artist.city === selectedCity);
    }

    if (selectedRole !== "All") {
      result = result.filter((artist) => artist.role.includes(selectedRole));
    }

    setFilteredArtists(result);
  }, [searchQuery, selectedDanceForm, selectedCity, selectedRole]);

  const featuredOnly = allArtists.filter((a) => a.featured);

  return (
    <>
      <Helmet>
        <title>Artists | KITD - Classical Indian Dance Germany</title>
        <meta
          name="description"
          content="Explore the talented community of dancers, teachers, choreographers and cultural practitioners in the KITD artist directory across Germany."
        />
      </Helmet>

      <div className="artists-page">
        {/* ============================================ */}
        {/* HERO SECTION */}
        {/* ============================================ */}
        <section className="art-hero">
          <div className="art-hero-bg" />
          <div className="art-hero-container">
            <div className="art-hero-content">
              <div className="art-hero-eyebrow">
                <span className="art-hero-eyebrow-line" />
                <span className="art-hero-eyebrow-text">Our Artist Community</span>
              </div>
              <h1 className="art-hero-title">
                Connecting Artists,
                <br />
                Teachers & Cultural
                <br />
                <span className="art-hero-title-accent">Practitioners Across Germany</span>
              </h1>
              <p className="art-hero-description">
                Explore the talented community of dancers, teachers, choreographers, 
                and cultural practitioners who contribute to preserving and promoting 
                Indian Classical Dance through performances, education, and collaboration 
                across Germany.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* BREADCRUMB */}
        {/* ============================================ */}
        <div className="art-breadcrumb">
          <div className="art-container">
            <Link to="/">Home</Link>
            <ChevronRight size={14} strokeWidth={1.5} />
            <span>Artists</span>
          </div>
        </div>

        {/* ============================================ */}
        {/* ABOUT THE ARTIST COMMUNITY */}
        {/* ============================================ */}
        <section className="art-about" data-section="about">
          <div className="art-container">
            <div className={`art-about-wrapper ${isVisible.about ? "visible" : ""}`}>
              <div className="art-about-eyebrow">
                <span className="art-about-eyebrow-line" />
                <span className="art-about-eyebrow-text">About the Community</span>
              </div>
              <h2 className="art-about-title">
                A Diverse Network of
                <span className="art-about-title-accent"> Classical Artists</span>
              </h2>
              <p className="art-about-description">
                KITD brings together artists from different Indian Classical Dance 
                traditions, creating opportunities for collaboration, learning, cultural 
                exchange, and community engagement. Our Artist Directory celebrates the 
                expertise and dedication of members who contribute to strengthening the 
                Indian Classical Dance community in Germany.
              </p>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* SEARCH & FILTER */}
        {/* ============================================ */}
        <section className="art-filter" data-section="filter">
          <div className="art-container">
            <div className={`art-filter-wrapper ${isVisible.filter ? "visible" : ""}`}>
              <div className="art-filter-header">
                <Filter size={18} strokeWidth={1.5} />
                <span>Search & Filter Artists</span>
              </div>
              <div className="art-filter-controls">
                <div className="art-search-box">
                  <Search size={16} strokeWidth={1.5} />
                  <input
                    type="text"
                    placeholder="Search by name, dance form, or city..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <div className="art-filter-selects">
                  <select
                    value={selectedDanceForm}
                    onChange={(e) => setSelectedDanceForm(e.target.value)}
                  >
                    {danceForms.map((form) => (
                      <option key={form} value={form}>{form}</option>
                    ))}
                  </select>
                  <select
                    value={selectedCity}
                    onChange={(e) => setSelectedCity(e.target.value)}
                  >
                    {cities.map((city) => (
                      <option key={city} value={city}>{city}</option>
                    ))}
                  </select>
                  <select
                    value={selectedRole}
                    onChange={(e) => setSelectedRole(e.target.value)}
                  >
                    {roles.map((role) => (
                      <option key={role} value={role}>{role}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* FEATURED ARTISTS */}
        {/* ============================================ */}
        <section className="art-featured" data-section="featured">
          <div className="art-container">
            <div className="art-featured-header">
              <div className="art-featured-eyebrow">
                <Star size={14} strokeWidth={1.5} />
                <span className="art-featured-eyebrow-text">Featured Artists</span>
              </div>
              <h2 className="art-featured-title">Meet Our Distinguished Members</h2>
            </div>

            <div className={`art-featured-grid ${isVisible.featured ? "visible" : ""}`}>
              {featuredOnly.map((artist, index) => (
                <div
                  className="art-featured-card"
                  key={artist.id}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className="art-featured-image">
                    <img src={artist.photo} alt={artist.name} loading="lazy" />
                    <div className="art-featured-badge">{artist.danceForm}</div>
                  </div>
                  <div className="art-featured-content">
                    <div className="art-featured-meta">
                      <MapPin size={12} strokeWidth={1.5} />
                      <span>{artist.city}</span>
                      <span className="art-meta-dot">•</span>
                      <span>{artist.role}</span>
                    </div>
                    <h3 className="art-featured-name">{artist.name}</h3>
                    <p className="art-featured-bio">{artist.bio}</p>
                    <Link to={`/artists/${artist.slug}`} className="art-featured-link">
                      <span>Meet the Artist</span>
                      <ArrowRight size={14} strokeWidth={1.5} />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* ARTIST DIRECTORY */}
        {/* ============================================ */}
        <section className="art-directory" data-section="directory">
          <div className="art-container">
            <div className="art-directory-header">
              <h2 className="art-directory-title">Artist Directory</h2>
              <p className="art-directory-count">
                {filteredArtists.length} artist{filteredArtists.length !== 1 ? "s" : ""} found
              </p>
            </div>

            <div className={`art-directory-grid ${isVisible.directory ? "visible" : ""}`}>
              {filteredArtists.length > 0 ? (
                filteredArtists.map((artist, index) => (
                  <div
                    className="art-directory-card"
                    key={artist.id}
                    style={{ transitionDelay: `${index * 0.06}s` }}
                  >
                    <div className="art-directory-image">
                      <img src={artist.photo} alt={artist.name} loading="lazy" />
                    </div>
                    <div className="art-directory-content">
                      <span className="art-directory-dance">{artist.danceForm}</span>
                      <div className="art-directory-location">
                        <MapPin size={12} strokeWidth={1.5} />
                        <span>{artist.city}</span>
                      </div>
                      <h3 className="art-directory-name">{artist.name}</h3>
                      <p className="art-directory-role">{artist.role}</p>
                      <p className="art-directory-bio">
                        {artist.bio.length > 80 ? `${artist.bio.slice(0, 80)}...` : artist.bio}
                      </p>
                      <Link to={`/artists/${artist.slug}`} className="art-directory-link">
                        <span>View Profile</span>
                        <ArrowRight size={13} strokeWidth={1.5} />
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <div className="art-directory-empty">
                  <Users size={40} strokeWidth={1} />
                  <h3>No artists found</h3>
                  <p>Try adjusting your search or filter criteria.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* BECOME AN ARTIST MEMBER CTA */}
        {/* ============================================ */}
        <section className="art-join" data-section="join">
          <div className="art-join-bg" />
          <div className="art-container">
            <div className={`art-join-wrapper ${isVisible.join ? "visible" : ""}`}>
              <h2 className="art-join-title">Join Our Artist Community</h2>
              <p className="art-join-description">
                Are you a dancer, teacher, choreographer, or researcher passionate 
                about Indian Classical Dance? Become part of KITD's growing artist 
                network and collaborate with professionals across Germany.
              </p>
              <div className="art-join-buttons">
                <Link to="/membership" className="art-join-btn art-join-btn-primary">
                  <span>Apply for Membership</span>
                  <ArrowRight size={18} strokeWidth={1.5} />
                </Link>
                <Link to="/contact" className="art-join-btn art-join-btn-secondary">
                  <Mail size={16} strokeWidth={1.5} />
                  <span>Contact KITD</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================ */}
        {/* CONTACT CTA */}
        {/* ============================================ */}
        <section className="art-contact" data-section="contact">
          <div className="art-container">
            <div className={`art-contact-wrapper ${isVisible.contact ? "visible" : ""}`}>
              <h3 className="art-contact-title">Have Questions?</h3>
              <p className="art-contact-text">
                Reach out to KITD to learn more about artist membership, collaborations, 
                performances, and community initiatives.
              </p>
              <Link to="/contact" className="art-contact-link">
                <span>Get in Touch</span>
                <ArrowRight size={15} strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ArtistsPage;