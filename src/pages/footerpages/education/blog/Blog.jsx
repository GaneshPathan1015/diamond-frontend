import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ✅ Single Section Component
const BlogSection = ({ title, items, settings }) => {
  return (
    <section className="blog-exclusive-offers-wrapper blog-my-5 blog-bg-secondary blog-py-5">
      <div className="blog-container">
        <div className="blog-row blog-align-items-center">
          <div className="blog-col-12">
            <h2 className="blog-section-header-lg blog-small-text-center blog-mb-4">
              {title}
            </h2>
            <Slider {...settings} className="blog-exclusive-offers">
              {items.map((item, index) => (
                <div key={index}>
                  <div className="blog-img-block blog-text-center">
                    <img
                      src={item.img}
                      alt={item.label}
                      className="blog-img-fluid blog-mb-2"
                    />
                  </div>
                  {/* ✅ Card Heading & Subheading */}
                  <p className="blog-text-center blog-text-uppercase blog-mt-2">
                    {item.label}
                  </p>
                  <Link to="#">
                    <h1 className="blog-text-center blog-text-capitalize blog-mt-1">
                      {item.heading}
                    </h1>
                  </Link>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

// ✅ Navigation Menu
const BlogNavigation = () => {
  return (
    <div className="blog-nav blog-medium-up-text-center blog-small-text-left">
      <nav className="blog-flex-md">
        <div className="blog-border-top blog-border-bottom blog-bg-white">
          <div className="blog-container">
            <ul className="blog-d-flex blog-justify-content-center blog-list-unstyled blog-mb-0 blog-topmenu">
              <li className="blog-nav-link blog-position-relative blog-mx-3 blog-dropdown-menu-hover">
                <Link to="#" className="blog-menu-link">
                  ENGAGEMENT RINGS
                </Link>
                <ul className="blog-dropdown-list">
                  <li className="blog-child-link">
                    <Link to="#">Proposal Playbook</Link>
                  </li>
                  <li className="blog-child-link">
                    <Link to="#">This or That</Link>
                  </li>
                  <li className="blog-child-link">
                    <Link to="#">Top Trends</Link>
                  </li>
                  <li className="blog-child-link">
                    <Link to="#">The Gemologist's Guide</Link>
                  </li>
                </ul>
              </li>

              <li className="blog-nav-link blog-position-relative blog-mx-3 blog-dropdown-menu-hover">
                <Link to="#" className="blog-menu-link">
                  GEMSTONE INSIGHTS
                </Link>
                <ul className="blog-dropdown-list">
                  <li className="blog-child-link">
                    <Link to="#">Birthstones 101</Link>
                  </li>
                  <li className="blog-child-link">
                    <Link to="#">Precious Picks</Link>
                  </li>
                </ul>
              </li>

              <li className="blog-nav-link blog-position-relative blog-mx-3 blog-dropdown-menu-hover">
                <Link to="#" className="blog-menu-link">
                  WEDDING BANDS
                </Link>
                <ul className="blog-dropdown-list">
                  <li className="blog-child-link">
                    <Link to="#">Forever Sparkle</Link>
                  </li>
                  <li className="blog-child-link">
                    <Link to="#">Wedding Wows</Link>
                  </li>
                </ul>
              </li>

              <li className="blog-nav-link blog-position-relative blog-mx-3 blog-dropdown-menu-hover">
                <Link to="#" className="blog-menu-link">
                  METAL
                </Link>
                <ul className="blog-dropdown-list">
                  <li className="blog-child-link">
                    <Link to="#">Metal Education</Link>
                  </li>
                  <li className="blog-child-link">
                    <Link to="#">WC Selects</Link>
                  </li>
                </ul>
              </li>

              <li className="blog-nav-link blog-position-relative blog-mx-3 blog-dropdown-menu-hover">
                <Link to="#" className="blog-menu-link">
                  BUYING GUIDES
                </Link>
                <ul className="blog-dropdown-list">
                  <li className="blog-child-link">
                    <Link to="#">Engagement</Link>
                  </li>
                  <li className="blog-child-link">
                    <Link to="#">Jewelry</Link>
                  </li>
                </ul>
              </li>

              <li className="blog-nav-link blog-position-relative blog-mx-3 blog-dropdown-menu-hover">
                <Link to="#" className="blog-menu-link">
                  DIAMOND
                </Link>
                <ul className="blog-dropdown-list">
                  <li className="blog-child-link">
                    <Link to="#">All About Lab</Link>
                  </li>
                  <li className="blog-child-link">
                    <Link to="#">4C's & Beyond</Link>
                  </li>
                  <li className="blog-child-link">
                    <Link to="#">Decode The Dazzle</Link>
                  </li>
                </ul>
              </li>

              <li className="blog-nav-link blog-position-relative blog-mx-3 blog-dropdown-menu-hover">
                <Link to="#" className="blog-menu-link">
                  JEWELRY
                </Link>
                <ul className="blog-dropdown-list">
                  <li className="blog-child-link">
                    <Link to="#">Art of Gifting</Link>
                  </li>
                  <li className="blog-child-link">
                    <Link to="#">Inspo & Info</Link>
                  </li>
                  <li className="blog-child-link">
                    <Link to="#">Fresh Finds</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

// ✅ Header
const BlogHeader = () => {
  return (
    <section className="blog-py-5 blog-bg-light">
      <div className="blog-container blog-header blog-text-center">
        <nav aria-label="breadcrumb">
          <ol className="blog-breadcrumb blog-justify-content-start blog-mb-3">
            <li className="blog-breadcrumb-item">
              <Link to="/">Home</Link>
            </li>
            <li className="blog-breadcrumb-item blog-active" aria-current="page">
              Blog
            </li>
          </ol>
        </nav>

        <h1 className="blog-header-heading">The With Clarity Blog</h1>

        <p>
          Elevate your everyday with inspiration, delivered fresh, by the With
          Clarity editorial team. Discover your source of hidden gems, signature
          styles and jewelry trends. Dive into curated guides for all things
          diamonds including – engagement rings, lab grown and natural diamonds
          and wedding rings.
        </p>

        <BlogNavigation />
      </div>
    </section>
  );
};

// ✅ Main Component
const Blog = () => {
  const sliderSettings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  const engagementItems = [
    {
      img: "images/blog/slider1.1.webp",
      label: "ENGAGEMENT RINGS",
      heading: "GETTING NERVOUS? HERE'S WHAT TO SAY WHEN YOU PROPOSE",
    },
    {
      img: "images/blog/slider1.2.webp",
      label: "ENGAGEMENT RINGS",
      heading: "HERE'S WHAT YOU NEED TO KNOW BEFORE BUYING A PAVE SETTING",
    },
    {
      img: "images/blog/slider1.3.webp",
      label: "ENGAGEMENT RINGS",
      heading: "RING RESTTING GUIDE",
    },
    {
      img: "images/blog/slider1.4.webp",
      label: "ENGAGEMENT RINGS",
      heading:
        "THINGS YOU SHOULD KNOW: ENGAGEMENT RING METALS, AND ALL THINGS HYPOALLERGENIC",
    },
    {
      img: "images/blog/slider1.5.webp",
      label: "ENGAGEMENT RINGS",
      heading:
        "WHAT IS MILGRAIN (OR MILLGRAIN/MILLGRAIN AND HOW CAN IT ENHANCE YOUR RING?)",
    },
    {
      img: "images/blog/slider1.6.webp",
      label: "ENGAGEMENT RINGS",
      heading: "WHICH HAND DOES THE ENGAGEMENT RING GO ON?",
    },
    {
      img: "images/blog/slider1.7.webp",
      label: "ENGAGEMENT RINGS",
      heading: "WHAT YOU NEED TO KNOW BEFORE BUYING AN EMERALD ENGAGEMENT RING",
    },
    {
      img: "images/blog/slider1.8.webp",
      label: "ENGAGEMENT RINGS",
      heading: "",
    },
  ];

  const gemstoneItems = [
    {
      img: "images/blog/slider2.1.webp",
      label: "GEMSTONE",
      heading: "HOW SAPPHIRES ARE VALUED",
    },
    {
      img: "images/blog/slider2.2.webp",
      label: "GEMSTONE",
      heading: "HOW MUCH DOES MOISSANITE COST?",
    },
    {
      img: "images/blog/slider2.3.webp",
      label: "GEMSTONE",
      heading: "HOW IS AQUAMARINE VALUED?",
    },
    {
      img: "images/blog/slider2.4.webp",
      label: "GEMSTONE",
      heading: "NATURAL EMERALD GRADING",
    },
    {
      img: "images/blog/slider2.5.webp",
      label: "GEMSTONE",
      heading: "NATURAL SAPPHIRE GRADING",
    },
    {
      img: "images/blog/slider2.6.webp",
      label: "GEMSTONE",
      heading: "RUBY MEANING",
    },
    {
      img: "images/blog/slider2.7.webp",
      label: "GEMSTONE",
      heading: "EMERALD MEANING",
    },
    {
      img: "images/blog/slider2.8.webp",
      label: "GEMSTONE",
      heading: "WHAT ARE MOISSANITE GRADES",
    },
  ];

  const weddingItems = [
    {
      img: "images/blog/slider3.1.webp",
      label: "WEDDING BANDS",
      heading:
        "ALL OF THE DIFFERENT STYLES OF WEDDING BANDS FOR MEN, EXPLAINED",
    },
    {
      img: "images/blog/slider3.2.webp",
      label: "WEDDING BANDS",
      heading: "MEN'S WEDDING BANDS WIDTH GUIDE",
    },
    {
      img: "images/blog/slider3.3.webp",
      label: "WEDDING BANDS",
      heading: "WEDDING BANDS VS ANNIVERSARY BANDS",
    },
    {
      img: "images/blog/slider3.4.webp",
      label: "WEDDING BANDS",
      heading: "A GUIDE TO WOMEN'S WEDDING BAND COST",
    },
    {
      img: "images/blog/slider3.5.webp",
      label: "WEDDING BANDS",
      heading: "GUIDE TO CHOOSING UNIQUE ANNIVERSARY BANDS",
    },
    {
      img: "images/blog/slider3.6.webp",
      label: "WEDDING BANDS",
      heading: "YOUR GUIDE TO WOMEN'S WEDDING BAND STYLES",
    },
    {
      img: "images/blog/slider3.7.webp",
      label: "WEDDING BANDS",
      heading: "A GUIDE TO STACKED WEDDING BANDS",
    },
    {
      img: "images/blog/slider3.8.webp",
      label: "WEDDING BANDS",
      heading: "HOW TO MATCH THIS AND HERS WEDDING BANDS",
    },
  ];

  const metalItems = [
    {
      img: "images/blog/slider4.1.webp",
      label: "METAL",
      heading: "WHITE GOLD VS PLATINUM: WHICH METAL IS BEST FOR YOUR RING?",
    },
    {
      img: "images/blog/slider4.2.jpg",
      label: "METAL",
      heading:
        "YOU'RE GOING TO HAVE TO GET YOUR WHITE GOLD RING DIPPED - HERE'S WHAT THAT MEANS AND HOW MUCH IT COSTS",
    },
    {
      img: "images/blog/slider4.3.webp",
      label: "METAL",
      heading:
        "IF YOUR RING LOOKS DULL, IT MIGHT BE PLATINUM PATINA - HERE'S WHAT THAT IS AND WHAT TO DO ABOUT IT",
    },
    {
      img: "images/blog/slider4.4.webp",
      label: "METAL",
      heading: "14KT VS 18KT GOLD ENGAGEMENT RINGS",
    },
    {
      img: "images/blog/slider4.5.webp",
      label: "METAL",
      heading: "MEN'S PLATINUM WEDDING BANDS",
    },
    {
      img: "images/blog/slider4.6.webp",
      label: "METAL",
      heading: "PLATINUM RING & JEWELRY",
    },
    {
      img: "images/blog/slider4.7.webp",
      label: "METAL",
      heading: "WHITE GOLD VS ROSE GOLD VS YELLOW GOLD",
    },
    {
      img: "images/blog/slider4.8.webp",
      label: "METAL",
      heading: "GOLD RING GUIDE",
    },
  ];

  const buyingGuideItems = [
    {
      img: "images/blog/slider5.1.webp",
      label: "BUYING GUIDE",
      heading:
        "HOW MUCH SHOULD AN ENGAGEMENT RING COST? (HINT: THE OLD RULE IS OUTDATED)",
    },
    { img: "images/blog/slider5.2.webp", label: "BUYING GUIDE", heading: "" },
    { img: "images/blog/slider5.3.webp", label: "BUYING GUIDE", heading: "" },
    {
      img: "images/blog/slider5.4.webp",
      label: "BUYING GUIDE",
      heading: "THE BEST PROMISE RING STYLES",
    },
    {
      img: "images/blog/slider5.5.webp",
      label: "BUYING GUIDE",
      heading: "GUIDE TO CROSS NECKLACES",
    },
    {
      img: "images/blog/slider5.6.webp",
      label: "BUYING GUIDE",
      heading: "HIDDEN ACCENT ENGAGEMENT RING GUIDE",
    },
    {
      img: "images/blog/slider5.7.webp",
      label: "BUYING GUIDE",
      heading: "WHAT TO SAY WHEN GIVING A PROMISE RING?",
    },
    {
      img: "images/blog/slider5.8.webp",
      label: "BUYING GUIDE",
      heading: "A GUIDE TO VINTAGE PROMISE RING STYLES",
    },
  ];
  const diamondItems = [
    {
      img: "images/blog/slider6.1.webp",
      label: "DIAMOND",
      heading: "LAB DIAMOND CARAT & COST",
    },
    {
      img: "images/blog/slider6.2.webp",
      label: "DIAMOND",
      heading: "REAL VS. FAKE DIAMONDS: HOW TO TELL IF A DIAMOND IS REAL",
    },
    {
      img: "images/blog/slider6.3.webp",
      label: "DIAMOND",
      heading:
        "VS1 VS VS2 WHAT'S HE ACTUAL DIFFRENCE BETWEEN THESE CLARITY GRADES?",
    },
    {
      img: "images/blog/slider6.4.webp",
      label: "DIAMOND",
      heading: "D  F COLORED DIAMONDS: COLORLESS QUALITY",
    },
    {
      img: "images/blog/slider6.5.webp",
      label: "DIAMOND",
      heading: "BUYING NATURAL VS. SYNTHETIC DIAMONDS",
    },
    {
      img: "images/blog/slider6.6.webp",
      label: "DIAMOND",
      heading: "YOUR ULTIMATE GUIDE TO UNDERSTANDING DIAMOND CARAT AND SIZE",
    },
    {
      img: "images/blog/slider6.7.webp",
      label: "DIAMOND",
      heading:
        "THIS IS THE MOST EXPENSIVE DIAMOND CUT, AND EXACTLY WHY IT COSTS MORE",
    },
    {
      img: "images/blog/slider6.8.webp",
      label: "DIAMOND",
      heading:
        "WHAT YOU NEED TO KNOW ABOUT CTTW, OR CARAT TOTAL WEIGHT, BEFORE BUYING RING",
    },
  ];

  const jewelryItems = [
    {
      img: "images/blog/slider7.1.webp",
      label: "JEWELRY",
      heading: "ENGAGEMENT RINGS VS. WEDDING BANDS",
    },
    {
      img: "images/blog/slider7.2.webp",
      label: "JEWELRY",
      heading: "EVERYTHING YOU NEED TO KNOW ABOUT SILVER ANNIVERSARY",
    },
    {
      img: "images/blog/slider7.3.webp",
      label: "JEWELRY",
      heading: "GIUDE TO PURITY RINGS",
    },
    {
      img: "images/blog/slider7.4.webp",
      label: "JEWELRY",
      heading: "EMERALD JEWELRY FOR YOUR 20TH WEDDING ANNIVERSARY",
    },
    {
      img: "images/blog/slider7.5.webp",
      label: "JEWELRY",
      heading: "DIAMOND TENNIS BRACELETS: A GUIDE",
    },
    {
      img: "images/blog/slider7.6.webp",
      label: "JEWELRY",
      heading:
        "WHAT YOU NEED TO KNOW ABOUT BACKLESS EARRINGS (AND SECURE BACKS)",
    },
    {
      img: "images/blog/slider7.7.webp",
      label: "JEWELRY",
      heading: "LAB CREATED STUD EARRING PRICES",
    },
    {
      img: "images/blog/slider7.8.webp",
      label: "JEWELRY",
      heading: "WHAT IS A LOVE KNOT NECKLACE?",
    },
  ];

  return (
    <>
      <style>
        {`
          .blog-header h1 {
            color: #1d3348;
            font-size: 44px;
            line-height: 54px;
          }

          .blog-header p {
            color: #1d3348;
            font-size: 18px;
            line-height: 26px;
            margin-top: 16px;
            text-align: center;
          }

          .blog-topmenu .blog-menu-link {
            display: inline-block;
            padding: 12px 8px;
            text-decoration: none;
            color: #333;
            font-weight: 500;
            position: relative;
          }

          .blog-topmenu .blog-menu-link::after {
            content: "▼";
            font-size: 0.6rem;
            margin-left: 6px;
            display: inline-block;
            transition: transform 0.3s ease;
          }

          .blog-dropdown-list {
            list-style: none;
            padding: 10px 0;
            margin: 0;
            position: absolute;
            left: 0;
            top: 100%;
            min-width: 180px;
            background: #fff;
            border: 1px solid #ddd;
            display: none;
            z-index: 1000;
          }

          .blog-dropdown-menu-hover:hover .blog-dropdown-list {
            display: block;
          }

          .blog-dropdown-menu-hover:hover .blog-menu-link::after {
            transform: rotate(180deg);
          }

          .blog-dropdown-list li a {
            display: block;
            padding: 8px 15px;
            color: #333;
            text-decoration: none;
          }

          .blog-dropdown-list li a:hover {
            background-color: #f8f9fa;
          }

          .blog-nav nav {
            justify-content: space-between;
          }

          .blog-nav {
            margin-top: 70px;
          }

          .blog-nav {
            border-top: 1px solid #707070;
            border-bottom: 1px solid #707070;
          }

          .blog-nav .blog-nav-link>a {
            color: #707070;
            font-size: 15px;
            line-height: 22px;
            text-transform: uppercase;
            display: block;
            padding: 8px 15px;
          }

          .blog-dropdown-list li a {
            color: #707070;
            font-size: 16px;
            line-height: 22px;
            text-transform: uppercase;
            display: block;
          }

          .blog-item-box-blog {
            border: 1px solid #dadada;
            text-align: center;
            padding: 20px;
            border-radius: 6px;
            background: #fff;
            transition: all 0.3s;
          }

          .blog-item-box-blog:hover {
            box-shadow: 0px 5px 15px rgba(0,0,0,0.2);
          }

          .blog-item-box-blog-image img {
            width: 100%;
            border-radius: 6px;
          }

          .blog-carousel-control-prev, .blog-carousel-control-next {
            width: 5%;
          }

          .blog-carousel-control-prev-icon,
          .blog-carousel-control-next-icon {
            background-size: 100% 100%;
            background-color: #000;
            border-radius: 50%;
            padding: 15px;
          }

          .blog-exclusive-offers a {
            color: #14344a;
            text-decoration: none;
          }

          .blog-exclusive-offers a:focus {
            color: #14344a;
          }

          .blog-exclusive-offers-wrapper.blog-bg-secondary {
            background-color: #ffffff !important;
          }

          .blog-header-heading{
            color: #1d3348;
            font-size: 44px;
            line-height: 54px;
          }

          /* Layout Styles */
          .blog-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 15px;
          }

          .blog-row {
            display: flex;
            flex-wrap: wrap;
            margin: 0 -15px;
          }

          .blog-col-12 {
            flex: 0 0 100%;
            max-width: 100%;
            padding: 0 15px;
          }

          /* Utility Classes */
          .blog-text-center {
            text-align: center;
          }

          .blog-text-left {
            text-align: left;
          }

          .blog-text-uppercase {
            text-transform: uppercase;
          }

          .blog-text-capitalize {
            text-transform: capitalize;
          }

          .blog-bg-white {
            background-color: #fff;
          }

          .blog-bg-light {
            background-color: #f8f9fa;
          }

          .blog-bg-secondary {
            background-color: #6c757d;
          }

          .blog-position-relative {
            position: relative;
          }

          .blog-list-unstyled {
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .blog-d-flex {
            display: flex;
          }

          .blog-flex-md {
            display: flex;
          }

          .blog-justify-content-center {
            justify-content: center;
          }

          .blog-justify-content-start {
            justify-content: flex-start;
          }

          .blog-align-items-center {
            align-items: center;
          }

          .blog-border-top {
            border-top: 1px solid #dee2e6;
          }

          .blog-border-bottom {
            border-bottom: 1px solid #dee2e6;
          }

          .blog-img-fluid {
            max-width: 100%;
            height: auto;
          }

          .blog-w-100 {
            width: 100%;
          }

          /* Spacing Utilities */
          .blog-my-5 {
            margin-top: 3rem;
            margin-bottom: 3rem;
          }

          .blog-mb-0 {
            margin-bottom: 0;
          }

          .blog-mb-3 {
            margin-bottom: 1rem;
          }

          .blog-mb-4 {
            margin-bottom: 1.5rem;
          }

          .blog-mt-1 {
            margin-top: 0.25rem;
          }

          .blog-mt-2 {
            margin-top: 0.5rem;
          }

          .blog-mx-3 {
            margin-left: 1rem;
            margin-right: 1rem;
          }

          .blog-py-5 {
            padding-top: 3rem;
            padding-bottom: 3rem;
          }

          .blog-px-2 {
            padding-left: 0.5rem;
            padding-right: 0.5rem;
          }

          .blog-px-md-4 {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }

          /* Component Styles */
          .blog-section-header-lg {
            font-size: 2rem;
            font-weight: 600;
            color: #1d3348;
          }

          .blog-img-block {
            margin-bottom: 1rem;
          }

          .blog-breadcrumb {
            display: flex;
            list-style: none;
            padding: 0;
            margin: 0;
          }

          .blog-breadcrumb-item {
            margin-right: 0.5rem;
          }

          .blog-breadcrumb-item.blog-active {
            color: #6c757d;
          }

          .blog-breadcrumb-item a {
            color: #007bff;
            text-decoration: none;
          }

          .blog-breadcrumb-item a:hover {
            text-decoration: underline;
          }

          @media (max-width: 768px) {
            .blog-topmenu {
              flex-direction: column;
            }
            .blog-topmenu li {
              margin: 5px 0;
            }
            .blog-header-heading {
              font-size: 28px;
            }
            .blog-header p {
              font-size: 14px;
            }
            .blog-small-text-center {
              text-align: center;
            }
            .blog-small-text-left {
              text-align: left;
            }
          }

          @media (min-width: 768px) {
            .blog-medium-up-text-center {
              text-align: center;
            }
          }
        `}
      </style>

      <BlogHeader />

      <BlogSection
        title="ENGAGEMENT RINGS"
        items={engagementItems}
        settings={sliderSettings}
      />
      <BlogSection
        title="GEMSTONE INSIGHTS"
        items={gemstoneItems}
        settings={sliderSettings}
      />
      <BlogSection
        title="WEDDING BANDS"
        items={weddingItems}
        settings={sliderSettings}
      />
      <BlogSection title="METAL" items={metalItems} settings={sliderSettings} />
      <BlogSection
        title="BUYING GUIDES"
        items={buyingGuideItems}
        settings={sliderSettings}
      />
      <BlogSection
        title="DIAMOND"
        items={diamondItems}
        settings={sliderSettings}
      />
      <BlogSection
        title="JEWELRY"
        items={jewelryItems}
        settings={sliderSettings}
      />
    </>
  );
};

export default Blog;