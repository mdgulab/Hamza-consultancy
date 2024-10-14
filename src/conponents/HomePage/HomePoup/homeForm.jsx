import { useState, useEffect } from "react";
import "./homeForm.css"; // Importing styles for the popup

const HomePopup = () => {
  const [isOpen, setIsOpen] = useState(true); // Popup is open by default
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    mobile: "",
    email: "",
    course: "",
  });

  const [errors, setErrors] = useState({}); // Store errors

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 500); // Show the popup after 500ms

    return () => clearTimeout(timer); // Cleanup timeout on unmount
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.dob) newErrors.dob = "Date of birth is required";
    if (!formData.mobile) newErrors.mobile = "Mobile number is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.course) newErrors.course = "Course is required";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted successfully:", formData);
      setIsOpen(false); // Close the popup if validation is successful
    } else {
      setErrors(validationErrors); // Set errors to show to the user
    }
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Fill out the form</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>

          <div>
            <label htmlFor="dob">Date of Birth:</label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
            />
            {errors.dob && <p className="error">{errors.dob}</p>}
          </div>

          <div>
            <label htmlFor="mobile">Mobile No:</label>
            <input
              type="tel"
              id="mobile"
              name="mobile"
              value={formData.mobile}
              onChange={handleChange}
              required
            />
            {errors.mobile && <p className="error">{errors.mobile}</p>}
          </div>

          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div>
            <label htmlFor="course">Course:</label>
            <select
              id="course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              required
            >
              <option value="">Select a course</option>
              <option value="course1">Course 1</option>
              <option value="course2">Course 2</option>
              <option value="course3">Course 3</option>
            </select>
            {errors.course && <p className="error">{errors.course}</p>}
          </div>

          <button type="submit">Submit</button>
        </form>
        <button className="close-btn" onClick={() => setIsOpen(false)}>
          Close
        </button>
      </div>
    </div>
  );
};

export default HomePopup;
