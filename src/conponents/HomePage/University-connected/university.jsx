import "./university.css";

const CardsPage = () => {
  const cardsData = [
    {
      image: "/Jamia_Hamdard_Logo.png",
      title: "Jamia Hamdard University",
      description:
        "Jamia Hamdard is a research-focused university in New Delhi",
      buttonText: "Explore",
    },
    {
      image: "/Mizoram_University_logo.png",
      title: "Mizoram University",
      description:
        "Mizoram University is a central university located in Aizawl, India.",
      buttonText: "Explore",
    },
    {
      image: "/amu_logo.jfif",
      title: "Alighar Muslim University",
      description:
        "Aligarh Muslim University is a renowned public university in India.",
      buttonText: "Explore",
    },
  ];

  return (
    <div className="cards-container">
      {cardsData.map((card, index) => (
        <div className="card" key={index}>
          <img src={card.image} alt={card.title} className="card-image" />
          <div className="card-content">
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
          <button className="card-button">{card.buttonText}</button>
        </div>
      ))}
    </div>
  );
};

function University() {
  return (
    <div className="app-container">
      <h1>
        Our <b>Top Ranked Partners</b>
      </h1>
      <p>
        Here are the top universities according to the QS World Rankings. Edwise
        is proud to partner with these esteemed institutions
      </p>
      <CardsPage />
    </div>
  );
}

export default University;
