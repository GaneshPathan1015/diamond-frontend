import React from "react";
import "./blog.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// ✅ Single Section Component
const BlogSection = ({ title, items, settings }) => {
    return (
        <section className="Exclusive_Offers_wrapper my-5 bg-secondary py-5">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-12">
                        <h2 className="section-header-lg small--text-center mb-4">
                            {title}
                        </h2>
                        <Slider {...settings} className="Exclusive_Offers">
                            {items.map((item, index) => (
                                <div key={index}>
                                    <div className="img-block text-center">
                                        <img
                                            src={item.img}
                                            alt={item.label}
                                            className="img-fluid mb-2"
                                        />
                                    </div>
                                    {/* ✅ Card Heading & Subheading */}
                                    <p className="text-center text-uppercase mt-2">{item.label}</p>
                                    <a href="#">
                                        <h1 className="text-center text-capitalize mt-1">
                                            {item.heading}
                                        </h1>
                                    </a>

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
        <div className="blogs-nav medium-up--text-center small--text-left">
            <nav className="flex-md">
                <div className="border-top border-bottom bg-white">
                    <div className="container">
                        <ul className="d-flex justify-content-center list-unstyled mb-0 topmenu">
                            <li className="blog-nav__link position-relative mx-3 dropdown-menu-hover">
                                <a href="#" className="menu-link">ENGAGEMENT RINGS</a>
                                <ul className="dropdown-list">
                                    <li className="child-link"><a href="#">Proposal Playbook</a></li>
                                    <li className="child-link"><a href="#">This or That</a></li>
                                    <li className="child-link"><a href="#">Top Trends</a></li>
                                    <li className="child-link"><a href="#">The Gemologist's Guide</a></li>
                                </ul>
                            </li>

                            <li className="blog-nav__link position-relative mx-3 dropdown-menu-hover">
                                <a href="#" className="menu-link">GEMSTONE INSIGHTS</a>
                                <ul className="dropdown-list">
                                    <li className="child-link"><a href="#">Birthstones 101</a></li>
                                    <li className="child-link"><a href="#">Precious Picks</a></li>
                                </ul>
                            </li>

                            <li className="blog-nav__link position-relative mx-3 dropdown-menu-hover">
                                <a href="#" className="menu-link">WEDDING BANDS</a>
                                <ul className="dropdown-list">
                                    <li className="child-link"><a href="#">Forever Sparkle</a></li>
                                    <li className="child-link"><a href="#">Wedding Wows</a></li>
                                </ul>
                            </li>

                            <li className="blog-nav__link position-relative mx-3 dropdown-menu-hover">
                                <a href="#" className="menu-link">METAL</a>
                                <ul className="dropdown-list">
                                    <li className="child-link"><a href="#">Metal Education</a></li>
                                    <li className="child-link"><a href="#">WC Selects</a></li>
                                </ul>
                            </li>

                            <li className="blog-nav__link position-relative mx-3 dropdown-menu-hover">
                                <a href="#" className="menu-link">BUYING GUIDES</a>
                                <ul className="dropdown-list">
                                    <li className="child-link"><a href="#">Engagement</a></li>
                                    <li className="child-link"><a href="#">Jewelry</a></li>
                                </ul>
                            </li>

                            <li className="blog-nav__link position-relative mx-3 dropdown-menu-hover">
                                <a href="#" className="menu-link">DIAMOND</a>
                                <ul className="dropdown-list">
                                    <li className="child-link"><a href="#">All About Lab</a></li>
                                    <li className="child-link"><a href="#">4C's & Beyond</a></li>
                                    <li className="child-link"><a href="#">Decode The Dazzle</a></li>
                                </ul>
                            </li>

                            <li className="blog-nav__link position-relative mx-3 dropdown-menu-hover">
                                <a href="#" className="menu-link">JEWELRY</a>
                                <ul className="dropdown-list">
                                    <li className="child-link"><a href="#">Art of Gifting</a></li>
                                    <li className="child-link"><a href="#">Inspo & Info</a></li>
                                    <li className="child-link"><a href="#">Fresh Finds</a></li>
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
        <section className="py-5 bg-light">
            <div className="container blog-header text-center">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-start mb-3">
                        <li className="breadcrumb-item">
                            <a href="/">Home</a>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            Blog
                        </li>
                    </ol>
                </nav>

                <h1 className="header-heading">The With Clarity Blog</h1>

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
            { breakpoint: 480, settings: { slidesToShow: 1 } }
        ]
    };

    const engagementItems = [
        { img: "images/blog/slider1.1.webp", label: "ENGAGEMENT RINGS", heading: "GETTING NERVOUS? HERE'S WHAT TO SAY WHEN YOU PROPOSE" },
        { img: "images/blog/slider1.2.webp", label: "ENGAGEMENT RINGS", heading: "HERE'S WHAT YOU NEED TO KNOW BEFORE BUYING A PAVE SETTING" },
        { img: "images/blog/slider1.3.webp", label: "ENGAGEMENT RINGS", heading: "RING RESTTING GUIDE" },
        { img: "images/blog/slider1.4.webp", label: "ENGAGEMENT RINGS", heading: "THINGS YOU SHOULD KNOW: ENGAGEMENT RING METALS, AND ALL THINGS HYPOALLERGENIC" },
        { img: "images/blog/slider1.5.webp", label: "ENGAGEMENT RINGS", heading: "WHAT IS MILGRAIN (OR MILLGRAIN/MILLGRAIN AND HOW CAN IT ENHANCE YOUR RING?)" },
        { img: "images/blog/slider1.6.webp", label: "ENGAGEMENT RINGS", heading: "WHICH HAND DOES THE ENGAGEMENT RING GO ON?" },
        { img: "images/blog/slider1.7.webp", label: "ENGAGEMENT RINGS", heading: "WHAT YOU NEED TO KNOW BEFORE BUYING AN EMERALD ENGAGEMENT RING" },
        { img: "images/blog/slider1.8.webp", label: "ENGAGEMENT RINGS", heading: "" },
    ];

    const gemstoneItems = [
        { img: "images/blog/slider2.1.webp", label: "GEMSTONE", heading: "Fiery Passion" },
        { img: "images/blog/slider2.2.webp", label: "GEMSTONE", heading: "Royal Blue" },
        { img: "images/blog/slider2.3.webp", label: "GEMSTONE", heading: "Green Glow" },
        { img: "images/blog/slider2.4.webp", label: "GEMSTONE", heading: "Sparkle Facts" },
        { img: "images/blog/slider2.5.webp", label: "GEMSTONE", heading: "Ocean Treasure" },
        { img: "images/blog/slider2.6.webp", label: "GEMSTONE", heading: "Mystic Fire" },
        { img: "images/blog/slider2.7.webp", label: "GEMSTONE", heading: "Ocean Treasure" },
        { img: "images/blog/slider2.8.webp", label: "GEMSTONE", heading: "Mystic Fire" }
    ];

    const weddingItems = [
        { img: "images/blog/slider3.1.webp", label: "WEDDING BANDS", heading: "Forever Bond" },
        { img: "images/blog/slider3.2.webp", label: "WEDDING BANDS", heading: "Golden Glow" },
        { img: "images/blog/slider3.3.webp", label: "WEDDING BANDS", heading: "Subtle Shine" },
        { img: "images/blog/slider3.4.webp", label: "WEDDING BANDS", heading: "Eternal Spark" },
        { img: "images/blog/slider3.5.webp", label: "WEDDING BANDS", heading: "Couple Goals" },
        { img: "images/blog/slider3.6.webp", label: "WEDDING BANDS", heading: "Unique Design" },
        { img: "images/blog/slider3.7.webp", label: "WEDDING BANDS", heading: "Couple Goals" },
        { img: "images/blog/slider3.8.webp", label: "WEDDING BANDS", heading: "Unique Design" }
    ];

    const metalItems = [
        { img: "images/blog/slider4.1.webp", label: "METAL", heading: "Rich & Classic" },
        { img: "images/blog/slider4.2.jpg", label: "METAL", heading: "Pure Strength" },
        { img: "images/blog/slider4.3.webp", label: "METAL", heading: "Affordable Grace" },
        { img: "images/blog/slider4.4.webp", label: "METAL", heading: "Romantic Hue" },
        { img: "images/blog/slider4.5.webp", label: "METAL", heading: "Modern Metal" },
        { img: "images/blog/slider4.6.webp", label: "METAL", heading: "Premium Choice" },
        { img: "images/blog/slider4.7.webp", label: "METAL", heading: "Modern Metal" },
        { img: "images/blog/slider4.8.webp", label: "METAL", heading: "Premium Choice" }
    ];

    const buyingGuideItems = [
        { img: "images/blog/slider5.1.webp", label: "BUYING GUIDE", heading: "Smart Buying" },
        { img: "images/blog/slider5.2.webp", label: "BUYING GUIDE", heading: "Perfect Match" },
        { img: "images/blog/slider5.3.webp", label: "BUYING GUIDE", heading: "Celebrate Love" },
        { img: "images/blog/slider5.4.webp", label: "BUYING GUIDE", heading: "Special Moments" },
        { img: "images/blog/slider5.5.webp", label: "BUYING GUIDE", heading: "Value Growth" },
        { img: "images/blog/slider5.6.webp", label: "BUYING GUIDE", heading: "Keep it Sparkling" },
        { img: "images/blog/slider5.7.webp", label: "BUYING GUIDE", heading: "Value Growth" },
        { img: "images/blog/slider5.8.webp", label: "BUYING GUIDE", heading: "Keep it Sparkling" },
    ]
    const diamondItems = [
        { img: "images/blog/slider6.1.webp", label: "DIAMOND", heading: "Earth’s Gem" },
        { img: "images/blog/slider6.2.webp", label: "DIAMOND", heading: "Eco Friendly" },
        { img: "images/blog/slider6.3.webp", label: "DIAMOND", heading: "Precision Art" },
        { img: "images/blog/slider6.4.webp", label: "DIAMOND", heading: "Crystal Clear" },
        { img: "images/blog/slider6.5.webp", label: "DIAMOND", heading: "Spectrum Shine" },
        { img: "images/blog/slider6.6.webp", label: "DIAMOND", heading: "Size Matters" },
        { img: "images/blog/slider6.7.webp", label: "DIAMOND", heading: "Value Growth" },
        { img: "images/blog/slider6.8.webp", label: "DIAMOND", heading: "Keep it Sparkling" },
    ];

    const jewelryItems = [
        { img: "images/blog/slider7.1.webp", label: "JEWELRY", heading: "Graceful Chains" },
        { img: "images/blog/slider7.2.webp", label: "JEWELRY", heading: "Wrist Glam" },
        { img: "images/blog/slider7.3.webp", label: "JEWELRY", heading: "Ear Elegance" },
        { img: "images/blog/slider7.4.webp", label: "JEWELRY", heading: "Statement Piece" },
        { img: "images/blog/slider7.5.webp", label: "JEWELRY", heading: "Classic Pin" },
        { img: "images/blog/slider7.6.webp", label: "JEWELRY", heading: "Extra Spark" },
        { img: "images/blog/slider7.7.webp", label: "JEWELRY", heading: "Classic Pin" },
        { img: "images/blog/slider7.8.webp", label: "JEWELRY", heading: "Extra Spark" }
    ];

    return (
        <>
            <BlogHeader />

            <BlogSection title="ENGAGEMENT RINGS" items={engagementItems} settings={sliderSettings} />
            <BlogSection title="GEMSTONE INSIGHTS" items={gemstoneItems} settings={sliderSettings} />
            <BlogSection title="WEDDING BANDS" items={weddingItems} settings={sliderSettings} />
            <BlogSection title="METAL" items={metalItems} settings={sliderSettings} />
            <BlogSection title="BUYING GUIDES" items={buyingGuideItems} settings={sliderSettings} />
            <BlogSection title="DIAMOND" items={diamondItems} settings={sliderSettings} />
            <BlogSection title="JEWELRY" items={jewelryItems} settings={sliderSettings} />
        </>
    );
};
export default Blog;
