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
import {
  ChevronLeft,
  ChevronRight,
  Info,
  Heart,
  Calendar,
  Phone,
  Mail,
  Gift,
} from "lucide-react";
import { ChevronUp, ChevronDown, MessageCircle } from "lucide-react";

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
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showMobileCart, setShowMobileCart] = useState(false);

  const navigate = useNavigate();
  const [openSection, setOpenSection] = useState("product");

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };
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
  const currentMedia = selectedVariation
    ? [
        // Add video first if it exists
        ...(selectedVariation.video
          ? [{ type: "video", src: getVideoUrl(selectedVariation.video) }]
          : []),
        // Then add all images
        ...(selectedVariation.images?.map((img) => ({
          type: "image",
          src: getImageUrl(img),
        })) || []),
      ]
    : [];
  // Navigation functions for mobile carousel
  const nextImage = () =>
    setCurrentImageIndex((prev) => (prev + 1) % currentMedia.length);

  const prevImage = () =>
    setCurrentImageIndex(
      (prev) => (prev - 1 + currentMedia.length) % currentMedia.length
    );
  const { name, description } = product.product;
  const {
    price,
    original_price,
    weight,
    metal_color,
    sku: variationSku,
  } = selectedVariation || {};
  const priceDifference = Math.max(original_price - price, 0).toFixed(2);
  const metalName = metal_color?.name || "-";
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
    <>
      <div className="bg-white min-vh-100">
        {/* =============================================================================== */}
        {/* DESKTOP LAYOUT                                   */}
        {/* =============================================================================== */}
        <div className="d-none d-md-block">
          <div className="container">
            <div className="row" style={{ "--bs-gutter-x": "2.5rem" }}>
              {/* Image Thumbnails */}
              <div className="col-1">
                <div className="thumbnail-container d-flex flex-column gap-2">
                  {selectedVariation?.video && (
                    <video
                      key="video-thumb"
                      src={getVideoUrl(selectedVariation.video)}
                      onClick={() => {
                        setMainImage(getVideoUrl(selectedVariation.video));
                        setIsVideo(true);
                      }}
                      disablePictureInPicture
                      controls={false}
                      controlsList="nodownload nofullscreen noremoteplayback noplaybackrate"
                      tabIndex={-1}
                      className={`rounded thumbnail-gallery ${
                        isVideo ? "selected" : ""
                      }`}
                      style={{
                        cursor: "pointer",
                        border: isVideo ? "2px solid #000" : "1px solid #ccc",
                        padding: "2px",
                        width: "60px",
                        height: "60px",
                        objectFit: "cover",
                        borderRadius: "4px",
                      }}
                    />
                  )}

                  {/* Image thumbnails */}
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
                            !isVideo && mainImage === src
                              ? "2px solid #000"
                              : "1px solid #ccc",
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
              </div>

              {/* Main Image */}
              <div className="col-6">
                <div className="main-image-container">
                  {isVideo ? (
                    <video
                      src={mainImage}
                      className="w-100 h-auto rounded-3"
                      autoPlay
                      muted
                      loop
                      style={{
                        border: "none",
                        objectFit: "contain",
                        width: "100%",
                      }}
                    />
                  ) : (
                    <Zoom>
                      <img
                        src={mainImage}
                        alt="Main Product"
                        className="w-100 h-auto rounded-3"
                        style={{
                          objectFit: "contain",
                        }}
                      />
                    </Zoom>
                  )}
                </div>
              </div>

              {/* Product Details */}
              <div className="col-5">
                <div className="d-flex align-items-center gap-2 mb-2">
                  <div className="text-yellow-custom">★★★★★</div>
                  <span className="small text-muted">21 reviews</span>
                </div>
                <h1 className="h3 font-serif mb-2">{name}</h1>
                <p className="small text-muted mb-4">SKU#{variationSku}</p>
                <div className="mb-4">
                  <span className="h3 fw-bold">${price}</span>
                  <span className="fs-5 text-secondary text-decoration-line-through ms-2">
                    ${original_price}
                  </span>
                  <span className="text-green-custom ms-2">
                    (${priceDifference} OFF)
                  </span>
                </div>
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
                      {Object.keys(
                        product.metal_variations[selectedMetalId]
                      ).map((shapeId) => {
                        const firstVar =
                          product.metal_variations[selectedMetalId][
                            shapeId
                          ][0] || {};
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
                      })}
                    </div>
                  </div>
                )}
                <div className="mb-4">
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <span className="small fw-semibold">METAL COLOR</span>
                    <Info size={16} className="text-secondary" />
                    <span className="small">: {metalName}</span>
                  </div>

                  <div className="d-flex gap-2">
                    {Object.entries(product.metal_variations)
                      .sort(([aKey, aGroup], [bKey, bGroup]) => {
                        // For build products: pick first shape → first variation
                        const aMetal =
                          aGroup[Object.keys(aGroup)[0]][0].metal_color;
                        const bMetal =
                          bGroup[Object.keys(bGroup)[0]][0].metal_color;

                        const order = ["14k", "18k", "PL"]; // customize order
                        return (
                          order.indexOf(aMetal?.quality) -
                          order.indexOf(bMetal?.quality)
                        );
                      })
                      .map(([metalId, group]) => {
                        const metal =
                          group[Object.keys(group)[0]][0].metal_color;

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
                  {/* <div className="d-flex gap-2"> */}
                  {/* 
                    {Object.entries(product.metal_variations)
                      .sort(([aKey, aGroup], [bKey, bGroup]) => {
                        const aMetal = aGroup[0].metal_color;
                        const bMetal = bGroup[0].metal_color;
                        const order = ["14k", "18k", "PL"]; // Customize the order here
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
                      })} */}
                  {/* </div> */}
                </div>

                <p className="small fw-semibold mb-4">DIAMOND TYPE : LAB</p>

                <div className="mb-4">
                  <span className="small fw-semibold d-block mb-3">
                    TOTAL CARAT WEIGHT : {weight}
                  </span>
                  <div className="d-flex flex-wrap gap-2">
                    {Object.values(
                      product.metal_variations?.[selectedMetalId] || {}
                    )
                      .flat() // flatten all shape arrays
                      .map((variation, index) => (
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
                  {/* <div className="d-flex flex-wrap gap-2">
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
                  </div> */}
                </div>

                <div className="mb-4">
                  <div className="d-flex align-items-center gap-2 mb-3">
                    <span className="small fw-semibold">DIAMOND QUALITY</span>
                    <Info size={16} className="text-secondary" />
                    <span className="small">: F/G SI+</span>
                  </div>
                  {/* <div className="d-flex gap-2">
                    {qualities.map((quality) => (
                      <button
                        key={quality.id}
                        onClick={() => setSelectedQuality(quality.id)}
                        className={`btn border quality-btn px-4 py-2 ${
                          selectedQuality === quality.id ? "active" : ""
                        }`}
                      >
                        {quality.label}
                      </button>
                    ))}
                  </div> */}
                </div>
                <button
                  className="btn w-100 py-3 fw-semibold mb-3"
                  style={{ backgroundColor: "#06374a", color: "white" }}
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
                  className="btn w-100 py-3 fw-semibold mb-3"
                  style={{ backgroundColor: "#06374a", color: "white" }}
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

                {/* <div className="mb-4">
                <h3 className="fw-semibold small mb-2">
                  ADD CLARITY COMMITMENT PROTECTION PLAN
                </h3>
                <div className="d-flex align-items-center gap-2 mb-3">
                  <p className="small text-muted mb-0">
                    Ensure your jewelry lasts a lifetime.
                  </p>
                  <Info size={16} className="text-secondary" />
                </div>
                <div className="row row-cols-3 g-2 pt-2">
                  {protectionPlans.map((plan) => (
                    <div className="col" key={plan.id}>
                      <button
                        onClick={() => setSelectedPlan(plan.id)}
                        className={`btn w-100 border text-center p-3 small plan-btn ${
                          selectedPlan === plan.id ? "active" : ""
                        }`}
                      >
                        {plan.popular && (
                          <span className="popular-badge badge rounded-pill">
                            MOST POPULAR
                          </span>
                        )}
                        {plan.label}
                      </button>
                    </div>
                  ))}
                </div>
              </div> */}

                {/* <button
                  className="btn w-100 py-3 fw-semibold mb-3"
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
                </button> */}
                <button className="btn btn-outline-dark w-100 py-3 fw-semibold mb-4">
                  VIRTUAL / SHOWROOM APPOINTMENT
                </button>

                <p className="small mb-2">
                  Ships by <strong>Wed, Oct 8</strong> | Track in real time
                  before it ships
                </p>
                <p className="small mb-2">
                  <span className="text-blue-link">0% APR</span> or as low as
                  $53/mo with <strong>affirm</strong>.{" "}
                  <a href="#" className="text-decoration-underline">
                    See if you qualify
                  </a>
                </p>
                <p className="small mb-4">
                  Free Insured Shipping.
                  <a href="#" className="text-decoration-underline">
                    30 Day Returns.
                  </a>
                </p>

                <div className="border-top pt-4">
                  <div className="row row-cols-2 g-2 mb-4">
                    {[
                      { icon: <Mail size={16} />, text: "DROP A HINT" },
                      { icon: <Phone size={16} />, text: "CONTACT US" },
                      { icon: <Heart size={16} />, text: "ADD TO WISHLIST" },
                      {
                        icon: <Calendar size={16} />,
                        text: "SCHEDULE APPOINTMENT",
                      },
                    ].map((item) => (
                      <div className="col" key={item.text}>
                        <button className="btn btn-outline-secondary w-100 d-flex align-items-center justify-content-center gap-2 small py-2">
                          {item.icon} {item.text}
                        </button>
                      </div>
                    ))}
                  </div>
                  <div className="d-flex align-items-center gap-3 mb-4">
                    <span className="small fw-semibold">SHARE:</span>
                    <button className="btn p-0">📌</button>
                    <button className="btn p-0 fw-bold">f</button>
                    <button className="btn p-0 fw-bold">𝕏</button>
                  </div>
                  <div className="bg-light-gray p-3 rounded d-flex align-items-center gap-2">
                    <Gift size={20} />
                    <span className="small">
                      Earn 847 Points when you buy this item.
                    </span>
                  </div>

                  <div className="product-details-container">
                    {/* Product Details Section */}
                    <div>
                      <div
                        className="detail-section-header"
                        onClick={() => toggleSection("product")}
                      >
                        <h5 className="detail-section-title">
                          Product Details
                        </h5>
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
                        <p className="detail-description">
                          This classic tennis bracelet features a single row of
                          sparkling brilliant cut diamonds
                        </p>
                        <p className="detail-description">
                          Set in gold four-prong baskets with a total diamond
                          weight of 2Cts
                        </p>
                        <div className="details-grid">
                          <span className="detail-label">Metal Details</span>
                          <span className="detail-value">14KT White Gold</span>

                          <span className="detail-label">Setting Type</span>
                          <span className="detail-value">Prong</span>

                          <span className="detail-label">Clasp</span>
                          <span className="detail-value">Box</span>
                        </div>
                      </div>
                    </div>

                    {/* Stone Details Section */}
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
                          <span className="detail-value">Diamond</span>

                          <span className="detail-label">
                            Total Carat Weight
                          </span>
                          <span className="detail-value">2.0 Cts</span>

                          <span className="detail-label">Cut</span>
                          <span className="detail-value">Brilliant</span>

                          <span className="detail-label">Number of Stones</span>
                          <span className="detail-value">Single Row</span>
                        </div>
                      </div>
                    </div>

                    {/* Shipping & Returns Section */}
                    <div>
                      <div
                        className="detail-section-header"
                        onClick={() => toggleSection("shipping")}
                      >
                        <h5 className="detail-section-title">
                          Shipping & Returns
                        </h5>
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
                          30-day return policy. Items must be in original
                          condition with all packaging and documentation.
                        </p>
                      </div>
                    </div>

                    {/* Lifetime Warranty Section */}
                    <div>
                      <div
                        className="detail-section-header"
                        onClick={() => toggleSection("warranty")}
                      >
                        <h5 className="detail-section-title">
                          Lifetime Warranty
                        </h5>
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
                          Includes complimentary cleaning, inspection, and minor
                          repairs for the lifetime of the piece.
                        </p>
                      </div>
                    </div>

                    {/* Need Help Button */}
                    <button className="help-button">
                      <MessageCircle size={20} />
                      Need Help?
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =============================================================================== */}
        {/* MOBILE LAYOUT                                   */}
        {/* =============================================================================== */}
        <div className="d-block d-md-none">
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
            <div className="mb-4">
              <div className="d-flex align-items-center gap-2 mb-3">
                <span className="small fw-semibold">METAL COLOR:</span>
                <span className="small">{metalName}</span>
              </div>
              <div className="d-flex gap-2">
                {Object.entries(product.metal_variations)
                  .sort(([aKey, aGroup], [bKey, bGroup]) => {
                    // For build products: pick first shape → first variation
                    const aMetal =
                      aGroup[Object.keys(aGroup)[0]][0].metal_color;
                    const bMetal =
                      bGroup[Object.keys(bGroup)[0]][0].metal_color;

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
              {/* <div className="d-flex gap-2"> */}
              {/* {Object.entries(product.metal_variations)
                  .sort(([aKey, aGroup], [bKey, bGroup]) => {
                    const aMetal = aGroup[0].metal_color;
                    const bMetal = bGroup[0].metal_color;
                    const order = ["14k", "18k", "PL"]; // Customize the order here
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
                  })} */}
              {/* </div> */}
            </div>

            <p className="small fw-semibold mb-4">DIAMOND TYPE : LAB</p>

            <div className="mb-4">
              <span className="small fw-semibold d-block mb-3">
                TOTAL CARAT WEIGHT : {weight}
              </span>

              <div className="d-flex flex-wrap gap-2">
                {Object.values(
                  product.metal_variations?.[selectedMetalId] || {}
                )
                  .flat() // flatten all shape arrays
                  .map((variation, index) => (
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
              <div className="d-flex flex-wrap gap-2">
                {/* {(product.metal_variations?.[selectedMetalId] || []).map(
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
                )} */}
              </div>
            </div>

            <div className="mb-4">
              <div className="d-flex align-items-center gap-2 mb-3">
                <span className="small fw-semibold">DIAMOND QUALITY:</span>
                <span className="small">F/G SI+</span>
              </div>
              <div className="d-flex gap-2">
                {/* {qualities.map((quality) => (
                  <button
                    key={quality.id}
                    onClick={() => setSelectedQuality(quality.id)}
                    className={`btn border quality-btn px-3 py-1 small ${
                      selectedQuality === quality.id ? "active" : ""
                    }`}
                  >
                    {quality.label}
                  </button>
                ))} */}
              </div>
            </div>
            <button
              className="btn w-100 py-3 fw-semibold mb-3"
              style={{ backgroundColor: "#06374a", color: "white" }}
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
              className="btn w-100 py-3 fw-semibold mb-3"
              style={{ backgroundColor: "#06374a", color: "white" }}
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
            {/* <div className="mb-4">
            <h3 className="fw-semibold small mb-2">ADD PROTECTION PLAN</h3>
            <div className="d-flex flex-nowrap gap-2 overflow-x-auto pb-2">
              {protectionPlans.map((plan) => (
                <button
                  key={plan.id}
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`btn border text-center p-3 small plan-btn flex-shrink-0 ${
                    selectedPlan === plan.id ? "active" : ""
                  }`}
                >
                  {plan.popular && (
                    <span className="popular-badge badge rounded-pill">
                      MOST POPULAR
                    </span>
                  )}
                  {plan.label}
                </button>
              ))}
            </div>
          </div> */}

            <p className="small mb-2">
              Ships by <strong>Wed, Oct 8</strong> | Track in real time before
              it ships
            </p>
            <p className="small mb-4">
              Free Insured Shipping.{" "}
              <a href="#" className="text-decoration-underline">
                30 Day Returns.
              </a>
            </p>

            <div className="border-top pt-4">
              <div className="row row-cols-2 g-2">
                {[
                  { icon: <Mail size={14} />, text: "DROP A HINT" },
                  { icon: <Phone size={14} />, text: "CONTACT US" },
                  { icon: <Heart size={14} />, text: "ADD TO WISHLIST" },
                  { icon: <Calendar size={14} />, text: "APPOINTMENT" },
                ].map((item) => (
                  <div className="col" key={item.text}>
                    <button className="btn btn-outline-secondary w-100 d-flex align-items-center justify-content-center gap-2 small py-2">
                      {item.icon} {item.text}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="product-details-container">
              {/* Product Details Section */}
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
                  <p className="detail-description">
                    This classic tennis bracelet features a single row of
                    sparkling brilliant cut diamonds
                  </p>
                  <p className="detail-description">
                    Set in gold four-prong baskets with a total diamond weight
                    of 2Cts
                  </p>
                  <div className="details-grid">
                    <span className="detail-label">Metal Details</span>
                    <span className="detail-value">14KT White Gold</span>

                    <span className="detail-label">Setting Type</span>
                    <span className="detail-value">Prong</span>

                    <span className="detail-label">Clasp</span>
                    <span className="detail-value">Box</span>
                  </div>
                </div>
              </div>

              {/* Stone Details Section */}
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
                    <span className="detail-value">Diamond</span>

                    <span className="detail-label">Total Carat Weight</span>
                    <span className="detail-value">2.0 Cts</span>

                    <span className="detail-label">Cut</span>
                    <span className="detail-value">Brilliant</span>

                    <span className="detail-label">Number of Stones</span>
                    <span className="detail-value">Single Row</span>
                  </div>
                </div>
              </div>

              {/* Shipping & Returns Section */}
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
                    30-day return policy. Items must be in original condition
                    with all packaging and documentation.
                  </p>
                </div>
              </div>

              {/* Lifetime Warranty Section */}
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
                    Includes complimentary cleaning, inspection, and minor
                    repairs for the lifetime of the piece.
                  </p>
                </div>
              </div>

              {/* Need Help Button */}
              <button className="help-button">
                <MessageCircle size={20} />
                Need Help?
              </button>
            </div>
          </div>

          {/* Sticky Add to Cart Bar */}
          {showMobileCart && (
            <div className=" bg-white p-3 pt-1 border-top">
              <div className="d-flex align-items-center justify-content-between gap-3">
                <div>
                  <div className="small text-muted text-decoration-line-through">
                    {original_price}
                  </div>
                  <div className="h5 fw-bold mb-0">{price}</div>
                </div>
                {/* <button
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
                </button> */}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* old code */}
      <div className="container py-5">
        <div className="row">
          <div className="col-md-1 d-flex flex-column align-items-center gap-2 thumbs sticky-column">
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
          <div className="col-md-7 sticky-column">
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
          <div className="col-md-4 ">
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
                  <span className="text-primary">0% APR</span> or as low as
                  $53/mo with <strong>affirm</strong>.{" "}
                  <a href="#">See if you qualify</a>
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
                    <i className="bi bi-calendar-event"></i> SCHEDULE
                    APPOINTMENT
                  </button>
                </div>
                <div className="mt-2">
                  <span className="me-2  share">SHARE :-</span>
                  <i className="bi bi-pinterest"></i>
                  <i className="bi bi-facebook"></i>
                  <i className="bi bi-x"></i>
                </div>
                <div className="bg-light p-2 mt-3">
                  <i className="bi bi-gift"></i> Earn 847 Points when you buy
                  this item.
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
                  It’s everything she ever wanted. It was also the perfect
                  diamond size without breaking the bank and focusing more on
                  the quality of diamond itself. I chose the best one WC had of
                  that size and you can definitely tell in person. The
                  craftsmanship is great, the packaging was well put together,
                  and the communication throughout the process was also nice. I
                  would definitely recommend WC to anyone looking for a ring you
                  can customize in many ways. The quality is incredible. This
                  ring leaves you in shock and lures you in to look even closer!
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
    </>
  );
};

export default RingProductView;
