import React from 'react';

import fbIcon from '../../assets/images/facebook.svg';
import igIcon from '../../assets/images/instagram.svg';
import logo from '../../assets/images/marca-conecta.svg';

import './styles.css'

function PageFooter(){
    return (
        <footer>
            <div className="footer-container flex">
                <div className="footer-content">
                    <div className="fale-conosco">
                        <h1 className="titulo-footer">Fale Conosco.</h1>
                        <a href="/"><img src={fbIcon} alt=""/></a>
                        <a href="/"><img src={igIcon} alt=""/></a>
                        | &nbsp; REDES SOCIAIS
                    </div>
                    <div className="formulario">
                        <form id="contact-form" action="/">
                            <div className="input-block-name">
                                <label htmlFor="name">NOME</label>
                                <input type="text" id="name" placeholder="Daniel Maciel"/>
                            </div>
                            <div className="double-field">
                                <div className="input-block-tel">
                                    <label htmlFor="tel">TELEFONE</label>
                                    <input type="text" id="tel" placeholder="(21) 00000-0000"/>
                                </div>
                                <div className="input-block-email">
                                    <label htmlFor="email">E-MAIL</label>
                                    <input type="email" id="email" placeholder="email@email.com.br"/>
                                </div>
                            </div>
                            <div className="input-block">
                                <label htmlFor="bubject">ASSUNTO</label>
                                <input list="lista" placeholder="Selecione um Assunto"/>
                                    <datalist id="lista">
                                        <option value="option1"/>
                                        <option value="option2"/>
                                        <option value="option3"/>
                                    </datalist>
                            </div>
                            
                            <div className="input-block">
                                <label htmlFor="message">MENSAGEM</label>
                                <textarea name="message" id="message"/>
                            </div>
                            <div className="botao">
                                <input type="submit" id='submit' value="Aqui um CTA"/>
                            </div>
                        </form>
                    </div>
                </div>
                
            </div>
            <div className="rodape">
                    <h5>Todos os direitos reservados © 2020 Conecta</h5>
                    <div className="proj-logo">Projetado por <img src={logo} alt=""/></div>
                    
                </div>
        </footer>
    );
}

export default PageFooter;