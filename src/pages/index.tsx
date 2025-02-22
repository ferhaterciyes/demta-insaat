import React from 'react';
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import About from "@/pages/about";

const HomePage: React.FC = () => {
  return (
    <div>
      <h1>Demta İnşaat</h1>
      {/* Web sitesi içeriği */}
      <main>
        <div className="bg-red-500 underline text-white p-4 text-lg">
          Tailwind Çalışıyor mu?
        </div>
        <Header/>
        <About/>
        <Footer/>
      </main>
    </div>
  );
};

export default HomePage;