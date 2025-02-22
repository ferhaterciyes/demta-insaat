import React from 'react';
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import About from "@/pages/about";

const Home = () => {
    return (
        <main>
            <div className="bg-red-500 underline text-white p-4 text-lg">
                Tailwind Çalışıyor mu?
            </div>
            <Header/>
            <About/>
            <Footer/>
        </main>
    );
};
export default Home;