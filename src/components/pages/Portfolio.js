import React, { useState } from "react";
import { SliderData } from "./SliderData.js";
import { Link } from "react-router-dom";
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa";
import "./style.css";

function Portfolio(slides) {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  console.log(current);

  // if (!Array.isArray(slides) || slides.length <= 0) {
  //   return null;
  // }
  console.log(SliderData);

  return (
    <section className="slider">
      <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
      <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <Link to="https://google.com">
                <img src={slide.image} alt="" className="image" />
              </Link>
            )}
          </div>
        );
      })}
    </section>
  );
}

export default Portfolio;
