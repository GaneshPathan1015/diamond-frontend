
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./TrendingNow.css"; // custom CSS

const trendingItems = [
  // { image: "/images/elements.webp", title: "PLATINUM ENGAGEMENT RINGS" },
  // { image: "/images/elements.webp", title: "THE BOUQUET" },
  // { image: "/images/elements.webp", title: "ELEMENTS" },
  // { image: "/images/elements.webp", title: "CLASSIC SOLITAIRE" },

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
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 992, // tablet
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 576, // mobile
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="trending-section py-5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Title + Button */}
          <div className="col-12 col-md-3 mb-4 mb-md-0 text-center text-md-start">
            <h2 className="trending-title mb-3">Trending Now</h2>
            <a
              href="#"
              className="btn explore-btn border rounded-0 fw-bold"
            >
              EXPLORE NOW
            </a>
          </div>

          {/* Slider */}
          <div className="col-12 col-md-9">
            <Slider {...settings}>
              {trendingItems.map((item, index) => (
                <div key={index} className="trending-item text-center">
                  <img src={item.image} alt={item.title} className="img-fluid" />
                  <p className="item-label mt-2">{item.title}</p>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingNow;
