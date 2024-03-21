import Footer from '../Footer/Footer';
import { scrollToSection } from '../../utils/scrollToSection';

import { BurgerMenuWrapper, NavItem, NavList, Span } from './BurgerMenu.styled';

const BurgerMenu = ({ isOpen, toggle }) => {
  const handleClick = id => {
    scrollToSection(id);
    toggle();
  };

  return (
    <BurgerMenuWrapper>
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
