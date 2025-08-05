import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Homepage";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";

const pastel = {
  cream: "#FDF6F0",
  blue: "#D6E6F7",
  white: "#FFFFFF",
  accent: "#A7C7E7",
  shadow: "0 8px 32px 0 rgba(60, 80, 120, 0.10)",
};

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: `linear-gradient(135deg, ${pastel.cream} 0%, ${pastel.blue} 60%, ${pastel.white} 100%)`,
      }}
    >
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
