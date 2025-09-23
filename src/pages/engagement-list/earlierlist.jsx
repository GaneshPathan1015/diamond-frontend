        <div className="row row-cols-1 row-cols-md-4 g-4">
          {loading && <Loader />}

          {products.map((group) => {
            const metalVariations = group.metal_variations || {};

            // Flatten variations for each metalId (since is_build === 1)
            const flattenedMetalVariations = {};
            Object.entries(metalVariations).forEach(([metalId, shapeMap]) => {
              flattenedMetalVariations[metalId] =
                Object.values(shapeMap).flat();
            });

            const metalKeys = Object.keys(flattenedMetalVariations).sort(
              (a, b) => {
                const qualityA =
                  flattenedMetalVariations[a][0]?.metal_color?.quality || "";
                const qualityB =
                  flattenedMetalVariations[b][0]?.metal_color?.quality || "";
                const numA = parseInt(qualityA);
                const numB = parseInt(qualityB);
                if (!isNaN(numA) && !isNaN(numB)) return numA - numB;
                if (!isNaN(numA)) return -1;
                if (!isNaN(numB)) return 1;
                return qualityA.localeCompare(qualityB);
              }
            );

            const currentMetalId = String(
              activeMetal[group.id] ?? metalKeys[0]
            );
            const metalOptions = flattenedMetalVariations[currentMetalId] || [];
            const selectedIndex = selectedVariations[group.id] || 0;
            const selectedVariation = metalOptions[selectedIndex];

            const image =
              Array.isArray(selectedVariation?.images) &&
              selectedVariation.images.length > 0
                ? `${
                    import.meta.env.VITE_BACKEND_URL
                  }/storage/variation_images${selectedVariation.images[0]}`
                : `${
                    import.meta.env.VITE_BACKEND_URL
                  }/storage/variation_images/No_Image_Available.jpg`;

            const price = selectedVariation?.price || "NA";
            const originalPrice = selectedVariation?.original_price || "NA";
            const sku = selectedVariation?.sku || "NA";
            const discount = selectedVariation?.discount || "";

            return (
              <div className="col" key={group.id}>
                <div
                  className="h-100 d-flex flex-column"
                  style={{ width: "95%" }}
                >
                  <Link
                    to={`/engagment-details/${group.product?.id}`}
                    state={{ diamond: diamond }} // pass state correctly
                    className="text-decoration-none text-dark mt-2"
                  >
                    <div className="product-image-container position-relative shadow">
                      <img
                        src={image}
                        alt="Product"
                        className="product-image-full"
                      />
                      <div className="overlay-text d-flex justify-content-between px-2">
                        <span className="ready-to-ship">
                          {group.product?.ready_to_ship ? "READY TO SHIP" : ""}
                        </span>
                        <span className="discount">{discount}</span>
                      </div>
                    </div>
                    <p className="fw-semibold mb-1 product-variation__title">
                      {group.product?.name || "NA"}
                    </p>
                  </Link>

                  <p className="mb-2">{sku}</p>

                  {/* Metal buttons */}
                  <div className="product-metal__buttons mb-2 d-flex gap-1 flex-wrap">
                    {metalKeys.map((metalId) => {
                      const metal =
                        flattenedMetalVariations[metalId][0]?.metal_color;
                      return (
                        <button
                          key={metalId}
                          className="product-variation__btn"
                          style={{
                            background: metal?.hex,
                            border: `1px solid ${
                              String(activeMetal[group.id]) === String(metalId)
                                ? "#000"
                                : "#ccc"
                            }`,
                            color: "#000",
                          }}
                          onClick={() => {
                            setActiveMetal((prev) => ({
                              ...prev,
                              [group.id]: metalId,
                            }));
                            setSelectedVariations((prev) => ({
                              ...prev,
                              [group.id]: 0,
                            }));
                          }}
                        >
                          {metal?.quality}
                        </button>
                      );
                    })}
                  </div>

                  {/* Weight selector */}
                  <div className="product-variation__carat-group">
                    <small className="product-variation__carat-title">
                      Total Carat Weight
                    </small>

                    {metalOptions.length > 0 ? (
                      metalOptions.map((variation, index) => (
                        <button
                          key={index}
                          className={`product-variation__carat-pill ${
                            selectedIndex === index ? "active" : ""
                          }`}
                          onClick={() =>
                            setSelectedVariations((prev) => ({
                              ...prev,
                              [group.id]: index,
                            }))
                          }
                        >
                          {variation.weight || "NA"}
                        </button>
                      ))
                    ) : (
                      <p>No metal variations available</p>
                    )}
                  </div>

                  <p className="mt-1">
                    <span className="fw-bold">${price}</span>
                    {originalPrice && (
                      <span className="original-price text-muted text-decoration-line-through ms-2">
                        ${originalPrice}
                      </span>
                    )}
                  </p>
                </div>
              </div>
            );
          })}
        </div>