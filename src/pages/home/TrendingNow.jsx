import React from "react";
import Slider from "react-slick";
import "./TrendingNow.css";

const trendingItems = [
  { title: "ELEMENTS", image: "/images/elements.webp" },
  { title: "THE BOUQUET", image: "/images/THE-BOUQUET.webp" },
  { title: "THE CERAMIC SERIES", image: "/images/ceremic_series.jpg" },
  { title: "WEDDING BANDS", image: "/images/WEDDING-BANDS.webp" },
  { title: "EARRINGS", image: "/images/EARRINGS.webp" },
  { title: "ANNIVERSARY RINGS", image: "/images/ANNIVERSARY-RINGS.webp" },
  { title: "ETERNITY RINGS", image: "/images/ETERNITY-RINGS.jpg" },
  { title: "TENNIS NECKLACES", image: "/images/TENNIS-NECKLACES.webp" },
  { title: "TENNIS BRACELETS", image: "/images/TENNIS-BRACELETS.jpg" },
  { title: "FINE JEWELRY", image: "/images/Fine-Jewelry.jpg" },
];

const TrendingNow = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    // <section className="trending-section">
    //   <div className="container trending-container">
    //     <div className="trending-left">
    //       <h2 className="trending-title">Trending <br /> Now</h2>
    //       <a href="#" className="trending-btn">Explore Now</a>
    //     </div>
    //     <div className="trending-right">
    //       <Slider {...settings}>
    //         {trendingItems.map((item, index) => (
    //           <div key={index} className="trending-item">
    //             <img src={item.image} alt={item.title} className="img-fluid" />
    //             <p className="item-label">{item.title}</p>
    //           </div>
    //         ))}
    //       </Slider>
    //     </div>
    //   </div>
    // </section>
    <section className="trending-section">
      <div className="container trending-container d-flex flex-column flex-md-row align-items-start">
        {/* Left Title + Button */}
        <div className="trending-left mb-4 mb-md-0 text-center text-md-start">
          <h2 className="trending-title mb-3">
            Trending <br /> Now
          </h2>
          <a
            href="#"
            className="trending-btn btn border-button border p-2 rounded-0 fw-bold"
          >
            Explore Now
          </a>
        </div>

        {/* Slider */}
        <div className="trending-right flex-grow-1">
          <Slider {...settings}>
            {trendingItems.map((item, index) => (
              <div key={index} className="trending-item text-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="img-fluid mb-2"
                />
                <p className="item-label">{item.title}</p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default TrendingNow;
