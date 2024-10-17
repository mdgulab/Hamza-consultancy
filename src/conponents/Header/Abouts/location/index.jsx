import "./LocationAndAddress.css";

const Location = () => {
  return (
    <div className="location-app">
      <div className="location-container">
        {/* Left section: Information about a place */}
        <div className="location-info-section">
          <h2 className="location-section-title">About and Location</h2>
          <p className="location-info-content">
            Hamza Consultancy is based in Darbhanga, Bihar, specializing in
            education consultancy for over 4 years. We assist students in
            securing admissions to top universities like Amity University (AMU),
            Jamia Hamdard, and Mizoram University.
            <br />
            <br />
            Our mission is to provide personalized guidance, making higher
            education accessible and flexible for students worldwide.
          </p>
        </div>

        {/* Right section: Embedded Google Map */}
        <div className="location-map-section">
          <iframe
            title="Zurich Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2761.448515488575!2d8.54169401568639!3d47.37688667916867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47900a098d7864af%3A0x54d6d4f5393e8b8b!2sZurich%2C%20Switzerland!5e0!3m2!1sen!2sin!4v1695926124652!5m2!1sen!2sin"
            width="400"
            height="300"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Location;
