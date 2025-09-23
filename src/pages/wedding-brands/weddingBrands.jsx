import React from "react";
import Customize from "../engagement/customize/customize";
import Education from "../engagement/education/education";
import DesigningProcess from "../engagement/designing-process/designingProcess.";
import Quetions from "../engagement/quetions/quetions";
import WedingCollection from "./collaction/wedingCollection";
import "./index.css";
export default function Weddingbrands() {
  return (
    <>
      <section className="hero_section_wrapper">
        <div className="container-fluid p-0 position-relative h-100">
          {/* Hero image */}
          <img
            src="/images/engagement-rings-banner.webp"
            alt="Engagement Rings Banner"
            className="w-100 h-100 hero-img"
          />

          {/* Text overlay */}
          <div className="wrapper position-absolute bottom-0 start-50 translate-middle-x text-center w-100 mb-5">
            <h2 className="fs-1 slide-title text-white">Wedding Bands</h2>
            <div className="content">
              <p className="text-white">
                Ready to make it official? Explore our collection of women’s and
                men’s wedding rings, featuring a dazzling array of styles,
                metals, and diamonds that makes finding the one that embodies
                your love so easy. Elevate your story with the perfect wedding
                band.
              </p>
            </div>
            <div className="slide-btn-wrapper justify-content-center align-items-center gap-5">
              <a
                href="#"
                className="text-white btn border-button border my-2 p-2 rounded-0 fw-bold border-white"
              >
                SHOP WEDDING BANDS
              </a>
            </div>
          </div>
        </div>
      </section>

      <WedingCollection />

      <Customize />

      <Education />

      <DesigningProcess />

      <Quetions />
    </>
  );
}
