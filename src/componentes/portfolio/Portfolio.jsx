import React, { useEffect } from 'react';
import './portfolio.css'
import mixitup from 'mixitup';

import { Data } from './Data'




const Portfolio = () => {

  useEffect(() => {
    const mixer = mixitup('.portfolio__container', {
      selectors: {
        target: '.portfolio__card'
      },
      animation: {
        duration: 300
      }
    });
  }, []);

  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Alguns dos meus projetos</span>
      <div className="portfolio__container container">


        <div className="portfolio__tabs">

          <div className="portfolio__item  button--flex " data-filter="all">
            <button type='button' className="portfolio__button-filter active-portfolio" data-filter='all'>All</button>
          </div>

          <div className="portfolio__item button--flex ">
            <button type='button' className="portfolio__button-filter" data-filter='.web' >Web<i className='bx bx-pointer portfolio__button-item' ></i></button>
          </div>

          <div className="portfolio__item button--flex ">
            <button type='button' className="portfolio__button-filter" data-filter='.game'>Jogos<i className='bx bx-joystick portfolio__button-item'></i></button>
          </div>

        </div>

        <ul className='portfolio__info'>
        {Data.map(({ id, image, title, link, type }) => {
          return (
            <li>
            <a href={link} className='portfolio__content grid' key={id}>
              <article className={`portfolio__card mix ${type}`}>
                <img src={image} alt="" className="portfolio__img" />

                <h3 className="portfolio__card-title">{title}</h3>
                <span className="portfolio__button">dá uma olhadinha {" "}
                  <i className="bx bx-right-arrow-alt portfolio__button-icon"></i>
                </span>
              </article>
            </a>
            </li>
          )
        })}
        </ul>
      </div>
    </section >
  )
}

export default Portfolio