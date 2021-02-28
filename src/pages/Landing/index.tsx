import React from "react";

import CardIten from "../../components/CardIten";
import PageFooter from '../../components/PageFooter';
import PageHeader from '../../components/PageHeader';
import lata from '../../assets/images/lata-guaraná.svg';
import garrafa from '../../assets/images/garrafa-guaraná.svg';

import './styles.css';
import Button from "../../components/Button";

function Landing(){
    return (
        <div id="page-landing">
            <div><PageHeader/></div>
            <div className="content">
                <h2 className="prod">Produtos</h2><br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris <br/> semper, tortor sed vehicula.
                <div className="card-slot">
                    <CardIten image = {garrafa} titulo="Garrafa 350ml" desc="Lorem ipsum dolor sit amet"/>
                    <CardIten image = {lata} titulo="Garrafa 100ml" desc="Lorem ipsum dolor sit amet"/>
                </div>
                <div className="images">
                    <div className="first"></div>
                    <div className="aux">
                        <div className="slide"><p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam commodo hendrerit.” </p></div>
                        <div className="second">
                            <div className="overlay"></div>
                            <h1 className="image-title">Peça para seu bar</h1>
                        </div>
                    </div>
                </div>
                <div className="experimente">
                    <div className="titulo-final">
                        <h2 className="prod">Quer experimentar?</h2>
                        <Button color="black" textColor="#ffffff"></Button>
                    </div>
                    <img id ="lata1" src={lata} alt=""/>
                    <img id ="lata2" src={lata} alt=""/>
                    <div className="teste"><img id ="lata3" src={lata} alt=""/></div>
                    
                </div>
            </div>
            <div><PageFooter/></div>
        </div>
        
    );
}

export default Landing;