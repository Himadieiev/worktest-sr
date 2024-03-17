import { BurgerMenuWrapper, NavItem, NavList, Span } from './BurgerMenu.styled';

const BurgerMenu = ({ isOpen }) => {
  return (
    <BurgerMenuWrapper>
      <NavList>
        <NavItem isOpen={isOpen}>
          <a href="/">
            <Span>ABOUT</Span>
          </a>
        </NavItem>
        <NavItem isOpen={isOpen}>
          <a href="/">
            <Span>M-MAP</Span>
          </a>
        </NavItem>
        <NavItem isOpen={isOpen}>
          <a href="/">
            <Span>FAQ</Span>
          </a>
        </NavItem>
        <NavItem isOpen={isOpen}>
          <a href="/">
            <Span>ARTS</Span>
          </a>
        </NavItem>
        <NavItem isOpen={isOpen}>
          <a href="/">
            <Span>MINT</Span>
          </a>
        </NavItem>
      </NavList>
    </BurgerMenuWrapper>
  );
};

export default BurgerMenu;
