import React from "react";

import fbIcon from '../../assets/images/facebook.svg';
import igIcon from '../../assets/images/instagram.svg';
import lata from '../../assets/images/lata-guaraná.svg';
import logo from '../../assets/images/marca-conecta.svg';
import Button from "../Button";
import './styles.css';

function PageHeader(){
    return(
        <div className="page-header">
            <header>
                <div className="top-bar-container" >
                    <img src={logo} alt="conecta"/>
                    <a href="/"><img id="icon" src={igIcon} alt="Instagram"/></a>
                    <a href="/"><img id="icon" src={fbIcon} alt="Facebook"/></a>
                </div>
                <div className="header-content" >
                    <div id="texto">
                        <h1 className="titulo-header">Aqui um titulo de duas linhas.</h1>
                        <br/>
                        <div id="button"><Button color = "var(--color-secundary)" textColor = "black"/></div>
                    </div>
                    
                    <div className="cover-img">
                        <img id="lata" src={lata} alt="garrafa guaraná"/>
                    </div>
                </div>
                
            </header>
        </div>
    );
}

export default PageHeader;