import { useRef } from "react";
import "./CoursesCard.css";

const CoursesCard = () => {
  const programs = [
    {
      name: "Bachelor of Arts with Apprenticeship",
      link: "https://form.jotform.com/242913325946461",
      logo: "/amu_logo.jfif",
    },

    {
      name: "BA - Economics with Internship",
      link: "https://form.jotform.com/242913325946461",
      logo: "/amu_logo.jfif",
    },

    {
      name: "BA - History with Internship",
      link: "https://form.jotform.com/242913325946461",
      logo: "/amu_logo.jfif",
    },
    {
      name: "BA - Political Science with Internship",
      link: "https://form.jotform.com/242913325946461",
      logo: "/amu_logo.jfif",
    },
    {
      name: "BA - Urdu with Internship",
      link: "https://form.jotform.com/242913325946461",
      logo: "/amu_logo.jfif",
    },

    {
      name: "B.Com with Apprenticeship",
      link: "https://form.jotform.com/242913325946461",
      logo: "/amu_logo.jfif",
    },
    {
      name: "MA with Apprenticeship",
      link: "https://form.jotform.com/242913325946461",
      logo: "/amu_logo.jfif",
    },
    {
      name: "MA - Economics with Inernship",
      link: "https://form.jotform.com/242913325946461",
      logo: "/amu_logo.jfif",
    },
    {
      name: "MA - Hindi with Inernship",
      link: "https://form.jotform.com/242913325946461",
      logo: "/amu_logo.jfif",
    },
    {
      name: "MA - History with Internship",
      link: "https://form.jotform.com/242913325946461",
      logo: "/amu_logo.jfif",
    },
    {
      name: "MA - Political Science with Internship",
      link: "https://form.jotform.com/242913325946461",
      logo: "/amu_logo.jfif",
    },
    {
      name: "MA - Urdu with Internship",
      link: "https://form.jotform.com/242913325946461",
      logo: "/amu_logo.jfif",
    },
    {
      name: "M.Com with Apprenticeship",
      link: "https://form.jotform.com/242913325946461",
      logo: "/amu_logo.jfif",
    },
  ];

  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -200, // Scroll left by 200px
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 200, // Scroll right by 200px
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="container">
      <header className="head1">
        <h2>Get free admission consultation for Aligarh Muslim University.</h2>
      </header>
      <main className="programs" ref={carouselRef}>
        {programs.map((program, index) => (
          <div className="program-card" key={index}>
            <img
              src={program.logo}
              alt="Program Logo"
              className="program-logo"
            />
            <h3 className="head2">{program.name}</h3>
            <p className="paragraph1">Alighar Mushlim University</p>
            <a href={program.link} className="apply-button">
              Click to Apply
            </a>
          </div>
        ))}
      </main>

      {/* Carousel buttons */}
      <button className="carousel-button left" onClick={scrollLeft}>
        &#8249; {/* Left arrow */}
      </button>
      <button className="carousel-button right" onClick={scrollRight}>
        &#8250; {/* Right arrow */}
      </button>
    </div>
  );
};

export default CoursesCard;
