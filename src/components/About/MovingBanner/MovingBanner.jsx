import Marquee from 'react-fast-marquee';

import { MovingBannerWrapper, Text, CrossIconStyled } from './MovingBanner.styled';

const MovingBanner = () => {
  return (
    <MovingBannerWrapper>
      <Marquee>
        <Text>Destroy stereotypes</Text>
        <CrossIconStyled />
        <Text>HAVE NO LIMITS</Text>
        <CrossIconStyled />
        <Text>Break rules</Text>
        <CrossIconStyled />
        <Text>Destroy stereotypes</Text>
        <CrossIconStyled />
        <Text>HAVE NO LIMITS</Text>
        <CrossIconStyled />
        <Text>Break rules</Text>
        <CrossIconStyled />
      </Marquee>
    </MovingBannerWrapper>
  );
};

export default MovingBanner;
