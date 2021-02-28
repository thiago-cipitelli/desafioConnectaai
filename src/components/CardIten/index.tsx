import React from 'react';
import Button from '../Button';

import './styles.css'

interface ItenProps {
    image: String;
    titulo: String;
    desc: String;
}

const CardIten: React.FC<ItenProps> = (props) => {
    return(
        <div className="card-iten">
            <img src={""+props.image+""} alt=""/>
            <h2 className="titulo-iten">{props.titulo}</h2>
            {props.desc}
            <div className="card-button"><Button color = "var(--color-secundary)" textColor="black"/></div>
        </div>

    );
}

export default CardIten;