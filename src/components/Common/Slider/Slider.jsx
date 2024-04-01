import React, { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from '@uidotdev/usehooks';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import PropTypes from 'prop-types';

import SliderBtns from '../SliderBtns/SliderBtns';

const Slider = ({
  sliderNumber,
  slides,
  spaceBetweenMob,
  spaceBetweenTab,
  spaceBetweenDesk,
  slidesPerViewMob,
  slidesPerViewTab,
  slidesPerViewDesk,
  children,
}) => {
  const isWideScreen = useMediaQuery('(min-width: 1280px)');
  const isSmallScreen = useMediaQuery('(max-width: 767px)');

  const newsListSwiperRef = useRef(null);

  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const allSlidesShow = slides => {
    if (isWideScreen) {
      return slides.length <= slidesPerViewDesk;
    }
    if (isSmallScreen) {
      return slides.length <= slidesPerViewMob;
    }
    return slides.length <= slidesPerViewTab;
  };

  useEffect(() => {
    const swiper = newsListSwiperRef.current?.swiper;

    if (swiper) {
      swiper.on('slideChange', () => {
        setIsBeginning(swiper.isBeginning);
        setIsEnd(swiper.isEnd);
      });
    }

    return () => {
      if (swiper) {
        swiper.off('slideChange');
      }
    };
  }, [newsListSwiperRef]);

  const nextElementSwiper = () => {
    if (!newsListSwiperRef.current) return false;

    newsListSwiperRef.current?.swiper?.slideNext();
  };

  const prevElementSwiper = () => {
    if (!newsListSwiperRef.current) return false;

    newsListSwiperRef.current?.swiper?.slidePrev();
  };

  return (
    <div>
      <Swiper
        ref={newsListSwiperRef}
        breakpoints={{
          1280: {
            slidesPerView: slidesPerViewDesk,
            spaceBetween: spaceBetweenDesk,
          },
          768: {
            slidesPerView: slidesPerViewTab,
            spaceBetween: spaceBetweenTab,
          },
          100: {
            slidesPerView: slidesPerViewMob,
            spaceBetween: spaceBetweenMob,
          },
        }}
        navigation={{
          prevEl: `.prevBtn${sliderNumber}`,
          nextEl: `.nextBtn${sliderNumber}`,
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {React.Children.map(children, child =>
              React.cloneElement(child, { item: slide || {} })
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="btnsWrapper">
        <SliderBtns
          isBeginning={isBeginning}
          isEnd={isEnd}
          sliderNumber={sliderNumber}
          previous={prevElementSwiper}
          next={nextElementSwiper}
          isAllSlidesShow={allSlidesShow(slides)}
        />
      </div>
    </div>
  );
};

export default Slider;

Slider.propTypes = {
  sliderNumber: PropTypes.number.isRequired,
  slides: PropTypes.arrayOf(PropTypes.object).isRequired,
  spaceBetweenMob: PropTypes.number.isRequired,
  spaceBetweenTab: PropTypes.number.isRequired,
  spaceBetweenDesk: PropTypes.number.isRequired,
  slidesPerViewMob: PropTypes.number.isRequired,
  slidesPerViewTab: PropTypes.number.isRequired,
  slidesPerViewDesk: PropTypes.number.isRequired,
  children: PropTypes.node,
};
