import Footer from '../Footer/Footer';
import { BurgerMenuWrapper, NavItem, NavList, Span } from './BurgerMenu.styled';

const BurgerMenu = ({ isOpen, toggle }) => {
  const scrollToSection = id => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      });
    }

    toggle();
  };

  return (
    <BurgerMenuWrapper>
      <NavList>
        <NavItem isOpen={isOpen} onClick={() => scrollToSection('about')}>
          <Span>ABOUT</Span>
        </NavItem>
        <NavItem isOpen={isOpen} onClick={() => scrollToSection('m-map')}>
          <Span>M-MAP</Span>
        </NavItem>
        <NavItem isOpen={isOpen} onClick={() => scrollToSection('faq')}>
          <Span>FAQ</Span>
        </NavItem>
        <NavItem isOpen={isOpen} onClick={() => scrollToSection('arts')}>
          <Span>ARTS</Span>
        </NavItem>
        <NavItem isOpen={isOpen} onClick={() => scrollToSection('mint')}>
          <Span>MINT</Span>
        </NavItem>
      </NavList>
      {isOpen && <Footer isOpen={isOpen} />}
    </BurgerMenuWrapper>
  );
};

export default BurgerMenu;
