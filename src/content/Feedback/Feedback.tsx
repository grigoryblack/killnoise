import './index.scss';
import Worker from "../../assets/img/worker.jpg";
import { Form, Input, message, Spin } from 'antd';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Point from "../../assets/img/pont.svg";
import InputMask from 'react-input-mask';

const Feedback: React.FC = () => {
    const [form] = Form.useForm();
    const [loading, setLoading] = useState(false);
    const [timeout, setTimeout] = useState(false);
    const [countdown, setCountdown] = useState(0);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (timeout) {
            setCountdown(60);
            timer = setInterval(() => {
                setCountdown(prevCountdown => {
                    if (prevCountdown <= 1) {
                        clearInterval(timer);
                        setTimeout(false);
                        return 0;
                    }
                    return prevCountdown - 1;
                });
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [timeout]);

    const onFinish = async (values: any) => {
        if (timeout) {
            message.warning(`Пожалуйста, подождите ${countdown} секунд перед повторной отправкой`);
            return;
        }

        setLoading(true); // Включение загрузчика
        try {
            const response = await axios.post(`${import.meta.env.VITE_API_URL}/send-email`, values);
            if (response.status === 200) {
                message.success('Спасибо за обращение!');
                form.resetFields();
                setTimeout(true);
            } else {
                message.warning('Не удалось отправить форму');
            }
        } catch (error) {
            console.error('There was an error sending the email: ', error);
            message.error('Произошла ошибка при отправке формы');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact" className="contact-wrapper">
            <div className="contact-wrapper__container">
                <h1>Свяжитесь с нами!</h1>
                <div className="contact__container-inner">
                    <div className="contact-inner__item">
                        <div className="form-container">
                            <ul>
                                <li><img src={Point} alt="Point" /> Хотите вызвать замерщика?</li>
                                <li><img src={Point} alt="Point" /> Хотите узнать стоимость?</li>
                                <li><img src={Point} alt="Point" /> Нужна помощь в выборе решения?</li>
                            </ul>
                            <p>
                                Чтобы получить ответы на эти и другие вопросы -
                                <strong> Свяжитесь с нами! </strong>
                            </p>
                            <Spin spinning={loading}>
                                <Form
                                    form={form}
                                    name="feedback"
                                    onFinish={onFinish}
                                    layout="vertical"
                                >
                                    <Form.Item
                                        label="Имя"
                                        name="name"
                                        rules={[{ required: true, message: 'Пожалуйста, введите ваше имя' }]}
                                    >
                                        <Input size="large" disabled={loading} />
                                    </Form.Item>
                                    <Form.Item
                                        label="Номер телефона"
                                        name="phone"
                                        rules={[{ required: true, message: 'Пожалуйста, введите ваш номер телефона' }]}
                                    >
                                        <InputMask mask="+7 (999) 999-99-99" disabled={loading}>
                                            {(inputProps: any) => <Input {...inputProps} size="large" disabled={loading} />}
                                        </InputMask>
                                    </Form.Item>
                                    <Form.Item
                                        label="Почта"
                                        name="email"
                                        rules={[{ required: true, message: 'Пожалуйста, введите вашу почту', type: 'email' }]}
                                    >
                                        <Input size="large" disabled={loading} />
                                    </Form.Item>
                                    <Form.Item
                                        label="Комментарий"
                                        name="comment"
                                        rules={[{ required: true, message: 'Пожалуйста, введите ваш комментарий' }]}
                                    >
                                        <Input.TextArea autoSize={{ minRows: 2, maxRows: 6 }} disabled={loading} />
                                    </Form.Item>
                                    <Form.Item>
                                        <button className="form-button" type="submit" disabled={loading}>
                                            Отправить
                                        </button>
                                    </Form.Item>
                                </Form>
                            </Spin>
                        </div>
                    </div>
                    <div className="contact-inner__item">
                        <img className="worker" src={Worker} alt="" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feedback;
