import React from "react";
import "./Services.css"; // Include custom styles
import {
  FaGraduationCap,
  FaUniversity,
  FaHandHoldingUsd,
  FaPassport,
  FaBook,
  FaHome,
} from "react-icons/fa";
import Header from "../MainHeader/MainHeader";
import Footer from "../../Footer/footer";

const Services = () => {
  const services = [
    {
      title: "Career Counseling",
      description:
        "Expert advice to help students choose the right career path based on their strengths, interests, and future ambitions.",
      icon: <FaGraduationCap />,
    },
    {
      title: "University Admissions Assistance",
      description:
        "Comprehensive support with the entire university admission process, from application preparation to submission, for both domestic and international institutions.",
      icon: <FaUniversity />,
    },
    {
      title: "Scholarship Guidance",
      description:
        "Assistance in identifying and applying for scholarships to help students achieve their dreams with minimal financial burden.",
      icon: <FaHandHoldingUsd />,
    },

    {
      title: "Post-Admission Support",
      description:
        "Guidance on accommodation, travel, and settling into new educational environments for a seamless transition.",
      icon: <FaHome />,
    },
  ];

  return (
    <div>
      <Header />
      <div className="services-timeline-container">
        <h1 className="services-heading">Our Services</h1>
        <div className="timeline">
          {services.map((service, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-icon">{service.icon}</div>
              <div className="timeline-content">
                <h2>{service.title}</h2>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
