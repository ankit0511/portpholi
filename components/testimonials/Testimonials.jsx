/* eslint-disable no-unused-vars */
import React from 'react';
import './testimonial.css';
import { Data } from "./Data";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Testimonials = () => {
  return (
    <section className="testimonial container section" id="testimonia">
        <h2 className="section__title">Coding PlatForms</h2>
        <span className="section__subtitle">Score And Ranks</span>

        <Swiper className="testimonial__container" 
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
            {Data.map(({ id, image, title, total,score,rank,link}) => {
              return (
                <SwiperSlide className='testimonial__card' key={id}>
                  <img src={image} alt='' className='testimonial__img'/>

                  <h2 className="testimonial__name">{title}</h2>
                  <h3 className='testimonial__description'>Total Solved:- {total}</h3>
                  <h3 className='testimonial__description'>Contest Rating:- {score}</h3>
                  <h3 className='testimonial__description'> Global Ranking:- {rank}</h3>
                  
                  <a href={link} target="_blank" className="work__button"> Visit Site <i className="bx bx-right-arrow-alt work__button-icon"></i></a>
                </SwiperSlide>
              )
            })}
        </Swiper>
    </section>
  )
}

export default Testimonials