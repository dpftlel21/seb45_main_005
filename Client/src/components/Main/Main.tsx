import React from 'react';
import { Navigation, Pagination, Scrollbar, Mousewheel, Keyboard } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Chart from './Chart';
import Contents from './Contents';
import Footer from './Footer';

const Main = () => {
  const slides = [<Contents />, <Chart />, <Footer />];
  return (
    <div className="bg-black ">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, Mousewheel, Keyboard]}
        style={{ height: '100vh' }}
        keyboard={true}
        direction="vertical"
        slidesPerView={1}
        speed={2500}
        mousewheel={{ sensitivity: 0.9, thresholdDelta: 150 }}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true, verticalClass: 'swiper-scrollbar-vertical' }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>{slide}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Main;
