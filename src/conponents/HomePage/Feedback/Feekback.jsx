import "./feedback.css";

const Feedbacks = () => {
  const feedbacks = [
    {
      feedback: "Thanks to your consultation, I got into my dream university!",
      name: "Aisha Khan",
      university: "Aligarh Muslim University",
    },
    {
      feedback: "Your services were outstanding, and I couldn't be happier!",
      name: "Rahul Verma",
      university: "Mizoram University",
    },
    {
      feedback: "I got admission to Aligarh Muslim University stress-free!",
      name: "Priya Sharma",
      university: "Aligarh Muslim University",
    },
    {
      feedback: "Your team made the whole process so smooth!",
      name: "Suresh Mehta",
      university: "Jamia Hamdard",
    },
    {
      feedback: "Best admission consultants! Highly recommend to everyone.",
      name: "Fatima Siddiqui",
      university: "Mizoram University",
    },
    {
      feedback: "I'm grateful for the consultation that secured my spot.",
      name: "Ravi Gupta",
      university: "Jamia Hamdard",
    },
    {
      feedback: "Thank you for guiding me step-by-step!",
      name: "Anjali Nair",
      university: "Aligarh Muslim University",
    },
    {
      feedback: "Your expert advice made my application simple.",
      name: "Meera Patel",
      university: "Mizoram University",
    },
    {
      feedback: "I’m now studying my dream course, all thanks to your help!",
      name: "Ahmed Khan",
      university: "Jamia Hamdard",
    },
    {
      feedback: "Never thought it would be this easy—thank you!",
      name: "John D'Souza",
      university: "Aligarh Muslim University",
    },
    {
      feedback:
        "Amazing service! The team truly cares about students' success.",
      name: "Sunil Malhotra",
      university: "Mizoram University",
    },
    {
      feedback: "The consultation was excellent, and I got admitted easily!",
      name: "Preeti Kaur",
      university: "Jamia Hamdard",
    },
    {
      feedback:
        "Super helpful advice that made the entire process stress-free.",
      name: "Aman Tiwari",
      university: "Aligarh Muslim University",
    },
    {
      feedback: "Professional, efficient, and supportive throughout!",
      name: "Shazia Begum",
      university: "Mizoram University",
    },
    {
      feedback: "Thanks to your team, I'm now at my top-choice university.",
      name: "Farhan Ali",
      university: "Jamia Hamdard",
    },
    {
      feedback: "Consultation was great. I'm very happy with the results!",
      name: "Geeta Kapoor",
      university: "Aligarh Muslim University",
    },
    {
      feedback: "The process was so smooth, and I got admitted in no time.",
      name: "Mohammed Iqbal",
      university: "Mizoram University",
    },
    {
      feedback: "Efficient, fast, and exactly what I needed!",
      name: "Tina Das",
      university: "Jamia Hamdard",
    },
    {
      feedback: "Your team made sure I got the best opportunities available.",
      name: "Rajesh Sharma",
      university: "Aligarh Muslim University",
    },
    {
      feedback: "The best admission consultants ever!",
      name: "Aarti Singh",
      university: "Mizoram University",
    },
    {
      feedback: "I’m so glad I chose this consultancy for my admission!",
      name: "Vikas Chauhan",
      university: "Jamia Hamdard",
    },
    {
      feedback: "Your consultation saved me so much time and effort!",
      name: "Nazia Khan",
      university: "Aligarh Muslim University",
    },
    {
      feedback: "I got the right guidance at the right time. Thank you!",
      name: "Rohit Malhotra",
      university: "Mizoram University",
    },
    {
      feedback: "I'm incredibly happy with the support you provided.",
      name: "Anita Mehta",
      university: "Jamia Hamdard",
    },
    {
      feedback: "Stress-free admissions process—couldn't ask for better!",
      name: "Gaurav Pandey",
      university: "Aligarh Muslim University",
    },
    {
      feedback: "Wonderful experience working with your team!",
      name: "Jaspreet Singh",
      university: "Mizoram University",
    },
    {
      feedback: "Super happy with my university placement!",
      name: "Shalini Nair",
      university: "Jamia Hamdard",
    },
    {
      feedback: "Couldn’t have asked for a smoother experience.",
      name: "Naveen Sharma",
      university: "Aligarh Muslim University",
    },
    {
      feedback: "Great support and professional consultation throughout!",
      name: "Kavita Bansal",
      university: "Mizoram University",
    },
    {
      feedback: "Thanks to your consultancy, I’m now at my dream university.",
      name: "Raman Joshi",
      university: "Jamia Hamdard",
    },
  ];

  return (
    <div className="feedbacks-container">
      <h2 className="head2">Our Happy Students </h2>
      <div className="marquee">
        <div className="feedbacks-list">
          {feedbacks.map((item, index) => (
            <div key={index} className="feedback-card">
              <p>`{item.feedback}`</p>
              <h4>{item.name}</h4>
              <p className="university">({item.university})</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feedbacks;
