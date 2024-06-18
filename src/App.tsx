import './App.scss'
import Header from "./content/Header/Header.tsx";
import AboutUs from "./content/AboutUs/AboutUs.tsx";
import OurWork from "./content/OutWork/OurWork.tsx";
function App() {

    return (
        <div className="main-wrapper">
            <Header/>
            <AboutUs/>
            <OurWork/>
        </div>
    )
}

export default App
