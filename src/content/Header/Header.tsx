import Navigation from "../../widgets/Navigation/Navigation.tsx";
import CustomButton from "../../widgets/CustomButton/CustomButton.tsx";
import Decoration from "../../assets/img/decor.svg";
/*import Worker from "../../assets/img/worker.webp";*/
import './index.scss'

const Header = () => {

    const handleClick = () => {
        alert('Button clicked!');
    };

    return (
        <section className="header-wrapper" id="home">
           {/* <img className="worker" src={Worker} alt="worker"/>*/}
            <div className="header-wrapper__container">
                <div className="header__container-info-item">
                    <h1>KIIINOISE</h1>
                    <h3>Эффективная шумоизоляция <br/> за доступные деньги</h3>
                    <CustomButton text="Узнать подробности" onClick={handleClick}/>
                </div>
                <Navigation/>
            </div>
            <img className="decoration" src={Decoration} alt="decoration"/>
        </section>
    );
};

export default Header;