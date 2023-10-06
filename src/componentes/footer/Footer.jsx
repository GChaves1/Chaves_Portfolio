import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Chaves</h1>

        <ul className="footer__list">

          <li>
            <a href="#about"
             className="footer__link">Sobre</a>
          </li>

          <li>
            <a href="#portfolio" 
            className="footer__link">Projetos</a>
          </li>

          <li>
            <a href="#recommendation" 
            className="footer__link">Cartas</a>
          </li>
        </ul>

        <div className="footer__social">

      <a 
        href="https://www.instagram.com/chaves.gif/" 
        className="footer__social-link"  
        target='_blank' 
        rel="noreferrer"> 

        <i className="bx bxl-instagram"></i>
      </a>

      <a 
      href="https://www.linkedin.com/in/gabriel-chaves-20682619a/" 
      className="footer__social-link" 
      target='_blank' 
      rel="noreferrer">

      <i class="bx bxl-linkedin"></i>
      </a>

      <a 
      href="https://github.com/GChaves1" 
      className="footer__social-link" 
      target='_blank' 
      rel="noreferrer"> 

      <i className="bx bxl-github"></i>
      </a>
        </div>

        
      </div>
    </footer>
  )
}

export default Footer