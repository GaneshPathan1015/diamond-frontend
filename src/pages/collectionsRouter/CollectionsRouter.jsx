import { useParams } from "react-router-dom";
import GiftList from "../gift/GiftList";
import SaleList from "../sale/SaleList";
import PageNotFound from "../PageNotFound/PageNotFound";

const giftSlugs = [
  "jewelry-gifts",
  "diamond-ring-gifts",
  "necklace-gifts",
  "earring-gifts",
  "bracelet-gifts",
  "gifts-under-500",
  "gifts-under-1000",
  "gifts-under-1500",
  "bouquet",
  "toi-et-moi-collection",
  "vine-collection",
  "incredible-value",
  "jewelry-gift-sets",
  "ready-to-ship-diamond-jewelry-gifts",
  "jewelry-gifts-for-him",
  "caratcasa-gift-card",
  // ... more gift slugs
];

const saleSlugs = [
  "diamond-jewelry-sale",
  "ring-sale",
  "necklace-sale",
  "bracelet-sale",
  // ... more sale slugs
];

const CollectionsRouter = () => {
  const { slug } = useParams();

  if (saleSlugs.includes(slug)) {
    return <SaleList />;
  }

  if (giftSlugs.includes(slug)) {
    return <GiftList />;
  }

  // fallback if slug doesn't exist
  return <PageNotFound />;
};

export default CollectionsRouter;
