import React from 'react'

const WeddingBandStyle = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="gemstones_hero d-flex flex-column justify-content-center align-items-center text-center" style={{
                backgroundImage: 'url("/images/weddingbandstyles/1.webp")',
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
                }}>WEDDING BANDS EDUCATION</h1>
                <span style={{ color: '#000' }}>
                    Gain knowledge on wedding bands. Styles, Metals, Mens vs. Womens etc.
                </span>
            </section>

            {/* Content Section */}
            <section className="pt-5">
                <div className="container">
                    {/* Top Navigation */}
                    <nav className="top-nav">
                        <a href="/engagement-ring-style">ENGAGEMENT RINGS</a><span>|</span>
                        <a href="/diamonds">DIAMONDS</a><span>|</span>
                        <a href="#" className="active">WEDDING BANDS</a><span>|</span>
                        <a href="/fine-jewelry-earrings">FINE JEWELRY</a><span>|</span>
                        <a href="/gemstones-types-guide">GEMSTONE</a>
                    </nav>

                    <div className="row">
                        {/* Sidebar */}
                        <div className="col-md-3">
                            <div className="sidebar-container">
                                <ul className="sidebar-gemstones">
                                    <li className="active">Wedding Band Styles</li>
                                    <li>Alternative Metal</li>
                                    <li>Men's Wedding Bands</li>
                                    <li>Women's Wedding Bands Guide</li>
                                </ul>
                            </div>
                        </div>

                        {/* Main Content Area */}
                        <div className="col-md-9">
                            {/* January - Garnet */}
                            <div className="main-content">
                                <h1>Pavé Wedding Bands</h1>
                                <div className="gemstone-details">
                                    <p>
                                        Originating from the French word "pavé," the pave setting involves arranging a multitude of accent diamonds in close proximity to create the appearance of a singular, unbroken diamond surface. This technique imparts a consistent brilliance, creating the optical illusion of a larger and more abundant diamond presence. Moreover, it fosters a harmonious and unified design, seamlessly integrating all the diamonds. Pave wedding bands are extremely popular for their unconventional style and are preferred by the modern couple.                            </p>
                                    <img src="/images/weddingbandstyles/2.jpg" alt="Garnet gemstone" className="gemstone-img" />
                                </div>
                                <div className="related-posts">
                                    <h2>RELATED POSTS</h2>
                                    <ul>
                                        <li><a href="#">Wedding Bands vs Anniversary Bands</a></li>
                                        <li><a href="#">How To Care For Platinum Ring Bands</a></li>
                                        <li><a href="#">A Guide to Women’s Wedding Band Cost</a></li>
                                    </ul>
                                </div>
                            </div>

                            {/* February - Amethyst */}
                            <div className="main-content">
                                <h1>Anniversary Rings</h1>
                                <div className="gemstone-details">
                                    <p>
                                        Anniversary bands symbolize enduring love and commitment. They celebrate marriage milestones with sparkling diamonds adorning the band. These rings feature an array of dazzling gemstones, such as diamonds or other precious stones, meticulously set in a continuous circle to represent the unbroken bond of marriage. Their timeless design makes anniversary bands a meaningful and elegant reminder of the years spent together. Contemporary couples often choose these elegant rings as a meaningful way to commemorate their journey and cherish their commitment.
                                    </p>
                                    <img src="/images/weddingbandstyles/3.jpg" alt="Amethyst gemstone" className="gemstone-img" />
                                </div>
                                <div className="related-posts">
                                    <h2>RELATED POSTS</h2>
                                    <ul>
                                        <li><a href="#">Wedding Bands vs Anniversary Band</a></li>
                                        <li><a href="#">How to Wear an Anniversary Band</a></li>
                                        <li><a href="#">Understanding the Differences: Wedding Band vs. Anniversary Band</a></li>
                                    </ul>
                                </div>
                            </div>

                            {/* March - Aquamarine */}
                            <div className="main-content">
                                <h1>Eternity Wedding Rings</h1>
                                <div className="gemstone-details">
                                    <p>
                                        Eternity rings symbolize everlasting love and commitment, featuring a continuous band of precious stones, typically diamonds, encircling the entire ring. This unbroken loop represents the timeless nature of a couple's bond, with no beginning or end. Often exchanged on significant occasions like anniversaries or the birth of a child, eternity rings serve as a powerful and enduring symbol of love and fidelity. Eternity rings are a timeless expression of commitment and a beautiful way to celebrate the enduring nature of love.
                                    </p>
                                    <img src="/images/weddingbandstyles/4.jpg" alt="Aquamarine gemstone" className="gemstone-img" />
                                </div>
                                <div className="related-posts">
                                    <h2>RELATED POSTS</h2>
                                    <ul>
                                        <li><a href="#">Eternity Ring Guide</a></li>
                                        <li><a href="#">The Ultimate Guide to Eternity Bands</a></li>
                                        <li><a href="#">Top 9 Anniversary and Eternity Bands that Work as Wedding Bands for a Statement Look</a></li>
                                    </ul>
                                </div>
                            </div>

                            {/* April - Diamond */}
                            <div className="main-content">
                                <h1>Metal Wedding Bands</h1>
                                <div className="gemstone-details">
                                    <p>
                                        Plain metal wedding bands are enduringly favored by couples for their simplicity, elegance, and resilience, making them a timeless choice. Crafted from various metals such as gold, platinum, titanium, white gold, or rose gold, each metal imparts unique qualities to the band. With finish options including high-polish, matte, and brushed, these bands effortlessly complement any style, offering versatility, affordability, and low maintenance. Their enduring design, budget-friendly nature, and durability make metal wedding bands an enduring symbol of love and commitment, transcending fashion trends.
                                    </p>
                                    <img src="/images/weddingbandstyles/5.webp" alt="Diamond gemstone" className="gemstone-img" />
                                </div>
                                <div className="related-posts">
                                    <h2>RELATED POSTS</h2>
                                    <ul>
                                        <li><a href="#">How To Care For Platinum Ring Bands</a></li>
                                        <li><a href="#">Plain Metal Wedding Bands: Why They’ll Always Remain in Vogue</a></li>
                                        <li><a href="#">Men’s Platinum Wedding Bands</a></li>
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
export default WeddingBandStyle