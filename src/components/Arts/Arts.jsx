import Title from '../Common/Title/Title';
import { ART_DATA } from '../../constants/arts';
import Slider from '../Common/Slider/Slider';
import ArtItem from './ArtItem/ArtItem';

import { ArtsWrapper } from './Arts.styled';

const Arts = () => {
  return (
    <ArtsWrapper id="arts">
      <Title>COLLECTION</Title>
      <Slider
        sliderNumber={2}
        slides={ART_DATA}
        spaceBetweenMob={0}
        spaceBetweenTab={24}
        spaceBetweenDesk={24}
        slidesPerViewMob={1}
        slidesPerViewTab={2}
        slidesPerViewDesk={4}
      >
        <ArtItem
          item={{
            imgSrc: '',
          }}
        />
      </Slider>
    </ArtsWrapper>
  );
};

export default Arts;
