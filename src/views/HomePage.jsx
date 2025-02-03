import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import heroBehindTheDesign from "../assets/skeleton-crew-behind-the-design-hero-desktop_8e06b32e.jpeg";
import heroCharacter from "../assets/skeleton-crew-bff-woman-desktop_6308b91e.jpeg";
import heroCrew from "../assets/skeleton-crew-directed-by-skeleton-crew-desktop_8f3fed22.jpeg";

const images = [
  {
    id: 1,
    url: heroBehindTheDesign,
    title: "Behind the Details",
    text: "Discover all the details of each Star Wars ship.",
  },
  {
    id: 2,
    url: heroCharacter,
    title: "Which Skeleton Crew character are you?",
    text: "Take the quiz to find out which Skeleton Crew character you are",
  },
  {
    id: 3,
    url: heroCrew,
    title: "Skeleton Crew",
    text: "The episodic directors take you inside Skeleton Crew",
  },
];

function HomePage() {
  const [Slide, setSlide] = useState(0);

  const prevSlide = () => {
    setSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
      {images.map((image, id) => (
        <div
          key={id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            id === Slide ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${image.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/40 bg-opacity-50 flex flex-col justify-center items-start text-white text-start py-6 px-24">
            <div className="">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter">
                {image.title}
              </h1>
              <p className="mt-2 md:mt-4 text-lg md:text-2xl tracking-tight">
                {image.text}
              </p>
              <Link to="/starships">
                <Button>Find out</Button>
              </Link>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-300 p-2 md:p-4 hover:text-white transition duration-200"
      >
        ◀
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 text-gray-300 p-2 md:p-4 hover:text-white transition duration-200"
      >
        ▶
      </button>
    </div>
  );
}

export default HomePage;
