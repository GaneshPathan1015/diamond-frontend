import React, { useState, useEffect } from "react";

const Reviews = () => {
    const [hoveredText, setHoveredText] = useState("");
    const [currentSlide, setCurrentSlide] = useState(0);

    const logos = [
        {
            id: 1,
            img: "/images/reviews/home-logo-sprite1.webp",
            text: "Startup taking the stress out of engagement ring shopping.",
        },
        {
            id: 2,
            img: "/images/reviews/home-logo-sprite-cnn_9bd63659-8aed-44b0-8eea-35568017ca18.webp",
            text: "Ranked #18 on the list of fastest-growing companies in the USA.",
        },
        {
            id: 3,
            img: "/images/reviews/Layer_7_b928e7c8-4a1d-428e-95c7-7749050efcf6.webp",
            text: "With Clarity is ranked as the 3rd fastest growing company in New York on Crain's Fast 50 list.",
        },
        {
            id: 4,
            img: "/images/reviews/Layer_8_b9c46a8a-c744-4e9b-a96d-20e8b35ad80d.webp",
            text: "With Clarity is featured for its modern jewelry shopping experience.",
        },
        {
            id: 5,
            img: "/images/reviews/Layer_10_c8d0a905-14eb-43ad-933f-d030d2540465.avif",
            text: "With Clarity ranks at #13 fastest growing company in 2020.",
        },
    ];

    const slides = [
        {
            leftImage: "/images/reviews/Testimonial_logo-758x585_px_780x.webp",
            rightImage: "/images/reviews/Testimonial_logo-758x585_px_9f82b8ac-140c-4f29-951d-6ad6a345a4ed_780x.webp",
            text: "“I wanted something specific for my wedding band and I was having trouble finding it at a jewelry store. I reached out to With Clarity and we were able to create something perfect.”",
            author: "ALLISON & TIM",
        },
        {
            leftImage: "https://i.imgur.com/D8Z0D1Q.jpeg",
            rightImage: "https://i.imgur.com/Yh3KyBl.jpeg",
            text: "“He proposed under the stars with soft music playing in the background. It felt like a dream come true.”",
            author: "EMMA AND LIAM",
        },
        {
            leftImage: "https://images.unsplash.com/photo-1511895426328-dc8714191300?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            rightImage: "https://images.unsplash.com/photo-1537633552985-df8429e8048b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            text: "“The ring was even more beautiful in person. The quality and craftsmanship exceeded our expectations.”",
            author: "JAMES AND SOPHIA",
        },
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
                    <h2 className="display-5 fw-light text-start mb-5" style={{ lineHeight: '1.3', letterSpacing: '-0.44px' }}>
                        We love happy <br /> customers
                    </h2>

                    <div className="position-relative mx-auto mb-4" style={{ maxWidth: '1200px', overflow: 'hidden', borderRadius: '15px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)' }}>
                        <button 
                            className="position-absolute top-50 start-0 translate-middle-y border-0 rounded-circle d-flex align-items-center justify-content-center"
                            onClick={prevSlide}
                            style={{ width: '50px', height: '50px', background: 'rgba(255, 255, 255, 0.85)', zIndex: 10, left: '20px', boxShadow: '0 3px 12px rgba(0, 0, 0, 0.15)', transition: 'all 0.3s ease' }}
                            onMouseEnter={(e) => {
                                e.target.style.background = 'white';
                                e.target.style.boxShadow = '0 5px 18px rgba(0, 0, 0, 0.25)';
                                e.target.style.transform = 'translateY(-50%) scale(1.1)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.background = 'rgba(255, 255, 255, 0.85)';
                                e.target.style.boxShadow = '0 3px 12px rgba(0, 0, 0, 0.15)';
                                e.target.style.transform = 'translateY(-50%) scale(1)';
                            }}
                        >
                            &#10094;
                        </button>

                        <div style={{ overflow: 'hidden', borderRadius: '15px' }}>
                            <div 
                                className="d-flex"
                                style={{ 
                                    transition: 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                                    transform: `translateX(-${currentSlide * 100}%)`
                                }}
                            >
                                {slides.map((slide, index) => (
                                    <div key={index} className="d-flex" style={{ minWidth: '100%', flexShrink: 0, height: '500px' }}>
                                        <div className="flex-fill position-relative overflow-hidden">
                                            <img 
                                                src={slide.leftImage} 
                                                alt="Customer" 
                                                className="w-100 h-100"
                                                style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }}
                                                onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                                                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                                            />
                                        </div>

                                        <div className="flex-fill d-flex flex-column justify-content-center align-items-center text-center p-4" style={{ background: '#f9f9f9' }}>
                                            <p className="fs-5 lh-base text-secondary fst-italic mb-4" style={{ maxWidth: '90%', fontWeight: '400' }}>
                                                {slide.text}
                                            </p>
                                            <h5 className="fs-6 fw-semibold text-dark" style={{ letterSpacing: '1px' }}>
                                                {slide.author}
                                            </h5>
                                        </div>

                                        <div className="flex-fill position-relative overflow-hidden">
                                            <img 
                                                src={slide.rightImage} 
                                                alt="Customer" 
                                                className="w-100 h-100"
                                                style={{ objectFit: 'cover', transition: 'transform 0.4s ease' }}
                                                onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'}
                                                onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button 
                            className="position-absolute top-50 end-0 translate-middle-y border-0 rounded-circle d-flex align-items-center justify-content-center"
                            onClick={nextSlide}
                            style={{ width: '50px', height: '50px', background: 'rgba(255, 255, 255, 0.85)', zIndex: 10, right: '20px', boxShadow: '0 3px 12px rgba(0, 0, 0, 0.15)', transition: 'all 0.3s ease' }}
                            onMouseEnter={(e) => {
                                e.target.style.background = 'white';
                                e.target.style.boxShadow = '0 5px 18px rgba(0, 0, 0, 0.25)';
                                e.target.style.transform = 'translateY(-50%) scale(1.1)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.background = 'rgba(255, 255, 255, 0.85)';
                                e.target.style.boxShadow = '0 3px 12px rgba(0, 0, 0, 0.15)';
                                e.target.style.transform = 'translateY(-50%) scale(1)';
                            }}
                        >
                            &#10095;
                        </button>
                    </div>

                    <div className="d-flex justify-content-center gap-3 mt-4">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                className={`border-0 rounded-circle ${index === currentSlide ? 'bg-dark' : 'bg-secondary'}`}
                                onClick={() => goToSlide(index)}
                                style={{ 
                                    width: '14px', 
                                    height: '14px', 
                                    transition: 'all 0.3s ease',
                                    transform: index === currentSlide ? 'scale(1.3)' : 'scale(1)'
                                }}
                            ></button>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Section: Press Logos --- */}
            <section className="text-center bg-white py-5">
                <h1 className="display-5 fw-light mb-5" style={{ lineHeight: '1.3', letterSpacing: '-0.44px' }}>
                    We're the talk of the town.
                </h1>
                <div className="container">
                    <div className="d-flex justify-content-center align-items-center flex-nowrap border-top border-bottom py-4">
                        {logos.map((logo, index) => (
                            <div
                                key={logo.id}
                                className={`flex-fill text-center position-relative px-4 ${index !== logos.length - 1 ? 'border-end' : ''}`}
                                style={{ transition: 'transform 0.3s ease, opacity 0.3s ease' }}
                                onMouseEnter={() => setHoveredText(logo.text)}
                                onMouseLeave={() => setHoveredText("")}
                            >
                                <img 
                                    src={logo.img} 
                                    alt={`Logo ${logo.id}`} 
                                    style={{ 
                                        height: '50px', 
                                        width: 'auto', 
                                        maxWidth: '150px',
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
                            </div>
                        ))}
                    </div>

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
                    <div className="row align-items-stretch g-0">
                        <div className="col-lg-6 col-md-12 d-flex align-items-center" style={{ background: '#d5ebec', minHeight: '400px', padding: '50px 40px' }}>
                            <div>
                                <h1 className="display-6 mb-4" style={{ color: '#14344a', fontWeight: '400' }}>
                                    We are the talk of the town
                                </h1>
                                <h6 className="fs-6 lh-base text-body-secondary fw-light">
                                    With Clarity uses 3D printed customized ring samples to take the stress out of engagement ring shopping.
                                    <br />
                                    With Clarity CEO Anubh Shah and CMO Slisha Kankariya on how the company's business model
                                    takes the pressure out of shopping for engagement rings.
                                </h6>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 p-0">
                            <div style={{ width: '100%', height: '100%', minHeight: '400px' }}>
                                <img 
                                    src="/images/reviews/foxbuisness_1__000_1.jpg" 
                                    alt="Fox Business Feature" 
                                    className="w-100 h-100"
                                    style={{ objectFit: 'cover', display: 'block' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Section: Bestselling Products --- */}
            <section className="bg-white py-5">
                <h1 className="display-5 text-center mb-5" style={{ color: '#14344a', fontWeight: '400' }}>
                    Our bestselling jewelry
                </h1>
                <div className="container text-center">
                    <div className="row justify-content-center">
                        {[1, 2, 3, 4, 5, 6].map((num) => (
                            <div key={num} className="col-lg-4 col-md-6 col-sm-6 mb-4">
                                <div style={{ transition: 'transform 0.3s ease' }} 
                                     onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                                     onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}>
                                    <a href="#" className="text-decoration-none text-dark">
                                        <img 
                                            src={`/images/reviews/${num}.webp`} 
                                            alt="Jewelry Product" 
                                            className="w-100 rounded-3 mb-3"
                                            style={{ height: '250px', objectFit: 'cover', transition: 'transform 0.3s ease' }}
                                            onMouseEnter={(e) => e.target.style.transform = 'scale(1.03)'}
                                            onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                                        />
                                        <span className="fs-6 fw-medium d-block mt-2">The Windsor Ring</span>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="text-center pt-4 pb-4">
                        <a className="btn btn-outline-dark border-2 px-4 py-2 fw-semibold rounded-1" 
                           href="#"
                           style={{ transition: 'all 0.3s ease' }}
                           onMouseEnter={(e) => {
                               e.target.style.background = '#14344a';
                               e.target.style.color = 'white';
                           }}
                           onMouseLeave={(e) => {
                               e.target.style.background = 'transparent';
                               e.target.style.color = '#14344a';
                           }}>
                            VIEW ALL
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

                        {['Chat', 'Email', 'Phone'].map((service, index) => (
                            <div key={service} className="col-lg-2 col-md-4 col-sm-4 mb-3">
                                <div className="text-center py-3 h-100 d-flex align-items-center justify-content-center border-end" 
                                     style={{ borderColor: index < 2 ? 'rgba(123, 123, 123, 0.3)' : 'transparent' }}>
                                    <a href="#" className="text-decoration-none text-dark text-center">
                                        <i className={`fa-solid ${
                                            service === 'Chat' ? 'fa-comment-dots' : 
                                            service === 'Email' ? 'fa-envelope' : 'fa-phone'
                                        } d-block mb-2`} 
                                           style={{ fontSize: '2.5rem', color: '#14344a', transition: 'transform 0.3s ease' }}
                                           onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                                           onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}></i>
                                        <span className="fs-6 fw-medium">{service}</span>
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Reviews;