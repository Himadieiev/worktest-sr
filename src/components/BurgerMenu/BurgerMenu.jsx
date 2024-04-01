import { useSpring } from '@react-spring/web';
import { useMediaQuery } from '@uidotdev/usehooks';
import PropTypes from 'prop-types';

import Footer from '../Footer/Footer';
import { scrollToSection } from '../../utils/scrollToSection';

import { BurgerMenuWrapper, NavItem, NavList, Span } from './BurgerMenu.styled';

const BurgerMenu = ({ isOpen, toggle }) => {
  const isSmallScreen = useMediaQuery('(max-width: 479px)');

  const handleClick = id => {
    scrollToSection(id);
    toggle();
  };

  const burgerMenuAnimation = useSpring({
    from: {
      opacity: 0,
      zIndex: 0,
      transform: isSmallScreen ? 'translateX(-200px)' : 'translateX(-100px)',
    },
    to: {
      opacity: 1,
      zIndex: 10,
      transform: 'translateX(0px)',
    },
    config: { duration: 500 },
  });

  return (
    <BurgerMenuWrapper style={burgerMenuAnimation}>
      <NavList>
        <NavItem $isOpen={isOpen} onClick={() => handleClick('about')}>
          <Span>ABOUT</Span>
        </NavItem>
        <NavItem $isOpen={isOpen} onClick={() => handleClick('m-map')}>
          <Span>M-MAP</Span>
        </NavItem>
        <NavItem $isOpen={isOpen} onClick={() => handleClick('faq')}>
          <Span>FAQ</Span>
        </NavItem>
        <NavItem $isOpen={isOpen} onClick={() => handleClick('arts')}>
          <Span>ARTS</Span>
        </NavItem>
        <NavItem $isOpen={isOpen} onClick={() => handleClick('mint')}>
          <Span>MINT</Span>
        </NavItem>
      </NavList>
      {isOpen && <Footer isOpen={isOpen} />}
    </BurgerMenuWrapper>
  );
};

export default BurgerMenu;

BurgerMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
};
