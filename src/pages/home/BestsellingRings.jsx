import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import axiosClient from "../../api/axios";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./BestsellingRings.css"; // your custom styles

const BestsellingRings = () => {
  const [ringData, setRingData] = useState({
    "ANNIVERSARY RINGS": [],
    "ETERNITY RINGS": [],
    "STACKABLE RINGS": [],
  });

  const [activeTab, setActiveTab] = useState("ANNIVERSARY RINGS");
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await axiosClient.get("/api/get-all-products", {
  //         params: {
  //           page: 1,
  //           perPage: 100,
  //         },
  //       });

  //       const products = response.data?.data || [];

  //       const updatedData = {
  //         "ANNIVERSARY RINGS": [],
  //         "ETERNITY RINGS": [],
  //         "STACKABLE RINGS": [],
  //       };

  //       products.forEach((group) => {
  //         const subCat = group.category?.name?.toUpperCase();
  //         const parentCat = group.category?.parent?.name?.toUpperCase();

  //         let tabKey = null;
  //         if (parentCat === "RINGS") {
  //           if (subCat === "ANNIVERSARY") tabKey = "ANNIVERSARY RINGS";
  //           else if (subCat === "ETERNITY") tabKey = "ETERNITY RINGS";
  //           else if (subCat === "STACKABLE") tabKey = "STACKABLE RINGS";
  //         }

  //         if (tabKey) {
  //           const metalKeys = Object.keys(group.metal_variations || {});
  //           const defaultMetal = metalKeys[0];
  //           const variation = group.metal_variations[defaultMetal]?.[0];

  //           if (!variation) return;

  //           const image = variation?.images?.[0]
  //             ? `${import.meta.env.VITE_BACKEND_URL}/storage/${variation.images[0]}`
  //             : `${import.meta.env.VITE_BACKEND_URL}/storage/variation_images/No_Image_Available.jpg`;

  //           updatedData[tabKey].push({
  //             image,
  //             title: group.product?.name || "Untitled",
  //             sku: group.product?.master_sku,
  //           });
  //         }
  //       });

  //       setRingData(updatedData);
  //     } catch (error) {
  //       console.error("Error fetching ring data:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchProducts();
  // }, []);

  useEffect(() => {
    const fetchRings = async () => {
      try {
        // Map frontend keys to backend categoryType
        const categoryMap = {
          "ANNIVERSARY RINGS": "anniversary",
          "ETERNITY RINGS": "eternity",
          "STACKABLE RINGS": "stackable",
        };

        const requests = Object.entries(categoryMap).map(
          async ([tabKey, apiCategory]) => {
            const response = await axiosClient.get(
              `/api/best-selling-rings/${apiCategory}`
            );
            return { tabKey, data: response.data.data || [] };
          }
        );

        const results = await Promise.all(requests);

        const updatedData = { ...ringData };
        results.forEach(({ tabKey, data }) => {
          updatedData[tabKey] = data.map((item) => ({
            image: item.images?.[0]
              ? `${import.meta.env.VITE_BACKEND_URL}${item.images[0]}`
              : `${
                  import.meta.env.VITE_BACKEND_URL
                }/storage/variation_images/No_Image_Available.jpg`,
            title: item.product_name || "Untitled",
            sku: item.sku,
            price: item.price,
            regular_price: item.regular_price,
          }));
        });

        setRingData(updatedData);
      } catch (error) {
        console.error("Error fetching rings:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRings();
  }, []);

  const settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 600,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 4 } },
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="exclusive-wrapper">
      <div className="container">
        <h2 className="section-title">Explore Our Bestselling Rings</h2>

        <div className="tab-buttons">
          {Object.keys(ringData).map((tab) => (
            <button
              key={tab}
              className={`tab-btn ${tab === activeTab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        <Slider {...settings} className="ring-slider">
          {loading ? (
            [...Array(6)].map((_, i) => (
              <div key={i} className="ring-card">
                <div className="ring-img skeleton-box" />
                <p className="ring-title">Loading...</p>
              </div>
            ))
          ) : ringData[activeTab]?.length > 0 ? (
            ringData[activeTab].map((item, index) => (
              <div key={index} className="ring-card">
                <Link to={`/jewellary-details/${item.product_id}`}>
                  <img src={item.image} alt={item.title} className="ring-img" />
                  <p className="ring-title">{item.title}</p>
                </Link>
              </div>
            ))
          ) : (
            <div className="ring-card">
              <p className="ring-title">No products available</p>
            </div>
          )}
        </Slider>
      </div>
    </section>
  );
};

export default BestsellingRings;
