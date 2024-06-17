import AboutDecoration from '../../assets/img/aboutDecor.svg';
import Point from '../../assets/img/pont.svg';
import './index.scss';

const AboutUs = () => {
    return (
        <section className="about-wrapper" id="about">
            <div className="about-wrapper__container">
                <h1>Чем мы занимаемся?</h1>
                <div className="about__container-item">
                    <div className="about-item__block">
                        <div className="about-title">
                            <img src={AboutDecoration} alt="AboutDecoration"/>
                            <p>Звукоизоляция</p>
                        </div>
                        <div className="about-title">
                            <img src={AboutDecoration} alt="AboutDecoration"/>
                            <p>Виброизоляция</p>
                        </div>
                        <div className="about-title">
                            <img src={AboutDecoration} alt="AboutDecoration"/>
                            <p>Архитектурная аккустика</p>
                        </div>
                    </div>
                    <div className="about-item__block-info">
                        <ul>
                            <li><img src={Point} alt="Point"/> Монтаж любых звукоизолирующих конструкций.</li>
                            <li><img src={Point} alt="Point"/> Разработка уникальных конструктивных решений.</li>
                            <li><img src={Point} alt="Point"/> Выездные консультации для выбора решения.</li>
                            <li><img src={Point} alt="Point"/> Поиск источникво шума и вибрации.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;