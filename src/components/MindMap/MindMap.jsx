import { useMediaQuery } from '@uidotdev/usehooks';

import { MIND_MAP_DATA } from '../../constants/mindMapData';
import Slider from '../Common/Slider/Slider';
import Title from '../Common/Title/Title';
import MindMapItem from './MindMapItem/MindMapItem';

import { GridWrapper, MindMapWrapper } from './MindMap.styled';

const MindMap = () => {
  const isSmallScreen = useMediaQuery('(max-width: 767px)');

  return (
    <MindMapWrapper id="m-map">
      <Title>MIND map</Title>

      {isSmallScreen ? (
        <Slider
          sliderNumber={1}
          slides={MIND_MAP_DATA}
          spaceBetweenMob={0}
          spaceBetweenTab={0}
          spaceBetweenDesk={0}
          slidesPerViewMob={1}
          slidesPerViewTab={1}
          slidesPerViewDesk={1}
        >
          <MindMapItem
            item={{
              bgColor: '',
              text: '',
              icon: false,
              title: [],
            }}
          />
        </Slider>
      ) : (
        <GridWrapper>
          {MIND_MAP_DATA.map((item, index) => (
            <MindMapItem item={item} key={index} />
          ))}
        </GridWrapper>
      )}
    </MindMapWrapper>
  );
};

export default MindMap;
