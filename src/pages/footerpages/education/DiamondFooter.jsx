import React from 'react'

const DiamondFooter = () => {
    return (
        <>

            {/* Hero Section */}
            <section className="gemstones_hero d-flex flex-column justify-content-center align-items-center text-center" style={{
                backgroundImage: 'url("/images/diamonds/1.webp")',
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                height: "400px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "flex-end",
                textAlign: "center",
                color: "#fff",
                paddingBottom: "40px",
                position: "relative",
            }}>
                <h1 style={{
                    fontSize: "65px",
                    lineHeight: "86px",
                    fontWeight: "500",
                    letterSpacing: "-1.69px",
                    fontFamily: "Noto Serif Display",
                    marginBottom: "30px",
                    textShadow: '0px 3px 8px #00000080',
                    color: '#000'
                }}>DIAMOND EDUCATION</h1>
                <span style={{ color: '#000' }}>
                    Read about the 4C's, the different diamond shapes and types as well as various certifications and how to care for loose diamonds.        </span>
            </section>

            {/* Content Section */}
            <section className="pt-5">
                <div className="container">
                    {/* Top Navigation */}
                    <nav className="top-nav">
                        <a href="/engagement-ring-style">ENGAGEMENT RINGS</a><span>|</span>
                        <a href="#" className="active">DIAMONDS</a><span>|</span>
                        <a href="/wedding-band-styles">WEDDING BANDS</a><span>|</span>
                        <a href="/fine-jewelry-earrings">FINE JEWELRY</a><span>|</span>
                        <a href="/gemstones-types-guide">GEMSTONE</a>
                    </nav>

                    <div className="row">
                        {/* Sidebar */}
                        <div className="col-md-3">
                            <div className="sidebar-container">
                                <ul className="sidebar-gemstones">
                                    <li className="active">4Cs</li>
                                    <li>Diamond Shapes</li>
                                    <li>Diamond Certification</li>
                                    <li>Beyond 4C's</li>
                                    <li>Diamonds Types</li>
                                    <li>Buying Guide</li>
                                    <li>Care For Diamonds</li>
                                    <li>Clarity PlusTM Diamonds</li>
                                </ul>
                            </div>
                        </div>

                        {/* Main Content Area */}
                        <div className="col-md-9">
                            {/* January - Garnet */}
                            <div className="main-content">
                                <h1>Carat</h1>
                                <div className="gemstone-details">
                                    <p>
                                        Carat, one of the 4Cs of diamonds, is the globally recognized measurement for a diamond's weight (distinct from karat, which gauges gold purity) for natural and lab grown diamonds. A 1-carat diamond weighs 0.20 grams. It's important to note that the carat doesn't determine a diamond's size; that's determined by its dimensions in millimeters, specifically its diameter. Diamond carat weight really comes down to personal preferences in terms of the size and look of the engagement ring and how it looks on your finger.                                        </p>
                                    <img src="/images/diamonds/2.jpg" alt="Garnet gemstone" className="gemstone-img" />
                                </div>
                                <div className="related-posts">
                                    <h2>RELATED POSTS</h2>
                                    <ul>
                                        <li><a href="#">Lab Diamond Carat & Cost</a></li>
                                        <li><a href="#">Your Ultimate Guide to Understanding Diamond Carat and Size</a></li>
                                        <li><a href="#">What You Need to Know About CTTW, or Carat Total Weight, Before Buying a Ring</a></li>
                                    </ul>
                                </div>
                            </div>

                            {/* February - Amethyst */}
                            <div className="main-content">
                                <h1>Cut</h1>
                                <div className="gemstone-details">
                                    <p>
                                        Diamonds are cut to enhance sparkle, fire, brilliance, and overall visual allure. Before being cut and polished, diamonds are referred to as rough diamonds, possessing an opaque surface with minimal to no sparkle due to the absence of facets. The sparkle of a diamond cut results from its ability to internally reflect and bounce light as it hits. The art of cutting a diamond, including facet angles, sizes, and locations, significantly influences its light performance and the extent of its sparkle.
                                    </p>
                                    <img src="/images/diamonds/3.webp" alt="Amethyst gemstone" className="gemstone-img" />
                                </div>
                                <div className="related-posts">
                                    <h2>RELATED POSTS</h2>
                                    <ul>
                                        <li><a href="#">Lab Diamond Carat & Cost</a></li>
                                        <li><a href="#">This Is The Most Expensive Diamond Cut, and Exactly Why It Costs More</a></li>
                                        <li><a href="#">Lab Diamond Cut</a></li>
                                    </ul>
                                </div>
                            </div>

                            {/* March - Aquamarine */}
                            <div className="main-content">
                                <h1>Clarity</h1>
                                <div className="gemstone-details">
                                    <p>
                                        Diamond clarity refers to the natural imperfections, such as inclusions and blemishes, found in nearly all diamonds except the rarest ones. A higher level of clarity signifies fewer imperfections, resulting in enhanced sparkle and light performance. Though often microscopic, these imperfections can impact a diamond's brilliance by obstructing light refraction. To evaluate and compare clarity, gemologists use a standardized scale established by GIA, known as the diamond clarity scale, recognized across the industry for its precision and consistency
                                    </p>
                                    <img src="/images/diamonds/4.jpg" alt="Aquamarine gemstone" className="gemstone-img" />
                                </div>
                                <div className="related-posts">
                                    <h2>RELATED POSTS</h2>
                                    <ul>
                                        <li><a href="#">Diamond Clarity</a></li>
                                        <li><a href="#">Lab Diamond Clarity</a></li>
                                        <li><a href="#">VS1 vs VS2: What's the Actual Difference Between These Clarity Grades?</a></li>
                                    </ul>
                                </div>
                            </div>

                            {/* April - Diamond */}
                            <div className="main-content">
                                <h1>Color</h1>
                                <div className="gemstone-details">
                                    <p>
                                        Both natural and lab grown diamonds come in a variety of colors, with clear stones, commonly known as white diamonds, and fancy-colored diamonds, exhibiting vivid hues like pink, green, and yellow. The Gemological Institute of America (GIA) uses a D-to-Z scale to standardize color grading for natural diamonds. At the same time, the International Gemological Institute (IGI) employs a similar scale for lab grown diamonds. Interestingly, diamond color grading assesses the absence of color, with higher grades indicating less color presence.
                                    </p>
                                    <img src="/images/diamonds/5.webp" alt="Diamond gemstone" className="gemstone-img" />
                                </div>
                                <div className="related-posts">
                                    <h2>RELATED POSTS</h2>
                                    <ul>
                                        <li><a href="#">How Many Different Colored Diamonds Are Out There?</a></li>
                                        <li><a href="#">Which Diamond Color Is Best? It's Not As Simple As D Color Diamonds</a></li>
                                        <li><a href="#">Lab Diamond Color & Grading</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default DiamondFooter