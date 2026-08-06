// src/pages/public/Home.jsx






import "./Home.css";
import HeroSection from "../public/Hero/HeroSection";
import AboutSection from "../public/About/AboutSection";
import MissionVisionSection from "../public/MissionVisionSection/MissionVisionSection";
import ActivitiesSection from "../public/Activities/Activities";
import EventsSection from "../Events/Events";
import ArtistsSection from "../Artists/Artists";
import MembershipCTA from "../Membership/Membership";
import GallerySection from "../Gallery/Gallery";
import NewsSection from "../public/News/News";
import NewsletterSection from "../public/NewsletterSection/NewsletterSection";
import ContactCTA from "../public/Contact/Contact";
import WhyJoinSection from "../public/WhyJoinSection/WhyJoinSection";
import SocialWall from '../../components/Socialwall';

const Home = () => {
  return (
    <main className="home-page">

      <HeroSection />

      <AboutSection />
      <WhyJoinSection/>

      <MissionVisionSection />

      <ActivitiesSection />

      <EventsSection />

      <ArtistsSection />

      <MembershipCTA />

      <GallerySection />
        <SocialWall />

      <NewsSection />

      {/* <NewsletterSection /> */}

      <ContactCTA />

    </main>
  );
};

export default Home;