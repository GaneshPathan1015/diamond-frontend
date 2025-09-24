import React, { useState, useEffect } from "react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import "../../jewellary-details/JewellaryDetails.css";
import axiosClient from "../../../api/axios";
import { useCart } from "../../../cart/CartContext";
import Logosec from "../../w-signature/logosec";
import NoDealbreakers from "../../diamond-detail/diamondDetails/nobrokrage/NoDealbreakers";
import DiamondSelectionModal from "./DiamondSelectionModal";
import RingSettingModal from "./RingSettingModal";

const getImageUrl = (img) => {
  const fallback = `${
    import.meta.env.VITE_BACKEND_URL
  }/storage/variation_images/No_Image_Available.jpg`;
  if (!img) return fallback;
  return `${import.meta.env.VITE_BACKEND_URL}${img}`;
};
const getVideoUrl = (video) => {
  if (!video) return null;
  return `${import.meta.env.VITE_BACKEND_URL}${video}`;
};
const getShapeImageUrl = (img) => `${import.meta.env.VITE_BACKEND_URL}${img}`;

const RingProductView = ({ diamond }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [selectedMetalId, setSelectedMetalId] = useState(null);
  const [selectedShapeId, setSelectedShapeId] = useState(null);
  const [selectedVariationIndex, setSelectedVariationIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [showSettingModal, setShowSettingModal] = useState(false);
  const [modalProductData, setModalProductData] = useState(null);
  const [isVideo, setIsVideo] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axiosClient.get(`/api/engagement-buildproduct/${id}`);
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
        } else {
          // CHANGE: keep your old (non-build) logic
          const defaultVariation = data.metal_variations[defaultMetalId][0];
          setMainImage(getImageUrl(defaultVariation?.images?.[0]));
        }
      } catch (err) {
        console.error("Failed to fetch product", err);
      }
    };

    fetchProduct();
  }, [id]);

  const handleMetalChange = (metalId) => {
    setSelectedMetalId(metalId);
    setSelectedVariationIndex(0);
    setIsVideo(false);
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
    setIsVideo(false);
    const variation = product.metal_variations[selectedMetalId][shapeId][0];
    setMainImage(getImageUrl(variation?.images?.[0]));
  };

  const handleCaratChange = (index) => {
    setSelectedVariationIndex(index);
    setIsVideo(false);

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
  const selectedShapeName = isBuild
    ? product.metal_variations?.[selectedMetalId]?.[selectedShapeId]?.[0]?.shape
        ?.name
    : null;

  // Get selected carat weight
  const selectedCaratWeight = selectedVariation?.weight || null;

  // Create ringCartItem here
  const ringCartItem = {
    ...selectedVariation,
    sku: variationSku,
    name: name,
    price: price,
    image: mainImage,
    weight: weight,
    selectedMetal: selectedMetalId,
    shape: selectedShapeName || "",
    caratWeight: selectedCaratWeight || "",
  };
  const handleOpenSettingModal = () => {
    const cartItem = {
      ...selectedVariation,
      sku: variationSku,
      name: name,
      price: price,
      image: mainImage,
      weight: weight,
      selectedMetal: selectedMetalId,
      shape: selectedShapeName || "",
      caratWeight: selectedCaratWeight || "",
      productType: "build",
      itemQuantity: 1,
    };
    setModalProductData(cartItem);
    setShowSettingModal(true);
  };

  const handleChooseSetting = () => {
    if (diamond) {
      //  If diamond exists
      const productSlug = "buildProduct";
      navigate(`/product/${productSlug}`, {
        state: { diamond, ringCartItem, fromChooseSetting: false },
      });
    } else {
      //  If no diamond → redirect user to diamond selection
      setShowModal(true);
    }
  };

  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-1 d-flex flex-column align-items-center gap-2 thumbs">
          {/* Video thumbnail */}
          {selectedVariation?.video && (
            <video
              key="video-thumb"
              src={getVideoUrl(selectedVariation.video)}
              onClick={() => {
                setMainImage(getVideoUrl(selectedVariation.video));
                setIsVideo(true);
              }}
              className={isVideo ? "selected" : ""}
              style={{
                cursor: "pointer",
                border: isVideo ? "2px solid #000" : "1px solid #ccc",
                padding: "2px",
                width: "60px",
                height: "60px",
                objectFit: "scale-down",
                borderRadius: "4px",
              }}
            />
          )}
          {selectedVariation?.images?.map((img, i) => {
            const src = getImageUrl(img);
            return (
              <img
                key={i}
                src={src}
                alt={`Thumb ${i + 1}`}
                onClick={() => {
                  setMainImage(src);
                  setIsVideo(false);
                }}
                style={{
                  cursor: "pointer",
                  border:
                    mainImage === src ? "2px solid #000" : "1px solid #ccc",
                  padding: "2px",
                  width: "60px",
                  height: "60px",
                  objectFit: "scale-down",
                  borderRadius: "4px",
                }}
              />
            );
          })}
        </div>
        {/* Main image */}
        {/* <div className="col-md-7">
          <div className="zoom-container">
            <img src={mainImage} alt="Main Product" />
          </div>
          <button className="btn btn-outline-dark mt-2">
            📷 VIRTUAL TRY ON
          </button>
        </div> */}
        <div className="col-md-7">
          <div className="zoom-container">
            {isVideo ? (
              <video
                src={mainImage}
                autoPlay
                muted
                loop
                style={{
                  width: "100%",
                  maxHeight: "500px",
                  objectFit: "contain",
                }}
              />
            ) : (
              <img
                src={mainImage}
                alt="Main Product"
                style={{
                  width: "100%",
                  maxHeight: "500px",
                  objectFit: "contain",
                }}
              />
            )}
          </div>
          {selectedVariation?.video && (
            <button className="btn btn-outline-dark mt-2">
              📷 VIRTUAL TRY ON
            </button>
          )}
        </div>

        {/* Right panel */}
        <div className="col-md-4">
          <h5 style={{ fontSize: "32px", bold: "600" }}>{name}</h5>
          <p>
            <span className="text-muted">SKU#: {variationSku}</span>
          </p>
          <h3>
            <strong>${price}</strong>{" "}
            <span style={{ fontSize: "15px" }}>(Setting Only)</span>
          </h3>
          {/* Shape switch (only build) */}
          {isBuild && selectedMetalId && (
            <div className="product-variation__shape-group mb-3">
              <small className="product-variation__shape-title">
                SHAPE:&nbsp;
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
          <p className="mb-1">METAL COLOR</p>
          <div className="d-flex mb-3">
            {Object.entries(product.metal_variations)
              .sort(([aKey, aGroup], [bKey, bGroup]) => {
                // For build products: pick first shape → first variation
                const aMetal = aGroup[Object.keys(aGroup)[0]][0].metal_color;
                const bMetal = bGroup[Object.keys(bGroup)[0]][0].metal_color;

                const order = ["14k", "18k", "PL"]; // customize order
                return (
                  order.indexOf(aMetal?.quality) -
                  order.indexOf(bMetal?.quality)
                );
              })
              .map(([metalId, group]) => {
                const metal = group[Object.keys(group)[0]][0].metal_color;

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

          <button
            className="custom-btn outlined"
            style={{ width: "100%", height: "50px", marginBottom: "15px" }}
            // onClick={() => setShowModal(true)}
            onClick={handleChooseSetting}
          >
            CHOOSE THIS SETTING
          </button>

          {showModal && (
            <DiamondSelectionModal
              onClose={() => setShowModal(false)}
              ringCartItem={ringCartItem}
            />
          )}

          <button
            className="custom-btn outlined"
            style={{ width: "100%", height: "50px", marginBottom: "15px" }}
            onClick={handleOpenSettingModal}
          >
            BUY SETTING ONLY
          </button>

          {showSettingModal && (
            <RingSettingModal
              onClose={() => setShowSettingModal(false)}
              modalProductData={modalProductData}
            />
          )}
          <button
            className="custom-btn outlined"
            style={{ width: "100%", height: "50px", marginBottom: "15px" }}
          >
            VIRTUAL / SHOWROOM APPOINTMENT
          </button>

          <div className="container">
            <div className="mb-4">
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
            <li className="active">
              Reviews <span>1</span>
            </li>
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
                It’s everything she ever wanted. It was also the perfect diamond
                size without breaking the bank and focusing more on the quality
                of diamond itself. I chose the best one WC had of that size and
                you can definitely tell in person. The craftsmanship is great,
                the packaging was well put together, and the communication
                throughout the process was also nice. I would definitely
                recommend WC to anyone looking for a ring you can customize in
                many ways. The quality is incredible. This ring leaves you in
                shock and lures you in to look even closer!
              </p>
              <div className="review-product-name">
                Fine Vela Classic Pave Diamond Engagement Ring
              </div>
              <a href="#" className="review-share">
                🔗 Share
              </a>
            </div>
          </div>
        </div>

        <Logosec />
      </div>

      <NoDealbreakers />
    </div>
  );
};

export default RingProductView;
