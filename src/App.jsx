import "./App.css";

import { Route, Routes } from "react-router-dom";

import AboutUsScreen from "./screens/AboutUsScreen";
import BannerVideo from "./assets/bg.mp4";
import Footer from "./components/Footer";
import HeaderNavBar from "./components/HeaderNavBar";
import HomeScreen from "./screens/HomeScreen";
import OurProcessScreen from "./screens/OurProcessScreen";
import ServicesScreen from "./screens/ServicesScreen";

function App() {
  return (
    <div className="relative w-full h-full">
      {/* Background Video */}
      <video
        className="fixed top-0 left-0 w-full h-full object-cover z-[-1]"
        autoPlay
        muted
        loop
        playsInline>
        <source src={BannerVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay Content */}
      <div className="relative z-10">
        <HeaderNavBar />
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/AboutUs" element={<AboutUsScreen />} />
          <Route path="/OurProcess" element={<OurProcessScreen />} />
          <Route path="/Services" element={<ServicesScreen />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
