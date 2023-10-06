import React, { useState } from 'react'
import './qualification.css'
import Loading from './loading/Loading';

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  }


  return (
    <section className="qualification section">
      <h2 className="section__title">Qualificação</h2>
      <span className="section__subtitle">Minha jornada</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">

          <div className= {
            toggleState === 1 
            ? "qualification__button qualification__active button--flex " 
            : " qualification__button button--flex "
            }
            onClick={() => toggleTab(1)}
            >
            <i className="uil uil-graduation-cap
             qualification__icon"></i>  Educação
          </div>

          <div className= {
            toggleState === 2 
              ? "qualification__button qualification__active button--flex " 
              : " qualification__button button--flex "
            }
            onClick={() => toggleTab(2)}
            >
            <i className="uil uil-briefcase-alt 
            qualification__icon"></i>  Experiência
          </div>

        </div>

        <div className="qualification__sections">



{/* Educação */}
          <div className={
            toggleState === 1 
          ? "qualification__content qualification__content-active"
          : " qualification__content"
          }>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Ciências da Computação</h3>
                <span className="qualification__subtitle">
                  FMU - Universidade
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2022 - Atual
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
              </div>

            </div>


            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Python</h3>
                <span className="qualification__subtitle">
                  Curso em video - Web curso
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2023 - Atual
                </div>
              </div>

              
              
            </div>


            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Desenvolvimento Web</h3>
                <span className="qualification__subtitle">
                ProgBr - Web curso
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2022 - 2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
              </div>

            </div>


            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">JavaScript Puro</h3>
                <span className="qualification__subtitle">
                  DankiCode - Web curso
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2022 - 2022
                </div>
              </div>

              
              
            </div>

          </div>



{/* Experiencia */}
          <div className={
            toggleState === 2 
          ? "qualification__content qualification__content-active"
          : " qualification__content"
          }>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title"><Loading /></h3>
                <span className="qualification__subtitle">
                  Sua empresa <i class="uil uil-smile-wink-alt"></i>
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  Futuro
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
              </div>

            </div>


            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Auxiliar de Logistica</h3>
                <span className="qualification__subtitle">
                  Cofema
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2022 - 2023
                </div>
              </div>

              
              
            </div>


            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Trainee Contabilidade</h3>
                <span className="qualification__subtitle">
                  EAY 
                </span>
                <div className="qualification__calender">
                  <i className="uil uil-calendar-alt"></i>
                  2021 - 2021
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                  <span className="qualification__line"></span>
              </div>

            </div>


            

          </div>

        </div>
      </div>
    </section>
  )
}

export default Qualification