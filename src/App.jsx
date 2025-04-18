import React, { useEffect, useRef } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';


import './App.css'
import gsap from "gsap"
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger)
import videoFile from "./assets/video.mp4";
import Group1 from "./assets/Group 1.png"
import Group2 from "./assets/Group 2.png"
import Group3 from "./assets/Group 3.png"
import Group4 from "./assets/Group 4.png"
import Group5 from "./assets/Group 5.png"
import Group6 from "./assets/Group 6.png"

import kanan from "./assets/kanan.png"
import kiri from "./assets/kiri.png"





function App() {


  const swiperRef = useRef(null);

  // const scrollToPrev = () => {
  //   if (swiperRef.current) {
  //     swiperRef.current.slidePrev();
  //   }
  // };

  // const scrollToNext = () => {
  //   if (swiperRef.current) {
  //     swiperRef.current.slideNext();
  //   }
  // };

  useEffect(() => {

    gsap.fromTo(".iphone", { y: -20, opacity: 0 }, { y: 0, duration: 1, opacity: 1 })

    gsap.fromTo(".didesain", { y: -20, opacity: 0 }, { y: 0, duration: 1, opacity: 1 })

    gsap.fromTo(".Video", { x: 100, opacity: 0 }, { opacity: 1, x: 0, duration: 1 })

    gsap.fromTo(".animasi", { x: 400, opacity: 0 }, {
      opacity: 1, x: 0, duration: 1, scrollTrigger: {
        trigger: ".animasi"
      }
    })






  })


  return (


    <>

      <div className='section'>



        <div className='divatas'>
          <p className='iphone'>iPhone</p>
          <p className='didesain'>Didesain untuk dicintai.</p>
        </div>

        <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>

          <video className='Video' autoPlay loop muted>
            <source src={videoFile} type="video/mp4" />
          </video>



        </div>








        <div className='animasi'>

          <div style={{ marginTop: 150, marginLeft: 70 }}>
            <p className='lasttext'>Kenali iPhone lebih dalam.</p>
          </div>



          <div className='Allgambar'>

            <Swiper

              // slidesPerView={3}
              // onSlideChange={() => console.log('slide change')}
              // onSwiper={(swiper) => console.log(swiper)}

              slidesPerView={4}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              spaceBetween={20}


            >
              <SwiperSlide><img classname='Gambar' src={Group1} alt='Group2' /></SwiperSlide>
              <SwiperSlide><img classname='Gambar' src={Group2} alt='Group3' /></SwiperSlide>
              <SwiperSlide><img classname='Gambar' src={Group3} alt='Group4' /></SwiperSlide>
              <SwiperSlide><img classname='Gambar' src={Group4} alt='Group5' /></SwiperSlide>
              <SwiperSlide><img classname='Gambar' src={Group5} alt='Group6' /></SwiperSlide>
              <SwiperSlide><img classname='Gambar' src={Group6} alt='Group7' /></SwiperSlide>
            </Swiper>


          </div>


        </div>


        <div className='divKananKiri'>
          <button className='arrowButton' onClick={() => swiperRef.current.slidePrev()}>
            <img src={kiri} alt='kiri' className='kiri' />
          </button>

          <button className='arrowButton' onClick={() => swiperRef.current.slideNext()}>
            <img src={kanan} alt='kanan' className='kanan' />
          </button>
        </div>









      </div>

    </>
  )
}

export default App
