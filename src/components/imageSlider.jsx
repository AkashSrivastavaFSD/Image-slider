import React from "react";
import Slider from "react-slick";

const ImageSlider = () => {
  const images = [
    { pic: "./slider/p1.jpg" },
    { pic: "./slider/p2.jpg" },
    { pic: "./slider/p3.jpg" },
    { pic: "./slider/p4.jpg" },
    { pic: "./slider/p5.jpg" },
    { pic: "./slider/p6.jpg" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1, //  One image at a time
    slidesToScroll: 1,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // 3 seconds
    arrows: true, // Show next/prev buttons
    pauseOnHover: true, // Pause autoplay on hover
  };

  return (
    <div style ={{backgroundColor: '#fff',
      width:'100%'
      
     
      }}>
      <header
        style={{
          width: "100%",
          margin: "0 auto",
          height: 80,
          backgroundColor: "#4158D0",
          backgroundImage:
            "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "5px",
          padding: "10px",
        }}
      >
        <h2
          style={{
            color: "white",
            fontSize: 40,
            margin: 0,
            display: "flex",
            alignItems: "center",
          }}
        >
          <i className="ri-slideshow-3-fill" style={{ marginRight: 15 }}></i>
          Image Slider
        </h2>
      </header>

      <div
        className="slider-container"
        style={{
          padding: "50px",
          maxWidth: "85%",
          margin: "0 auto",
        }}
      >
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img
                src={image.pic}
                alt={`Slide ${index + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "10px",

                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
                }}
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ImageSlider;
