import styled from 'styled-components';

export const BurgerMenuWrapper = styled.nav`
  position: absolute;
  z-index: 10;

  height: 100vh;
  width: 100%;

  @media (min-width: ${p => p.theme.screens.tab}) {
  }

  @media (min-width: ${p => p.theme.screens.desk}) {
  }
`;

export const NavList = styled.ul`
  width: 121px;
  height: 264px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: ${p => p.theme.screens.tab}) {
  }

  @media (min-width: ${p => p.theme.screens.desk}) {
  }
`;

export const NavItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: flex-start;

  font-family: ${p => p.theme.fonts.fourth};
  font-size: 24px;
  line-height: 121%;
  text-transform: uppercase;
  color: ${p => p.theme.colors.general.white};
`;
