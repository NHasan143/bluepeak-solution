import { Routes, Route } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Team from "./pages/Team";
import TeamDetails from "./pages/TeamDetails";
import Testimonial from "./pages/Testimonial";
import Pricing from "./pages/Pricing";
import Faq from "./pages/Faq";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Contact from "./pages/Contact";
import Shop from "./pages/Shop";
import ShopSidebar from "./pages/ShopSidebar";
import ProductDetails from "./pages/ProductDetails";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="service-details" element={<ServiceDetails />} />
        <Route path="projects" element={<Projects />} />
        <Route path="project-details" element={<ProjectDetails />} />
        <Route path="team" element={<Team />} />
        <Route path="team-details" element={<TeamDetails />} />
        <Route path="testimonial" element={<Testimonial />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="faq" element={<Faq />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog-details" element={<BlogDetails />} />
        <Route path="contact" element={<Contact />} />
        <Route path="shop" element={<Shop />} />
        <Route path="shop-sidebar" element={<ShopSidebar />} />
        <Route path="product-details" element={<ProductDetails />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
      <Route element={<RootLayout bare />}>
        <Route path="404" element={<NotFound />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
