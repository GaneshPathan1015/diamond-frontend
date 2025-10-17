import { Routes, Route, useLocation } from "react-router-dom";
import ScrollToTop from "./pages/scrolltop/ScrollToTop";
import Footer from "./pages/footer/footer";
import HeaderWrapper from "./pages/header/HeaderWrapper";

// All your page imports
import Home from "./pages/home/home";
import Contact from "./pages/contact/contact";
import Engagement from "./pages/engagement/engagement";
import About from "./pages/about/about";
import Diamond from "./pages/diamond/diamond";
import Terms from "./pages/terms-conditions/terms";
import Policy from "./pages/policy/policy";
import Weddingbrands from "./pages/wedding-brands/weddingBrands";
import RingStyle from "./pages/engagemnet-ring-style/ringStyle";
import DiamondDetails from "./pages/diamond-detail/diamondDetails/diamondDetails";
import CartPage from "./cart/CartPage";
import Signin from "./pages/signin/signin";
import Signup from "./pages/signup/signup";
import ResetPassword from "./pages/resetpassword/reset";
import ResetPasswordForm from "./pages/resetpassword/ResetPasswordForm";
import Profile from "./pages/profile/profile";
import Checkout from "./pages/checkout/checkout";
import ThankYou from "./pages/order-success/thankyou";
import PaymentFailed from "./pages/payment_failed/PaymentFailed";
import OrderDetails from "./pages/order_details/OrderDetails";
import JewelryList from "./pages/jewellary_list/JewelryList";
import JewelryDetailsPage from "./pages/jewellary-details/JewellaryDetails";
import MegaMenu from "./pages/mega-menu/megaMenu";
import Luxe from "./pages/Luxe/luxe";
import Reserve from "./pages/reserve-collections/reserve";
import Signature from "./pages/w-signature/signature";
import EngagementDetails from "./pages/engagement-details/engDetails";
import EngagementList from "./pages/engagement-list/engagementList";
import WeddingList from "./pages/wedding-brands/WeddingList";
import CompleteRing from "./pages/completeRing/completeRing";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import WhiteClarityNav from "./pages/header/WhiteClarityNav";
import PrivateRoute from "./routes/PrivateRoute";
import CollectionsRouter from "./pages/collectionsRouter/CollectionsRouter";

// Footer pages
import RadianceRewards from "./pages/footerpages/Company/RadianceRewards";
import Press from "./pages/footerpages/Company/Press";
import Reviews from "./pages/footerpages/Company/Reviews";
import Affiliates from "./pages/footerpages/Company/Affiliates";
import SiteMap  from "./pages/footerpages/Company/Sitemap";
import MonthlyPaymentOption  from "./pages/footerpages/Company/MonthlyPaymentOption";

// Education
import DiamondFooter from "./pages/footerpages/education/DiamondFooter";
import ClarityPlusDiamonds  from "./pages/footerpages/education/ClarityPlusDiamonds";
import Jewelry from "./pages/footerpages/education/jewelry/jewelry";
import OurPolicy from "./pages/footerpages/education/policy/OurPolicy";
import Gemstones from "./pages/footerpages/education/Gemstones/Gemstones";
import LabGrownDiamonds from "./pages/footerpages/education/LabGrownDiamonds/LabGrownDiamonds";
import Metal from "./pages/footerpages/education/Metal";
import Blog from "./pages/footerpages/education/blog/Blog";
import WeddingBandStyle from "./pages/footerpages/education/WeddingBandStyle";

// Customer care
import Idme from "./pages/footerpages/customercare/idme";
import Insurance from "./pages/footerpages/customercare/insurance";
import Financing from "./pages/footerpages/customercare/financing";
import ExtendedWarranty from "./pages/footerpages/customercare/ExtendedWarranty";
import Appointment from "./pages/footerpages/customercare/Appointment";

export default function App() {
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <>
      <ScrollToTop />
      {/* <HeaderWrapper /> */}
      <WhiteClarityNav />
      <main style={{ paddingTop: isHome ? "0px" : "146px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/engagement" element={<Engagement />} />
          <Route path="/about" element={<About />} />
          <Route path="/diamond" element={<Diamond />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/site-map" element={<SiteMap />} />
          <Route path="/policy" element={<Policy />} />
          <Route path="/wedding-brands" element={<Weddingbrands />} />
          <Route path="/engagement-ring-style" element={<RingStyle />} />
          <Route path="/diamond-details/:id" element={<DiamondDetails />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route
            path="/reset-password/:token"
            element={<ResetPasswordForm />}
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/thankyou" element={<ThankYou />} />
          <Route path="/paymnet-failed" element={<PaymentFailed />} />
          <Route path="/order-details/:orderId" element={<OrderDetails />} />
          <Route path="/jewelry-list" element={<JewelryList />} />
          <Route path="/engagement-rings/:slug?" element={<EngagementList />} />
          <Route path="/wedding/:slug?" element={<WeddingList />} />
          <Route path="/collections/:slug" element={<CollectionsRouter />} />

          <Route
            path="/jewellary-details/:id"
            element={<JewelryDetailsPage />}
          />
          <Route path="/product/:slug?" element={<CompleteRing />} />
          <Route
            path="/engagment-details/:id"
            element={<EngagementDetails />}
          />
          <Route path="/megamenu" element={<MegaMenu />} />
          <Route path="/luxe" element={<Luxe />} />
          <Route path="/reserve" element={<Reserve />} />
          <Route path="/signature" element={<Signature />} />
          {/* 404 page */}
          <Route path="*" element={<PageNotFound />} />


          {/* Footer pages start*/}
          <Route path="/press" element={<Press />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/affiliates" element={<Affiliates />} />
          <Route path="/monthly-payment-option" element={<MonthlyPaymentOption />} />
          <Route path="/radiance-rewards-program" element={<RadianceRewards />} />

          {/* footer Education */}
          <Route path="/diamonds" element={<DiamondFooter />} />
          <Route path="/fine-jewelry-earrings" element={<Jewelry />} />
          <Route path="/our-policies" element={<OurPolicy />} />
          <Route path="/gemstones-types-guide" element={<Gemstones />} />
          <Route path="/lab-diamonds" element={<LabGrownDiamonds />} />
          <Route path="/metal" element={<Metal />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/wedding-band-styles" element={<WeddingBandStyle />} />
          <Route path="/clarity-plus-diamonds" element={<ClarityPlusDiamonds />} />
          

          {/* Customer care */}
          <Route path="/id-me" element={<Idme />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/financing" element={<Financing />} />
          <Route path="/jewelry-protection-plan" element={<ExtendedWarranty />} />
          <Route path="/book-an-appointment" element={<Appointment />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
