import React from 'react';
import ImgButton from '../../assets/img/button.svg';
import './index.scss';

interface ButtonProps {
    text: string;
    onClick: () => void;
}

const CustomButton: React.FC<ButtonProps> = ({ text, onClick }) => {
    return (
        <div className="button-container" onClick={onClick}>
            <img src={ImgButton} alt="button"/>
            <p>{text}</p>
        </div>
    );
};

export default CustomButton;
