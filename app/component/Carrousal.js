import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselComponent = ({ images }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
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

  const CustomNextArrow = ({ onClick }) => (
    <button
      className="absolute top-1/2 right-0 transform translate-y-1/2 -translate-x-4 md:-translate-x-6 focus:outline-none"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="h-6 w-6 text-gray-600 hover:text-gray-800 transition duration-300"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  );

  const CustomPrevArrow = ({ onClick }) => (
    <button
      className="absolute top-1/2 left-0 transform -translate-y-1/2 translate-x-4 md:translate-x-6 focus:outline-none"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className="h-6 w-6 text-gray-600 hover:text-gray-800 transition duration-300"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
  );


  return (
    <div className="carousel-container relative mx-auto max-w-screen-lg px-4 py-8">
      <Slider
        {...settings}
        // nextArrow={<CustomNextArrow />}
        // prevArrow={<CustomPrevArrow />}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full px-2">
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <img
                src={image}
                alt={`Image ${index}`}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h2 className="text-lg font-semibold">Image Title</h2>
              <p className="text-gray-600">Image Subtitle</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CarouselComponent;
