import { useMediaQuery } from '@uidotdev/usehooks';

import aboutImgMob from '../../assets/images/about-mob.png';
import aboutImgTab from '../../assets/images/about-tab.png';
import aboutImgDesk from '../../assets/images/about-desk.png';

import {
  AboutWrapper,
  CrossIconStyled,
  ImageStyled,
  TextIconWrapper,
  TextOne,
  TextTwo,
  Title,
} from './About.styled';

const About = () => {
  const isSmallScreen = useMediaQuery('(max-width: 767px)');
  const isMediumScreen = useMediaQuery('(min-width: 768px) and (max-width: 1279px)');
  const isWideScreen = useMediaQuery('(min-width: 1280px)');

  let imgSrc;

  switch (true) {
    case isSmallScreen:
      imgSrc = aboutImgMob;
      break;
    case isMediumScreen:
      imgSrc = aboutImgTab;
      break;
    case isWideScreen:
      imgSrc = aboutImgDesk;
      break;
    default:
      return;
  }

  return (
    <AboutWrapper id="about">
      <Title>
        a Story that started with{' '}
        <span>
          one simple
          {isSmallScreen && <br />} ape
        </span>
      </Title>
      <TextOne>
        WHO GOT {isSmallScreen && <br />} FED UP WITH BORING AND HYPOCRITIC COMMONPLACE THIS IS HOW
        THE IDEA OF ESCAPING AND DYNAMIC JOURNEY ON THE {(isMediumScreen || isWideScreen) && <br />}{' '}
        YACHT
      </TextOne>
      <TextIconWrapper>
        <CrossIconStyled />
        <TextTwo>
          EACH ARTWORK IN THE COLLECTION TELLS A STORY OF ONE JOURNEY. ARTS ARE RANDOMLY GENERATED
          BY USERS
        </TextTwo>
      </TextIconWrapper>
      <ImageStyled src={imgSrc} alt="monkey" />
    </AboutWrapper>
  );
};

export default About;
