{
  /* Mobile Layout */
}
{
  /* <div className="d-block d-md-none">
        <div className="mobile-image-slider">
          {currentMedia[currentImageIndex]?.type === "video" ? (
            <video
              src={currentMedia[currentImageIndex].src}
              className="main-image"
              autoPlay
              muted
              loop
              playsInline
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
            />
          ) : (
            <img
              src={currentMedia[currentImageIndex]?.src}
              alt="Product"
              className="main-image"
            />
          )}
          {currentMedia.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="btn slider-arrow left d-flex align-items-center justify-content-center"
              >
                <ChevronLeft />
              </button>
              <button
                onClick={nextImage}
                className="btn slider-arrow right d-flex align-items-center justify-content-center"
              >
                <ChevronRight />
              </button>
              <div className="slider-dots d-flex gap-2">
                {currentMedia.map((_, idx) => (
                  <div
                    key={idx}
                    className={`dot rounded-circle ${
                      idx === currentImageIndex ? "active" : ""
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        <div className="p-3 pb-0">
          <div className="d-flex align-items-center gap-2 mb-2">
            <div className="text-yellow-custom small">★★★★★</div>
            <span className="small text-muted">21 reviews</span>
          </div>
          <h1 className="h5 font-serif mb-2">{name}</h1>
          <p className="small text-muted mb-4">SKU#{variationSku}</p>
          <div className="mb-4">
            <span className="h4 fw-bold">{price}</span>
            <span className="text-secondary text-decoration-line-through ms-2">
              {original_price}
            </span>
            <span className="text-green-custom small ms-2">
              (${priceDifference} OFF)
            </span>
          </div>

          <div className="mb-4">
            <div className="d-flex align-items-center gap-2 mb-3">
              <span className="small fw-semibold">METAL COLOR:</span>
              <span className="small">{metalName}</span>
            </div>
            <div className="d-flex gap-2">
              {Object.entries(product.metal_variations)
                .sort(([aKey, aGroup], [bKey, bGroup]) => {
                  const aMetal = aGroup[0].metal_color;
                  const bMetal = bGroup[0].metal_color;
                  const order = ["14k", "18k", "PL"];
                  return (
                    order.indexOf(aMetal?.quality) -
                    order.indexOf(bMetal?.quality)
                  );
                })
                .map(([metalId, group]) => {
                  const metal = group[0].metal_color;
                  return (
                    <div
                      key={metalId}
                      className={`btn rounded-circle d-flex align-items-center justify-content-center fw-semibold metal-btn ${
                        selectedMetalId === metalId ? "active" : ""
                      }`}
                      onClick={() => handleMetalChange(metalId)}
                      title={metal?.name}
                      style={{ background: metal?.hex }}
                    >
                      {metal?.quality}
                    </div>
                  );
                })}
            </div>
          </div>

          <p className="small fw-semibold mb-4">DIAMOND TYPE : LAB</p>

          <div className="mb-4">
            <span className="small fw-semibold d-block mb-3">
              TOTAL CARAT WEIGHT : {weight}
            </span>
            <div className="d-flex flex-wrap gap-2">
              {(product.metal_variations?.[selectedMetalId] || []).map(
                (variation, index) => (
                  <button
                    key={index}
                    className={`product-variation__carat-pill ${
                      selectedVariationIndex === index ? "active" : ""
                    }`}
                    onClick={() => handleCaratChange(index)}
                  >
                    {variation.weight || "NA"}
                  </button>
                )
              )}
            </div>
          </div>

          <div className="mb-4">
            <div className="d-flex align-items-center gap-2 mb-3">
              <span className="small fw-semibold">DIAMOND QUALITY:</span>
              <span className="small">F/G SI+</span>
            </div>
            <div className="d-flex gap-2">
              {qualitiesb.map((quality) => (
                <button
                  key={quality.id}
                  onClick={() => setSelectedQuality(quality.id)}
                  className={`btn border quality-btn px-3 py-1 small ${
                    selectedQuality === quality.id ? "active" : ""
                  }`}
                >
                  {quality.label}
                </button>
              ))}
            </div>
          </div>

          <p className="small mb-2">
            Ships by <strong>{formattedDate}</strong> | Track in real time
            before it ships
          </p>
          <p className="small mb-4">
            Free Insured Shipping.{" "}
            <a href="#" className="text-decoration-underline">
              30 Day Returns.
            </a>
          </p>

          <div className="border-top pt-4">
            <div className="row row-cols-2 g-2">
              {actions.map((item) => (
                <div className="col" key={item.text}>
                  <button
                    className="btn btn-outline-secondary w-100 d-flex align-items-center justify-content-center gap-2 small py-2"
                    onClick={() => handleNavigation(item)}
                  >
                    {item.icon} {item.text}
                  </button>
                </div>
              ))}
            </div>
          </div>

          <div className="product-details-container">
            <div>
              <div
                className="detail-section-header"
                onClick={() => toggleSection("product")}
              >
                <h5 className="detail-section-title">Product Details</h5>
                {openSection === "product" ? (
                  <ChevronUp size={20} className="chevron-icon" />
                ) : (
                  <ChevronDown size={20} className="chevron-icon" />
                )}
              </div>
              <div
                className={`section-content ${
                  openSection === "product" ? "" : "collapsed"
                }`}
              >
                <p className="detail-description">{description || "NA"}</p>

                <div className="details-grid">
                  <span className="detail-label">Metal Details</span>
                  <span className="detail-value">{metalName}</span>

                  <span className="detail-label">Product Model</span>
                  <span className="detail-value">{products_model || "NA"}</span>

                  <span className="detail-label">clarity</span>
                  <span className="detail-value">
                    {product_clarity || "NA"}
                  </span>
                </div>
              </div>
            </div>

            <div>
              <div
                className="detail-section-header"
                onClick={() => toggleSection("stone")}
              >
                <h5 className="detail-section-title">Stone Details</h5>
                {openSection === "stone" ? (
                  <ChevronUp size={20} className="chevron-icon" />
                ) : (
                  <ChevronDown size={20} className="chevron-icon" />
                )}
              </div>
              <div
                className={`section-content ${
                  openSection === "stone" ? "" : "collapsed"
                }`}
              >
                <div className="details-grid">
                  <span className="detail-label">Stone Type</span>
                  <span className="detail-value">{stone_type || "NA"}</span>

                  <span className="detail-label">Total Carat Weight</span>
                  <span className="detail-value">{weight}</span>

                  <span className="detail-label">Cut</span>
                  <span className="detail-value">Brilliant</span>

                  <span className="detail-label">Clarity</span>
                  <span className="detail-value">Single Row</span>
                </div>
              </div>
            </div>

            <div>
              <div
                className="detail-section-header"
                onClick={() => toggleSection("shipping")}
              >
                <h5 className="detail-section-title">Shipping & Returns</h5>
                {openSection === "shipping" ? (
                  <ChevronUp size={20} className="chevron-icon" />
                ) : (
                  <ChevronDown size={20} className="chevron-icon" />
                )}
              </div>
              <div
                className={`section-content ${
                  openSection === "shipping" ? "" : "collapsed"
                }`}
              >
                <p className="detail-description">
                  Free standard shipping on all orders. Express shipping
                  available at checkout.
                </p>
                <p className="detail-description">
                  30-day return policy. Items must be in original condition with
                  all packaging and documentation.
                </p>
              </div>
            </div>

            <div>
              <div
                className="detail-section-header"
                onClick={() => toggleSection("warranty")}
              >
                <h5 className="detail-section-title">Lifetime Warranty</h5>
                {openSection === "warranty" ? (
                  <ChevronUp size={20} className="chevron-icon" />
                ) : (
                  <ChevronDown size={20} className="chevron-icon" />
                )}
              </div>
              <div
                className={`section-content ${
                  openSection === "warranty" ? "" : "collapsed"
                }`}
              >
                <p className="detail-description">
                  All jewelry comes with a lifetime warranty covering
                  manufacturing defects and craftsmanship.
                </p>
                <p className="detail-description">
                  Includes complimentary cleaning, inspection, and minor repairs
                  for the lifetime of the piece.
                </p>
              </div>
            </div>

            <button className="help-button">
              <MessageCircle size={20} />
              Need Help?
            </button>
          </div>
        </div>

        {showMobileCart && (
          <div className=" bg-white p-3 pt-1 border-top">
            <div className="d-flex align-items-center justify-content-between gap-3">
              <div>
                <div className="small text-muted text-decoration-line-through">
                  {original_price}
                </div>
                <div className="h5 fw-bold mb-0">{price}</div>
              </div>
              <button
                className="btn flex-grow-1 py-2 fw-semibold bg-brand-blue"
                style={{ backgroundColor: "#06374a", color: "white" }}
                onClick={() => {
                  const cartItem = {
                    ...selectedVariation,
                    productType: "gift",
                    name: name,
                    itemQuantity: 1,
                    selectedPlan: selectedPlan,
                  };
                  addToCart(cartItem);
                  navigate("/cart");
                }}
              >
                ADD TO CART
              </button>
            </div>
          </div>
        )}
      </div> */
}

{
  /* Review System */
}
{
  /* <div className="container mt-5">
        <ProductReviewSystem
          productId={productId}
          refreshTrigger={reviewsRefreshed}
        />
      </div> */
}
