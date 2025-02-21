import React from 'react'
import Image from "next/image";

const Home = () => {
    return (
        <div>
            <header>
                <Image src="/next.svg" width={100} height={100} alt="Logo"/>
            </header>
            <main>
                <h1>Home Page</h1>
            </main>
            <footer>Main Footer</footer>
        </div>
    );
};
export default Home;
