import React, { useState } from 'react';
import './signature.css';
import EngagementRings from './engagement/EngagementRings';


const logos = [
  {
    name: "Forbes",
    image: "https://www.withclarity.com/cdn/shop/files/Forbes-logo_1604cf68-103c-4294-86c2-83502b3f49fc.png?v=1709124871",
    description: "Forbes featured our innovation in fine jewelry.",
  },
  {
    name: "The Knot",
    image: 'https://www.withclarity.com/cdn/shop/files/The-knot-logo.png?v=1709124881',
    description: "The Knot recommended us for unique wedding bands.",
  },
  {
    name: "VOGUE",
    image: 'https://www.withclarity.com/cdn/shop/files/VOGUE-logo.png?v=1709124892',
    description: "VOGUE praised our timeless craftsmanship.",
  },
  {
    name: "WWD",
    image: 'https://www.withclarity.com/cdn/shop/files/Womens_Wear_Daily_Logo.png?v=1748430435',
    description: "WWD highlighted our latest bridal collection.",
  },
  {
    name: "BRIDES",
    image: 'https://www.withclarity.com/cdn/shop/files/BRIDES-logo_948ba337-c2ce-4664-bdf0-a02f2846b834.png?v=1709124914',
    description: "BRIDES selected us as a top wedding jewelry brand.",
  },
  {
    name: "People",
    image:'https://www.withclarity.com/cdn/shop/files/People-logo.png?v=1709124934',
    description: "People Magazine covered our designer collab.",
  },
  {
    name: "BAZAAR",
    image: 'https://www.withclarity.com/cdn/shop/files/BAZAAR-logo.png?v=1709124942',
    description: "BAZAAR loves our elegant engagement rings.",
  },
];





const Signature = () => {
     const [hoveredIndex, setHoveredIndex] = useState(null);


const details = [
  {
    title: "The W Signature—Where Form Meets Feeling",
    description:
      "Inspired by our name The CarateCasa, each ring features a distinctive “W”-shaped basket—an elegant, architectural design that cradles the center stone in light. More than a signature detail, it’s a symbol of brilliance, engineered to maximize sparkle from every angle. Finished with knife-edged prongs, each ring balances innovation with timeless design.",
    image: "https://www.withclarity.com/cdn/shop/files/w_r_1_480x.jpg?v=1746013571",
  },
  {
    title: "Our Signature Icon, Hidden Just for You",
    description:
      "Timeless in design and rich with meaning, each ring features our exclusive diamond-shaped cutout—hidden beneath the center stone and visible only to those you choose to share it with. This subtle detail, inspired by our logo icon, offers a unique glimpse into the heart of your diamond.",
    image: "https://www.withclarity.com/cdn/shop/files/w_r2_480x.jpg?v=1746013584",
  },
  {
    title: "Stamped in Legacy",
    description:
      "Meticulously inscribed within each W Signature ring, a unique serial number—maintained only at our headquarters—ensures authenticity, traceability, and a lasting connection to your one-of-a-kind design. Enjoy the added benefits of complimentary resizing for two years, a detailed appraisal, and instant Platinum status in our Radiance Rewards program.",
    image: "https://www.withclarity.com/cdn/shop/files/w_r3_480x.jpg?v=1746013690",
  },
];







  return (
    <>
      {/* Hero Section */}
      <section className="hero_section_wrapper">
        <div className="container-fluid p-0 position-relative">
          <video width="100%" height="100%" autoPlay muted loop>
            <source src="https://cdn.shopify.com/videos/c/o/v/7016be705fe24c0387a61899487b6000.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

<section className="w-signature-description py-5">
 
        <p className="description-text container">
          <strong>The W Signature</strong> showcases a distinctive W-shaped basket, inspired by the The CaratCasa brand name. Designed to celebrate the brilliance <br /> of the center stone, The W Signature embodies timeless artistry, creating an iconic silhouette that remains classic for generations to come.
        </p>
    
    </section>

  <section className="love-details">
      <h2 className="section-title">Love is in the Details</h2>
      <div className="details-grid">
        {details.map((item, index) => (
          <div className="detail-item" key={index}>
            <img src={item.image} alt={item.title} className="detail-img" />
            <h3 className="detail-title">{item.title}</h3>
            <p className="detail-desc">{item.description}</p>
          </div>
        ))}
      </div>
    </section>


    {/* Engagement */}

    <EngagementRings />


        <div className="logo-section">
      <h2 className="title">We’re the Talk of the Town</h2>
      <div className="logo-row">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="logo-wrapper"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img src={logo.image} alt={logo.name} className="logo-img" />
            {index < logos.length - 1 && <div className="divider" />}
          </div>
        ))}
      </div>
      <p className="description">
        {hoveredIndex !== null
          ? logos[hoveredIndex].description
          : "NFL Releases Wedding Bands Collection With Fine Jewelry Label The CarateCasa."}
      </p>
    </div>
    </>
  );
};

export default Signature;
