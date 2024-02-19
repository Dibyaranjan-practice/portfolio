import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Card from "./Card";

import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
};
const clients = [
  {
    name: "Emily",
    location: "United Kingdom",
    image: "client-sm-1.jpg",
    message:
      "As a marketing specialist, I love crafting compelling stories and engaging with audiences through social media platforms. Outside of work, I enjoy capturing moments behind the lens and experimenting with new recipes in the kitchen. Let's connect and share our creative endeavors!",
  },
  {
    name: "Ravi",
    location: "India",
    image: "client-sm-2.jpg",
    message:
      "Analyzing financial trends and exploring investment opportunities are my passions as a financial analyst. When I'm not crunching numbers, I enjoy watching cricket matches and embarking on adventurous hikes. Let's discuss finance, sports, and outdoor adventures!",
  },
  {
    name: "Sophia",
    location: "United States",
    image: "client-sm-3.jpg",
    message:
      "Creating intuitive and user-friendly designs is my forte as a UX designer. Beyond the screen, I find inspiration in exploring new cultures through travel and expressing my creativity on canvas. Let's connect and share our experiences in design, travel, and art!",
  },
  {
    name: "Liam",
    location: "Canada",
    image: "client-sm-4.jpg",
    message:
      "Solving complex problems and building innovative software solutions excite me as a software developer. When I'm not coding, you'll often find me immersed in gaming adventures or playing musical instruments. Let's collaborate on coding projects or discuss our favorite games and music!",
  },
  {
    name: "Isabella",
    location: "Australia",
    image: "client-sm-1.jpg",
    message:
      "Designing visually stunning artworks and leading creative projects are my passions as an art director. Outside of the studio, I find serenity exploring the depths of the ocean through scuba diving and delving into captivating books. Let's connect and share our artistic visions and underwater adventures!",
  },
  {
    name: "Oliver",
    location: "France",
    image: "client-sm-2.jpg",
    message:
      "Building successful ventures and exploring innovative business ideas drive me as an entrepreneur. When I'm not strategizing, I enjoy the thrill of sailing on open waters and indulging in the rich flavors of wine. Let's exchange insights on entrepreneurship, sailing adventures, and fine wines!",
  },
];

function ClientSpeak() {
  return (
    <div className="client-container flex flex-col items-center py-24 bg-[#939597]">
      <div className="title bg-yellow-300 px-2 mb-2">
        <h3>Client Speak</h3>
      </div>
      <div className="subtitle mb-5 text-4xl text-white font-black">
        <h1>What Some of my Clients Say</h1>
      </div>
      <div className="slider-container w-3/4 p-10 text-white">
        <Slider {...settings}>
          {clients.map((client, index) => {
            return (
              <Card
                key={index}
                name={client.name}
                message={client.message}
                location={client.location}
                image={client.image}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default ClientSpeak;
