import { useMediaQuery } from '@uidotdev/usehooks';

import heroImgMob from '../../assets/images/hero-mob.png';
import heroImgTab from '../../assets/images/hero-tab.png';
import heroImgDesk from '../../assets/images/hero-desk.png';
import { scrollToSection } from '../../utils/scrollToSection';

import {
  Button,
  HeroWrapper,
  ImageStyled,
  MainTitle,
  TextOne,
  TextThree,
  TextTwo,
  Wrapper,
} from './Hero.styled';

const Hero = () => {
  const isSmallScreen = useMediaQuery('(max-width: 767px)');
  const isMediumScreen = useMediaQuery('(min-width: 768px) and (max-width: 1279px)');
  const isWideScreen = useMediaQuery('(min-width: 1280px)');

  let imgSrc;

  switch (true) {
    case isSmallScreen:
      imgSrc = heroImgMob;
      break;
    case isMediumScreen:
      imgSrc = heroImgTab;
      break;
    case isWideScreen:
      imgSrc = heroImgDesk;
      break;
    default:
      return;
  }

  return (
    <HeroWrapper>
      <TextOne>diD yOu seE iT ?</TextOne>
      <MainTitle>
        <span>YACHT </span>
        <span>APES</span>
      </MainTitle>
      <TextTwo>Apes aRe eveRywhere</TextTwo>
      <ImageStyled src={imgSrc} alt="nft-monkey" />
      <Wrapper>
        <Button type="button" onClick={() => scrollToSection('mint')}>
          Meet Apes
        </Button>
        <TextThree>
          <span> </span>Yacht Ape is a collection of unique digital apes that you can own in NFT
          format
        </TextThree>
      </Wrapper>
    </HeroWrapper>
  );
};

export default Hero;
