import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const navItems = [
  { id: "home", name: "Home", sectionId: null },
  { id: "spot", name: "Spot", sectionId: "spot-brand" },
  { id: "kontak", name: "Kontak", sectionId: "kontak" },
];

const getActiveNav = (pathname) => {
  if (pathname === "/" || pathname === "/home") return "home";
  // No route for spot, so only home is handled by route
  return null;
};

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("home");
  const location = useLocation();
  const spotClickedRef = useRef(false);

  // Update active nav on route change
  useEffect(() => {
    // Only update active if spot was NOT just clicked
    if (!spotClickedRef.current) {
      const current = getActiveNav(location.pathname);
      if (current) setActive(current);
    }
    // Reset spotClickedRef after route change
    spotClickedRef.current = false;
  }, [location.pathname]);

  // Scroll spy: update active nav based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      // Section order: home (top), spot-brand, kontak
      // Find which section is currently in view
      const scrollY = window.scrollY || window.pageYOffset;
      const offset = 120; // offset for sticky navbar height

      // Get section positions
      const sections = [
        { id: "home", top: 0 },
        ...navItems
          .filter(item => item.sectionId)
          .map(item => {
            const el = document.getElementById(item.sectionId);
            return {
              id: item.id,
              top: el ? el.getBoundingClientRect().top + window.scrollY : Infinity,
            };
          }),
      ];

      // Sort by top position
      sections.sort((a, b) => a.top - b.top);

      // Find the current section
      let currentSection = "home";
      for (let i = 0; i < sections.length; i++) {
        if (scrollY + offset >= sections[i].top) {
          currentSection = sections[i].id;
        }
      }

      if (active !== currentSection) {
        setActive(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once on mount to set initial state
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
    // eslint-disable-next-line
  }, [active]);

  const handleNavClick = (id) => {
    setMobileOpen(false);
    setActive(id);
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      if (window.location.pathname !== "/") {
        window.history.pushState({}, "", "/");
      }
    } else {
      const navItem = navItems.find(item => item.id === id);
      const sectionId = navItem?.sectionId;
      if (id === "spot") {
        spotClickedRef.current = true;
      }
      if (sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        } else {
          window.location.href = `/#${sectionId}`;
        }
      }
    }
  };

  return (
    <nav className="sticky top-6 z-50 w-full flex justify-center px-2 md:px-0 text-lg">
      <div
        className="rounded-full px-4 md:px-12 py-3 md:py-4 shadow-2xl flex items-center justify-between
        bg-white text-black w-full max-w-[700px]"
      >
        {/* Logo (Mobile only) */}
        <div className="block md:hidden font-bold text-lg pl-4">Parfume</div>
        {/* Desktop Navbar */}
        <div className="hidden md:flex flex-1 items-center justify-center">
          <div className="flex flex-1 items-center justify-center w-full gap-2">
            {navItems.map((item) =>
              item.id === "spot" ? (
                <a
                  key={item.id}
                  href="#spot-brand"
                  onClick={e => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                  className={`flex-1 text-center relative cursor-pointer text-base font-semibold tracking-wide bg-transparent border-none outline-none shadow-none
                    ${active === item.id ? "text-indigo-700" : "text-gray-800"}
                  `}
                  style={{
                    boxShadow: "none",
                    border: "none",
                    background: "none",
                  }}
                >
                  <span>{item.name}</span>
                  <div
                    className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 ${
                      active === item.id
                        ? "w-4/5 bg-gradient-to-r from-indigo-500 to-indigo-300"
                        : "w-0"
                    }`}
                  ></div>
                </a>
              ) : item.id === "home" ? (
                <span
                  key={item.id}
                  onClick={e => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                  className={`flex-1 text-center relative cursor-pointer text-base font-semibold tracking-wide bg-transparent border-none outline-none shadow-none
                    ${active === item.id ? "text-indigo-700" : "text-gray-800"}
                  `}
                  style={{
                    boxShadow: "none",
                    border: "none",
                    background: "none",
                  }}
                >
                  <span>{item.name}</span>
                  <div
                    className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 ${
                      active === item.id
                        ? "w-4/5 bg-gradient-to-r from-indigo-500 to-indigo-300"
                        : "w-0"
                    }`}
                  ></div>
                </span>
              ) : (
                <span
                  key={item.id}
                  onClick={e => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                  className={`flex-1 text-center relative cursor-pointer text-base font-semibold tracking-wide bg-transparent border-none outline-none shadow-none
                    ${active === item.id ? "text-indigo-700" : "text-gray-800"}
                  `}
                  style={{
                    boxShadow: "none",
                    border: "none",
                    background: "none",
                  }}
                >
                  <span>{item.name}</span>
                  <div
                    className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 ${
                      active === item.id
                        ? "w-4/5 bg-gradient-to-r from-indigo-500 to-indigo-300"
                        : "w-0"
                    }`}
                  ></div>
                </span>
              )
            )}
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <span
          onClick={() => setMobileOpen((open) => !open)}
          className="md:hidden ml-auto bg-purple-600 hover:bg-purple-700 text-white rounded-full p-2 transition-colors duration-200"
          aria-label="Toggle menu"
        >
          {!mobileOpen ? (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
            </svg>
          ) : (
            <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </span>
      </div>

      {/* Mobile Navbar */}
      {mobileOpen && (
        <div
          className="md:hidden absolute top-full mt-2 left-1/2 transform -translate-x-1/2 w-[90%] rounded-xl shadow-lg z-50 py-4 px-4 flex flex-col space-y-2
          bg-white border text-black"
        >
          {navItems.map((item) =>
            item.id === "spot" ? (
              <a
                key={item.id}
                href="#spot-brand"
                onClick={e => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                className={`text-center relative cursor-pointer py-3 rounded-md text-base font-semibold tracking-wide bg-transparent border-none outline-none shadow-none
                  ${active === item.id ? "text-indigo-700" : "text-gray-800"}
                `}
                style={{
                  boxShadow: "none",
                  border: "none",
                  background: "none",
                }}
              >
                <span>{item.name}</span>
                <div
                  className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 ${
                    active === item.id
                      ? "w-4/5 bg-gradient-to-r from-indigo-500 to-indigo-300"
                      : "w-0"
                  }`}
                ></div>
              </a>
            ) : item.id === "home" ? (
              <span
                key={item.id}
                onClick={e => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                className={`text-center relative cursor-pointer py-3 rounded-md text-base font-semibold tracking-wide bg-transparent border-none outline-none shadow-none
                  ${active === item.id ? "text-indigo-700" : "text-gray-800"}
                `}
                style={{
                  boxShadow: "none",
                  border: "none",
                  background: "none",
                }}
              >
                <span>{item.name}</span>
                <div
                  className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 ${
                    active === item.id
                      ? "w-4/5 bg-gradient-to-r from-indigo-500 to-indigo-300"
                      : "w-0"
                  }`}
                ></div>
              </span>
            ) : (
              <span
                key={item.id}
                onClick={e => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                className={`text-center relative cursor-pointer py-3 rounded-md text-base font-semibold tracking-wide bg-transparent border-none outline-none shadow-none
                  ${active === item.id ? "text-indigo-700" : "text-gray-800"}
                `}
                style={{
                  boxShadow: "none",
                  border: "none",
                  background: "none",
                }}
              >
                <span>{item.name}</span>
                <div
                  className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-0.5 ${
                    active === item.id
                      ? "w-4/5 bg-gradient-to-r from-indigo-500 to-indigo-300"
                      : "w-0"
                  }`}
                ></div>
              </span>
            )
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
