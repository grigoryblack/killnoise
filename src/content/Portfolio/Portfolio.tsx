import React from 'react';
import {Image} from 'antd';
import Work1_1 from '../../assets/img/examples/Work1/IMG_6724.jpg';
import Work2_1 from '../../assets/img/examples/Work1/IMG_6806.jpg';
import Work3_1 from '../../assets/img/examples/Work1/IMG_6829.jpg';
import Work4_1 from '../../assets/img/examples/Work1/IMG_6900.jpg';
import Work5_1 from '../../assets/img/examples/Work1/IMG_6939.jpg';
import Work1_2 from '../../assets/img/examples/Work2/IMG_7528.jpeg';
import Work3_2 from '../../assets/img/examples/Work2/IMG_7589.jpeg';
import Work4_2 from '../../assets/img/examples/Work2/IMG_7589.jpeg';
import Work5_2 from '../../assets/img/examples/Work2/IMG_7626.jpeg';
import Work1_3 from '../../assets/img/examples/Work3/IMG_7099.jpeg';
import Work2_3 from '../../assets/img/examples/Work3/IMG_7131.jpeg';
import Work3_3 from '../../assets/img/examples/Work3/IMG_7135.jpeg';
import Work4_3 from '../../assets/img/examples/Work3/IMG_7170.jpeg';
import Work5_3 from '../../assets/img/examples/Work3/IMG_7175.jpeg';
import Work6_3 from '../../assets/img/examples/Work3/IMG_7196.jpeg';
import Work7_3 from '../../assets/img/examples/Work3/IMG_7213.jpeg';
import Work8_3 from '../../assets/img/examples/Work3/IMG_7226.jpeg';
import Work9_3 from '../../assets/img/examples/Work3/IMG_7231.jpeg';
import Work10_3 from '../../assets/img/examples/Work3/IMG_7235.jpeg';
import './index.scss';

const Portfolio: React.FC = () => {
    return (
        <section id="portfolio" className="portfolio-wrapper">
            <div className="portfolio-wrapper__container">
                <h1>Наши работы</h1>
                <div className="carousel-container">
                    <div className="carousel-container__inner">
                        <p>ЖК «Белая башня», ул. Донбасская, д. 21</p>
                        <Image.PreviewGroup
                            items={[
                                Work5_1,
                                Work1_1,
                                Work2_1,
                                Work3_1,
                                Work4_1,
                                Work5_1,
                            ]}
                        >
                            <Image
                                width={'100%'}
                                src={Work5_1}
                            />
                        </Image.PreviewGroup>
                        <div className="diver"/>
                    </div>
                    <div className="carousel-container__inner">
                        <p>ЖК «Botanika Green House», ул. 8 Марта, д. 204Г</p>
                        <Image.PreviewGroup
                            items={[
                                Work5_2,
                                Work1_2,
                                Work3_2,
                                Work4_2,
                                Work5_2,
                            ]}
                        >
                            <Image
                                width={'100%'}
                                src={Work5_2}
                            />
                        </Image.PreviewGroup>
                        <div className="diver"/>
                    </div>
                    <div className="carousel-container__inner">
                        <p>ЖК «Дом на бульваре», Верх-Исетский бульвар, д. 18А</p>
                        <Image.PreviewGroup
                            items={[
                                Work10_3,
                                Work1_3,
                                Work2_3,
                                Work3_3,
                                Work4_3,
                                Work5_3,
                                Work6_3,
                                Work7_3,
                                Work8_3,
                                Work9_3,
                                Work10_3,
                            ]}
                        >
                            <Image
                                width={'100%'}
                                src={Work10_3}
                            />
                        </Image.PreviewGroup>
                        <div className="diver"/>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Portfolio;
