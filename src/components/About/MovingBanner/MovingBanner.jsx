import Marquee from 'react-fast-marquee';

import { MovingBannerWrapper, Text, CrossIconStyled } from './MovingBanner.styled';

const MovingBanner = () => {
  return (
    <MovingBannerWrapper>
      <Marquee pauseOnHover={true} speed={30} autoFill={true}>
        <Text>Destroy stereotypes</Text>
        <CrossIconStyled aria-label="Decor element" />
        <Text>HAVE NO LIMITS</Text>
        <CrossIconStyled aria-label="Decor element" />
        <Text>Break rules</Text>
        <CrossIconStyled aria-label="Decor element" />
      </Marquee>
    </MovingBannerWrapper>
  );
};

export default MovingBanner;
