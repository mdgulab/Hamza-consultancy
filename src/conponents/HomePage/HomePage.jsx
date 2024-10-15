import Header from "../Header/MainHeader/MainHeader";
import CoursesCard from "./courses-card/CoursesCard";
import "./HomePage.css"; // Importing the CSS file for styling
import HomePopup from "./HomePoup/homeForm";
import University from "./University-connected/university";

const HomePage = () => {
  return (
    <div className="home-container">
      <Header />
      {/* Popup will appear at the center of the screen */}
      <HomePopup />

      <div className="home-header">
        <img className="headerimg" src="/Banner.png" alt="Home header" />
        <div className="header-content">
          <h1 className="headerh1">Hamza Consultancy</h1>
          <p className="header-paragraph">
            Complete your education online with top universities, <br />
            offering flexibility anywhere.
          </p>
          <div className="imgcard">
            <div className="imagecard1">
              <img src="/amu_logo.jfif" alt="AMU Logo" />
            </div>
            <div className="imagecard1">
              <img src="/Jamia_Hamdard_Logo.png" alt="Jamia Hamdard Logo" />
            </div>
            <div className="imagecard1">
              <img
                src="/Mizoram_University_logo.png"
                width={"90px"}
                alt="Mizoram University Logo"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="home-services">
        <h2 className="head1">Admission</h2>
        <p className="paragraph">
          Complete your education online with top universities, offering
          flexibility and convenience to learn from anywhere. Balance your
          studies with other commitments and achieve your academic goals with
          leading educational institutions.
        </p>
      </div>
      <CoursesCard />
      <University />
    </div>
  );
};

export default HomePage;
