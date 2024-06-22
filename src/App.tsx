import './App.scss';
import Header from "./content/Header/Header";
import AboutUs from "./content/AboutUs/AboutUs";
import OurWork from "./content/OutWork/OurWork";
import Portfolio from "./content/Portfolio/Portfolio";
import Feedback from "./content/Feedback/Feedback";
import { useEffect, useState } from 'react';
import Footer from "./content/Footer/Footer.tsx";

const App: React.FC = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.pageYOffset > 400) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="main-wrapper">
            <Header />
            <AboutUs />
            <OurWork />
            <Portfolio />
            <Feedback />
            <Footer/>
            {showButton && (
                <button className="scroll-to-top" onClick={scrollToTop}>
                    ↑
                </button>
            )}
        </div>
    );
};

export default App;
