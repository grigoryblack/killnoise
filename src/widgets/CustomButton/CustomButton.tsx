import React from 'react';
import ImgButton from '../../assets/img/button.svg';
import './index.scss';

interface ButtonProps {
    text: string;
}

const CustomButton: React.FC<ButtonProps> = ({ text }) => {
    return (
        <a href="#contact" className="button-container">
            <img src={ImgButton} alt="button"/>
            <p>{text}</p>
        </a>
    );
};

export default CustomButton;
