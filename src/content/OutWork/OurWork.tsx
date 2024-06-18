import './index.scss'
import Point from "../../assets/img/pont.svg";
import Worker from "../../assets/img/worker1.webp"
const OurWork = () => {
    return (
        <section id="services" className="ourwork-wrapper">
            <div className="ourwork-wrapper__container">
                <h1>Почему выбирают нас?</h1>
                <div className="ourwork-container__content">
                    <div className="outwork-content__item">
                        <div className="item-text__block">
                            <h2>Наши преимущества</h2>
                            <ul>
                                <li><img src={Point} alt="Point"/> Вы платите за работающее решение, а не за бренд</li>
                                <li><img src={Point} alt="Point"/> Возможность работы «под ключ»</li>
                                <li><img src={Point} alt="Point"/> Замеры - <strong>бесплатно</strong></li>
                                <li><img src={Point} alt="Point"/>
                                    Независимы от производителей материалов.
                                    Работаем с лучшим решением под ваши задачи и ваш бюджет
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="outwork-content__item">
                        <img className="worker" src={Worker} alt=""/>
                    </div>
                </div>
                <div className="ourwork-container__content-text">
                    <p>
                        Мы инженеры-акустики. Мы знаем, как именно работает звукоизоляция, виброизоляцияция и как
                        строится акустика.
                        <br/><br/>
                        Мы знаем, как собирать эффективную конструкцию, не переплачивая за "специализированные"
                        материалы производителей.
                        <br/><br/>
                        Поэтому мы можем сделать еще <strong>эффективнее</strong> за <strong>те же деньги</strong>.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default OurWork;
