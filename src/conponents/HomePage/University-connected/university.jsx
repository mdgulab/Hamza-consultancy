import "./university.css";

const CardsPage = () => {
  const cardsData = [
    {
      image: "/Jamia_Hamdard_Logo.png",
      title: "Card 1",
      description: "This is the description for card 1.",
      buttonText: "Learn More",
    },
    {
      image: "/Mizoram_University_logo.png",
      title: "Card 2",
      description: "This is the description for card 2.",
      buttonText: "Discover",
    },
    {
      image: "/amu_logo.jfif",
      title: "Card 3",
      description: "This is the description for card 3.",
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
      <h1>Our Featured Cards</h1>
      <CardsPage />
    </div>
  );
}

export default University;
