import React, { useState } from "react";
import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [submitted, setSubmitted] = useState("");

  const companyLinks = [
    { label: "About", to: "/about" },
    { label: "Contact us", to: "/contact" },
    { label: "Press", to: "/press" },
    { label: "Reviews", to: "/reviews" },
    { label: "Radiance Rewards", to: "/rewards" },
    { label: "Home preview FAQ's", to: "/faqs" },
    { label: "Monthly Payment Option", to: "/payment-options" },
    { label: "Affiliate program", to: "/affiliate" },
    { label: "Terms of use", to: "/terms" },
    { label: "Privacy policy", to: "/policy" },
    { label: "Site map", to: "/site-map" },
  ];

  const educationLinks = [
    { label: "Diamonds", to: "/diamond" },
    { label: "Clarity Plus™ Diamonds", to: "/clarity-plus" },
    { label: "Engagement", to: "/engagement" },
    { label: "Wedding bands", to: "/wedding-brands" },
    { label: "Gemstones", to: "/gemstones-types-guide" },
    { label: "Jewelry", to: "/fine-jewelry-earrings" },
    { label: "Conflict diamond policy", to: "/our-policies" },
    { label: "Lab grown diamonds", to: "/lab-diamonds" },
    { label: "Metals", to: "/metal" },
    { label: "Blog", to: "/blog" },
  ];

  const shopLinks = [
    { label: "Diamonds", to: "/diamond" },
    { label: "Engagement rings", to: "/engagement-ring-style" },
    { label: "Bands for him", to: "/bands-him" },
    { label: "Bands for her", to: "/bands-her" },
    { label: "Home preview", to: "/home" },
    { label: "Gemstone rings", to: "/gemstone-rings" },
    { label: "Preset rings", to: "/preset-rings" },
    { label: "Custom rings", to: "/custom-rings" },
    { label: "Fine jewelry", to: "/fine-jewelry" },
  ];

  const customerCareLinks = [
    { label: "Schedule an appointment", to: "/appointment" },
    { label: "Free shipping", to: "/shipping" },
    { label: "Free returns", to: "/returns" },
    { label: "Extended warranty", to: "/warranty-extended" },
    { label: "Lifetime warranty", to: "/warranty-lifetime" },
    { label: "Financing", to: "/financing" },
    { label: "Insurance", to: "/insurance" },
    { label: "ID.me", to: "/idme" },
    { label: "Accessibility", to: "/accessibility" },
  ];

  const socialLinks = [
    {
      icon: "fa-instagram",
      href: "https://www.instagram.com/thecaratcasa/",
      label: "Instagram",
    },
    { icon: "fa-tiktok", href: "https://www.tiktok.com", label: "TikTok" },
    {
      icon: "fa-facebook-f",
      href: "https://www.facebook.com/share/194gTHJY21/",
      label: "Facebook",
    },
    { icon: "fa-twitter", href: "https://www.twitter.com", label: "Twitter" },
    { icon: "fa-youtube", href: "https://www.youtube.com", label: "YouTube" },
    {
      icon: "fa-pinterest-p",
      href: "https://www.pinterest.com",
      label: "Pinterest",
    },
  ];

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEmailError("");

    if (!email) {
      setEmailError("Please enter your email address");
      return;
    }

    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }

    setSubmitted(true);
    setEmail("");
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      <footer className="bg-black text-white pt-5 pb-4 footer-font">
        <div className="container-fluid px-4 px-md-5">
          <div className="row">
            {/* Company */}
            <div className="col-6 col-lg-2 mb-4 footer-col">
              <h5 className="footer-heading">COMPANY</h5>
              <ul className="list-unstyled">
                {companyLinks.map((item, i) => (
                  <li key={i}>
                    {/* <a
                      href={item.to}
                      className="text-white text-decoration-none footer-link"
                    >
                      {item.label}
                    </a> */}
                    <Link
                      to={item.to}
                      className="text-white text-decoration-none footer-link"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Education */}
            <div className="col-6 col-lg-2 mb-4 footer-col">
              <h5 className="footer-heading">EDUCATION</h5>
              <ul className="list-unstyled">
                {educationLinks.map((item, i) => (
                  <li key={i}>
                    {/* <a
                      href={item.to}
                      className="text-white text-decoration-none footer-link"
                    >
                      {item.label}
                    </a> */}
                    <Link
                      to={item.to}
                      className="text-white text-decoration-none footer-link"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Shop */}
            <div className="col-6 col-lg-2 mb-4 footer-col">
              <h5 className="footer-heading">SHOP</h5>
              <ul className="list-unstyled">
                {shopLinks.map((item, i) => (
                  <li key={i}>
                    {/* <a
                      href={item.to}
                      className="text-white text-decoration-none footer-link"
                    >
                      {item.label}
                    </a> */}
                    <Link
                      to={item.to}
                      className="text-white text-decoration-none footer-link"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Customer Care */}
            <div className="col-6 col-lg-2 mb-4 footer-col">
              <h5 className="footer-heading">CUSTOMER CARE</h5>
              <ul className="list-unstyled">
                {customerCareLinks.map((item, i) => (
                  <li key={i}>
                    {/* <a
                      href={item.to}
                      className="text-white text-decoration-none footer-link"
                    >
                      {item.label}
                    </a> */}
                    <Link
                      to={item.to}
                      className="text-white text-decoration-none footer-link"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="contact-info">
                <a
                  href="mailto:service@withclarity.com"
                  className="text-white text-decoration-none"
                >
                  service@withclarity.com
                </a>
                <a
                  href="tel:1.844.234.6463"
                  className="text-white text-decoration-none"
                >
                  1.844.234.6463
                </a>
              </div>
            </div>

            {/* Newsletter / Brand */}
            <div className="col-12 col-lg-4 mb-4">
              <div className="text-center text-lg-start">
                <div className="brand-logo text-white text-uppercase mb-3">
                  THE CARATCASA
                </div>
                <p className="tagline text-white mb-3">
                  Luxury Made <span className="tagline-italic">Personal.</span>
                </p>
                <p className="discount-text text-white">
                  Sign up for <strong>$100 OFF</strong> your first purchase
                </p>

                <div className="d-flex gap-2 mb-3 footer-sub-btn">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="form-control footer-newsletter-input flex-grow-1"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-label="Email address"
                  />
                  <button
                    type="button"
                    className="f-submit-btn "
                    onClick={handleSubmit}
                  >
                    SUBMIT
                  </button>
                </div>

                {emailError && (
                  <small className="text-danger d-block mb-2">
                    {emailError}
                  </small>
                )}
                {submitted && (
                  <small className="success-message d-block mb-2">
                    ✓ Thank you for subscribing!
                  </small>
                )}

                <div className="d-flex gap-3 mt-4 justify-content-center justify-content-lg-start">
                  {socialLinks.map((social, i) => (
                    <a
                      key={i}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white social-icon"
                      aria-label={social.label}
                    >
                      <i className={`fab ${social.icon}`}></i>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
