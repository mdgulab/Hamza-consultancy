import "./Contact.css"; // Ensure Contact.css has the correct styles
// import Footer from "../../Footer/Footer";
import Header from "../MainHeader/MainHeader";
import Footer from "../../Footer/footer";

const Contact = () => {
  return (
    <div>
      <Header />

      <div className="contact-container1">
        <h2 className="contH2">Contact Us for Hamza Consultancy</h2>
        <p className="Contact-sub-heading">
          Contact Hamza Consultancy for expert support in helping education
          grow. We provide tailored solutions to enhance educational systems,
          promote student success, and implement effective learning strategies.
        </p>

        <div className="contact-info">
          <div className="contact-item">
            <span className="icon">🎤</span>
            <h3 className="contH2">Address</h3>
            <p className="Contact-sub-heading">
              500032 Darbhanga , bihar india
            </p>
          </div>

          <div className="contact-item">
            <span className="icon">🎓</span>
            <h3 className="contH2">Phone number</h3>
            <p className="Contact-sub-heading">+91 7631170395</p>
          </div>

          <div className="contact-item">
            <span className="icon">📧</span>
            <h3 className="contH2">E-mail address</h3>
            <p className="Contact-sub-heading">support@hamza.com</p>
          </div>
        </div>
      </div>

      <br />

      <div className="navclass">
        {/* Map Container */}
        <div className="map-container">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d49774.98918017952!2d-75.211706!3d38.765153!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b8b9ee12ce8257%3A0x3122963d2d6d3bc5!2s16192%20Coastal%20Hwy%2C%20Lewes%2C%20DE%2019958!5e0!3m2!1sen!2sus!4v1727777652092!5m2!1sen!2sus"
          ></iframe>
        </div>

        {/* Contact form */}
        <div className="contact-form">
          <h3>Get in Touch</h3>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" placeholder="Your Name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                required
              />
            </div>

            {/* Date of Birth Field */}
            <div className="form-group">
              <label htmlFor="dob">Date of Birth</label>
              <input type="date" id="dob" required />
            </div>

            {/* Mobile No Field */}
            <div className="form-group">
              <label htmlFor="mobile">Mobile No.</label>
              <input
                type="tel"
                id="mobile"
                placeholder="Your Mobile No."
                pattern="[0-9]{10}" // Validates a 10-digit phone number
                required
              />
            </div>

            {/* Course Field */}
            <div className="form-group">
              <label htmlFor="course">Course</label>
              <input
                type="text"
                id="course"
                placeholder="Course Name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                rows="4"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
