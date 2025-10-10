import React, { useState } from "react";

const RadianceRewards = () => {
    const [isHovered1, setIsHovered1] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);
    const [isHovered4, setIsHovered4] = useState(false);

    // Common button style function
    const getButtonStyle = (isHovered) => ({
        background: isHovered ? "#000" : "transparent",
        color: isHovered ? "#fff" : "#000",
        border: "1px solid #000",
        fontSize: "12px",
        fontWeight: "700",
        lineHeight: "16px",
        letterSpacing: "1.2px",
        padding: "10px 20px",
        cursor: "pointer",
        transition: "all 0.3s ease",
        whiteSpace: "nowrap"
    });

    return (
        <>
            {/* ===== Header Section ===== */}
            <section>
                <div className="rediance-section">
                    <img
                        src="/images/radiancerewards/Header_Banner_2x_fa223c24-ccd5-48f9-9599-97273f725944_4096x.webp"
                        alt="Radiance Rewards Header"
                        className="img-fluid w-100"
                    />
                </div>
            </section>

            {/* ===== Section 1 ===== */}
            <section>
                <div className="container text-center p-3 p-md-4">
                    <h1 className="pt-3 pt-md-4 radiance-title">
                        RADIANCE REWARDS
                    </h1>
                    <p className="pb-3 pb-md-4 radiance-subtitle">
                        Become a member to gain access to exclusive perks and rewards.
                    </p>

                    {/* JOIN NOW button 1 */}
                    <button
                        style={getButtonStyle(isHovered1)}
                        onMouseEnter={() => setIsHovered1(true)}
                        onMouseLeave={() => setIsHovered1(false)}
                        className="radiance-btn"
                    >
                        JOIN NOW
                    </button>

                    <p className="pt-3">
                        Already have an account? <a href="/signin">Sign in</a>
                    </p>
                </div>
            </section>

            {/* ===== Section 2 ===== */}
            <section className="text-center radiance-how-it-works">
                <h1 className="radiance-title mb-4">
                    How It Works
                </h1>

                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-4 mb-4 mb-md-0">
                            <label className="step-number">01</label>
                            <h2>Join for Free</h2>
                            <p>Sign up at no cost and start benefiting.</p>
                        </div>
                        <div className="col-12 col-md-4 mb-4 mb-md-0">
                            <label className="step-number">02</label>
                            <h2>Earn Points</h2>
                            <p>Get points for every purchase you make.</p>
                        </div>
                        <div className="col-12 col-md-4">
                            <label className="step-number">03</label>
                            <h2>Reap the Reward</h2>
                            <p>Trade in your points for exclusive discounts.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== Section 3 ===== */}
            <section>
                <div className="container text-center p-3 p-md-4">
                    <h1 className="pt-3 pt-md-4 radiance-title">
                        Collecting Points is Easy
                    </h1>
                    <p className="pb-3 pb-md-4 radiance-subtitle">
                        Instantly earn points through these 7 simple ways.
                    </p>

                    {/* JOIN NOW button 2 */}
                    <button
                        style={getButtonStyle(isHovered2)}
                        onMouseEnter={() => setIsHovered2(true)}
                        onMouseLeave={() => setIsHovered2(false)}
                        className="radiance-btn"
                    >
                        JOIN NOW
                    </button>

                    {/* ===== Cards ===== */}
                    <div className="row pt-4" style={{ textAlign: "center" }}>
                        {/* Card 1 */}
                        <div className="col-6 col-md-3 mb-4">
                            <img
                                src="/images/radiancerewards/5.webp"
                                alt="Signup Bonus"
                                className="radiance-card-img"
                            />
                            <h5 className="radiance-card-title">
                                SIGNUP BONUS
                            </h5>
                            <p className="radiance-card-text">
                                Get bold 200 Points when you become a member
                            </p>
                        </div>

                        {/* Card 2 */}
                        <div className="col-6 col-md-3 mb-4">
                            <img
                                src="/images/radiancerewards/6.png"
                                alt="Birthday Treat"
                                className="radiance-card-img"
                            />
                            <h5 className="radiance-card-title">
                                BIRTHDAY TREAT
                            </h5>
                            <p className="radiance-card-text">
                                We gift you 300 Points on your birthday
                            </p>
                        </div>

                        {/* Card 3 */}
                        <div className="col-6 col-md-3 mb-4">
                            <img
                                src="/images/radiancerewards/7.webp"
                                alt="Shopping"
                                className="radiance-card-img"
                            />
                            <h5 className="radiance-card-title">SHOPPING</h5>
                            <p className="radiance-card-text">
                                Earn Points for every $1 spent
                            </p>
                        </div>

                        {/* Card 4 */}
                        <div className="col-6 col-md-3 mb-4">
                            <img
                                src="/images/radiancerewards/8.webp"
                                alt="Invite a Friend"
                                className="radiance-card-img"
                            />
                            <h5 className="radiance-card-title">
                                INVITE A FRIEND
                            </h5>
                            <p className="radiance-card-text">
                                Refer & get 500 Points when your friend makes a purchase
                            </p>
                        </div>

                        {/* Card 5 */}
                        <div className="col-6 col-md-4 mb-4">
                            <img
                                src="/images/radiancerewards/9.png"
                                alt="Facebook"
                                className="radiance-card-img"
                            />
                            <h5 className="radiance-card-title">FACEBOOK</h5>
                            <p className="radiance-card-text">
                                Get 100 Points when you like us on Facebook
                            </p>
                        </div>

                        {/* Card 6 */}
                        <div className="col-6 col-md-4 mb-4">
                            <img
                                src="/images/radiancerewards/10.webp"
                                alt="Instagram"
                                className="radiance-card-img"
                            />
                            <h5 className="radiance-card-title">INSTAGRAM</h5>
                            <p className="radiance-card-text">
                                Get 100 Points when you follow us on Instagram
                            </p>
                        </div>

                        {/* Card 7 */}
                        <div className="col-6 col-md-4 mb-4 mx-auto">
                            <img
                                src="/images/radiancerewards/11.png"
                                alt="Leave a Review"
                                className="radiance-card-img"
                            />
                            <h5 className="radiance-card-title">
                                LEAVE A REVIEW
                            </h5>
                            <p className="radiance-card-text">
                                Upload photo, video or review of purchased product & get 100 Points
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== Refer & Earn Section ===== */}
            <section className="py-4 py-md-5">
                <div className="container-fluid text-center">
                    <div className="row">
                        <div className="col-12 col-md-6 mb-4 mb-md-0">
                            <div className="px-2 px-md-4">
                                <img src="/images/radiancerewards/2.webp" alt="Share the Love" className="img-fluid" />
                                <h6 className="pt-3 pt-md-4 radiance-section-label">SHARE THE LOVE</h6>
                                <h1 className="radiance-title">Refer & Earn</h1>
                                <p>Tell a friend about us and enjoy 500 points when they make a purchase.</p>
                                <a
                                    href="/signin"
                                    style={getButtonStyle(isHovered3)}
                                    onMouseEnter={() => setIsHovered3(true)}
                                    onMouseLeave={() => setIsHovered3(false)}
                                    className="radiance-btn text-decoration-none d-inline-block"
                                >
                                    INVITE A FRIEND
                                </a>
                            </div>
                        </div>

                        <div className="col-12 col-md-6">
                            <div className="px-2 px-md-4">
                                <img src="/images/radiancerewards/3.webp" alt="Become a Member" className="img-fluid" />
                                <h6 className="pt-3 pt-md-4 radiance-section-label">BECOME A MEMBER</h6>
                                <h1 className="radiance-title">Ready To Join?</h1>
                                <p>Sign up for Radiance Rewards today and receive 200 points.</p>
                                <a
                                    href="/signup"
                                    style={getButtonStyle(isHovered4)}
                                    onMouseEnter={() => setIsHovered4(true)}
                                    onMouseLeave={() => setIsHovered4(false)}
                                    className="radiance-btn text-decoration-none d-inline-block"
                                >
                                    JOIN NOW
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== Member Tiers Section ===== */}
            <section className="py-4 py-md-5 radiance-tiers">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6 mb-4 mb-md-0">
                            <div>
                                <h1 className="radiance-title">Member Tiers</h1>
                                <p>The higher your tier, the more points you earn.</p>
                            </div>
                            
                            <div className="mb-4">
                                <h3>Silver</h3>
                                <div className="radiance-tier-item">
                                    <span className="radiance-tier-points">5,000 POINTS & BELOW</span>
                                    <span className="radiance-tier-earning">Earn 1 Point for every $1 spent</span>
                                </div>
                            </div>
                            
                            <div className="mb-4">
                                <h3>Gold</h3>
                                <div className="radiance-tier-item">
                                    <span className="radiance-tier-points">5,001 - 10,000 POINTS</span>
                                    <span className="radiance-tier-earning">Earn 2 Points for every $1 spent</span>
                                </div>
                            </div>

                            <div className="mb-4">
                                <h3>Platinum</h3>
                                <div className="radiance-tier-item">
                                    <span className="radiance-tier-points">10,001 POINTS & ABOVE</span>
                                    <span className="radiance-tier-earning">Earn 3 Points for every $1 spent</span>
                                </div>
                            </div>
                            
                            <div className="mt-4">
                                <h1 className="radiance-title">Turn Your Points Into Credit</h1>

                                <div className="radiance-points-container">
                                    {/* Box 1 */}
                                    <div className="radiance-points-box border-right-mobile">
                                        <h6>2,000 POINTS</h6>
                                        <p>For $100 off</p>
                                        <small>*Spend over $300</small>
                                    </div>

                                    {/* Box 2 */}
                                    <div className="radiance-points-box border-right-mobile">
                                        <h6>5,000 POINTS</h6>
                                        <p>For $250 off</p>
                                        <small>*Spend over $750</small>
                                    </div>

                                    {/* Box 3 */}
                                    <div className="radiance-points-box no-border">
                                        <h6>10,000 POINTS</h6>
                                        <p>For $500 off</p>
                                        <small>*Spend over $1,500</small>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-12 col-md-6">
                            <div>
                                <img src="/images/radiancerewards/4.webp" alt="Member Benefits" className="img-fluid w-100" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== Products Section ===== */}
            <section className="text-center py-4 py-md-5">
                <h1 className="radiance-title">Like what you see?</h1>
                <p>Explore our most-loved styles and start earning points.</p>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-4 mb-4">
                            <a className="text-decoration-none" href="/product1">
                                <img src="/images/radiancerewards/12.webp" alt="Signature Aquamarine Birthstone Necklace" className="img-fluid" />
                                <p>Signature Aquamarine Birthstone Necklace</p>
                            </a>
                        </div>
                        <div className="col-12 col-md-4 mb-4">
                            <a className="text-decoration-none" href="/product2">
                                <img src="/images/radiancerewards/13.webp" alt="Geometric Sequence Diamond Eternity Ring" className="img-fluid" />
                                <p>Geometric Sequence Diamond Eternity Ring</p>
                            </a>
                        </div>
                        <div className="col-12 col-md-4 mb-4">
                            <a className="text-decoration-none" href="/product3">
                                <img src="/images/radiancerewards/14.webp" alt="Halo Cushion Lab Created Diamond Necklace" className="img-fluid" />
                                <p>Halo Cushion Lab Created Diamond Necklace</p>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== FAQ Section ===== */}
            <section className="py-4 py-md-5">
                <div className="container">
                    <div className="faq-section">
                        <h2 className="text-center mb-4">You Ask, We Answer</h2>

                        <div className="accordion" id="faqAccordion">
                            {/* Q1 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="heading1">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#faq1"
                                    >
                                        What is Radiance Rewards?
                                    </button>
                                </h2>
                                <div
                                    id="faq1"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#faqAccordion"
                                >
                                    <div className="accordion-body">
                                        Radiance Rewards is an exclusive loyalty club for With Clarity customers.
                                    </div>
                                </div>
                            </div>

                            {/* Q2 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="heading2">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#faq2"
                                    >
                                        How can I be a part of Radiance Rewards?
                                    </button>
                                </h2>
                                <div
                                    id="faq2"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#faqAccordion"
                                >
                                    <div className="accordion-body">
                                        Create an account on our website to be automatically enrolled in our rewards program. Once you're a registered member, you'll have the opportunity to earn points in various ways.
                                    </div>
                                </div>
                            </div>

                            {/* Q3 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="heading3">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#faq3"
                                    >
                                        What are points?
                                    </button>
                                </h2>
                                <div
                                    id="faq3"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#faqAccordion"
                                >
                                    <div className="accordion-body">
                                        Points awarded under Radiance Rewards are a form of virtual currency that customers can earn in a multitude of ways. 20 points are equivalent to $1.
                                    </div>
                                </div>
                            </div>

                            {/* Q4 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="heading4">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#faq4"
                                    >
                                        What are the membership tiers?
                                    </button>
                                </h2>
                                <div
                                    id="faq4"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#faqAccordion"
                                >
                                    <div className="accordion-body">
                                        We have 3 membership tiers based on Points accumulated:
                                        <ul>
                                            <li>Silver Tier (0-5,000 Points) - Earn 1 Point for every $1 spent</li>
                                            <li>Gold Tier (5,001-10,000 Points) - Earn 2 Points for every $1 spent</li>
                                            <li>Platinum Tier (10,001+ Points) - Earn 3 Points for every $1 spent</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Q5 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="heading5">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#faq5"
                                    >
                                        How can I earn points?
                                    </button>
                                </h2>
                                <div
                                    id="faq5"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#faqAccordion"
                                >
                                    <div className="accordion-body">
                                        You can earn points for the following actions:
                                        <ul>
                                            <li>Welcome Bonus for Signing Up (200 Points)</li>
                                            <li>Special Gift for your Birthday (300 Points)</li>
                                            <li>Like Our Facebook Page (100 Points)</li>
                                            <li>Follow us on Instagram (100 Points)</li>
                                            <li>Write a Review (100 Points)</li>
                                            <li>Share a Photo (100 Points)</li>
                                            <li>Share a Video (100 Points)</li>
                                            <li>Refer a Friend (500 Points when your friend makes a purchase)</li>
                                        </ul>
                                        Apart from these, get access to select promotions to be awarded bonus Points for various activities.
                                    </div>
                                </div>
                            </div>

                            {/* Q6 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="heading6">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#faq6"
                                    >
                                        What can I redeem my points for?
                                    </button>
                                </h2>
                                <div
                                    id="faq6"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#faqAccordion"
                                >
                                    <div className="accordion-body">
                                        You can redeem your points for the following discounts:
                                        <ul>
                                            <li>2,000 Points - $100 Off</li>
                                            <li>5,000 Points - $250 Off</li>
                                            <li>10,000 Points - $500 Off</li>
                                        </ul>
                                        <strong>Note:</strong> Reward points cannot be redeemed on natural diamonds.
                                    </div>
                                </div>
                            </div>

                            {/* Q7 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="heading7">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#faq7"
                                    >
                                        How do I check my points balance?
                                    </button>
                                </h2>
                                <div
                                    id="faq7"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#faqAccordion"
                                >
                                    <div className="accordion-body">
                                        Sign in to your account and click on the 'Rewards' button at the bottom left of your screen to view your Points balance.
                                    </div>
                                </div>
                            </div>

                            {/* Q8 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="heading8">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#faq8"
                                    >
                                        How long will it take for points to be added after purchase?
                                    </button>
                                </h2>
                                <div
                                    id="faq8"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#faqAccordion"
                                >
                                    <div className="accordion-body">
                                        Sign in and click the 'Rewards' button to view your updated balance after your purchase.
                                    </div>
                                </div>
                            </div>

                            {/* Q9 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="heading9">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#faq9"
                                    >
                                        Are there any conditions associated with earning points?
                                    </button>
                                </h2>
                                <div
                                    id="faq9"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#faqAccordion"
                                >
                                    <div className="accordion-body">
                                        Yes, you can earn points for up to a maximum of 5 orders within a calendar year, in adherence to our fair usage policy.
                                    </div>
                                </div>
                            </div>

                            {/* Q10 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="heading10">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#faq10"
                                    >
                                        Will I get points for my birthday if it falls within 30 days of joining?
                                    </button>
                                </h2>
                                <div
                                    id="faq10"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#faqAccordion"
                                >
                                    <div className="accordion-body">
                                        No, there's a blackout period of 30 days after joining. You'll be eligible for Birthday Points from your next birthday onwards.
                                    </div>
                                </div>
                            </div>

                            {/* Q11 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="heading11">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#faq11"
                                    >
                                        Do my points expire?
                                    </button>
                                </h2>
                                <div
                                    id="faq11"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#faqAccordion"
                                >
                                    <div className="accordion-body">
                                        No, your reward points never expire!
                                    </div>
                                </div>
                            </div>

                            {/* Q12 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="heading12">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#faq12"
                                    >
                                        What happens to my points if I return a product?
                                    </button>
                                </h2>
                                <div
                                    id="faq12"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#faqAccordion"
                                >
                                    <div className="accordion-body">
                                        When you return an item, you lose the associated points earned for that purchase.
                                    </div>
                                </div>
                            </div>

                            {/* Q13 */}
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="heading13">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#faq13"
                                    >
                                        How do I contact support?
                                    </button>
                                </h2>
                                <div
                                    id="faq13"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#faqAccordion"
                                >
                                    <div className="accordion-body">
                                        You can email us at <a href="mailto:service@withclarity.com">service@withclarity.com</a> or call us at <strong>1-844-234-6463</strong>.<br />
                                        Our hours are: Mon-Fri 9 AM-12 AM & Sat-Sun 10 AM-7 PM.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== Features Section ===== */}
            <section className="radiance-features py-4 py-md-5">
                <h1 className="radiance-features-title text-center mb-4">NO DEALBREAKERS</h1>
                <div className="container">
                    <div className="row justify-content-center align-items-center text-center">
                        {/* Item 1 */}
                        <div className="col-6 col-md-2 mb-4 radiance-feature-item">
                            <img
                                src="/images/radiancerewards/easy-access.png"
                                alt="Easy Financing Options"
                                className="radiance-feature-img mx-auto"
                            />
                            <a className="text-decoration-none" href="/our-policies">
                                <p className="radiance-feature-text mt-2">
                                    EASY FINANCING OPTIONS
                                </p>
                            </a>
                        </div>

                        {/* Item 2 */}
                        <div className="col-6 col-md-2 mb-4 radiance-feature-item">
                            <img
                                src="/images/radiancerewards/insurance.png"
                                alt="Lifetime Warranty"
                                className="radiance-feature-img mx-auto"
                            />
                            <a className="text-decoration-none" href="/our-policies">
                                <p className="radiance-feature-text mt-2">
                                    LIFETIME WARRANTY
                                </p>
                            </a>
                        </div>

                        {/* Item 3 */}
                        <div className="col-6 col-md-2 mb-4 radiance-feature-item">
                            <img
                                src="/images/radiancerewards/30-days.png"
                                alt="Hassle Free Returns"
                                className="radiance-feature-img mx-auto"
                            />
                            <a className="text-decoration-none" href="/our-policies">
                                <p className="radiance-feature-text mt-2">
                                    HASSLE FREE RETURNS
                                </p>
                            </a>
                        </div>

                        {/* Item 4 */}
                        <div className="col-6 col-md-2 mb-4 radiance-feature-item">
                            <img
                                src="/images/radiancerewards/diamond-ring.png"
                                alt="Free Resizing"
                                className="radiance-feature-img mx-auto"
                            />
                            <a className="text-decoration-none" href="/our-policies">
                                <p className="radiance-feature-text mt-2">
                                    FREE RESIZING
                                </p>
                            </a>
                        </div>

                        {/* Item 5 */}
                        <div className="col-6 col-md-2 mb-4 radiance-feature-item">
                            <img
                                src="/images/radiancerewards/diamond.png"
                                alt="Conflict Free Diamonds"
                                className="radiance-feature-img mx-auto"
                            />
                            <a className="text-decoration-none" href="/our-policies">
                                <p className="radiance-feature-text mt-2">
                                    CONFLICT FREE DIAMONDS
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                /* Mobile Responsive Styles */
                .radiance-title {
                    font-family: "Avenir Next";
                    color: #000;
                    font-size: 28px;
                    line-height: 36px;
                    font-weight: 600;
                    letter-spacing: -0.35px;
                }

                .radiance-subtitle {
                    margin: 0.2rem 0;
                    color: #222;
                    cursor: pointer;
                    transition: color 0.2s;
                    font-size: 14px;
                }

                .radiance-btn {
                    white-space: nowrap;
                }

                .radiance-how-it-works {
                    background: #f6ecdf;
                    padding: 50px 0 25px;
                }

                .step-number {
                    font-weight: 700;
                    font-size: 16px;
                }

                .radiance-card-img {
                    width: 80px;
                    height: 80px;
                    object-fit: contain;
                    margin: 0 auto 15px auto;
                    display: block;
                }

                .radiance-card-title {
                    font-weight: 600;
                    color: #14344a;
                    font-size: 14px;
                }

                .radiance-card-text {
                    color: #333;
                    margin-top: 8px;
                    font-size: 12px;
                    line-height: 1.4;
                }

                .radiance-section-label {
                    font-size: 12px;
                    font-weight: 600;
                    letter-spacing: 1px;
                }

                .radiance-tiers {
                    background: #f6ecdf;
                }

                .radiance-tier-item {
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    margin-top: 10px;
                    border-bottom: 2px solid #ccc;
                    padding-bottom: 10px;
                }

                .radiance-tier-points {
                    text-align: left;
                    font-weight: 600;
                    font-size: 14px;
                    margin-bottom: 5px;
                }

                .radiance-tier-earning {
                    text-align: left;
                    color: #555;
                    font-size: 14px;
                }

                .radiance-points-container {
                    display: flex;
                    flex-direction: column;
                    gap: 0;
                }

                .radiance-points-box {
                    padding: 15px 0;
                    text-align: center;
                    border-bottom: 2px solid #cccccc;
                }

                .border-right-mobile {
                    border-bottom: 2px solid #cccccc;
                }

                .no-border {
                    border-bottom: none !important;
                }

                .radiance-features {
                    background: #dee9eb;
                }

                .radiance-features-title {
                    font-family: "Avenir Next";
                    color: #000;
                    font-size: 28px;
                    line-height: 36px;
                    font-weight: 500;
                    letter-spacing: -0.35px;
                }

                .radiance-feature-img {
                    width: 50px;
                    height: 50px;
                    display: block;
                }

                .radiance-feature-text {
                    margin: 0;
                    font-weight: 600;
                    text-align: center;
                    font-size: 12px;
                    line-height: 1.3;
                    color: #000;
                }

                .radiance-feature-item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }

                /* Medium devices (tablets, 768px and up) */
                @media (min-width: 768px) {
                    .radiance-title {
                        font-size: 35px;
                        line-height: 48px;
                    }

                    .radiance-subtitle {
                        font-size: 16px;
                    }

                    .radiance-how-it-works {
                        padding: 70px 0 35px;
                    }

                    .radiance-card-img {
                        width: 100px;
                        height: 100px;
                    }

                    .radiance-card-title {
                        font-size: 16px;
                    }

                    .radiance-card-text {
                        font-size: 14px;
                    }

                    .radiance-tier-item {
                        flex-direction: row;
                        justify-content: space-between;
                        align-items: center;
                    }

                    .radiance-tier-points {
                        margin-bottom: 0;
                    }

                    .radiance-tier-earning {
                        text-align: right;
                    }

                    .radiance-points-container {
                        flex-direction: row;
                        justify-content: space-between;
                        gap: 0;
                    }

                    .radiance-points-box {
                        flex: 1;
                        min-width: 150px;
                        border-right: 2px solid #cccccc;
                        border-bottom: none;
                        padding: 15px;
                    }

                    .border-right-mobile {
                        border-bottom: none;
                        border-right: 2px solid #cccccc;
                    }

                    .no-border {
                        border-right: none !important;
                        border-bottom: none !important;
                    }

                    .radiance-feature-img {
                        width: 60px;
                        height: 60px;
                    }

                    .radiance-feature-text {
                        font-size: 14px;
                    }

                    .radiance-feature-item {
                        border-right: 3px solid #000;
                        padding-right: 15px;
                    }

                    .radiance-feature-item:last-child {
                        border-right: none;
                    }
                }

                /* Large devices (desktops, 992px and up) */
                @media (min-width: 992px) {
                    .radiance-points-box:last-child {
                        border-right: none;
                    }
                }
            `}</style>
        </>
    );
};

export default RadianceRewards;