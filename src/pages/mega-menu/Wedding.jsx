import React from "react";
import "./wedding.css"

const Wedding = () => {
  return (
    <div className="bands-section">
      <div className="bands-container">
        {/* Left Section */}
        <div className="bands-links">
          <div className="column">
            <h6>Women’s Bands</h6>
            <ul>
              <li>
                <a href="#">Classic</a>
              </li>
              <li>
                <a href="#">Eternity</a>
              </li>
              <li>
                <a href="#">Diamond</a>
              </li>
              <li>
                <a href="#">Stackable</a>
              </li>
            </ul>
          </div>
          <div className="column">
            <h6>Men’s Bands</h6>
            <ul>
              <li>
                <a href="#">Classic</a>
              </li>
              <li>
                <a href="#">Modern</a>
              </li>
              <li>
                <a href="#">Diamond</a>
              </li>
              <li>
                <a href="#">Alternative Metals</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className="bands-image">
          <img src="/images/wedding.webp" alt="Bands" />
          <h6>Wedding Bands Guide</h6>
          <p>Everything you need to know before choosing the right band.</p>
          <a href="#" className="learn-btn">
            shop all
          </a>
        </div>
      </div>
    </div>
  );
};

export default Wedding;
