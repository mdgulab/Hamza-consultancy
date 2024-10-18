import { useRef } from "react";
import "./JamiaHamdard.css";

const JamiaHamdard = () => {
  const programs = [
    {
      name: "Bachelor of Commerce",
      link: "https://form.jotform.com/242913325946461",
      logo: "/Jamia_Hamdard_Logo.png",
    },
    {
      name: "Bachelor of Business Administration",
      link: "https://form.jotform.com/242913325946461",
      logo: "/Jamia_Hamdard_Logo.png",
    },
    {
      name: "Batchelor of Computer Application",
      link: "https://form.jotform.com/242913325946461",
      logo: "/Jamia_Hamdard_Logo.png",
    },
    {
      name: "Bachelor of Business Administration (BBA)",
      link: "https://form.jotform.com/242913325946461",
      logo: "/Jamia_Hamdard_Logo.png",
    },
    {
      name: "Bachelor of Computer Applications(BCA)",
      link: "https://form.jotform.com/242913325946461",
      logo: "/Jamia_Hamdard_Logo.png",
    },
    {
      name: "Master of Islamic Study",
      link: "https://form.jotform.com/242913325946461",
      logo: "/Jamia_Hamdard_Logo.png",
    },
    {
      name: "Master of Busness Administration (MBA)",
      link: "https://form.jotform.com/242913325946461",
      logo: "/Jamia_Hamdard_Logo.png",
    },
    {
      name: "Master of Computer Applications(MCA)",
      link: "https://form.jotform.com/242913325946461",
      logo: "/Jamia_Hamdard_Logo.png",
    },
    {
      name: "MA - Political Science",
      link: "https://form.jotform.com/242913325946461",
      logo: "/Jamia_Hamdard_Logo.png",
    },
    {
      name: "Certificate in Modern Persian Language (CMPL)",
      link: "https://form.jotform.com/242913325946461",
      logo: "/Jamia_Hamdard_Logo.png",
    },
    {
      name: "Online Diplima in Professional Arbic (PDA)",
      link: "https://form.jotform.com/242913325946461",
      logo: "/Jamia_Hamdard_Logo.png",
    },
    {
      name: "Online Diploma in Bakery and Confectioery Technology (DBCT)",
      link: "https://form.jotform.com/242913325946461",
      logo: "/Jamia_Hamdard_Logo.png",
    },
    {
      name: "Advanced Diploma in Dietetics and Therapeuties Nutrition(ADDTN)",
      link: "https://form.jotform.com/242913325946461",
      logo: "/Jamia_Hamdard_Logo.png",
    },
    {
      name: "Advanced Diploma in Drug Regulatory Affairs (ADDRA)",
      link: "https://form.jotform.com/242913325946461",
      logo: "/Jamia_Hamdard_Logo.png",
    },
    {
      name: "Advanced Diploma in Medical Record Technology ",
      link: "https://form.jotform.com/242913325946461",
      logo: "/Jamia_Hamdard_Logo.png",
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
    <div className="course-container">
      <header className="course-header">
        <h2>Get free admission consultation for Jamia Hamdard.</h2>
      </header>
      <main className="course-programs" ref={carouselRef}>
        {programs.map((program, index) => (
          <div className="course-program-card" key={index}>
            <img
              src={program.logo}
              alt="Program Logo"
              className="course-program-logo"
            />
            <h3 className="course-head2">{program.name}</h3>
            <p className="paragraph2">Jamia Hamdard</p>
            <a href={program.link} className="course-apply-button">
              Click to Apply
            </a>
          </div>
        ))}
      </main>

      {/* Carousel buttons */}
      <button
        className="course-carousel-button course-left"
        onClick={scrollLeft}
      >
        &#8249; {/* Left arrow */}
      </button>
      <button
        className="course-carousel-button course-right"
        onClick={scrollRight}
      >
        &#8250; {/* Right arrow */}
      </button>
    </div>
  );
};

export default JamiaHamdard;
