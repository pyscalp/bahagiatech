import React from 'react';

const Header = () => (
  <header className="bg-white shadow-md sticky top-0 z-50">
    <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <img src="/images/logo.svg" alt="KBT Logo" className="h-10 w-10"/>
        <span className="text-2xl font-bold text-dark">Kawasan Bahagia Teknologi</span>
      </div>
      <div className="hidden md:flex items-center space-x-8">
        <a href="#home" className="text-gray-600 hover:text-primary">Home</a>
        <a href="#services" className="text-gray-600 hover:text-primary">Layanan</a>
        <a href="#about" className="text-gray-600 hover:text-primary">Tentang Kami</a>
        <a href="#contact" className="bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-700">Hubungi Kami</a>
      </div>
      <div className="md:hidden">
        <button className="text-gray-600 hover:text-primary focus:outline-none">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
    </nav>
  </header>
);

const Hero = () => (
  <section id="home" className="bg-white pt-20 pb-16">
    <div className="container mx-auto px-6 text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-dark leading-tight mb-4">
        Inovasi Digital untuk Masa Depan Bahagia
      </h1>
      <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8">
        Kami di Kawasan Bahagia Teknologi (KBT) membangun solusi teknologi yang andal, skalabel, dan modern untuk mendorong pertumbuhan bisnis Anda di era digital.
      </p>
      <a href="#services" className="bg-secondary text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-green-600 transition duration-300">
        Jelajahi Layanan Kami
      </a>
    </div>
  </section>
);

const Services = () => (
  <section id="services" className="py-20">
    <div className="container mx-auto px-6">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-dark">Layanan Unggulan Kami</h2>
        <p className="text-gray-600 mt-2">Solusi terintegrasi untuk transformasi digital bisnis Anda.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <img src="/images/product1.svg" alt="Cloud Solutions" className="h-24 w-24 mx-auto mb-6"/>
          <h3 className="text-xl font-bold text-dark mb-2">Cloud Solutions</h3>
          <p className="text-gray-600">Infrastruktur cloud yang aman dan skalabel untuk mendukung aplikasi Anda dengan performa maksimal.</p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <img src="/images/product2.svg" alt="Cyber Security" className="h-24 w-24 mx-auto mb-6"/>
          <h3 className="text-xl font-bold text-dark mb-2">Cyber Security</h3>
          <p className="text-gray-600">Melindungi aset digital Anda dari ancaman siber dengan teknologi keamanan terdepan.</p>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <img src="/images/product3.svg" alt="Managed IT Services" className="h-24 w-24 mx-auto mb-6"/>
          <h3 className="text-xl font-bold text-dark mb-2">Managed IT Services</h3>
          <p className="text-gray-600">Tim ahli kami siap mengelola kebutuhan IT Anda, sehingga Anda bisa fokus pada bisnis inti.</p>
        </div>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="bg-white py-20">
    <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Tentang Kawasan Bahagia Teknologi</h2>
        <p className="text-gray-600 mb-4">
          Didirikan pada tahun 2024, Kawasan Bahagia Teknologi lahir dari visi untuk menciptakan ekosistem digital yang positif dan memberdayakan. Kami percaya bahwa teknologi adalah kunci untuk membuka potensi dan kebahagiaan, baik bagi individu maupun korporasi.
        </p>
        <p className="text-gray-600">
          Tim kami terdiri dari para profesional berpengalaman yang bersemangat dalam menghadirkan inovasi dan keunggulan. Kami berkomitmen untuk menjadi mitra teknologi tepercaya Anda.
        </p>
      </div>
      <div className="md:w-1/2 flex justify-center">
         <img src="/images/logo.svg" alt="Team" className="h-64 w-64"/>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer id="contact" className="bg-dark text-white py-10">
    <div className="container mx-auto px-6 text-center">
      <p>&copy; 2025 Kawasan Bahagia Teknologi. Semua Hak Cipta Dilindungi.</p>
      <p className="mt-2">Jl. Inovasi Digital No. 1, Jakarta, Indonesia</p>
    </div>
  </footer>
);


function App() {
  return (
    <div className="font-sans">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
      </main>
      <Footer />
    </div>
  )
}

export default App
