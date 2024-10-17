// import React from 'react';
import Footer from "../../Footer/footer";
import Header from "../MainHeader/MainHeader";
import "./About.css"; // Importing the CSS file
import Loaction from "./location";

const AboutUs = () => {
  return (
    <div className="AboutMain">
      <Header />
      <div className="about-container">
        <h1 className="about-heading">About Hamza Consultancy</h1>
        <p className="about-paragraph">
          At <strong>Hamza Consultancy</strong>, we are dedicated to helping
          students achieve their educational dreams by connecting them with top
          universities for online education. With over 4 years of experience in
          the field, we specialize in providing flexible and accessible learning
          opportunities from anywhere in the world.
        </p>
        <p className="about-paragraph">
          Our strong partnerships with prestigious institutions such as{" "}
          <strong>Amity University (AMU)</strong>,
          <strong> Jamia Hamdard</strong>, and{" "}
          <strong>Mizoram University</strong> ensure that students have a wide
          range of options to pursue their academic goals. Whether you re
          looking to advance your career, switch fields, or complete your
          education at your own pace, we are here to guide you every step of the
          way.
        </p>
        <p className="about-paragraph">
          Over the years, we have helped numerous students successfully gain
          admission to these universities, ensuring a smooth and stress-free
          process. At Hamza Consultancy, your education is our priority, and we
          are committed to making higher education accessible to everyone.
        </p>
      </div>
      <Loaction />
      <Footer />
    </div>
  );
};

export default AboutUs;
