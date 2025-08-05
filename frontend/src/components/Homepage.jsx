import { useEffect } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const pastel = {
  cream: "#FDF6F0",
  blue: "#D6E6F7",
  white: "#FFFFFF",
  accent: "#A7C7E7",
  shadow: "0 8px 32px 0 rgba(60, 80, 120, 0.10)",
};

const Hero = () => {
  // Koordinat tujuan: Mall of Serang
  const destinationLat = -6.118911693867718;
  const destinationLng = 106.17933717537157;

  // Inisialisasi AOS (Animate On Scroll)
  useEffect(() => {
    if (typeof window !== "undefined") {
      import("aos").then((AOS) => {
        AOS.init({
          duration: 800,
          once: true,
        });
      });
    }
  }, []);

  // Fungsi untuk membuka Google Maps Direction
  const openDirection = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLat = position.coords.latitude;
          const userLng = position.coords.longitude;
          const url = `https://www.google.com/maps/dir/?api=1&origin=${userLat},${userLng}&destination=${destinationLat},${destinationLng}&travelmode=driving`;
          window.open(url, "_blank");
        },
        () => {
          const url = `https://www.google.com/maps/dir/?api=1&destination=${destinationLat},${destinationLng}&travelmode=driving`;
          window.open(url, "_blank");
        }
      );
    } else {
      const url = `https://www.google.com/maps/dir/?api=1&destination=${destinationLat},${destinationLng}&travelmode=driving`;
      window.open(url, "_blank");
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full min-h-screen flex flex-col justify-center items-center text-center overflow-hidden"
        data-aos="fade-in"
      >
        {/* Hero Content: Text Left, Lottie Right */}
        <div
          className="flex flex-col-reverse md:flex-row items-center justify-center w-full max-w-6xl mx-auto z-10 mt-8 md:mt-0"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {/* Text Section */}
          <div
            className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left px-4 md:px-8"
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <h1
              className="text-4xl md:text-6xl font-extrabold mb-4"
              style={{
                fontFamily: "'Montserrat', 'Inter', Arial, sans-serif",
                color: "#2B3146",
                letterSpacing: "0.01em",
                textShadow: "0 4px 32px rgba(60,80,120,0.10)",
              }}
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Hallo <br className="hidden md:block" /> <span style={{ color: "#F08B50" }}>Brandio</span> di sini!
            </h1>
            <p
              className="text-base md:text-xl max-w-2xl mx-auto md:mx-0 mb-8"
              style={{
                fontFamily: "'Inter', 'Segoe UI', Arial, sans-serif",
                color: "#4B5563",
                fontWeight: 500,
                lineHeight: 1.6,
              }}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              Solusi iklan modern, minimalis, dan elegan untuk bisnis Anda.
              Jangkau lebih banyak pelanggan dengan layanan iklan profesional,
              mulai dari billboard, digital, hingga analitik, di Kota Serang dan
              sekitarnya.
            </p>
            {/* Tombol CTA: Lihat Layanan & Konsultasi Gratis */}
            <div
              className="mt-6 flex flex-col md:flex-row items-center md:items-start md:justify-start gap-6 z-10 w-full"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <a
                href="#layanan"
                className="px-8 py-3 bg-indigo-600 text-white rounded-full font-semibold shadow-lg transition text-lg hover:bg-white hover:text-indigo-700 hover:border hover:border-indigo-600"
                style={{ boxShadow: pastel.shadow }}
                data-aos="zoom-in"
                data-aos-delay="500"
              >
                Lihat Layanan
              </a>
              <a
                href="#kontak"
                className="px-8 py-3 bg-white border border-[#F08B50] text-[#F08B50] rounded-full font-semibold shadow-lg transition text-lg hover:bg-[#F08B50] hover:text-white hover:border-[#F08B50]"
                style={{ boxShadow: pastel.shadow }}
                data-aos="zoom-in"
                data-aos-delay="600"
              >
                Konsultasi Gratis
              </a>
            </div>
          </div>
          {/* Lottie Animation Section */}
          <div
            className="w-full md:w-1/2 flex justify-center items-center mb-6 md:mb-0"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <DotLottieReact
              src="https://lottie.host/fb8a429c-ff2f-40c1-8bcf-8ebd0a61d04b/AglnnGf0sw.lottie"
              loop
              autoplay
              style={{ width: 500, height: 500, maxWidth: "100%" }}
            />
          </div>
        </div>
      </section>

      {/* Layanan Section */}
      <section
        id="layanan"
        className="py-20 relative"
        style={{ borderRadius: "0 0 3rem 3rem / 0 0 2rem 2rem" }}
        data-aos="fade-in"
      >
        <div className="max-w-6xl mx-auto px-4">
          <h2
            className="text-3xl md:text-4xl font-extrabold text-center mb-14"
            style={{
              color: "#2B3146",
              fontFamily: "'Montserrat', 'Inter', Arial, sans-serif",
              letterSpacing: "0.01em",
            }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
           Kenapa <span style={{ color: "#F08B50" }}>BRANDIO </span>lebih efektif ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Billboard */}
            <div
              className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
              <div className="relative z-10 mx-auto max-w-md">
                <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
                  {/* Billboard Icon */}
                  <svg
                    width="40"
                    height="40"
                    fill="none"
                    viewBox="0 0 48 48"
                    className="h-10 w-10 text-white transition-all"
                  >
                    <rect
                      x="8"
                      y="10"
                      width="32"
                      height="14"
                      rx="4"
                      fill="currentColor"
                    />
                    <rect
                      x="14"
                      y="24"
                      width="4"
                      height="10"
                      rx="2"
                      fill="#E3EAF6"
                    />
                    <rect
                      x="30"
                      y="24"
                      width="4"
                      height="10"
                      rx="2"
                      fill="#E3EAF6"
                    />
                    <rect
                      x="22"
                      y="24"
                      width="4"
                      height="10"
                      rx="2"
                      fill="#E3EAF6"
                    />
                  </svg>
                </span>
                <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                  <h3
                    className="font-bold text-lg mb-2"
                    style={{ color: "#2B3146" }}
                  >
                    Iklan Billboard
                  </h3>
                  <p>
                    Billboard & baliho strategis di titik utama Kota Serang,
                    tampil menonjol dan elegan.
                  </p>
                </div>
              </div>
            </div>
            {/* Megafon */}
            <div
              className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
              <div className="relative z-10 mx-auto max-w-md">
                <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
                  {/* Megafon Icon */}
                  <svg
                    width="40"
                    height="40"
                    fill="none"
                    viewBox="0 0 48 48"
                    className="h-10 w-10 text-white transition-all"
                  >
                    <path
                      d="M10 28V20a2 2 0 0 1 2-2h8l12-6v24l-12-6h-8a2 2 0 0 1-2-2z"
                      fill="currentColor"
                    />
                    <circle cx="36" cy="24" r="3" fill="#E3EAF6" />
                  </svg>
                </span>
                <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                  <h3
                    className="font-bold text-lg mb-2"
                    style={{ color: "#2B3146" }}
                  >
                    Iklan Megafon
                  </h3>
                  <p>Iklan Anda didengar di seluruh area mall</p>
                </div>
              </div>
            </div>
            {/* Digital */}
            <div
              className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
              <div className="relative z-10 mx-auto max-w-md">
                <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
                  {/* Digital Icon */}
                  <svg
                    width="40"
                    height="40"
                    fill="none"
                    viewBox="0 0 48 48"
                    className="h-10 w-10 text-white transition-all"
                  >
                    <rect
                      x="10"
                      y="14"
                      width="28"
                      height="20"
                      rx="4"
                      fill="currentColor"
                    />
                    <rect
                      x="18"
                      y="36"
                      width="12"
                      height="2"
                      rx="1"
                      fill="#E3EAF6"
                    />
                    <circle cx="24" cy="24" r="4" fill="#E3EAF6" />
                  </svg>
                </span>
                <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                  <h3
                    className="font-bold text-lg mb-2"
                    style={{ color: "#2B3146" }}
                  >
                    Iklan Digital
                  </h3>
                  <p>
                    Kampanye digital & media sosial, Google Ads, dan promosi
                    online yang terukur.
                  </p>
                </div>
              </div>
            </div>
            {/* Analitik */}
            <div
              className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
              <div className="relative z-10 mx-auto max-w-md">
                <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
                  {/* Analitik Icon */}
                  <svg
                    width="40"
                    height="40"
                    fill="none"
                    viewBox="0 0 48 48"
                    className="h-10 w-10 text-white transition-all"
                  >
                    <rect
                      x="10"
                      y="28"
                      width="4"
                      height="10"
                      rx="2"
                      fill="currentColor"
                    />
                    <rect
                      x="20"
                      y="20"
                      width="4"
                      height="18"
                      rx="2"
                      fill="currentColor"
                    />
                    <rect
                      x="30"
                      y="14"
                      width="4"
                      height="24"
                      rx="2"
                      fill="currentColor"
                    />
                    <rect
                      x="38"
                      y="34"
                      width="4"
                      height="4"
                      rx="2"
                      fill="#E3EAF6"
                    />
                  </svg>
                </span>
                <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                  <h3
                    className="font-bold text-lg mb-2"
                    style={{ color: "#2B3146" }}
                  >
                    Analitik & Laporan
                  </h3>
                  <p>Meningkatkan Brand Awareness</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Spot Brand Section */}
      <section className="overflow-hidden py-40" id="spot-brand">
        <div className="max-w-screen-xl 2xl:max-w-screen-3xl px-8 md:px-12 mx-auto py-12 lg:py-24 space-y-24 min-h-[60vh] flex flex-col justify-center">
          <div className="flex flex-col sm:flex-row mx-auto gap-6">
            {/* Animated Image Cards */}
            <a href="#kontak" className="block w-44 h-64">
              <img
                src="https://images.unsplash.com/photo-1530035415911-95194de4ebcc?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="rounded-xl rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom shadow-lg"
                alt="Spot Brand 1"
              />
            </a>
            <a href="#kontak" className="block w-44 h-64">
              <img
                src="https://images.unsplash.com/photo-1487180144351-b8472da7d491?q=80&w=2672&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="rounded-xl -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom shadow-lg"
                alt="Spot Brand 2"
              />
            </a>
            <a href="#kontak" className="block w-44 h-64">
              <img
                src="https://images.unsplash.com/photo-1586996292898-71f4036c4e07?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="rounded-xl rotate-6 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom shadow-lg"
                alt="Spot Brand 3"
              />
            </a>
            <a href="#kontak" className="block w-44 h-64">
              <img
                src="https://images.unsplash.com/photo-1522775417749-29284fb89f43?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className="rounded-xl -rotate-12 hover:rotate-0 duration-500 hover:-translate-y-12 h-full w-full object-cover hover:scale-150 transform origin-bottom shadow-lg"
                alt="Spot Brand 4"
              />
            </a>
          </div>
          {/* Teks dan CTA */}
          <div className="flex flex-col items-center text-center justify-center">
            <h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              style={{ color: "#2B3146" }}
            >
              Spot Brand di Mall Of Serang
            </h2>
            <p className="mt-2 text-xl text-gray-500 mb-8 max-w-2xl">
              Pilihan lokasi strategis untuk menampilkan brand Anda secara
              eksklusif di pusat keramaian Kota Serang. Tampil menonjol,
              jangkau lebih banyak audiens, dan tingkatkan awareness bisnis
              Anda bersama kami.
            </p>
            <a
              href="#kontak"
              className="inline-block rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700 transition"
            >
              Konsultasi Spot Brand
            </a>
          </div>
        </div>
      </section>

      {/* Peta Section */}
      <section
        className="py-20 relative"
        style={{
          borderRadius: "0 0 3rem 3rem / 0 0 2rem 2rem",
        }}
        data-aos="fade-in"
      >
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center md:items-stretch gap-10">
            {/* Kiri: Teks */}
            <div className="w-full md:w-1/2 flex flex-col justify-center md:justify-start md:pr-8 mb-8 md:mb-0">
              <h2
                className="text-3xl md:text-4xl font-extrabold text-left mb-6"
                style={{
                  color: "#2B3146",
                  fontFamily: "'Montserrat', 'Inter', Arial, sans-serif",
                  letterSpacing: "0.01em",
                }}
                data-aos="fade-right"
                data-aos-delay="100"
              >
                Lokasi Iklan Kami
              </h2>
              <p
                className="text-gray-500 mb-8 text-lg"
                style={{ fontFamily: "'Inter', Arial, sans-serif" }}
                data-aos="fade-right"
                data-aos-delay="200"
              >
                Titik lokasi strategis di Kota Serang dan sekitarnya, siap
                memaksimalkan jangkauan promosi Anda.
              </p>
              <div className="my-4 flex justify-start">
                  <DotLottieReact
                    src="https://lottie.host/fcfaccfe-45e4-4c23-ba27-43712e18a804/aztsYCNTvX.lottie"
                    loop
                    autoplay
                    style={{ width: 200, height: 200 }}
                  />
                </div>
            </div>
            {/* Kanan: Peta, Tombol, dan Teks bawah */}
            <div className="w-full md:w-1/2 flex flex-col items-center">
              <div
                className="overflow-hidden rounded-3xl shadow-lg w-full"
                data-aos="zoom-in"
                data-aos-delay="200"
                style={{ minHeight: 300 }}
              >
                <iframe
                  title="Lokasi Google Maps Mall of Serang"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.087588236844!2d106.17933717537157!3d-6.118911693867718!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e418ad5ed6343b3%3A0xdcca547b25249e48!2sMall%20Of%20Serang!5e0!3m2!1sen!2sid!4v1754382178363!5m2!1sen!2sid"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: 300, borderRadius: "1.5rem" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <div
                className="flex justify-center mt-6 w-full"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <button
                  onClick={openDirection}
                  className="flex items-center gap-2 px-6 py-3 bg-indigo-600 text-white rounded-full font-semibold shadow-lg hover:bg-[#7BA7D9] transition text-lg"
                  style={{ boxShadow: pastel.shadow }}
                  data-aos="zoom-in"
                  data-aos-delay="400"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="#fff"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.752 11.168l-9.456 3.181a1 1 0 00-.063 1.885l7.197 2.88a1 1 0 00.894-.063l7.197-4.32a1 1 0 00.063-1.885l-7.197-2.88a1 1 0 00-.635-.006z"
                    />
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="#fff"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                  Arahkan ke Lokasi
                </button>
              </div>
              <p
                className="text-center text-gray-500 mt-6 w-full"
                style={{ fontFamily: "'Inter', Arial, sans-serif" }}
                data-aos="fade-up"
                data-aos-delay="500"
              >
                Titik lokasi strategis di Kota Serang dan sekitarnya, siap
                memaksimalkan jangkauan promosi Anda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section
        id="kontak"
        className="py-20 text-[#2B3146] relative"
        style={{
          borderRadius: "0 0 3rem 3rem / 0 0 2rem 2rem",
        }}
        data-aos="fade-in"
      >
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold mb-4"
            style={{
              fontFamily: "'Montserrat', 'Inter', Arial, sans-serif",
              color: "#2B3146",
              letterSpacing: "0.01em",
            }}
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Siap Promosikan Brand Anda?
          </h2>
          <p
            className="mb-8 text-lg"
            style={{ color: "#4B5563" }}
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Hubungi kami untuk konsultasi gratis dan dapatkan penawaran terbaik
            untuk kebutuhan iklan Anda di Kota Serang!
          </p>
          {/* Lottie animation above WhatsApp button */}
          <div className="flex justify-center mb-6">
            <DotLottieReact
              src="https://lottie.host/eed3f706-5f29-4e9a-be7b-5c321b30a4dc/86Z6xMDpDB.lottie"
              loop
              autoplay
              style={{ width: 120, height: 120 }}
            />
          </div>
          <a
            href="https://wa.me/6281318942676"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-10 py-4 bg-[#25D366] text-white font-semibold rounded-full shadow-xl hover:bg-[#1ebe5d] transition text-lg flex items-center justify-center gap-2"
            style={{ boxShadow: pastel.shadow }}
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <i className="bx bxl-whatsapp text-2xl"></i>
            Hubungi via WhatsApp
          </a>
        </div>
      </section>
    </>
  );
};

export default Hero;
