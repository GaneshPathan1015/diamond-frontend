import React from 'react';
import "./Gemstones.css";

const Gemstones = () => {
    return (
        <>
            {/* Hero Section */}
            <section className="gemstones_hero d-flex flex-column justify-content-center align-items-center text-center">
                <h1>GEMSTONE EDUCATION</h1>
                <span>
                    Be informed about the different gemstones and what they signify along
                    with which month they align with.
                </span>
            </section>

            {/* Content Section */}
            <section className="pt-5">
                <div className="container">
                    {/* Top Navigation */}
                    <nav className="top-nav">
                        <a href="#">ENGAGEMENT RINGS</a><span>|</span>
                        <a href="#">DIAMONDS</a><span>|</span>
                        <a href="#">WEDDING BANDS</a><span>|</span>
                        <a href="#">FINE JEWELRY</a><span>|</span>
                        <a href="#" className="active">GEMSTONE</a>
                    </nav>

                    <div className="row">
                        {/* Sidebar */}
                        <div className="col-md-3">
                            <div className="sidebar-container">
                                <ul className="sidebar-gemstones">
                                    <li className="active">TYPES</li>
                                    <li>PROPERTIES OR MARKERS</li>
                                    <li>CATEGORIES</li>
                                </ul>
                            </div>
                        </div>

                        {/* Main Content Area */}
                        <div className="col-md-9">
                            {/* January - Garnet */}
                            <div className="main-content">
                                <h1>Garnet <span>(January)</span></h1>
                                <div className="gemstone-details">
                                    <p>
                                        Garnet, the birthstone for January, presents a spectrum of colors
                                        ranging from rich red to gentle, earthy tones. It carries symbolism
                                        tied to strength and good fortune and has been historically referred
                                        to as the "Gem of Faith," believed to bring luck to wearers. Garnet
                                        also promotes serenity and harmonious connections, earning its place
                                        as January's birthstone. It is linked to the pomegranate and its
                                        symbolism of renewal and fertility, making it a fitting choice for
                                        the year's outset.
                                    </p>
                                    <img src="/images/gemstone/1.webp" alt="Garnet gemstone" className="gemstone-img"/>
                                </div>
                                <div className="related-posts">
                                    <h2>RELATED POSTS</h2>
                                    <ul>
                                        <li><a href="#">Garnet Gemstone Guide</a></li>
                                        <li><a href="#">Garnet Value And Worth</a></li>
                                        <li><a href="#">Garnet Grading</a></li>
                                    </ul>
                                </div>
                            </div>

                            {/* February - Amethyst */}
                            <div className="main-content">
                                <h1>Amethyst <span>(February)</span></h1>
                                <div className="gemstone-details">
                                    <p>
                                        The February birthstone, the majestic amethyst gemstone, boasts a fascinating history. Linked to Saint Valentine's amethyst ring, featuring Cupid's image, its name originates from the Greek "amethystos," meaning "not intoxicated," which signifies its protective attributes and wine-like color spectrum. From soft lilac to deep plum, Amethyst's shades result from distinct cuts. As a type of quartz composed of silicon dioxide, it forms within volcanic rocks. It is believed to bestow tranquility, alleviate stress, harmonize emotions, and dispel negativity, establishing it as a potent spiritual gemstone.
                                    </p>
                                    <img src="/images/gemstone/2.webp" alt="Amethyst gemstone" className="gemstone-img"/>
                                </div>
                                <div className="related-posts">
                                    <h2>RELATED POSTS</h2>
                                    <ul>
                                        <li><a href="#">The Meaning of Amethyst</a></li>
                                        <li><a href="#">Amethyst Gemstone Guide</a></li>
                                        <li><a href="#">How much is Amethyst worth?</a></li>
                                    </ul>
                                </div>
                            </div>

                            {/* March - Aquamarine */}
                            <div className="main-content">
                                <h1>Aquamarine <span>(March)</span></h1>
                                <div className="gemstone-details">
                                    <p>
                                        Aquamarine gemstone, adored for its captivating blue shade, carries unique importance as the March birthstone, aligning beautifully with the season of rebirth. Its calm and soothing color conjures images of serene tropical oceans and cloudless daytime skies, making it a versatile choice to enhance any ensemble. With roots in the Latin words "aqua" and "marina," signifying seawater, this gem has historical ties to maritime symbolism, thought to protect sailors from danger. Furthermore, it carries tales of enriching marital happiness, enhancing its enduring charm.
                                    </p>
                                    <img src="/images/gemstone/3.webp" alt="Aquamarine gemstone" className="gemstone-img"/>
                                </div>
                                <div className="related-posts">
                                    <h2>RELATED POSTS</h2>
                                    <ul>
                                        <li><a href="#">Aquamarine Meaning</a></li>
                                        <li><a href="#">What is Aquamarine?</a></li>
                                        <li><a href="#">Aquamarine Grading</a></li>
                                    </ul>
                                </div>
                            </div>

                            {/* April - Diamond */}
                            <div className="main-content">
                                <h1>Diamond <span>(April)</span></h1>
                                <div className="gemstone-details">
                                    <p>
                                        The April birthstone is the diamond, a mesmerizing gem with a rich historical legacy. Initially unearthed in India 2,500 years ago, diamonds carried profound significance for Indian monarchs. Although India was the exclusive source in the past, contemporary diamond mining extends to many other locations. Lab-created diamonds faithfully replicate the natural formation process, reflecting the admirable qualities of April-born individuals, including courage, perseverance, and boundless enthusiasm. These exquisite gems symbolize romance, elegance, tranquility, artistic flair, and humanitarianism.
                                    </p>
                                    <img src="/images/gemstone/4.jpg" alt="Diamond gemstone" className="gemstone-img"/>
                                </div>
                                <div className="related-posts">
                                    <h2>RELATED POSTS</h2>
                                    <ul>
                                        <li><a href="#">This Is The Most Expensive Diamond Cut, and Exactly Why It Costs More</a></li>
                                        <li><a href="#">Diamond Clarity</a></li>
                                        <li><a href="#">Diamond: April's Birthstone</a></li>
                                    </ul>
                                </div>
                            </div>

                            {/* May - Emerald */}
                            <div className="main-content">
                                <h1>Emerald <span>(May)</span></h1>
                                <div className="gemstone-details">
                                    <p>
                                        The Emerald gemstone, renowned for its vibrant green hue, enchants with its exquisite beauty and rarity. This May birthstone is a versatile selection for fine jewelry. They boast an illustrious history, tracing back to ancient Egypt around 330 BC, with some believed to have existed for nearly 3 billion years. Beyond their historical importance, emeralds symbolize loyalty, new beginnings, peace, vitality, prosperity, and security. Their calming green shade is associated with stress relief, relief from eye strain, and evoking spring rejuvenation.
                                    </p>
                                    <img src="/images/gemstone/5.webp" alt="Emerald gemstone" className="gemstone-img"/>
                                </div>
                                <div className="related-posts">
                                    <h2>RELATED POSTS</h2>
                                    <ul>
                                        <li><a href="#">Natural Emerald Grading</a></li>
                                        <li><a href="#">Emerald Gemstone</a></li>
                                        <li><a href="#">Emerald Meaning</a></li>
                                    </ul>
                                </div>
                            </div>

                            {/* June - Pearl */}
                            <div className="main-content">
                                <h1>Pearl <span>(June)</span></h1>
                                <div className="gemstone-details">
                                    <p>
                                        The Pearl gemstone, considered to be June's birthstone, has a rich history symbolizing purity, loyalty, and integrity, often adorning royalty. Discovering a natural pearl is an exceedingly rare event, necessitating the opening of approximately 10,000 wild oysters, with only a select few meeting the standards for jewelry. The pearl gemstone's exquisite luster is attributed to its unique crystalline structure. A pearl ring, signifying loyalty, integrity, and wisdom, holds deep sentimental value in relationships.
                                    </p>
                                    <img src="/images/gemstone/6.webp" alt="Pearl gemstone" className="gemstone-img"/>
                                </div>
                                <div className="related-posts">
                                    <h2>RELATED POSTS</h2>
                                    <ul>
                                        <li><a href="#">Why Pearl Pendants Are Perfect for Daily Wear</a></li>
                                        <li><a href="#">Guide To Pearl Necklaces</a></li>
                                        <li><a href="#">All About Birthstones</a></li>
                                    </ul>
                                </div>
                            </div>

                            {/* July - Ruby */}
                            <div className="main-content">
                                <h1>Ruby <span>(July)</span></h1>
                                <div className="gemstone-details">
                                    <p>
                                        The July birthstone, Ruby, is a highly coveted gem celebrated for its vibrant red color, symbolizing the essence of life. Over the ages, ruby gemstones have been linked to vitality and resilience, cherished by Burmese soldiers for safeguarding purposes, and held in high regard across Medieval Europe for their perceived associations with well-being, intellect, prosperity, and love. These precious stones boast a rich history. Rubies remain potent symbols of affluence, vitality, wisdom, ardor, and bravery, often adorning the armor of ancient warriors for their protective attributes.
                                    </p>
                                    <img src="/images/gemstone/7.webp" alt="Ruby gemstone" className="gemstone-img"/>
                                </div>
                                <div className="related-posts">
                                    <h2>RELATED POSTS</h2>
                                    <ul>
                                        <li><a href="#">Natural Ruby Grading and Ruby Color Chart</a></li>
                                        <li><a href="#">Ruby Gemstone</a></li>
                                        <li><a href="#">Ruby Meaning</a></li>
                                    </ul>
                                </div>
                            </div>

                            {/* August - Peridot */}
                            <div className="main-content">
                                <h1>Peridot <span>(August)</span></h1>
                                <div className="gemstone-details">
                                    <p>
                                        There are three August birthstones: the classic Peridot gemstone, the ancient Sardonyx, and the more recent addition, Spinel. Peridot stands out as the favorite, renowned for its lush green color, spanning from earthy brown-green to the coveted yellow-green hue. This age-old gem, consisting of olivine minerals, originates deep within the Earth's mantle, symbolizing strength, equilibrium, and inner tranquility. As a result, it remains a beloved selection among gem enthusiasts and those with spiritual inclinations, with references to its historical significance even present in the Holy Bible.
                                    </p>
                                    <img src="/images/gemstone/8.webp" alt="Peridot gemstone" className="gemstone-img"/>
                                </div>
                                <div className="related-posts">
                                    <h2>RELATED POSTS</h2>
                                    <ul>
                                        <li><a href="#">How is Peridot Valued?</a></li>
                                        <li><a href="#">Peridot Grading</a></li>
                                        <li><a href="#">Peridot Meaning</a></li>
                                    </ul>
                                </div>
                            </div>

                            {/* September - Sapphire */}
                            <div className="main-content">
                                <h1>Sapphire <span>(September)</span></h1>
                                <div className="gemstone-details">
                                    <p>
                                        The September birthstone, sapphire, has been adored by royalty and the elite for its exquisite rarity and beauty. While sapphire gemstones come in a wide range of colors, the deep blue shades are particularly cherished. Throughout history, sapphires have symbolized royalty, with the ancient Greeks believing in their protective qualities. These gemstones, associated with nobility, truth, and fidelity, have held great significance as representations of heaven and have been attributed to various medicinal properties in different cultures.
                                    </p>
                                    <img src="/images/gemstone/9.webp" alt="Sapphire gemstone" className="gemstone-img"/>
                                </div>
                                <div className="related-posts">
                                    <h2>RELATED POSTS</h2>
                                    <ul>
                                        <li><a href="#">How Much Do Sapphires Cost</a></li>
                                        <li><a href="#">Natural Sapphire Grading</a></li>
                                        <li><a href="#">How Sapphires Are Valued</a></li>
                                    </ul>
                                </div>
                            </div>

                            {/* October - Opal */}
                            <div className="main-content">
                                <h1>Opal <span>(October)</span></h1>
                                <div className="gemstone-details">
                                    <p>
                                        Opal, the October birthstone, forms when silicon dioxide and water interact within volcanic rocks. Opal gemstones are renowned for their mesmerizing play of rainbow colors when in motion, symbolizing gentleness, compassion, and serenity. The term "opal" finds its origins in the Sanskrit word "Upala," signifying a "precious stone." Opals have held diverse cultural meanings, from love and hope to invisibility in folklore. Opal gemstones boast a fascinating history, even intertwining with a folktale involving a pelican and the discovery of fire.
                                    </p>
                                    <img src="/images/gemstone/10.webp" alt="Opal gemstone" className="gemstone-img"/>
                                </div>
                                <div className="related-posts">
                                    <h2>RELATED POSTS</h2>
                                    <ul>
                                        <li><a href="#">Opal Cost</a></li>
                                        <li><a href="#">Opal Gemstone Guide</a></li>
                                        <li><a href="#">Opal Value and Worth</a></li>
                                    </ul>
                                </div>
                            </div>

                            {/* November - Citrine */}
                            <div className="main-content">
                                <h1>Citrine <span>(November)</span></h1>
                                <div className="gemstone-details">
                                    <p>
                                        Citrine, the November birthstone, is a part of the quartz family, boasting a distinctive yellow hue often tinged with brown, red, or orange tones, earning its name from the French word for lemon. While historically revered for its protective qualities, most modern citrine gemstones are heat-treated amethyst. With a robust Mohs scale rating of seven, citrine makes durable jewelry, and its warm, versatile shades lend themselves well to various designs, making it a popular choice for everyday and special occasions.
                                    </p>
                                    <img src="/images/gemstone/11.jpg" alt="Citrine gemstone" className="gemstone-img"/>
                                </div>
                                <div className="related-posts">
                                    <h2>RELATED POSTS</h2>
                                    <ul>
                                        <li><a href="#">Yellow Sapphire Gemstone Guide</a></li>
                                        <li><a href="#">Citrine Gemstone Guide</a></li>
                                        <li><a href="#">Fall Wedding Colors and Jewelry Inspirations</a></li>
                                    </ul>
                                </div>
                            </div>

                            {/* December - Tanzanite */}
                            <div className="main-content">
                                <h1>Tanzanite <span>(December)</span></h1>
                                <div className="gemstone-details">
                                    <p>
                                        Tanzanite, recognized as the December birthstone, is a remarkable and scarce blue gem unearthed in Tanzania in 1967. Initially perceived as a cost-effective sapphire substitute, it has become a favored colored gemstone. According to legend, tanzanite's origins trace back to a lightning strike on Mt. Kilimanjaro, a phenomenon that transmuted ordinary brown crystals into the vivid violet-blue treasures we now adore. Its trichroic quality, showcasing various hues like blue, brown, and purple from distinct viewpoints, has led to its association with spiritual enlightenment and equilibrium.
                                    </p>
                                </div>
                                <div className="related-posts">
                                    <h2>RELATED POSTS</h2>
                                    <ul>
                                        <li><a href="#">Tanzanite Gemstone</a></li>
                                        <li><a href="#">Tanzanite Color</a></li>
                                        <li><a href="#">Tanzanite Meaning</a></li>
                                    </ul>
                                </div>
                            </div>

                            {/* April - Moissanite */}
                            <div className="main-content">
                                <h1>Moissanite <span>(April)</span></h1>
                                <div className="gemstone-details">
                                    <p>
                                        Moissanite is considered to be the April birthstone. It is a rare mineral composed of silicon carbide and was initially discovered within an Arizona crater formed by a meteor in the late 1800s. Named after Dr. Moissan, this gemstone boasts exceptional hardness and colorless brilliance, making it a popular choice for jewelry like moissanite engagement rings. Due to its unique celestial origin, it's often associated with unbreakable love, robust health, mental clarity, and spiritual connection.
                                    </p>
                                    <img src="/images/gemstone/13.jpg" alt="Moissanite gemstone" className="gemstone-img"/>
                                </div>
                                <div className="related-posts">
                                    <h2>RELATED POSTS</h2>
                                    <ul>
                                        <li><a href="#">How Much Does Moissanite Cost?</a></li>
                                        <li><a href="#">Moissanite Gemstone Guide</a></li>
                                        <li><a href="#">Moissanite Origin & Formation</a></li>
                                    </ul>
                                </div>
                            </div>

                            {/* January & May - Tsavorite */}
                            <div className="main-content">
                                <h1>Tsavorite <span>(January & May)</span></h1>
                                <div className="gemstone-details">
                                    <p>
                                        Tsavorite is considered to be a January birthstone and a May birthstone. This striking green gemstone bears a remarkable resemblance to emeralds but boasts greater brilliance and durability. It derives its lush green hue from vanadium and chromium oxide. This rare gemstone is known for its small size, with stones exceeding 2.5 carats considered exceptionally valuable. Tsavorite enhances fertility, supports bodily functions, and promotes emotional healing. Its metaphysical properties include strengthening the heart chakra, boosting vitality, and sharpening intuition.
                                    </p>
                                </div>
                                <div className="related-posts">
                                    <h2>RELATED POSTS</h2>
                                    <ul>
                                        <li><a href="#">When Did Tsavorite Become Popular?</a></li>
                                        <li><a href="#">Tsavorite Gemstone Guide</a></li>
                                        <li><a href="#">Tsavorite Meaning</a></li>
                                    </ul>
                                </div>
                            </div>

                            {/* October - Tourmaline */}
                            <div className="main-content">
                                <h1>Tourmaline <span>(October)</span></h1>
                                <div className="gemstone-details">
                                    <p>
                                        Pink tourmaline, one of its many vibrant hues, has a rich history rooted in its origins from the Sinhalese word "toramalli," denoting a colorful stone. Initially mistaken for rubies, pink tourmaline gained distinction as a unique mineral species in the early 1800s. It holds significance as an October birthstone and an emblem of emotional well-being, love, and enduring friendships. Notably durable, it graces jewelry pieces, from pendants to engagement rings, making it a timeless and meaningful choice.
                                    </p>
                                    <img src="/images/gemstone/15.webp" alt="Tourmaline gemstone" className="gemstone-img"/>
                                </div>
                                <div className="related-posts">
                                    <h2>RELATED POSTS</h2>
                                    <ul>
                                        <li><a href="#">Gemstone Treatments & Care</a></li>
                                        <li><a href="#">Pink Tourmaline Gemstone Guide</a></li>
                                        <li><a href="#">All About Birthstones</a></li>
                                    </ul>
                                </div>
                            </div>

                            {/* December - Blue Topaz */}
                            <div className="main-content">
                                <h1>Blue Topaz <span>(December)</span></h1>
                                <div className="gemstone-details">
                                    <p>
                                        Topaz is a precious gem with a range of hues, including gold, amber, pink, red, and colorless. Blue topaz, in particular, has held a special place for its beauty and significance. It is cherished as a December birthstone and a symbol of tranquility, spiritual connection, and inner peace. December's association with blue topaz may be due to its serene nature and icy blue color. The word "Topaz" has Greek and Sanskrit origins, and it's been revered since ancient times, even mentioned in the Old Testament.
                                    </p>
                                </div>
                                <div className="related-posts">
                                    <h2>RELATED POSTS</h2>
                                    <ul>
                                        <li><a href="#">Topaz Value & Worth</a></li>
                                        <li><a href="#">Blue Topaz History</a></li>
                                        <li><a href="#">London Blue Topaz</a></li>
                                    </ul>
                                </div>
                            </div>

                            {/* June - Alexandrite */}
                            <div className="main-content">
                                <h1>Alexandrite <span>(June)</span></h1>
                                <div className="gemstone-details">
                                    <p>
                                        Alexandrite, a gem discovered in 1831 by Czar Alexander II, showcases chameleon-like colors, shifting from bright green in daylight to purple-red in incandescent light. Symbolizing good fortune, luck, and abundance, wearing this rare stone is believed to invite prosperity and intelligence. With a controversial history rooted in Imperial Russia, where it became the official gemstone of the Tsardom, alexandrite is considered the June birthstone. It is believed to encourage romance while offering a beacon of hope and strength in times of despair.
                                    </p>
                                    <img src="/images/gemstone/16.webp" alt="Alexandrite gemstone" className="gemstone-img"/>
                                </div>
                                <div className="related-posts">
                                    <h2>RELATED POSTS</h2>
                                    <ul>
                                        <li><a href="#">Gemstone Treatments & Care</a></li>
                                        <li><a href="#">All About the June Birthstone</a></li>
                                        <li><a href="#">All About Birthstones</a></li>
                                    </ul>
                                </div>
                            </div>

                            {/* November - Topaz */}
                            <div className="main-content">
                                <h1>Topaz <span>(November)</span></h1>
                                <div className="gemstone-details">
                                    <p>
                                        The November birthstone topaz has a deep historical significance associated with wisdom and well-being. Throughout history, it adorned clergy and nobility, believed to fortify mental resilience and provide protection against various ailments. The Topaz gemstone forms within fractures in igneous rocks, often influenced by fluorine content. Remarkably, topaz displays a diverse range of colors, spanning browns, blues, pinks, reds, and greens, and some even exhibit pleochroism, showcasing varying hues when viewed from different crystal orientations.
                                    </p>
                                    <img src="/images/gemstone/15.webp" alt="Topaz gemstone" className="gemstone-img"/>
                                </div>
                                <div className="related-posts">
                                    <h2>RELATED POSTS</h2>
                                    <ul>
                                        <li><a href="#">London Blue Topaz</a></li>
                                        <li><a href="#">Topaz Origin and Formation</a></li>
                                        <li><a href="#">Topaz Value & Worth</a></li>
                                    </ul>
                                </div>
                            </div>

                            {/* December - Turquoise */}
                            <div className="main-content">
                                <h1>Turquoise <span>(December)</span></h1>
                                <div className="gemstone-details">
                                    <p>
                                        Turquoise, a cherished gemstone for centuries, boasts a rich history spanning Central America, ancient Egyptian tombs, and Native American artistry. Highly valued specimens often hail from present-day Iran. Its unique allure lies in the captivating turquoise blue or subtly green hue derived from its copper-based phosphate composition. Unlike standalone minerals, turquoise forms within volcanic rock cavities, creating intriguing dark inclusions and coveted veined patterns. As a December birthstone, turquoise gemstones embody symbols of luck and prosperity.
                                    </p>
                                </div>
                                <div className="related-posts">
                                    <h2>RELATED POSTS</h2>
                                    <ul>
                                        <li><a href="#">Gemstone Treatments & Care</a></li>
                                        <li><a href="#">Turquoise Gemstone Guide</a></li>
                                        <li><a href="#">All About Birthstones</a></li>
                                    </ul>
                                </div>
                            </div>

                            {/* June - Moonstone */}
                            <div className="main-content">
                                <h1>Moonstone <span>(June)</span></h1>
                                <div className="gemstone-details">
                                    <p>
                                        Moonstone is a captivating gemstone composed of sodium potassium aluminum silicate. What sets it apart is its mesmerizing adularescence - an optical phenomenon causing a radiant, color-shifting glow. Cabochon-cut moonstones showcase a transition from white to pale blue sheen, with their elevated domes accentuating this unique trait. As a June birthstone, alongside pearl and alexandrite, moonstone is a sought-after choice for jewelry, renowned for its modern pearl-like allure. Its price can vary depending on quality, making it accessible for birthstone-themed rings and pendants.
                                    </p>
                                </div>
                                <div className="related-posts">
                                    <h2>RELATED POSTS</h2>
                                    <ul>
                                        <li><a href="#">Gemstone Treatments & Care</a></li>
                                        <li><a href="#">All About Birthstones</a></li>
                                        <li><a href="#">All About Birthstones</a></li>
                                    </ul>
                                </div>
                            </div>

                            {/* August - Sardonyx */}
                            <div className="main-content">
                                <h1>Sardonyx <span>(August)</span></h1>
                                <div className="gemstone-details">
                                    <p>
                                        Sardonyx, the original August birthstone, boasts a rich history dating back 4,000 years to Ancient Egypt. The stone's name fuses "sard," originating from the ancient city Sardis, and "onyx," meaning "nail or claw" in Greek. With its reddish zebra-striped appearance, sardonyx combines layers of sard and onyx. It has been revered across cultures, symbolizing strength and unity, and it serves as a talisman for protection with Mars-themed carvings for warriors. It also represents love for couples and those seeking healing benefits.
                                    </p>
                                </div>
                                <div className="related-posts">
                                    <h2>RELATED POSTS</h2>
                                    <ul>
                                        <li><a href="#">Gemstone Treatments & Care</a></li>
                                        <li><a href="#">All About the August Birthstone</a></li>
                                        <li><a href="#">All About Birthstones</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Gemstones;