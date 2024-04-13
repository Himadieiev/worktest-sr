import { useSpring } from '@react-spring/web';
import { useMediaQuery } from '@uidotdev/usehooks';
import PropTypes from 'prop-types';

import Footer from '../Footer/Footer';
import { scrollToSection } from '../../utils/scrollToSection';

import { BurgerMenuWrapper, NavItemLink, NavList, Span } from './BurgerMenu.styled';

const BurgerMenu = ({ isOpen, toggle }) => {
  const isMediumScreen = useMediaQuery('(max-width: 767px)');

  const handleClick = id => {
    scrollToSection(id);
    toggle();
  };

  const burgerMenuAnimation = useSpring({
    from: {
      opacity: 0,
      zIndex: 0,
      transform: isMediumScreen ? 'translateX(-200px)' : 'translateX(-100px)',
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
        <li>
          <NavItemLink
            role="button"
            tabIndex="0"
            $isOpen={isOpen}
            onClick={() => handleClick('about')}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleClick('about');
              }
            }}
          >
            <Span>ABOUT</Span>
          </NavItemLink>
        </li>
        <li>
          <NavItemLink
            role="button"
            tabIndex="0"
            $isOpen={isOpen}
            onClick={() => handleClick('m-map')}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleClick('m-map');
              }
            }}
          >
            <Span>M-MAP</Span>
          </NavItemLink>
        </li>
        <li>
          <NavItemLink
            role="button"
            tabIndex="0"
            $isOpen={isOpen}
            onClick={() => handleClick('faq')}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleClick('faq');
              }
            }}
          >
            <Span>FAQ</Span>
          </NavItemLink>
        </li>
        <li>
          <NavItemLink
            role="button"
            tabIndex="0"
            $isOpen={isOpen}
            onClick={() => handleClick('arts')}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleClick('arts');
              }
            }}
          >
            <Span>ARTS</Span>
          </NavItemLink>
        </li>
        <li>
          <NavItemLink
            role="button"
            tabIndex="0"
            $isOpen={isOpen}
            onClick={() => handleClick('mint')}
            onKeyDown={e => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                handleClick('mint');
              }
            }}
          >
            <Span>MINT</Span>
          </NavItemLink>
        </li>
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
