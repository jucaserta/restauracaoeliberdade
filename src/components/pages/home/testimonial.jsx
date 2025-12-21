'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectCube } from 'swiper/modules'
import SectionHeader from '../../shared/section-header'

import 'swiper/css'
import 'swiper/css/effect-cube'
import 'swiper/css/autoplay'

import Quote from '../../../assets/images/quote-right-solid.png'
import Testimonials from '../../../jsons/testimonial.json'

export default function Testimonial() {
  return (
    <section id="d2c_testimonial">
      <div className="container">
        <SectionHeader
          subheading="Depoimentos"
          heading="O que famílias relatam após o primeiro atendimento"
          className="text-center mx-auto xl:w-[45%]"
        />

        <div
          className="xl:max-w-[80%] mx-auto bg-testimonial bg-center bg-cover p-5 md:p-10 lg:p-14 rounded-2xl"
          data-aos="fade-slide-up"
          data-aos-delay="800"
        >
          <div className="p-5 md:p-10 bg-off-white/15 border-light-green/20 backdrop-blur-md rounded-xl">
            <Swiper
              modules={[Autoplay, EffectCube]}
              effect="cube"
              cubeEffect={{
                shadow: false,
                slideShadows: false,
                shadowOffset: 0,
                shadowScale: 0,
              }}
              autoplay={{ delay: 3500 }}
              loop={true}
              slidesPerView={1}
              spaceBetween={24}
              speed={900}
            >
              {Testimonials.map((testimonial, index) => (
                <SwiperSlide key={index} className="space-y-3 text-center">
                  <div className="flex justify-center">
                    <img src={Quote.src} alt="Aspas" width={40} height={40} />
                  </div>

                  <div className="space-y-10">
                    <p className="text-xl text-off-white">{testimonial.quote}</p>

                    <div className="text-center space-y-2">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={64}
                        height={64}
                        className="d2c_client_image mx-auto"
                      />
                      <h4 className="text-off-white">{testimonial.name}</h4>
                      <p className="text-sm capitalize text-off-white">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}
