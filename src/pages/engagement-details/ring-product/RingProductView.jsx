

import React, { useState, useEffect } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useNavigate, useParams } from "react-router-dom";
import "../../jewellary-details/JewellaryDetails.css";
import axiosClient from "../../../api/axios";
import { useCart } from "../../../cart/CartContext";
import Logosec from "../../w-signature/logosec";
import NoDealbreakers from "../../diamond-detail/diamondDetails/nobrokrage/NoDealbreakers";


const protectionPlans = [
  { id: "1-year", label: "1 Year - $79" },
  { id: "2-year", label: "2 Year - $99" },
  {
    id: "3-year",
    label: (
      <>
        3 Year - $159 <br />
        <small className="text-muted">MOST POPULAR</small>
      </>
    ),
  },
];

const getImageUrl = (img) => {
  const fallback = `${
    import.meta.env.VITE_BACKEND_URL
  }/storage/variation_images/No_Image_Available.jpg`;
  if (!img) return fallback;
  return `${import.meta.env.VITE_BACKEND_URL}/storage/variation_images/${img}`;
};
const getShapeImageUrl = (img) => `${import.meta.env.VITE_BACKEND_URL}${img}`;

const RingProductView = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [selectedMetalId, setSelectedMetalId] = useState(null);
  const [selectedShapeId, setSelectedShapeId] = useState(null);
  const [selectedVariationIndex, setSelectedVariationIndex] = useState(0);
  const [thumbnails, setThumbnails] = useState([]);
  const [selectedPlan, setSelectedPlan] = useState("1-year");
  const [activeFeature, setActiveFeature] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axiosClient.get(`/api/product-by-id/${id}`);
        const data = res.data;

        const metalVariationKeys = Object.keys(data.metal_variations);
        const defaultMetalId = metalVariationKeys[0];
        // CHANGE: detect build type
        const isBuild = (data.product?.is_build ?? data.is_build) === 1;
        setProduct(data);
        setSelectedMetalId(defaultMetalId);
        setSelectedVariationIndex(0);

        if (isBuild) {
          // CHANGE: handle build structure -> metal -> shape -> [variations]
          const shapeKeys = Object.keys(data.metal_variations[defaultMetalId]);
          const defaultShapeId = shapeKeys[0] ?? null;
          setSelectedShapeId(defaultShapeId);

          const defaultVariation =
            data.metal_variations[defaultMetalId][defaultShapeId][0];

          setMainImage(getImageUrl(defaultVariation?.images?.[0]));

          const allImages = metalVariationKeys.flatMap((metalId) =>
            Object.values(data.metal_variations[metalId]).flatMap(
              (shapeArray) =>
                shapeArray.flatMap((variation) =>
                  (variation.images || []).map((img) => getImageUrl(img))
                )
            )
          );

          setThumbnails([...new Set(allImages)]);
        } else {
          // CHANGE: keep your old (non-build) logic
          const defaultVariation = data.metal_variations[defaultMetalId][0];
          setMainImage(getImageUrl(defaultVariation?.images?.[0]));

          const allImages = metalVariationKeys.flatMap((metalId) =>
            data.metal_variations[metalId].flatMap((variation) =>
              (variation.images || []).map((img) => getImageUrl(img))
            )
          );

          setThumbnails([...new Set(allImages)]);
        }
      } catch (err) {
        console.error("Failed to fetch product", err);
      }
    };

    fetchProduct();
  }, [id]);

  const toggleFeature = (index) => {
    setActiveFeature(activeFeature === index ? null : index);
  };

  const handleMetalChange = (metalId) => {
    setSelectedMetalId(metalId);
    setSelectedVariationIndex(0);
    const isBuild = (product.product?.is_build ?? product.is_build) === 1;

    if (isBuild) {
      // CHANGE: reset & pick first shape for this metal
      const shapeKeys = Object.keys(product.metal_variations[metalId]);
      const firstShape = shapeKeys[0] ?? null;
      setSelectedShapeId(firstShape);
      const variation = product.metal_variations[metalId][firstShape][0];
      setMainImage(getImageUrl(variation?.images?.[0]));
    } else {
      const variation = product.metal_variations[metalId][0];
      setMainImage(getImageUrl(variation?.images?.[0]));
    }
  };

  // CHANGE: new handler for build shapes
  const handleShapeChange = (shapeId) => {
    setSelectedShapeId(shapeId);
    setSelectedVariationIndex(0);
    const variation = product.metal_variations[selectedMetalId][shapeId][0];
    setMainImage(getImageUrl(variation?.images?.[0]));
  };

  const handleCaratChange = (index) => {
    setSelectedVariationIndex(index);

    const isBuild = (product.product?.is_build ?? product.is_build) === 1;
    const variation = isBuild
      ? product.metal_variations[selectedMetalId][selectedShapeId][index] // CHANGE: read from shape for build
      : product.metal_variations[selectedMetalId][index];

    setMainImage(getImageUrl(variation?.images?.[0]));
  };

  if (!product) return <div className="container py-5">Loading...</div>;

  const isBuild = (product.product?.is_build ?? product.is_build) === 1;

  // CHANGE: figure selected variation with/without shape
  const selectedVariation = isBuild
    ? product.metal_variations?.[selectedMetalId]?.[selectedShapeId]?.[
        selectedVariationIndex
      ]
    : product.metal_variations?.[selectedMetalId]?.[selectedVariationIndex];

  const { name, description } = product.product;
  const { price, weight, sku: variationSku } = selectedVariation || {};
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-1 d-flex flex-column align-items-center gap-2 thumbs">
          {thumbnails.map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Thumb ${i + 1}`}
              onClick={() => setMainImage(src)}
              style={{
                cursor: "pointer",
                border: mainImage === src ? "2px solid #000" : "1px solid #ccc",
                padding: "2px",
                width: "60px",
                height: "60px",
                objectFit: "cover",
                borderRadius: "4px",
              }}
            />
          ))}
        </div>
        {/* Main image */}
        <div className="col-md-6 main-image">
          <div className="zoom-container">
            <Zoom>
              <img
                src={mainImage}
                alt="Main Product"
                className="img-fluid  zoomable-image"
              />
            </Zoom>
          </div>
          <button className="btn btn-outline-dark mt-2">
            📷 VIRTUAL TRY ON
          </button>
        </div>

        {/* Right panel */}
        <div className="col-md-5">
          <h5 className="text-muted" style={{ fontSize: "32px", bold: "600" }}>
            {name}
          </h5>
          <p>
            <span className="text-muted">• SKU: {variationSku}</span>
          </p>
          <p>
            price: <strong>₹{price}</strong>{" "}
          </p>
          <p className="mb-1">METAL COLOR</p>

          <div className="d-flex mb-3">
            {/* {Object.entries(product.metal_variations).map(
              ([metalId, group]) => {
                // CHANGE: pick one variation to render metal_color (different for build)
                const metal = isBuild
                  ? group[Object.keys(group)[0]][0].metal_color
                  : group[0].metal_color;

                return (
                  <div
                    key={metalId}
                    className={`option-circle ${
                      selectedMetalId === metalId ? "active" : ""
                    }`}
                    onClick={() => handleMetalChange(metalId)}
                    title={metal?.name}
                    style={{ background: metal?.hex }}
                  >
                    {metal?.quality}
                  </div>
                );
              }
            )} */}
            {Object.entries(product.metal_variations)
              .sort(([aKey, aGroup], [bKey, bGroup]) => {
                const aMetal = isBuild
                  ? aGroup[Object.keys(aGroup)[0]][0].metal_color
                  : aGroup[0].metal_color;

                const bMetal = isBuild
                  ? bGroup[Object.keys(bGroup)[0]][0].metal_color
                  : bGroup[0].metal_color;

                const order = ["14k", "18k", "PL"]; // Customize the order here
                return (
                  order.indexOf(aMetal?.quality) -
                  order.indexOf(bMetal?.quality)
                );
              })
              .map(([metalId, group]) => {
                const metal = isBuild
                  ? group[Object.keys(group)[0]][0].metal_color
                  : group[0].metal_color;

                return (
                  <div
                    key={metalId}
                    className={`option-circle ${
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

          {/* Shape switch (only build) */}
          {isBuild && selectedMetalId && (
            <div className="product-variation__shape-group mb-3">
              <small className="product-variation__shape-title">
                Shape:&nbsp;
                <span className="shape-name">
                  {product.metal_variations[selectedMetalId]?.[
                    selectedShapeId
                  ]?.[0]?.shape?.name || "N/A"}
                </span>
              </small>
              <div className="d-flex flex-wrap gap-3 mt-1">
                {Object.keys(product.metal_variations[selectedMetalId]).map(
                  (shapeId) => {
                    const firstVar =
                      product.metal_variations[selectedMetalId][shapeId][0] ||
                      {};
                    const shape = firstVar.shape || {};
                    const img = getShapeImageUrl(shape.image);

                    return (
                      <button
                        key={shapeId}
                        type="button"
                        className={`shape-option ${
                          selectedShapeId === shapeId ? "active" : ""
                        }`}
                        onClick={() => handleShapeChange(shapeId)}
                      >
                        <span className="shape-circle">
                          <img
                            src={img}
                            alt={shape.name || `Shape ${shapeId}`}
                          />
                        </span>
                      </button>
                    );
                  }
                )}
              </div>
            </div>
          )}

          {/* Carat (weight) pills */}
          <div className="product-variation__carat-group mb-3">
            <small className="product-variation__carat-title">
              Total Carat Weight
            </small>

            <div className="d-flex flex-wrap gap-2 mt-1">
              {(isBuild
                ? product.metal_variations?.[selectedMetalId]?.[
                    selectedShapeId
                  ] || []
                : product.metal_variations?.[selectedMetalId] || []
              ).map((variation, index) => (
                <button
                  key={index}
                  className={`product-variation__carat-pill ${
                    selectedVariationIndex === index ? "active" : ""
                  }`}
                  onClick={() => handleCaratChange(index)}
                >
                  {variation.weight || "NA"}
                </button>
              ))}
            </div>
          </div>

          <hr className="hr-line" />

          {selectedVariation && (
            <p>
              <strong>Weight:</strong> {weight}g
            </p>
          )}

          <p>
            <strong>Description:</strong>
          </p>
          <div className="bg-light p-2" style={{ whiteSpace: "pre-wrap" }}>
            {description}
          </div>

          <hr className="hr-line" />
          {/* Protection plan */}
          <div className="plan-title ">
            ADD CLARITY COMMITMENT PROTECTION PLAN
          </div>
          <p className="protection-plan">
            Ensure your jewelry lasts a lifetime.{" "}
            <span title="More Info">ℹ️</span>
          </p>
          <div className="d-flex gap-2">
            {protectionPlans.map((plan) => (
              <div
                key={plan.id}
                className={`option-btn ${
                  selectedPlan === plan.id ? "active" : ""
                }`}
                onClick={() => setSelectedPlan(plan.id)}
              >
                {plan.label}
              </div>
            ))}
          </div>

          <hr className="hr-line" />
          <div className="container py-4">
            <div className="mb-4">
                  <button
  className="btn btn-dark w-100 mt-2"
  onClick={() => {
    if (!selectedVariation) {
      alert("Please select a variation first.");
      return;
    }

    const diamond = {
      carat_weight: selectedVariation.weight,
      shape: { name: "Round", image: "round.png" }, // use actual shape data
      price: selectedVariation.price,
      certificate_number: selectedVariation.sku,
      certificate_company: { dl_name: "GIA" },
      cut: { full_name: "Ideal" },
      color: { name: "D" },
      clarity: { name: "VVS1" },
      polish: { name: "-" },
      symmetry: { name: "-" },
      fluorescence: { name: "-" },
      table_diamond: "-",
      depth: "-",
      measurements: "-",
      image_link: mainImage,
    };

    navigate(`/diamond-details/${selectedVariation.sku}`, {
      state: { diamond },
    });
  }}
>
  CHOOSE THIS SETTING
</button>


              <button className="btn btn-outline-dark w-100 mt-2">
                VIRTUAL / SHOWROOM APPOINTMENT
              </button>
              <p className="mt-2 mb-0">
                Ships by <strong>Thurs, June 12</strong> | Track in real time
                before it ships
              </p>
              <p className="mb-1">
                <span className="text-primary">0% APR</span> or as low as $53/mo
                with <strong>affirm</strong>. <a href="#">See if you qualify</a>
              </p>
              <p className="mb-2">
                Free Insured Shipping. <a href="#">30 Day Returns.</a>
              </p>

              <hr className="hr-line" />

              <div className="common-btn">
                <button className="btn btn-light">
                  <i className="bi bi-envelope"></i> DROP A HINT
                </button>
                <button className="btn btn-light">
                  <i className="bi bi-telephone"></i> CONTACT US
                </button>
                <button className="btn btn-light">
                  <i className="bi bi-heart"></i> ADD TO WISHLIST
                </button>
                <button className="btn btn-light">
                  <i className="bi bi-calendar-event"></i> SCHEDULE APPOINTMENT
                </button>
              </div>
              <div className="mt-2">
                <span className="me-2  share">SHARE :-</span>
                <i className="bi bi-pinterest"></i>
                <i className="bi bi-facebook"></i>
                <i className="bi bi-x"></i>
              </div>
              <div className="bg-light p-2 mt-3">
                <i className="bi bi-gift"></i> Earn 847 Points when you buy this
                item.
              </div>
            </div>
          </div>
        </div>

        <div className="customer-reviews-container">
      <div className="reviews-header">
        <h2>CUSTOMER REVIEWS</h2>
        <button className="write-review-btn">
          <i className="bi bi-pencil-square"></i> Write a Review
        </button>
      </div>

      <div className="reviews-overview">
        <div className="review-score">
          <div className="score">5.0 ★★★★★</div>
          <div className="score-text">Based on 1 Reviews</div>
        </div>

        <div className="rating-bars">
          {[5, 4, 3, 2, 1].map((star, idx) => (
            <div key={star} className="rating-bar">
              <span>{`${star} stars`}</span>
              <div className="progress">
                <div
                  className="progress-bar"
                  style={{ width: star === 5 ? "100%" : "0%" }}
                >
                  {star === 5 && "(1)"}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <ul className="review-tabs">
        <li className="active">Reviews <span>1</span></li>
      </ul>

      <div className="single-review">
        <div className="reviewer-avatar">ST</div>
        <div className="review-content">
          <div className="reviewer-info">
            <strong>Steven T.</strong>{" "}
            <span className="verified">Verified Buyer</span>
            <span className="review-date">06/29/2025</span>
          </div>
          <div className="review-title">★★★★★ She was speechless!</div>
          <p className="review-text">
            It’s everything she ever wanted. It was also the perfect diamond size without breaking the bank and focusing
            more on the quality of diamond itself. I chose the best one WC had of that size and you can definitely tell
            in person. The craftsmanship is great, the packaging was well put together, and the communication throughout
            the process was also nice. I would definitely recommend WC to anyone looking for a ring you can customize in
            many ways. The quality is incredible. This ring leaves you in shock and lures you in to look even closer!
          </p>
          <div className="review-product-name">
            Fine Vela Classic Pave Diamond Engagement Ring
          </div>
          <a href="#" className="review-share">🔗 Share</a>
        </div>
      </div>
    </div> 


       

   <Logosec />

        <div className="container py-4">
          <div className="related-products">
            <h4>Related Products</h4>
            <div className="d-flex flex-wrap">
              {[...Array(4)].map((_, i) => (
                <img
                  key={i}
                  src="/assets/images/main.png"
                  className="product-thumb"
                  alt="Related Product"
                />
              ))}
            </div>
          </div>

          <div className="custom-slider-section">
            <h4>Inspired By Your Browsing History</h4>
            <div className="d-flex flex-wrap">
              {[...Array(4)].map((_, i) => (
                <img
                  key={i}
                  src="/assets/images/main.png"
                  className="product-thumb"
                  alt="Browsing History Product"
                />
              ))}
            </div>
          </div>

          <div className="custom-slider-section">
            <h4>Top Selling Products</h4>
            <div className="d-flex flex-wrap">
              {[...Array(4)].map((_, i) => (
                <img
                  key={i}
                  src="/assets/images/main.png"
                  className="product-thumb"
                  alt="Top Selling Product"
                />
              ))}
            </div>
          </div>
        </div>
      </div>

<NoDealbreakers />

    </div>
  );
};

export default RingProductView;

