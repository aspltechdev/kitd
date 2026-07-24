// // src/components/home/HeroSection/HeroSection.jsx

// import { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";
// import { ArrowRight } from "lucide-react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay, EffectFade, Pagination, Parallax } from "swiper/modules";

// import "swiper/css";
// import "swiper/css/effect-fade";
// import "swiper/css/pagination";

// import "./HeroSection.css";

// // Professional dance photography - Bharatanatyam focused
// const HERO_SLIDES = [
//   {
//     id: 1,
//     // Bharatanatyam dancer in traditional pose
//     image: "https://images.pexels.com/photos/8021124/pexels-photo-8021124.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080",
//     title: "Bewahrung der\nindischen Tanzkunst",
//     subtitle: "Seit über 15 Jahren fördern wir die klassische indische Tanzkunst in Deutschland – mit Hingabe, Authentizität und künstlerischer Exzellenz.",
//     cta: { primary: "Mitglied werden", secondary: "Veranstaltungen entdecken" },
//   },
//   {
//     id: 2,
//     // Kathak dancer in motion
//     image: "https://images.pexels.com/photos/6898854/pexels-photo-6898854.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080",
//     title: "Tradition trifft\nModerne",
//     subtitle: "Wir verbinden jahrhundertealte Tanztraditionen mit zeitgenössischer Kunstvermittlung – für ein lebendiges kulturelles Erbe.",
//     cta: { primary: "Gemeinschaft beitreten", secondary: "Künstler entdecken" },
//   },
//   {
//     id: 3,
//     // Odissi dancer
//     image: "https://images.pexels.com/photos/6898858/pexels-photo-6898858.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080",
//     title: "Die Sprache\nder Seele",
//     subtitle: "Bharatanatyam, Kathak, Odissi – jede Geste erzählt eine Geschichte. Entdecken Sie die Schönheit des klassischen indischen Tanzes.",
//     cta: { primary: "Tanz erleben", secondary: "Workshops finden" },
//   },
// ];

// const HeroSection = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isLoaded, setIsLoaded] = useState(false);
//   const heroRef = useRef(null);

//   // Preload images
//   useEffect(() => {
//     let loadedCount = 0;
//     HERO_SLIDES.forEach((slide) => {
//       const img = new Image();
//       img.src = slide.image;
//       img.onload = () => {
//         loadedCount++;
//         if (loadedCount === HERO_SLIDES.length) {
//           setIsLoaded(true);
//         }
//       };
//       img.onerror = () => {
//         loadedCount++;
//         if (loadedCount === HERO_SLIDES.length) {
//           setIsLoaded(true);
//         }
//       };
//     });
//   }, []);

//   return (
//     <section className="hero" ref={heroRef} aria-label="Hero section">
//       {/* Loading State */}
//       {!isLoaded && (
//         <div className="hero-loading">
//           <div className="hero-loading-spinner">
//             <div className="spinner-ring" />
//           </div>
//         </div>
//       )}

//       <Swiper
//         modules={[Autoplay, EffectFade, Pagination, Parallax]}
//         effect="fade"
//         loop={true}
//         speed={1200}
//         autoplay={{
//           delay: 6000,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//           el: '.hero-pagination',
//           bulletClass: 'hero-bullet',
//           bulletActiveClass: 'hero-bullet-active',
//         }}
//         parallax={true}
//         onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
//         className="hero-swiper"
//       >
//         {HERO_SLIDES.map((slide, index) => (
//           <SwiperSlide key={slide.id}>
//             <div className="hero-slide">
//               {/* Background Image */}
//               <div
//                 className="hero-image"
//                 data-swiper-parallax="20%"
//                 style={{ backgroundImage: `url(${slide.image})` }}
//               />

//               {/* Overlay Gradient */}
//               <div className="hero-overlay" />

//               {/* Subtle Pattern */}
//               <div className="hero-pattern" />

//               {/* Content */}
//               <div className="hero-content">
//                 <div className="hero-content-inner">
//                   {/* Eyebrow */}
//                   <div className="hero-eyebrow" data-swiper-parallax="-200">
//                     <span className="hero-eyebrow-line" />
//                     <span className="hero-eyebrow-text">
//                       Klassischer Indischer Tanz Deutschland e.V.
//                     </span>
//                   </div>

//                   {/* Title */}
//                   <h1 className="hero-title" data-swiper-parallax="-150">
//                     {slide.title.split('\n').map((line, i) => (
//                       <span key={i} className="hero-title-line">
//                         {line}
//                       </span>
//                     ))}
//                   </h1>

//                   {/* Subtitle */}
//                   <p className="hero-subtitle" data-swiper-parallax="-100">
//                     {slide.subtitle}
//                   </p>

//                   {/* CTAs */}
//                   <div className="hero-ctas" data-swiper-parallax="-50">
//                     <Link to="/membership" className="hero-btn hero-btn-primary">
//                       <span>{slide.cta.primary}</span>
//                       <ArrowRight size={18} strokeWidth={1.5} />
//                     </Link>
//                     <Link to="/events" className="hero-btn hero-btn-secondary">
//                       <span>{slide.cta.secondary}</span>
//                       <ArrowRight size={18} strokeWidth={1.5} />
//                     </Link>
//                   </div>
//                 </div>
//               </div>

//               {/* Slide Info */}
//               <div className="hero-slide-info">
//                 <span className="hero-slide-number">
//                   {(index + 1).toString().padStart(2, '0')}
//                 </span>
//                 <span className="hero-slide-divider" />
//                 <span className="hero-slide-total">
//                   {HERO_SLIDES.length.toString().padStart(2, '0')}
//                 </span>
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       {/* Custom Pagination */}
//       <div className="hero-pagination" />

//       {/* Scroll Indicator */}
//       <div className="hero-scroll-indicator">
//         <span className="hero-scroll-text">Scroll</span>
//         <div className="hero-scroll-line" />
//       </div>
//     </section>
//   );
// };

// export default HeroSection;


// src/components/home/HeroSection/HeroSection.jsx

import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination, Parallax } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import "./HeroSection.css";

// Professional dance photography
const HERO_SLIDES = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/19539249/pexels-photo-19539249.jpeg",
    title: "Preserving the Art of\nIndian Classical Dance",
    subtitle: "For over 15 years, we have been promoting classical Indian dance in Germany — with dedication, authenticity, and artistic excellence.",
    cta: { primary: "Become a Member", secondary: "Discover Events" },
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/8566097/pexels-photo-8566097.jpeg",
    title: "Tradition\nMeets Modernity",
    subtitle: "We connect centuries-old dance traditions with contemporary arts education — for a living cultural heritage.",
    cta: { primary: "Join Our Community", secondary: "Meet the Artists" },
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/7104389/pexels-photo-7104389.jpeg",
    title: "The Language\nof the Soul",
    subtitle: "Bharatanatyam, Kathak, Odissi — every gesture tells a story. Discover the beauty of classical Indian dance.",
    cta: { primary: "Experience Dance", secondary: "Find Workshops" },
  },
];

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef(null);

  // Preload images
  useEffect(() => {
    let loadedCount = 0;
    HERO_SLIDES.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === HERO_SLIDES.length) {
          setIsLoaded(true);
        }
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === HERO_SLIDES.length) {
          setIsLoaded(true);
        }
      };
    });
  }, []);

  return (
    <section className="hero" ref={heroRef} aria-label="Hero section">
      {/* Loading State */}
      {!isLoaded && (
        <div className="hero-loading">
          <div className="hero-loading-spinner">
            <div className="spinner-ring" />
          </div>
        </div>
      )}

      <Swiper
        modules={[Autoplay, EffectFade, Pagination, Parallax]}
        effect="fade"
        loop={true}
        speed={1200}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: '.hero-pagination',
          bulletClass: 'hero-bullet',
          bulletActiveClass: 'hero-bullet-active',
        }}
        parallax={true}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="hero-swiper"
      >
        {HERO_SLIDES.map((slide, index) => (
          <SwiperSlide key={slide.id}>
            <div className="hero-slide">
              {/* Background Image */}
              <div
                className="hero-image"
                data-swiper-parallax="20%"
                style={{ backgroundImage: `url(${slide.image})` }}
              />

              {/* Overlay Gradient */}
              <div className="hero-overlay" />

              {/* Subtle Pattern */}
              <div className="hero-pattern" />

              {/* Content */}
              <div className="hero-content">
                <div className="hero-content-inner">
                  {/* Eyebrow */}
                  <div className="hero-eyebrow" data-swiper-parallax="-200">
                    <span className="hero-eyebrow-line" />
                    <span className="hero-eyebrow-text">
                      Classical Indian Dance Germany e.V.
                    </span>
                  </div>

                  {/* Title */}
                  <h1 className="hero-title" data-swiper-parallax="-150">
                    {slide.title.split('\n').map((line, i) => (
                      <span key={i} className="hero-title-line">
                        {line}
                      </span>
                    ))}
                  </h1>

                  {/* Subtitle */}
                  <p className="hero-subtitle" data-swiper-parallax="-100">
                    {slide.subtitle}
                  </p>

                  {/* CTAs */}
                  <div className="hero-ctas" data-swiper-parallax="-50">
                    <Link to="/membership" className="hero-btn hero-btn-primary">
                      <span>{slide.cta.primary}</span>
                      <ArrowRight size={18} strokeWidth={1.5} />
                    </Link>
                    <Link to="/events" className="hero-btn hero-btn-secondary">
                      <span>{slide.cta.secondary}</span>
                      <ArrowRight size={18} strokeWidth={1.5} />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Slide Info */}
              <div className="hero-slide-info">
                <span className="hero-slide-number">
                  {(index + 1).toString().padStart(2, '0')}
                </span>
                <span className="hero-slide-divider" />
                <span className="hero-slide-total">
                  {HERO_SLIDES.length.toString().padStart(2, '0')}
                </span>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination */}
      <div className="hero-pagination" />

      {/* Scroll Indicator */}
      <div className="hero-scroll-indicator">
        <span className="hero-scroll-text">Scroll</span>
        <div className="hero-scroll-line" />
      </div>
    </section>
  );
};

export default HeroSection;