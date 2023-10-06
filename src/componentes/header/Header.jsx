import React, { useState, useEffect } from 'react';
import './header.css';

const Header = () => {
  /* mude o fundo do Header */
  window.addEventListener('scroll', function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  /*---------- MOSTRA/FECHAR MENU ----------*/
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState('#home')

  /*--------------- DARK MODE --------------*/
  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
    }

    // Ajuste: Defina o ícone de acordo com o tema atual
    setThemeIcons(currentTheme);
  }, []);

  // Função para alternar entre temas
  function switchTheme() {
    const currentTheme = localStorage.getItem("theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);

    // Ajuste: Defina o ícone de acordo com o novo tema
    setThemeIcons(newTheme);
  }

  // Função para definir os ícones com base no tema atual
  function setThemeIcons(theme) {
    const moonIcon = document.querySelector(".bxs-moon");
    const sunIcon = document.querySelector(".bxs-sun");

    if (theme === "dark") {
      moonIcon.style.transform = "rotate(0deg) scale(1)";
      sunIcon.style.transform = "rotate(360deg) scale(0)";
    } else {
      moonIcon.style.transform = "rotate(0deg) scale(0)";
      sunIcon.style.transform = "rotate(360deg) scale(1)";
    }
  }


  return (
    <header  className={`header ${Toggle ? 'scroll-header' : ''}`}>
      <nav className='nav container'>
        <a href='index.html' className='nav__logo'>Chaves</a>

        <label className='btn-header'>
        <input onClick={switchTheme} className="btn-toggle" type="checkbox" />
        <i name="moon" className='bx bxs-moon'></i>
        <i name="sun" className='bx bxs-sun'></i>
        <span className="toggle"></span>
        <span className="animateBg"></span>
      </label>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>

          <ul className="nav__list grid">

            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNav('#home')}
                className={activeNav === "#home"
                  ? "nav__link active-link"
                  : "nav__link"}>

                <i className="uil uil-estate nav__icon active-link"></i> Inicio
              </a>
            </li>

            <li className="nav__item">
              <a href="#about"
                onClick={() => setActiveNav('#about')}
                className={activeNav === "#about"
                  ? "nav__link  active-link"
                  : "nav__link"}>
                <i className="uil uil-user nav__icon"></i> Sobre
              </a>
            </li>

            <li className="nav__item">
              <a href="#skills"
                onClick={() => setActiveNav('#skills')}
                className={
                  activeNav === "#skills" ? "nav__link active-link"
                    : "nav__link"}>
                <i className="uil uil-file-alt nav__icon"></i> Habilidades
              </a>
            </li>

            <li className="nav__item">
              <a href="#portfolio"
                onClick={() => setActiveNav('#portfolio')}
                className={
                  activeNav === "#portfolio" ? "nav__link active-link"
                    : "nav__link"}>
                <i className="uil uil-scenery nav__icon"></i> Portfolio
              </a>
            </li>

            <li className="nav__item">
              <a href="#contact"
                onClick={() => setActiveNav('#contact')}
                className={
                  activeNav === "#contact" ? "nav__link active-link"
                    : "nav__link"}>
                <i className="uil uil-message nav__icon" ></i> Contato
              </a>
            </li>
          </ul>

          <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>
      </nav>
    </header>

  )
}

export default Header