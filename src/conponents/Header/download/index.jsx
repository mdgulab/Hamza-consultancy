import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./index.css"; // Import the external CSS file
import Header from "../../../../../Header/MainHeader/Header";
import Footer from "../../../../../Footer/Footer";
import { Placeholder } from "react-bootstrap";

const ContactForm = () => {
  // State to store form input values
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  // Handle input change for text fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle phone input change
  const handlePhoneChange = (phone) => {
    setFormData({
      ...formData,
      phone,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="ContactTop">
      <Header />
      <div className="ContactFormHead">
        <h2>Pediatrics & Neonatology Brochure Download</h2>
        <div className="form-container">
          <form onSubmit={handleSubmit} className="contact-form">
            {/* Name field */}
            <label>
              Your Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Name"
              />
            </label>

            {/* Phone number field with country code */}
            <label>
              Phone Number:
              <PhoneInput
                country={"us"}
                value={formData.phone}
                onChange={handlePhoneChange}
              />
            </label>

            {/* Email field */}
            <label>
              Your Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email-id"
              />
            </label>

            {/* Message field */}
            <label>
              Message Us:
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Write "
              />
            </label>

            {/* Submit button */}
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactForm;
