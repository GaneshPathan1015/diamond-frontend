import React, { useState } from "react";
import { Collapse } from "react-bootstrap";
import { BsChatDots, BsEnvelope, BsTelephone } from "react-icons/bs";

import "./Press.css";

const blogs = [
  {
    logo: "/footerpress/RCFA.avif",
    title:
      "Kandi Burruss Wore Christian Siriano To The ‘Othello’ Opening Night Party",
    date: "March 2025",
  },
  {
    logo: "People",
    title:
      "Justin Theroux and Nicole Brydon Bloom Got Married with Custom Wedding Rings. This Is How They Designed Them (Exclusive).",
    date: "March 2025",
  },
  {
    logo: "Wedding Forward",
    title:
      "Engagement Ring Trends 2025: From Classic Revivals to Modern Twists.",
    date: "March 2025",
  },
  {
    logo: "Vogue",
    title:
      "Justin Theroux and Nicole Brydon Bloom Are Married! Inside Their Laid-Back Beach Wedding in Mexico",
    date: "March 2025",
  },
  {
    logo: "Byrdie",
    title:
      "Brooches Have Entered a New Era—Here's How You Can Style Them in 2025",
    date: "March 2025",
  },
  {
    logo: "Yahoo! Life",
    title: "The Best Luxury Jewelry For Every Sign From With Clarity",
    date: "March 2025",
  },
  {
    logo: "JCK",
    title:
      "JCK Special Report - Lab Grown Diamonds - With Clarity’s Timely New Brooch Collection",
    date: "March 2025",
  },
  {
    logo: "Brides",
    title: "How to Choose a Coordinated Wedding Wardrobe With Your Partner",
    date: "March 2025",
  },
  {
    logo: "Other",
    title: "What Is an East-West Engagement Ring? Your Complete Guide",
    date: "March 2025",
  },
];

const Press = () => {
  const [open, setOpen] = useState(null);

  const menuItems = [
    "PRESS COVERAGE",
    "FACT SHEET",
    "MEDIA ASSETS",
    "CONTACT US",
  ];
  return (
    <>
      <div className="container my-5">
        <div className="row align-items-center">
          {/* Left Column */}
          <div className="col-12 col-md-6 text-center text-md-start">
            <h2 className="fw-bold mb-3">In the news</h2>
            <p className="text-muted fs-5">
              We're getting noticed! Check out what others have to say <br />
              about With Clarity.
            </p>
          </div>

          {/* Right Column */}
          <div className="col-12 col-md-6 text-center">
            <img
              src="/footerpress/pressMain.webp"
              alt="In the news"
              className="img-fluid rounded"
            />
          </div>
        </div>
      </div>
      <div className="container my-4">
        {/* Desktop View */}
        <div className="d-none d-md-flex justify-content-between border-bottom pb-2">
          {menuItems.map((item, index) => (
            <a
              href="#"
              key={index}
              className="text-decoration-none fw-bold text-uppercase"
              style={{ color: "#154360", letterSpacing: "1px" }}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile View */}
        <div className="d-md-none">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="border p-3"
              onClick={() => setOpen(open === index ? null : index)}
              style={{ cursor: "pointer" }}
            >
              <div className="d-flex justify-content-between align-items-center">
                <span
                  className="fw-bold text-uppercase"
                  style={{ color: "#154360" }}
                >
                  {item}
                </span>
                <span>{open === index ? "▲" : "▼"}</span>
              </div>

              <Collapse in={open === index}>
                <div className="mt-2 text-muted">
                  Content for {item} goes here...
                </div>
              </Collapse>
            </div>
          ))}
        </div>
      </div>
      <div className="container">
        <div className="row">
          {blogs.map((blog, index) => (
            <div key={index} className="col-12">
              <div className="press-item row align-items-center">
                <div className="col-12 col-md-3 press-logo">
                  <img src={blog.logo} alt={blog.title} className="img-fluid" />
                </div>

                <div className="col-12 col-md-9">
                  <div className="press-title">{blog.title}</div>
                  <div className="press-date">{blog.date}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container my-5">
        <div className="row bg-light p-4 align-items-center">
          {/* Left Text */}
          <div className="col-12 col-md-6 mb-4 mb-md-0">
            <h2 className="fw-bold" style={{ color: "#154360" }}>
              We're here to help.
            </h2>
            <p className="mb-1">Our expert gemologists are here to help.</p>
            <p>
              We’re available seven days a week to guide you on <br />
              diamonds, gemstones, and jewelry.
            </p>
          </div>

          {/* Right Contact Options */}
          <div className="col-12 col-md-6 d-flex justify-content-around text-center">
            <div>
              <BsChatDots size={28} className="mb-2" />
              <p className="m-0">Chat</p>
            </div>
            <div className="border-start px-4">
              <BsEnvelope size={28} className="mb-2" />
              <p className="m-0">Email</p>
            </div>
            <div className="border-start px-4">
              <BsTelephone size={28} className="mb-2" />
              <p className="m-0">Call</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Press;