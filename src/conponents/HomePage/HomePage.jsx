import Header from "../Header/MainHeader/MainHeader";
import CoursesCard from "./courses-card/CoursesCard";
import "./HomePage.css"; // Importing the CSS file for styling
import HomePopup from "./HomePoup/homeForm";

const HomePage = () => {
  return (
    <div className="home-container">
      <Header />
      {/* Popup will appear at the center of the screen */}
      <HomePopup />

      <div className="home-header">
        <img className="headerimg" src="/Banner.png" alt="Home header" />
        <div className="header-content">
          <h1>Hamza Consultancy</h1>
          <p className="header-paragraph">
            Complete your education online with top universities, offering
            flexibility anywhere.
          </p>
        </div>
      </div>
      <div className="home-services">
        <h2 className="head1">Admission</h2>
        <p className="paragraph">
          Complete your education online with top universities, offering
          flexibility and convenience to learn from anywhere. Whether you're
          looking to enhance your skills or earn a degree, online programs
          provide access to world-class resources and expert faculty, all from
          the comfort of your home. Take control of your learning journey,
          balance your studies with other commitments, and achieve your academic
          goals with the support of leading educational institutions.
        </p>
      </div>
      <CoursesCard />
    </div>
  );
};

export default HomePage;
