import React from "react";
import "../styles/ServiceCards.css";

const cards = [
  {
    img: "/images/card1.png",
    title: "Web Design",
    detail: "Crafting beautiful, user-friendly interfaces for web platforms.",
  },
  {
    img: "/images/card2.png",
    title: "Development",
    detail: "Building robust and scalable applications with clean code.",
  },
  {
    img: "/images/card3.png",
    title: "Debugging",
    detail: "Identifying and fixing bugs to ensure seamless performance.",
  },
  {
    img: "/images/card4.png",
    title: "UX/UI",
    detail: "Designing intuitive experiences with a focus on usability.",
  },
];

export default function ServiceCards() {
  return (
    <section className="service-cards">
      {cards.map((card, index) => (
        <div className="card-container" key={index}>
          <div className="card-inner">
            <div className="card-front">
              <img src={card.img} alt={card.title} />
              <p>{card.title}</p>
            </div>
            <div className="card-back">
              <p>{card.detail}</p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
