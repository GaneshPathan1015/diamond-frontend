import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Info, Heart, Calendar, Phone, Mail, Gift } from "lucide-react";

const GiftDetails = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedMetal, setSelectedMetal] = useState("14k-white");
  const [selectedCarat, setSelectedCarat] = useState("2");
  const [selectedQuality, setSelectedQuality] = useState("f-g-si");
  const [selectedPlan, setSelectedPlan] = useState("3-year");
  const [showMobileCart, setShowMobileCart] = useState(false);

  const images = [
    "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800",
    "https://images.unsplash.com/photo-1603561596112-0a132b757442?w=800",
    "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=800",
    "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800",
  ];

  const metals = [
    { id: "14k-white", label: "14K", color: "#E8E8E8" },
    { id: "14k-yellow", label: "14K", color: "#FFD700" },
    { id: "14k-rose", label: "14K", color: "#B76E79" },
    { id: "pt", label: "PT", color: "#E5E4E2" },
  ];

  const carats = ["½", "¾", "1", "1½", "2", "3", "4"];
  const qualities = [
    { id: "ef-vs", label: "EF VS+" },
    { id: "f-g-si", label: "F/G SI+" },
  ];

  const protectionPlans = [
    { id: "1-year", label: "1 Year - $119", popular: false },
    { id: "2-year", label: "2 Year - $159", popular: false },
    { id: "3-year", label: "3 Year - $249", popular: true },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 768) {
        setShowMobileCart(window.scrollY > 300);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Desktop Layout */}
      <div className="hidden md:block">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-1">
              <div className="flex flex-col gap-2 sticky top-4">
                {images.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`Thumb ${idx + 1}`}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`w-16 h-16 object-cover cursor-pointer rounded border-2 ${
                      currentImageIndex === idx ? "border-black" : "border-gray-200"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="col-span-6">
              <div className="sticky top-4">
                <img
                  src={images[currentImageIndex]}
                  alt="Product"
                  className="w-full h-auto rounded-lg"
                />
                <button className="w-full mt-4 py-3 border-2 border-black text-black font-semibold rounded hover:bg-black hover:text-white transition">
                  📷 VIRTUAL TRY ON
                </button>
              </div>
            </div>

            <div className="col-span-5">
              <div className="flex items-center gap-2 mb-2">
                <div className="flex text-yellow-400">★★★★★</div>
                <span className="text-sm text-gray-600">21 reviews</span>
              </div>

              <h1 className="text-3xl font-serif mb-2">
                Classic Round Diamond Four Prong Studs Earrings (F/G SI+)
              </h1>

              <p className="text-sm text-gray-600 mb-4">SKU#1550365LGD/14W</p>

              <div className="mb-6">
                <span className="text-3xl font-bold">$847</span>
                <span className="text-lg text-gray-400 line-through ml-2">$1,210</span>
                <span className="text-green-600 ml-2">($363 OFF)</span>
              </div>

              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm font-semibold">METAL COLOR</span>
                  <Info className="w-4 h-4 text-gray-400" />
                  <span className="text-sm">:14KT WHITE GOLD</span>
                </div>
                <div className="flex gap-2">
                  {metals.map((metal) => (
                    <button
                      key={metal.id}
                      onClick={() => setSelectedMetal(metal.id)}
                      className={`w-12 h-12 rounded-full border-2 flex items-center justify-center text-xs font-semibold ${
                        selectedMetal === metal.id ? "border-black" : "border-gray-300"
                      }`}
                      style={{ backgroundColor: metal.color }}
                    >
                      {metal.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <span className="text-sm font-semibold">DIAMOND TYPE : LAB</span>
              </div>

              <div className="mb-6">
                <span className="text-sm font-semibold block mb-3">TOTAL CARAT WEIGHT : 2</span>
                <div className="flex flex-wrap gap-2">
                  {carats.map((carat) => (
                    <button
                      key={carat}
                      onClick={() => setSelectedCarat(carat)}
                      className={`px-4 py-2 rounded-full border ${
                        selectedCarat === carat
                          ? "border-black bg-black text-white"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      {carat}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm font-semibold">DIAMOND QUALITY</span>
                  <Info className="w-4 h-4 text-gray-400" />
                  <span className="text-sm">: F/G SI+</span>
                </div>
                <div className="flex gap-2">
                  {qualities.map((quality) => (
                    <button
                      key={quality.id}
                      onClick={() => setSelectedQuality(quality.id)}
                      className={`px-6 py-2 rounded border ${
                        selectedQuality === quality.id
                          ? "border-black bg-white"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      {quality.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-6 p-4 bg-gray-50 rounded">
                <h3 className="font-semibold mb-2">SHOP THE SET</h3>
                <p className="text-sm mb-1">The Classic Set</p>
                <p className="text-sm mb-2">14KT White Gold</p>
                <p className="text-lg font-bold mb-3">$1,000</p>
                <button className="text-sm font-semibold underline">SHOP NOW</button>
              </div>

              <div className="mb-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold">ADD CLARITY COMMITMENT PROTECTION PLAN</h3>
                  <button className="transform rotate-180">▼</button>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <p className="text-sm text-gray-600">Ensure your jewelry lasts a lifetime.</p>
                  <Info className="w-4 h-4 text-gray-400" />
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {protectionPlans.map((plan) => (
                    <button
                      key={plan.id}
                      onClick={() => setSelectedPlan(plan.id)}
                      className={`p-3 rounded border text-sm relative ${
                        selectedPlan === plan.id
                          ? "border-black bg-gray-50"
                          : "border-gray-300 hover:border-gray-400"
                      }`}
                    >
                      {plan.popular && (
                        <span className="absolute -top-2 left-1/2 transform -translate-x-1/2 text-xs bg-blue-900 text-white px-2 py-0.5 rounded whitespace-nowrap">
                          MOST POPULAR
                        </span>
                      )}
                      {plan.label}
                    </button>
                  ))}
                </div>
              </div>

              <button className="w-full py-4 bg-blue-900 text-white font-semibold rounded hover:bg-blue-800 transition mb-3">
                ADD TO CART
              </button>

              <button className="w-full py-4 border-2 border-gray-800 text-gray-800 font-semibold rounded hover:bg-gray-50 transition mb-4">
                VIRTUAL / SHOWROOM APPOINTMENT
              </button>

              <p className="text-sm mb-2">
                Ships by <strong>Wed, Oct 8</strong> | Track in real time before it ships
              </p>

              <p className="text-sm mb-2">
                <span className="text-blue-600">0% APR</span> or as low as $53/mo with{" "}
                <strong>affirm</strong>. <a href="#" className="underline">See if you qualify</a>
              </p>

              <p className="text-sm mb-4">
                Free Insured Shipping. <a href="#" className="underline">30 Day Returns.</a>
              </p>

              <div className="border-t pt-4">
                <div className="grid grid-cols-2 gap-2 mb-4">
                  <button className="py-2 px-4 border border-gray-300 rounded text-sm flex items-center justify-center gap-2 hover:bg-gray-50">
                    <Mail className="w-4 h-4" /> DROP A HINT
                  </button>
                  <button className="py-2 px-4 border border-gray-300 rounded text-sm flex items-center justify-center gap-2 hover:bg-gray-50">
                    <Phone className="w-4 h-4" /> CONTACT US
                  </button>
                  <button className="py-2 px-4 border border-gray-300 rounded text-sm flex items-center justify-center gap-2 hover:bg-gray-50">
                    <Heart className="w-4 h-4" /> ADD TO WISHLIST
                  </button>
                  <button className="py-2 px-4 border border-gray-300 rounded text-sm flex items-center justify-center gap-2 hover:bg-gray-50">
                    <Calendar className="w-4 h-4" /> SCHEDULE APPOINTMENT
                  </button>
                </div>

                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm font-semibold">SHARE :</span>
                  <button className="text-gray-600 hover:text-gray-900">📌</button>
                  <button className="text-gray-600 hover:text-gray-900">f</button>
                  <button className="text-gray-600 hover:text-gray-900">𝕏</button>
                </div>

                <div className="bg-gray-50 p-3 rounded flex items-center gap-2">
                  <Gift className="w-5 h-5" />
                  <span className="text-sm">Earn 847 Points when you buy this item.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="block md:hidden">
        <div className="relative">
          <img
            src={images[currentImageIndex]}
            alt="Product"
            className="w-full h-96 object-cover"
          />
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
            {images.map((_, idx) => (
              <div
                key={idx}
                className={`w-2 h-2 rounded-full ${
                  idx === currentImageIndex ? "bg-white" : "bg-white/50"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="px-4 py-6 pb-24">
          <div className="flex items-center gap-2 mb-2">
            <div className="flex text-yellow-400 text-sm">★★★★★</div>
            <span className="text-xs text-gray-600">21 reviews</span>
          </div>

          <h1 className="text-xl font-serif mb-2">
            Classic Round Diamond Four Prong Studs Earrings (F/G SI+)
          </h1>

          <p className="text-xs text-gray-600 mb-4">SKU#1550365LGD/14W</p>

          <div className="mb-6">
            <span className="text-2xl font-bold">$847</span>
            <span className="text-base text-gray-400 line-through ml-2">$1,210</span>
            <span className="text-green-600 text-sm ml-2">($363 OFF)</span>
          </div>

          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold">METAL COLOR</span>
              <Info className="w-3 h-3 text-gray-400" />
              <span className="text-xs">:14KT WHITE GOLD</span>
            </div>
            <div className="flex gap-2">
              {metals.map((metal) => (
                <button
                  key={metal.id}
                  onClick={() => setSelectedMetal(metal.id)}
                  className={`w-10 h-10 rounded-full border-2 flex items-center justify-center text-xs font-semibold ${
                    selectedMetal === metal.id ? "border-black" : "border-gray-300"
                  }`}
                  style={{ backgroundColor: metal.color }}
                >
                  {metal.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <span className="text-xs font-semibold">DIAMOND TYPE : LAB</span>
          </div>

          <div className="mb-6">
            <span className="text-xs font-semibold block mb-3">TOTAL CARAT WEIGHT : 2</span>
            <div className="flex gap-2 mb-3">
              {carats.slice(0, 2).map((carat) => (
                <button
                  key={carat}
                  onClick={() => setSelectedCarat(carat)}
                  className={`px-4 py-2 rounded-full border ${
                    selectedCarat === carat
                      ? "border-black bg-black text-white"
                      : "border-gray-300"
                  }`}
                >
                  {carat}
                </button>
              ))}
            </div>
            <div className="text-base text-gray-400 line-through">$1,210</div>
            <div className="text-2xl font-bold">$847</div>
          </div>

          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-semibold">DIAMOND QUALITY</span>
              <Info className="w-3 h-3 text-gray-400" />
              <span className="text-xs">: F/G SI+</span>
            </div>
            <div className="flex gap-2">
              {qualities.map((quality) => (
                <button
                  key={quality.id}
                  onClick={() => setSelectedQuality(quality.id)}
                  className={`px-4 py-2 rounded border text-sm ${
                    selectedQuality === quality.id
                      ? "border-black bg-white"
                      : "border-gray-300"
                  }`}
                >
                  {quality.label}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6 p-4 bg-gray-50 rounded">
            <h3 className="text-sm font-semibold mb-2">SHOP THE SET</h3>
            <p className="text-xs mb-1">The Classic Set</p>
            <p className="text-xs mb-2">14KT White Gold</p>
            <p className="text-base font-bold mb-3">$1,000</p>
            <button className="text-xs font-semibold underline">SHOP NOW</button>
          </div>

          <div className="mb-6">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-semibold">ADD CLARITY COMMITMENT PROTECTION PLAN</h3>
              <button className="transform rotate-180">▼</button>
            </div>
            <div className="flex items-center gap-2 mb-3">
              <p className="text-xs text-gray-600">Ensure your jewelry lasts a lifetime.</p>
              <Info className="w-3 h-3 text-gray-400" />
            </div>
            <div className="flex gap-2 overflow-x-auto">
              {protectionPlans.map((plan) => (
                <button
                  key={plan.id}
                  onClick={() => setSelectedPlan(plan.id)}
                  className={`flex-shrink-0 p-2 rounded border text-xs relative min-w-24 ${
                    selectedPlan === plan.id
                      ? "border-black bg-gray-50"
                      : "border-gray-300"
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute -top-2 left-1/2 transform -translate-x-1/2 text-xs bg-blue-900 text-white px-2 py-0.5 rounded whitespace-nowrap">
                      MOST POPULAR
                    </span>
                  )}
                  {plan.label}
                </button>
              ))}
            </div>
          </div>

          <p className="text-xs mb-2">
            Ships by <strong>Wed, Oct 8</strong> | Track in real time before it ships
          </p>

          <p className="text-xs mb-2">
            <span className="text-blue-600">0% APR</span> or as low as $53/mo with{" "}
            <strong>affirm</strong>. <a href="#" className="underline">See if you qualify</a>
          </p>

          <p className="text-xs mb-4">
            Free Insured Shipping. <a href="#" className="underline">30 Day Returns.</a>
          </p>

          <button className="w-full py-3 border-2 border-gray-800 text-gray-800 font-semibold rounded mb-3">
            VIRTUAL / SHOWROOM APPOINTMENT
          </button>

          <div className="grid grid-cols-2 gap-2 mb-4">
            <button className="py-2 px-3 border border-gray-300 rounded text-xs flex items-center justify-center gap-2">
              <Mail className="w-3 h-3" /> DROP A HINT
            </button>
            <button className="py-2 px-3 border border-gray-300 rounded text-xs flex items-center justify-center gap-2">
              <Phone className="w-3 h-3" /> CONTACT US
            </button>
            <button className="py-2 px-3 border border-gray-300 rounded text-xs flex items-center justify-center gap-2">
              <Heart className="w-3 h-3" /> ADD TO WISHLIST
            </button>
            <button className="py-2 px-3 border border-gray-300 rounded text-xs flex items-center justify-center gap-2">
              <Calendar className="w-3 h-3" /> SCHEDULE APPOINTMENT
            </button>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <span className="text-xs font-semibold">SHARE</span>
            <button className="text-gray-600">📌</button>
            <button className="text-gray-600">f</button>
            <button className="text-gray-600">𝕏</button>
          </div>

          <div className="bg-gray-50 p-3 rounded flex items-center gap-2 mb-6">
            <Gift className="w-4 h-4" />
            <span className="text-xs">Earn 847 Points when you buy this item.</span>
          </div>
        </div>

        {showMobileCart && (
          <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 shadow-lg z-50">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-xs text-gray-500 line-through">$1,210</div>
                <div className="text-xl font-bold">$847</div>
              </div>
              <button className="flex-1 py-3 bg-blue-900 text-white font-semibold rounded hover:bg-blue-800 transition">
                ADD TO CART
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GiftDetails;