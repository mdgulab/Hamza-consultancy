import { useRef } from "react";
import "./CoursesCard.css";

const CoursesCard = () => {
  const programs = [
    {
      name: "Bachelor in Computer Applications",
      link: "https://form.jotform.com/242913325946461",
      logo: "/Mizoram_University_logo.png",
    },
    {
      name: "B.Com E-Commerce",
      link: "https://form.jotform.com/242913325946461",
      logo: "/Mizoram_University_logo.png",
    },
    {
      name: "B.Com E-Accounting",
      link: "https://form.jotform.com/242913325946461",
      logo: "/Mizoram_University_logo.png",
    },
    {
      name: "BBA (E-Business)",
      link: "https://form.jotform.com/242913325946461",
      logo: "/Mizoram_University_logo.png",
    },
    {
      name: "MCom E-Commerce",
      link: "https://form.jotform.com/242913325946461",
      logo: "/Mizoram_University_logo.png",
    },
    {
      name: "M.A. Education",
      link: "https://form.jotform.com/242913325946461",
      logo: "/Mizoram_University_logo.png",
    },
    {
      name: "M.A. Psychology",
      link: "https://form.jotform.com/242913325946461",
      logo: "/Mizoram_University_logo.png",
    },
    {
      name: "Master of Social Work",
      link: "https://form.jotform.com/242913325946461",
      logo: "/Mizoram_University_logo.png",
    },
    {
      name: "MBA - Logistics & Supply Chain Management",
      link: "https://form.jotform.com/242913325946461",
      logo: "/Mizoram_University_logo.png",
    },
    {
      name: "MBA Big Data Analytics",
      link: "https://form.jotform.com/242913325946461",
      logo: "/Mizoram_University_logo.png",
    },
    {
      name: "MBA - Financial Management",
      link: "https://form.jotform.com/242913325946461",
      logo: "/Mizoram_University_logo.png",
    },
    {
      name: "MBA- Entrepreneurship",
      link: "https://form.jotform.com/242913325946461",
      logo: "/Mizoram_University_logo.png",
    },
    {
      name: "MBA - Marketing",
      link: "https://form.jotform.com/242913325946461",
      logo: "/Mizoram_University_logo.png",
    },
    {
      name: "MBA - General",
      link: "https://form.jotform.com/242913325946461",
      logo: "/Mizoram_University_logo.png",
    },
    {
      name: "Executive Diploma in Application Development",
      link: "https://form.jotform.com/242913325946461",
      logo: "/Mizoram_University_logo.png",
    },
    {
      name: "Executive Diploma in Internet of Things",
      link: "https://form.jotform.com/242913325946461",
      logo: "/Mizoram_University_logo.png",
    },
    {
      name: "Executive Diploma in Artificial Intelligence",
      link: "https://form.jotform.com/242913325946461",
      logo: "/Mizoram_University_logo.png",
    },
    {
      name: "Executive Diploma in Cyber Security",
      link: "https://form.jotform.com/242913325946461",
      logo: "/Mizoram_University_logo.png",
    },
    {
      name: "Diploma in Computer Applications",
      link: "https://form.jotform.com/242913325946461",
      logo: "/Mizoram_University_logo.png",
    },
    {
      name: "Executive Program in General Management",
      link: "https://form.jotform.com/242913325946461",
      logo: "/Mizoram_University_logo.png",
    },
    {
      name: "Executive Program in Human Resource Management",
      link: "https://form.jotform.com/242913325946461",
      logo: "/Mizoram_University_logo.png",
    },
    {
      name: "Executive Program in Marketing Management",
      link: "https://form.jotform.com/242913325946461",
      logo: "/Mizoram_University_logo.png",
    },
    {
      name: "Executive Program in Finance Management",
      link: "https://form.jotform.com/242913325946461",
      logo: "/Mizoram_University_logo.png",
    },
    {
      name: "Executive Program in Retail Management",
      link: "https://form.jotform.com/242913325946461",
      logo: "/Mizoram_University_logo.png",
    },
    {
      name: "Executive Program in Operations Management",
      link: "https://form.jotform.com/242913325946461",
      logo: "/Mizoram_University_logo.png",
    },
    {
      name: "Executive Program in Banking & Finance Management",
      link: "https://form.jotform.com/242913325946461",
      logo: "/Mizoram_University_logo.png",
    },
    {
      name: "Executive Program in Information Technology",
      link: "https://form.jotform.com/242913325946461",
      logo: "/Mizoram_University_logo.png",
    },
    {
      name: "Executive Program in Human Resource Management - Advance",
      link: "https://form.jotform.com/242913325946461",
      logo: "/Mizoram_University_logo.png",
    },
    {
      name: "Executive Program in Marketing Management - Advance",
      link: "https://form.jotform.com/242913325946461",
      logo: "/Mizoram_University_logo.png",
    },
    {
      name: "Executive Program in Finance Management - Advance",
      link: "https://form.jotform.com/242913325946461",
      logo: "/Mizoram_University_logo.png",
    },
    {
      name: "Executive Program in Retail Management - Advance",
      link: "https://form.jotform.com/242913325946461",
      logo: "/Mizoram_University_logo.png",
    },
    {
      name: "Executive Program in Operations Management - Advance",
      link: "https://form.jotform.com/242913325946461",
      logo: "/Mizoram_University_logo.png",
    },
    {
      name: "Executive Program in Banking & Finance Management - Advance",
      link: "https://form.jotform.com/242913325946461",
      logo: "/Mizoram_University_logo.png",
    },
    {
      name: "Executive Program in Information Technology - Advance",
      link: "https://form.jotform.com/242913325946461",
      logo: "/Mizoram_University_logo.png",
    },
    {
      name: "Certificate Course in Computerized Accounting",
      link: "https://form.jotform.com/242913325946461",
      logo: "/Mizoram_University_logo.png",
    },
    {
      name: "Certificate Course in Advanced Digital Marketing",
      link: "https://form.jotform.com/242913325946461",
      logo: "/Mizoram_University_logo.png",
    },
    {
      name: "Certificate Course in Android App Development",
      link: "https://form.jotform.com/242913325946461",
      logo: "/Mizoram_University_logo.png",
    },
    {
      name: "Certificate Course in GST",
      link: "https://form.jotform.com/242913325946461",
      logo: "/Mizoram_University_logo.png",
    },
    {
      name: "Diploma in Foreign Language - French",
      link: "https://form.jotform.com/242913325946461",
      logo: "/Mizoram_University_logo.png",
    },
    {
      name: "Diploma in Naturopathy & Yoga Science",
      link: "https://form.jotform.com/242913325946461",
      logo: "/Mizoram_University_logo.png",
    },
    {
      name: "Diploma in Foreign Language - Japanese",
      link: "https://form.jotform.com/242913325946461",
      logo: "/Mizoram_University_logo.png",
    },
  ];

  const carouselRef = useRef(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -200,
        behavior: "smooth",
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="container">
      <header className="head1">
        <h2>Get free admission consultation for Mizoram University.</h2>
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
            <p className="paragraph1">Mizoram University</p>
            <a href={program.link} className="apply-button">
              Click to Apply
            </a>
          </div>
        ))}
      </main>

      <button className="carousel-button left" onClick={scrollLeft}>
        &#8249;
      </button>
      <button className="carousel-button right" onClick={scrollRight}>
        &#8250;
      </button>
    </div>
  );
};

export default CoursesCard;
