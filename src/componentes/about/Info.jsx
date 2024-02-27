import React from 'react'

export const Info = () => {
  return (
    <div className="about__info grid">

      <div className="about__box">
      <i class="uil uil-book-open about__icon"></i>
        <h3 className="about__title">Tempo de Estudo</h3>
        <span className="about__subtitle">1 Ano e <br/>6  meses </span>
      </div>

      <div className="about__box">
        <i class="uil uil-briefcase-alt about__icon"></i>
        <h3 className="about__title">Projetos</h3>
        <span className="about__subtitle">7 completos</span>
      </div>

      <div className="about__box">
      <i class="uil uil-location-arrow about__icon"></i>
        <h3 className="about__title">Objetivo</h3>
        <span className="about__subtitle"> Front-End <br/> FullStack </span>
      </div>

    </div>
  )
}

export default Info
