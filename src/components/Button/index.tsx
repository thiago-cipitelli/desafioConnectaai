import React from 'react';

import './styles.css';

interface ButtonProps {
    color: String,
    textColor: String,
}

const Button: React.FC<ButtonProps> = (props) => {
    return (
        <a className="botão-cta" style={{backgroundColor: ""+ props.color +"", color: ""+ props.textColor +"",}} href="/">Aqui um CTA</a>
    );
}

export default Button;