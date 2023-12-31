import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselComponent = ({
  images,
  numberOfSlides = 3,
  fixHeight = false,
  noText,
}) => {
  const settings = {
    arrows: false,
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: numberOfSlides,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="carousel-container relative mx-auto max-w-screen-lg ">
      <Slider
        {...settings}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full px-2">
            <div className=" p-4 rounded-lg ">
              <img
                src={image}
                alt={`Image ${index}`}
                className={`w-full ${
                  !fixHeight ? "h-48" : "h-48"
                } object-cover rounded-md mb-4`}
              />
              <h2 className="text-lg font-semibold text-white">Image Title</h2>
              {!noText ? <p className="text-gray-600 ">Image Subtitle</p> : ""}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselComponent;
