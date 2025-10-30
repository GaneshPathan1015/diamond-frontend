import React, { useState, useEffect } from "react";

const Reviews = () => {
    const [hoveredText, setHoveredText] = useState("");
    const [currentSlide, setCurrentSlide] = useState(0);

    const logos = [
        {
            id: 1,
            img: "/images/reviews/home-logo-sprite1.webp",
            text: "Startup taking the stress out of engagement ring shopping.",
            link: "/about"
        },
        {
            id: 2,
            img: "/images/reviews/home-logo-sprite-cnn_9bd63659-8aed-44b0-8eea-35568017ca18.webp",
            text: "Ranked #18 on the list of fastest-growing companies in the USA.",
            link: "/press"
        },
        {
            id: 3,
            img: "/images/reviews/Layer_7_b928e7c8-4a1d-428e-95c7-7749050efcf6.webp",
            text: "With Clarity is ranked as the 3rd fastest growing company in New York on Crain's Fast 50 list.",
            link: "/achievements"
        },
        {
            id: 4,
            img: "/images/reviews/Layer_8_b9c46a8a-c744-4e9b-a96d-20e8b35ad80d.webp",
            text: "With Clarity is featured for its modern jewelry shopping experience.",
            link: "/features"
        },
        {
            id: 5,
            img: "/images/reviews/Layer_10_c8d0a905-14eb-43ad-933f-d030d2540465.avif",
            text: "With Clarity ranks at #13 fastest growing company in 2020.",
            link: "/rankings"
        },
    ];

    const slides = [
        {
            image: "/images/reviews/7.png",
        },
        {
            image: "/images/reviews/8.png",
        },
        {
            image: "/images/reviews/9.png",
        },
        {
            image: "/images/reviews/10.png",
        },
        {
            image: "/images/reviews/11.png",
        },
        {
            image: "/images/reviews/12.png",
        },
        {
            image: "/images/reviews/13.png",
        },
        {
            image: "/images/reviews/14.png",
        },
        {
            image: "/images/reviews/15.png",
        },
    ];

    const bestsellingProducts = [
        {
            id: 1,
            name: "The Windsor Ring",
            image: "/images/reviews/1.webp",
            link: "https://thecaratcasa.com/jewellary-details/269",
        },
        {
            id: 2,
            name: "The Cambridge Band",
            image: "/images/reviews/2.webp",
            link: "https://thecaratcasa.com/jewellary-details/265",
        },
        {
            id: 3,
            name: "The Oxford Collection",
            image: "/images/reviews/3.webp",
            link: "https://thecaratcasa.com/jewellary-details/262",

        },
        {
            id: 4,
            name: "The Victoria Set",
            image: "/images/reviews/4.webp",
            link: "https://thecaratcasa.com/jewellary-details/261",

        },
        {
            id: 5,
            name: "The Kensington",
            image: "/images/reviews/5.webp",
            link: "https://thecaratcasa.com/jewellary-details/260",

        },
        {
            id: 6,
            name: "The Chelsea",
            image: "/images/reviews/6.webp",
            link: "https://thecaratcasa.com/jewellary-details/259",

        },
    ];

    const contactMethods = [
        {
            name: "Chat",
            icon: "fa-comment-dots",
        },
        {
            name: "Email",
            icon: "fa-envelope",
        },
        {
            name: "Phone",
            icon: "fa-phone",
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            {/* --- Section: Title --- */}
            <section className="text-center py-5 bg-light">
                <div className="container">
                    <h1 className="display-4 fw-light mb-4" style={{ letterSpacing: '2px', color: '#14344a' }}>
                        CUSTOMER REVIEWS
                    </h1>
                    <h6 className="fs-5 fw-light lh-base mx-auto" style={{ maxWidth: '800px', color: '#666' }}>
                        At With Clarity, we strive to be deliberately different. That's why we
                        offer excellent quality, reasonable prices, conflict-free diamonds, and
                        unbiased help. Read on to see up-to-date customer reviews and
                        testimonials, or add one of your own!
                    </h6>
                </div>
            </section>

            {/* --- Section: Slider --- */}
            <section className="py-5 bg-white">
                <div className="container">
                    <h2 className="display-5 fw-light text-md-start mb-5" style={{ lineHeight: '1.3', letterSpacing: '-0.44px' }}>
                        We love happy <br className="d-none d-md-block" /> customers
                    </h2>

                    <div className="position-relative mx-auto mb-4" style={{ maxWidth: '1200px', overflow: 'hidden', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)' }}>
                        
                        {/* Previous Button */}
                        <button 
                            className="position-absolute top-50 start-0 translate-middle-y border-0 rounded-circle d-flex align-items-center justify-content-center"
                            onClick={prevSlide}
                            style={{ 
                                width: '40px', 
                                height: '40px', 
                                background: 'rgba(255, 255, 255, 0.95)', 
                                zIndex: 10, 
                                left: '10px',
                                boxShadow: '0 3px 12px rgba(0, 0, 0, 0.15)',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.background = 'white';
                                e.target.style.boxShadow = '0 5px 18px rgba(0, 0, 0, 0.25)';
                                e.target.style.transform = 'translateY(-50%) scale(1.1)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.background = 'rgba(255, 255, 255, 0.95)';
                                e.target.style.boxShadow = '0 3px 12px rgba(0, 0, 0, 0.15)';
                                e.target.style.transform = 'translateY(-50%) scale(1)';
                            }}
                        >
                            &#10094;
                        </button>

                        {/* Slider Content */}
                        <div style={{ overflow: 'hidden', borderRadius: '15px' }}>
                            <div 
                                className="d-flex"
                                style={{ 
                                    transition: 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                                    transform: `translateX(-${currentSlide * 100}%)`
                                }}
                            >
                                {slides.map((slide, index) => (
                                    <div key={index} style={{ minWidth: '100%', flexShrink: 0 }}>
                                        {/* Image Only - All Devices */}
                                        <div className="position-relative overflow-hidden d-flex align-items-center justify-content-center" 
                                             style={{ 
                                                 height: '400px', 
                                                 backgroundColor: '#f9f9f9',
                                                 padding: '20px'
                                             }}>
                                            <img 
                                                src={slide.image} 
                                                alt={`Customer Review ${index + 1}`} 
                                                className="h-100 w-auto"
                                                style={{ 
                                                    objectFit: 'contain',
                                                    maxWidth: '100%',
                                                    maxHeight: '100%',
                                                    transition: 'transform 0.4s ease'
                                                }}
                                                onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                                                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Next Button */}
                        <button 
                            className="position-absolute top-50 end-0 translate-middle-y border-0 rounded-circle d-flex align-items-center justify-content-center"
                            onClick={nextSlide}
                            style={{ 
                                width: '40px', 
                                height: '40px', 
                                background: 'rgba(255, 255, 255, 0.95)', 
                                zIndex: 10, 
                                right: '10px',
                                boxShadow: '0 3px 12px rgba(0, 0, 0, 0.15)',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.background = 'white';
                                e.target.style.boxShadow = '0 5px 18px rgba(0, 0, 0, 0.25)';
                                e.target.style.transform = 'translateY(-50%) scale(1.1)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.background = 'rgba(255, 255, 255, 0.95)';
                                e.target.style.boxShadow = '0 3px 12px rgba(0, 0, 0, 0.15)';
                                e.target.style.transform = 'translateY(-50%) scale(1)';
                            }}
                        >
                            &#10095;
                        </button>
                    </div>

                    {/* Slide Indicators */}
                    <div className="d-flex justify-content-center gap-3 mt-4">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                className={`border-0 rounded-circle ${index === currentSlide ? 'bg-dark' : 'bg-secondary'}`}
                                onClick={() => goToSlide(index)}
                                style={{ 
                                    width: '12px', 
                                    height: '12px', 
                                    transition: 'all 0.3s ease',
                                    transform: index === currentSlide ? 'scale(1.3)' : 'scale(1)'
                                }}
                                aria-label={`Go to slide ${index + 1}`}
                            ></button>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Section: Press Logos --- */}
            <section className="text-center bg-white py-5">
                <div className="container">
                    <h1 className="display-5 fw-light mb-5" style={{ lineHeight: '1.3', letterSpacing: '-0.44px' }}>
                        We're the talk of the town.
                    </h1>
                    
                    {/* Press Logos - Single Line Layout */}
                    <div className="d-flex justify-content-center align-items-center flex-nowrap border-top border-bottom py-4"
                         style={{ overflowX: 'auto', overflowY: 'hidden', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                        {logos.map((logo, index) => (
                            <div
                                key={logo.id}
                                className="flex-shrink-0 text-center position-relative px-3 px-md-4"
                                style={{ 
                                    minWidth: '150px',
                                    transition: 'transform 0.3s ease, opacity 0.3s ease'
                                }}
                                onMouseEnter={() => setHoveredText(logo.text)}
                                onMouseLeave={() => setHoveredText("")}
                            >
                                <a href={logo.link} className="text-decoration-none">
                                    <img 
                                        src={logo.img} 
                                        alt={`Press logo ${logo.id}`} 
                                        style={{ 
                                            height: '40px', 
                                            width: 'auto', 
                                            maxWidth: '120px',
                                            filter: 'grayscale(100%)',
                                            opacity: '0.7',
                                            transition: 'all 0.3s ease'
                                        }}
                                        onMouseEnter={(e) => {
                                            e.target.style.filter = 'grayscale(0%)';
                                            e.target.style.opacity = '1';
                                            e.target.style.transform = 'scale(1.05)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.target.style.filter = 'grayscale(100%)';
                                            e.target.style.opacity = '0.7';
                                            e.target.style.transform = 'scale(1)';
                                        }}
                                    />
                                </a>
                            </div>
                        ))}
                    </div>

                    {/* Hover Text Display */}
                    <div 
                        className={`mt-3 fs-6 text-dark fw-normal ${hoveredText ? 'opacity-100' : 'opacity-0'}`}
                        style={{ 
                            transform: hoveredText ? 'translateY(0)' : 'translateY(10px)',
                            transition: 'all 0.4s ease',
                            minHeight: '25px'
                        }}
                    >
                        {hoveredText || "Startup taking the stress out of engagement ring shopping."}
                    </div>
                </div>

                <div className="container mt-5">
                    <div className="row align-items-stretch g-0 shadow-lg rounded overflow-hidden">
                        <div className="col-lg-6 col-md-12 d-flex align-items-center" style={{ background: '#d5ebec', minHeight: '400px', padding: '50px 40px' }}>
                            <div>
                                <h1 className="display-6 mb-4" style={{ color: '#14344a', fontWeight: '400' }}>
                                    We are the talk of the town
                                </h1>
                                <h6 className="fs-6 lh-base text-body-secondary fw-light mb-4">
                                    With Clarity uses 3D printed customized ring samples to take the stress out of engagement ring shopping.
                                    <br />
                                    With Clarity CEO Anubh Shah and CMO Slisha Kankariya on how the company's business model
                                    takes the pressure out of shopping for engagement rings.
                                </h6>
                                <a href="/about" className="btn btn-outline-dark rounded-1 px-4">
                                    Learn More
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 p-0">
                            <div style={{ width: '100%', height: '100%', minHeight: '400px' }}>
                                <a href="/press">
                                    <img 
                                        src="/images/reviews/foxbuisness_1__000_1.jpg" 
                                        alt="Fox Business Feature - With Clarity in the news" 
                                        className="w-100 h-100"
                                        style={{ objectFit: 'cover', display: 'block' }}
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Section: Bestselling Products --- */}
            <section className="bg-white py-5">
                <div className="container">
                    <h1 className="display-5 text-center mb-5" style={{ color: '#14344a', fontWeight: '400' }}>
                        Our bestselling jewelry
                    </h1>
                    <div className="row justify-content-center">
                        {bestsellingProducts.map((product) => (
                            <div key={product.id} className="col-xl-4 col-lg-4 col-md-6 col-sm-6 mb-4">
                                <div 
                                    className="h-100 text-center"
                                    style={{ transition: 'transform 0.3s ease' }} 
                                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                                >
                                    <a href={product.link} className="text-decoration-none text-dark">
                                        <img 
                                            src={product.image} 
                                            alt={product.name} 
                                            className="w-100 rounded-3 mb-3"
                                            style={{ height: '250px', objectFit: 'cover', transition: 'transform 0.3s ease' }}
                                            onMouseEnter={(e) => e.target.style.transform = 'scale(1.03)'}
                                            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                                        />
                                        <span className="fs-6 fw-medium d-block mt-2">{product.name}</span>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center pt-4 pb-4">
                        <a 
                            className="btn btn-outline-dark border-2 px-4 py-2 fw-semibold rounded-1" 
                            href="https://thecaratcasa.com/jewelry-list"
                            style={{ transition: 'all 0.3s ease' }}
                            onMouseEnter={(e) => {
                                e.target.style.background = '#14344a';
                                e.target.style.color = 'white';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.background = 'transparent';
                                e.target.style.color = '#14344a';
                            }}
                        >
                            VIEW ALL PRODUCTS
                        </a>
                    </div>
                </div>
            </section>

            {/* --- Section: Contact --- */}
            <section className="py-4">
                <div className="container rounded-3 py-5" style={{ background: '#f0f4f7' }}>
                    <div className="row align-items-center text-center">
                        <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
                            <h1 className="display-6 mb-3" style={{ color: '#06374a', fontWeight: '400' }}>
                                We're here to help.
                            </h1>
                            <p className="fs-6 lh-base text-body-secondary mb-0">
                                Our expert gemologists are here to help.
                                <br />
                                We're available seven days a week to guide you on
                                <br />
                                diamonds, gemstones, and jewelry.
                            </p>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="row justify-content-center">
                                {contactMethods.map((service, index) => (
                                    <div key={service.name} className="col-lg-4 col-md-4 col-sm-4 mb-3">
                                        <div className="text-center py-3 h-100 d-flex flex-column align-items-center justify-content-center">
                                            <a href={service.link} className="text-decoration-none text-dark text-center">
                                                <i 
                                                    className={`fa-solid ${service.icon} d-block mb-2`} 
                                                    style={{ fontSize: '2.5rem', color: '#14344a', transition: 'transform 0.3s ease' }}
                                                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                                                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                                                ></i>
                                                <span className="fs-6 fw-medium d-block">{service.name}</span>
                                                <small className="text-muted d-block mt-1">{service.description}</small>
                                            </a>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Reviews;