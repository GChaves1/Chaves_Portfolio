import React from 'react'
import './recommendation.css'
import { Data } from "./Data"

// Import Swiper React components
import { Swiper, /*SwiperSlide*/ } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const Testimonials = () => {
  return (
    <section className="recommendation container section" id='recommendation'>
      <h2 className="section__title">Cartas</h2>
      <span className="section__subtitle">Cartas de recomendação</span>

      <Swiper className="recommendation__container" 
      loop={true}
      grabCursor={true}
      spaceBetween={24}
      pagination={{
        clickable: true,
      }}
      breakpoints={{
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 48,
        },
      }}
      modules={[Pagination]}
      >
        {Data.map(({id, image, title, description}) => {
          return (
            <div /*SwiperSlide*/ className='recommendation__card' key={id}>
              <img src={ image } alt="" className='recommendation__img'/>

              <h3 className="recommendation__name">{title}</h3>
              <p className="recommendation__description">{description}</p>
            </div > /*SwiperSlide*/
          )
        })}
      </Swiper>
    </section>
  )
}

export default Testimonials