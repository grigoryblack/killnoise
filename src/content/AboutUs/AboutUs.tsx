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
                            <p>Архитектурная акустика</p>
                        </div>
                    </div>
                    <div className="about-item__block-info">
                        <ul>
                            <li><img src={Point} alt="Point"/> Монтаж любых звукоизолирующих конструкций</li>
                            <li><img src={Point} alt="Point"/> Разработка уникальных конструктивных решений</li>
                            <li><img src={Point} alt="Point"/> Помощь в выборе решений</li>
                            <li><img src={Point} alt="Point"/> Выездные консультации</li>
                            <li><img src={Point} alt="Point"/> Поиск источников шума и вибрации</li>
                            <li><img src={Point} alt="Point"/> Акустические измерения, измерения шума и звукоизоляции</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;