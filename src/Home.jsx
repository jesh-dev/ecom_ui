import PopularCategories from "./Components/Category";
import CTABanner from "./Components/Cta";
import Footer from "./Components/Footer";
import HeroSection from "./Components/Hero";
import MediaShowcase from "./Components/Media";
import Navbar from "./Components/Navbar";
import Newsletter from "./Components/Newsletter";
import ProductGrid from "./Components/Products";
import Testimonials from "./Components/Testimonials";
import WhyShopWithUs from "./Components/WhyShop";


export default function Home() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <ProductGrid/>
    <Testimonials/>
    <PopularCategories/>
    <WhyShopWithUs/>
    <CTABanner/>
    <MediaShowcase/>
    <Newsletter/>
    <Footer/>
    </>
  );
}
