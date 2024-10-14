import "./CoursesCard.css";

const CoursesCard = () => {
  const programs = [
    { name: "MBBS", link: "#" },
    { name: "B.Tech", link: "#" },
    { name: "Diploma", link: "#" },
    { name: "M.Tech", link: "#" },
    { name: "Polytechnic", link: "#" },
    { name: "BDS", link: "#" },
    { name: "B.Sc Nursing", link: "#" },
    { name: "BAMS", link: "#" },
    { name: "B.Pharma", link: "#" },
    { name: "BPT", link: "#" },
    { name: "BALLB", link: "#" },
    { name: "MBA", link: "#" },
  ];

  return (
    <div className="container">
      <header className="head1">
        <h2>India and across Asia, we are the top admission consultant!</h2>
      </header>
      <main className="programs">
        {programs.map((program, index) => (
          <div className="program-card" key={index}>
            <h3 className="head2">{program.name}</h3>
            <p className="paragraph">University of India</p>
            <a href={program.link} className="apply-button">
              Click to Apply
            </a>
          </div>
        ))}
      </main>
    </div>
  );
};

export default CoursesCard;
