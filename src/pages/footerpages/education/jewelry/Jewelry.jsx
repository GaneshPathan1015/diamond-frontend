import React from "react";
import "./Jewelry.css";

function Jewelry() {
  return (
    <>
      {/* Hero Section */}
      <section className="jewelry_hero d-flex flex-column justify-content-center align-items-center text-center">
        <h1>FINE JEWELRY EDUCATION</h1>
        <span>
          Information on the different styles of earrings, necklaces and bracelets. Learn about Gifting Occasions as well.
        </span>
      </section>

      {/* Content Section */}
      <section className="pt-5">
        <div className="container">
          {/* Top Navigation */}
          <nav className="top-nav">
            <a href="/engagement-ring-style">ENGAGEMENT RINGS</a><span>|</span>
            <a href="/diamonds">DIAMONDS</a><span>|</span>
            <a href="/wedding-band-styles">WEDDING BANDS</a><span>|</span>
            <a href="#" className="active">FINE JEWELRY</a><span>|</span>
            <a href="/gemstones-types-guide">GEMSTONE</a>
          </nav>

          <div className="row">
            {/* Sidebar */}
            <div className="col-md-3">
              <div className="sidebar-container">
                <ul className="sidebar-gemstones">
                  <li className="active">EARRINGS</li>
                  <li>NECKLACES</li>
                  <li>BRACELETS</li>
                  <li>GIFTING OCCASSIONS</li>
                </ul>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="col-md-9">
              {/* January - Garnet */}
              <div className="main-content">
                <h1>Studs</h1>
                <div className="gemstone-details">
                  <p>
                    Diamond stud earrings are timeless and versatile, showcasing a single diamond in an elegant, understated design. They sit close to the earlobe, offering comfort for daily wear, and effortlessly elevate any outfit with a touch of sophistication. Round diamonds are a classic choice, prized for their symmetrical brilliance, while princess and cushion cuts provide a modern twist. For a hint of romance, consider oval-shaped diamonds, adding a touch of elegance to your collection. Lab grown diamond stud earrings are perfect for everyday or special occasions.
                  </p>
                  <img src="/images/jewelry/1.jpg" alt="Garnet gemstone" className="gemstone-img" />
                </div>
                <div className="related-posts">
                  <h2>RELATED POSTS</h2>
                  <ul>
                    <li><a href="#">Lab Created Stud Earring Prices</a></li>
                    <li><a href="#">Lab Diamond Studs</a></li>
                    <li><a href="#">Hoops vs. Stud Earrings - What's the Difference</a></li>
                  </ul>
                </div>
              </div>

              {/* February - Amethyst */}
              <div className="main-content">
                <h1>Hoops</h1>
                <div className="gemstone-details">
                  <p>
                    Hoop earrings remain a classic choice, offering a wide range of styles to suit your preferences. From sleek and minimalistic huggies to glamorous diamond hoop earrings and elegant pearl hoops, there's an option for every occasion. Geometric hoops add a unique twist, while large statement hoops make a bold fashion statement. Double hoops complement most face shapes and hairstyles with their dual hoops and various designs. Whatever your style, hoops are here to stay, emphasizing your facial features and enhancing your overall look.
                  </p>
                  <img src="/images/jewelry/2.jpg" alt="Amethyst gemstone" className="gemstone-img" />
                </div>
                <div className="related-posts">
                  <h2>RELATED POSTS</h2>
                  <ul>
                    <li><a href="#">A Guide To Gold Hoop Earrings</a></li>
                    <li><a href="#">A Guide to Hoop Earrings</a></li>
                    <li><a href="#">Hoops vs. Stud Earrings - What's the Difference</a></li>
                  </ul>
                </div>
              </div>

              {/* March - Aquamarine */}
              <div className="main-content">
                <h1>Drops</h1>
                <div className="gemstone-details">
                  <p>
                    Drop earrings and dangle earrings are often confused, but the key distinction lies in their length and mobility. Drop earrings are stationary and fall just below the earlobe, while dangle earrings are longer and designed to sway gracefully. Dangle earrings can vary in complexity, featuring intricate designs or a single chain with an ornament. Drop earrings have a timeless appeal, enjoying a resurgence in popularity due to their versatility and suitability for various occasions, from daily wear to elegant events.
                  </p>
                  <img src="/images/jewelry/3.jpg" alt="Aquamarine gemstone" className="gemstone-img" />
                </div>
                <div className="related-posts">
                  <h2>RELATED POSTS</h2>
                  <ul>
                    <li><a href="#">Trend Alert: The Most Classy Drop Earring Styles of the Season</a></li>
                    <li><a href="#">Guide to Clip-On Earrings</a></li>
                    <li><a href="#">Guide to Drop Earrings</a></li>
                  </ul>
                </div>
              </div>

              {/* April - Diamond */}
              <div className="main-content">
                <h1>Halo</h1>
                <div className="gemstone-details">
                  <p>
                    Similar to halo-style engagement rings, halo earrings boast a central stone encircled by smaller diamonds, creating a halo-like effect that exudes trendiness and timeless elegance. These earrings, whether in stud, double halo, or drop style, bestow an aura of utmost sophistication upon the wearer, reminiscent of royalty. Their distinctive design and abundant use of diamonds result in exceptional sparkle and brilliance, setting them apart from other earring styles. For a more statement look, opt for lab grown diamond halo earrings.
                  </p>
                  <img src="/images/jewelry/4.jpg" alt="Diamond gemstone" className="gemstone-img" />
                </div>
                <div className="related-posts">
                  <h2>RELATED POSTS</h2>
                  <ul>
                    <li><a href="#">What Are Halo Style Earrings and Why Are They a Good Choice?</a></li>
                    <li><a href="#">Halo Earrings to Love Forever (No. 3 is Our Favorite!)</a></li>
                    <li><a href="#">Everything You Need to Know About Earrings</a></li>
                  </ul>
                </div>
              </div>

              {/* May - Emerald */}
              <div className="main-content">
                <h1>Diamond Earrings</h1>
                <div className="gemstone-details">
                  <p>
                    Unlike engagement rings or wedding bands, diamond earrings offer versatility and can change styles. Various types include classic diamond stud earrings, perfect for daily wear; diamond hoop earrings, available in different sizes and styles; halo earrings, which offer a dramatic yet practical choice for everyday wear; and dangle earrings, which come in diverse lengths and shapes, making them suitable for both casual and formal events. Men's earrings feature classic options like round diamond solitaire studs, simple metal crosses, and attention-grabbing dangles.                  </p>
                  <img src="/images/jewelry/5.jpg" alt="Emerald gemstone" className="gemstone-img" />
                </div>
                <div className="related-posts">
                  <h2>RELATED POSTS</h2>
                  <ul>
                    <li><a href="#">Men’s Guide to Diamond Earrings</a></li>
                    <li><a href="#">7 Best Diamond Stud Earrings You Should Gift This Holiday Season</a></li>
                    <li><a href="#">Lab Diamond Studs for Everyday Wear</a></li>
                  </ul>
                </div>
              </div>

              {/* June - Pearl */}
              <div className="main-content PB-4" style={{borderBottom: "1px solid black" }}>
                <h1>Earring Backs & Post Types</h1>
                <div className="gemstone-details">
                  <p>
                    Earring backs are the unsung heroes of your jewelry collection, safeguarding your valuable and sentimental pieces. For versatile stud earrings, consider options like push backs for discreet simplicity, secure lock backs for added security, or screw backs for the ultimate in steadfastness. If you prefer dangle and hoop earrings, safety lock closures offer reliable support, while lever backs secure your earrings and add a touch of elegance. Regardless of your style, there's an earring back type to keep your precious jewelry safe and stylish.                  </p>
                  <img src="/images/jewelry/6.jpg" alt="Pearl gemstone" className="gemstone-img" />
                </div>
                <div className="related-posts">
                  <h2>RELATED POSTS</h2>
                  <ul>
                    <li><a href="#">What You Need to Know About Backless Earrings (and Secure Backs)</a></li>
                    <li><a href="#">Earring Backing Guide</a></li>
                    <li><a href="#">Men’s Guide to Diamond Earrings</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Jewelry;
