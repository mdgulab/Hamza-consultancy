import { useRef } from "react";
import "./CoursesCard.css";

const CoursesCard = () => {
  const programs = [
    { name: "MBBS", link: "#" },
    { name: "B.Tech", link: "#" },
    { name: "Diploma", link: "#" },
    { name: "M.Tech", link: "#" },
    { name: "Polytechnic", link: "#" },
    { name: "BDS", link: "#" },
    { name: "B.Sc Nursing", link: "#" },
    { name: "BAMS", link: "#" },
    { name: "B.Pharma", link: "#" },
    { name: "BPT", link: "#" },
    { name: "BALLB", link: "#" },
    { name: "MBA", link: "#" },
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
            <h3 className="head2">{program.name}</h3>
            <p className="paragraph">University of India</p>
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
