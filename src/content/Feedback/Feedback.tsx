import './index.scss';
import Worker from "../../assets/img/worker.jpg";
import {Form, Input} from 'antd';

const Feedback = () => {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log('Received values from form: ', values);
    };

    return (
        <section id="contact" className="contact-wrapper">
            <div className="contact-wrapper__container">
                <h1>Свяжитесь с нами!</h1>
                <div className="contact__container-inner">
                    <div className="contact-inner__item">
                        <div className="form-container">
                            <p>
                                Мы ценим ваше мнение и готовы помочь вам с любыми вопросами!
                                <br/><br/>
                                Пожалуйста, заполните форму ниже, чтобы мы могли связаться с вами как можно скорее.
                            </p>
                            <Form
                                form={form}
                                name="feedback"
                                onFinish={onFinish}
                                layout="vertical"
                            >
                                <Form.Item
                                    label="Имя"
                                    name="name"
                                    rules={[{required: true, message: 'Пожалуйста, введите ваше имя'}]}
                                >
                                    <Input size="large"/>
                                </Form.Item>
                                <Form.Item
                                    label="Номер телефона"
                                    name="phone"
                                    rules={[{required: true, message: 'Пожалуйста, введите ваш номер телефона'}]}
                                >
                                    <Input size="large"/>
                                </Form.Item>
                                <Form.Item
                                    label="Почта"
                                    name="email"
                                    rules={[{required: true, message: 'Пожалуйста, введите вашу почту', type: 'email'}]}
                                >
                                    <Input size="large"/>
                                </Form.Item>
                                <Form.Item
                                    label="Комментарий"
                                    name="comment"
                                    rules={[{required: true, message: 'Пожалуйста, введите ваш комментарий'}]}
                                >
                                    <Input.TextArea autoSize={{minRows: 2, maxRows: 6}}/>
                                </Form.Item>
                                <Form.Item>
                                    <button className="form-button" type="submit">
                                        Отправить
                                    </button>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                    <div className="contact-inner__item">
                        <img className="worker" src={Worker} alt=""/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feedback;
