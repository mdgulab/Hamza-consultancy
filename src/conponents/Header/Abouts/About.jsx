import Footer from "../../Footer/footer";
import Header from "../MainHeader/MainHeader";
import "./About.css";
import Location from "./location";

const AboutUs = () => {
  return (
    <div className="AboutMain">
      <Header />
      <div className="about-banner">
        <img
          src="/public/Blue and Purple Social Media Specialist LinkedIn Article Cover Image (1).jpg"
          alt="About Banner"
          className="about-banner-img"
        />
      </div>

      <div className="about-content-container">
        <h1 className="about-heading">About Hamza Consultancy</h1>

        <div className="about-section">
          <div className="about-text">
            <p>
              <strong>About Us:</strong> <br />
              Hamza Education Consultancy is a trusted name in the education
              consultancy field, dedicated to guiding students toward academic
              and career success. Our mission is to empower students by
              providing personalized guidance, helping them find the best
              educational programs, institutions, and opportunities that align
              with their goals and aspirations.
            </p>
          </div>
          <img
            className="about-image"
            src="/public/about img.jpeg"
            alt="Hamza Consultancy"
          />
        </div>

        <div className="about-section services">
          <h2>Our Services</h2>
          <ul>
            <li>
              Career Counseling: Expert advice to help students choose the right
              career path based on their strengths, interests, and future
              ambitions.
            </li>
            <li>
              University Admissions Assistance: Comprehensive support with the
              entire university admission process, from application preparation
              to submission, for both domestic and international institutions.
            </li>
            <li>
              Scholarship Guidance: Assistance in identifying and applying for
              scholarships to help students achieve their dreams with minimal
              financial burden.
            </li>
            <li>
              Visa Assistance: Streamlined support for student visa
              applications, ensuring all documentation and procedures are
              handled efficiently.
            </li>
            <li>
              Test Preparation: Resources and coaching for standard tests such
              as IELTS, TOEFL, GRE, and SAT, equipping students for academic
              success.
            </li>
            <li>
              Post-Admission Support: Guidance on accommodation, travel, and
              settling into new educational environments for a seamless
              transition.
            </li>
          </ul>
        </div>

        <div className="about-section">
          <h2>Our Approach</h2>
          <p>
            At Hamza Education Consultancy, we believe in a student-first
            approach. Each student receives customized counseling that considers
            their individual background, preferences, and career goals. We stay
            updated with global educational trends and institution requirements,
            ensuring our students are always one step ahead.
          </p>
        </div>

        <div className="about-section">
          <h2>Why Choose Us?</h2>
          <p>
            - Experienced Advisors: Our team is comprised of seasoned
            professionals who bring extensive knowledge and insights from the
            education sector. <br />
            - Personalized Support: Tailored services to meet the unique needs
            and goals of each student. <br />
            - Global Network: Partnerships with leading institutions worldwide,
            offering diverse educational opportunities. <br />- Success Record:
            A strong history of successful student placements and satisfied
            clients.
          </p>
        </div>
      </div>

      <Location />
      <Footer />
    </div>
  );
};

export default AboutUs;
