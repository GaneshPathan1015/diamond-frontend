import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const companyLinks = [
    { label: "About", to: "/about" },
    { label: "Contact us", to: "/contact" },
    { label: "Press", to: "/press" },
    { label: "Reviews", to: "/reviews" },
    // { label: "Conflict diamond policy", to: "/our-policies" },
    { label: "Radiance Rewards", to: "/radiance-rewards-program" },
    { label: "Home Preview FAQs", to: "/our-policies" },
    { label: "Monthly Payment Option", to: "/monthly-payment-option" },
    { label: "Affiliate Program", to: "/affiliates" },
    { label: "Terms of Use", to: "/terms" },
    { label: "Privacy Policy", to: "/policy" },
    { label: "Site Map", to: "/site-map" },
  ];

  const educationLinks = [
    { label: "Diamonds", to: "/diamonds" },
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
    { label: "Bands for him", to: "#" },
    { label: "Bands for her", to: "#" },
    { label: "Home preview", to: "/home" },
    { label: "Gemstone rings", to: "#" },
    { label: "Preset rings", to: "#" },
    { label: "Custom rings", to: "#" },
    { label: "Fine jewelry", to: "#" },
  ];

  const customerCareLinks = [
    { label: "Schedule an appointment", to: "/book-an-appointment" },
    { label: "Free shipping", to: "/our-policies" },
    { label: "Free Returns", to: "/our-policies" },
    { label: "Extended warranty", to: "jewelry-protection-plan" },
    { label: "Lifetime warranty", to: "/our-policies" },
    { label: "Financing", to: "/financing" },
    { label: "Insurance", to: "/insurance" },
    { label: "ID.me", to: "/id-me" },
    { label: "Accessibility", to: "#" },
  ];

  const socialLinks = [
    { icon: "fa-instagram", href: "https://www.instagram.com/thecaratcasa/#" },
    { icon: "fa-tiktok", href: "#" },
    {
      icon: "fa-facebook-f",
      href: "https://www.facebook.com/share/194gTHJY21/?mibextid=wwXIfr",
    },
    { icon: "fa-twitter", href: "#" },
    { icon: "fa-youtube", href: "#" },
    { icon: "fa-pinterest-p", href: "#" },
  ];

  return (
    <>
      <footer className="bg-dark text-white pt-5">
        <div className="container">
          <div className="row">
            {/* Company */}
            <div className="col-6 col-md-2 mb-4 text-center text-md-start">
              <h5>Company</h5>
              <ul className="list-unstyled">
                {companyLinks.map((item, i) => (
                  <li key={i}>
                    {item.to.startsWith("/") ? (
                      <Link
                        to={item.to}
                        className="text-white text-decoration-none"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <a
                        href={item.to}
                        className="text-white text-decoration-none"
                      >
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Education */}
            <div className="col-6 col-md-2 mb-4 text-center text-md-start">
              <h5>Education</h5>
              <ul className="list-unstyled">
                {educationLinks.map((item, i) => (
                  <li key={i}>
                    {item.to.startsWith("/") ? (
                      <Link
                        to={item.to}
                        className="text-white text-decoration-none"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <a
                        href={item.to}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white text-decoration-none"
                      >
                        {item.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Shop */}
            <div className="col-6 col-md-2 mb-4 text-center text-md-start">
              <h5>Shop</h5>
              <ul className="list-unstyled">
                {shopLinks.map((item, i) => (
                  <li key={i}>
                    <Link
                      to={item.to}
                      className="text-white text-decoration-none"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Customer Care */}
            <div className="col-6 col-md-2 mb-4 text-center text-md-start">
              <h5>Customer Care</h5>
              <ul className="list-unstyled">
                {customerCareLinks.map((item, i) => (
                  <li key={i}>
                    {typeof item === "string" ? (
                      <a href="#" className="text-white text-decoration-none">
                        {item}
                      </a>
                    ) : (
                      <Link to={item.to} className="text-white text-decoration-none">
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter / Social */}
            <div className="col-12 col-md-4 mb-4 text-center">
              <a href="/" className="text-white fs-3 text-decoration-none">
                AOD
              </a>
              <p className="mt-2 text-white">
                Elevate Your <i>Everyday</i>
              </p>
              <p className="text-white">
                Sign up for <strong>$100 OFF</strong> your first purchase
              </p>

              <form className="text-white d-flex mb-3 justify-content-center flex-wrap">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="form-control mb-2 me-2"
                  style={{ maxWidth: "250px" }}
                />
                <button type="submit" className="btn btn-primary mb-2">
                  Submit
                </button>
              </form>

              <ul className="list-inline d-flex justify-content-center gap-3 mt-3">
                {socialLinks.map((social, i) => (
                  <li key={i} className="list-inline-item">
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white fs-4"
                    >
                      <i className={`fab ${social.icon}`}></i>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center py-3 border-top border-secondary mt-4">
            &copy; {new Date().getFullYear()} AOD. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
