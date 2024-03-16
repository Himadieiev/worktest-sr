import { BurgerMenuWrapper, NavItem, NavList } from './BurgerMenu.styled';

const BurgerMenu = () => {
  return (
    <BurgerMenuWrapper>
      <NavList>
        <NavItem>
          <a href="/">ABOUT</a>
        </NavItem>
        <NavItem>
          <a href="/">M-MAP</a>
        </NavItem>
        <NavItem>
          <a href="/">FAQ</a>
        </NavItem>
        <NavItem>
          <a href="/">ARTS</a>
        </NavItem>
        <NavItem>
          <a href="/">MINT</a>
        </NavItem>
      </NavList>
    </BurgerMenuWrapper>
  );
};

export default BurgerMenu;
