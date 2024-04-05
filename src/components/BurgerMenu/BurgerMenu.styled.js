import styled from 'styled-components';
import { animated } from '@react-spring/web';

export const BurgerMenuWrapper = styled(animated.nav)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;

  height: calc(100vh - 54px);
  width: 100%;
  padding-bottom: 54px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${p => p.theme.colors.bg.dark};

  @media (min-width: ${p => p.theme.screens.mobMax}) {
    height: 56px;
    padding-bottom: 0px;

    display: block;

    background-color: transparent;
  }

  @media (min-width: ${p => p.theme.screens.tab}) {
    height: 60px;
  }

  @media (min-width: ${p => p.theme.screens.desk}) {
    height: 104px;
  }
`;

export const NavList = styled.ul`
  width: 121px;
  height: 264px;

  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: ${p => p.theme.screens.mobMax}) {
    position: absolute;
    right: 56px;
    top: 8px;

    width: 240px;
    height: 48px;

    flex-direction: row;
    gap: 0px;

    border-top-left-radius: ${p => p.theme.radius.sm};
    border-bottom-left-radius: ${p => p.theme.radius.sm};
    backdrop-filter: blur(12px);
    background-color: ${p => p.theme.colors.bg.semiTrDark};
  }

  @media (min-width: ${p => p.theme.screens.tab}) {
    right: 60px;
    top: 12px;
  }

  @media (min-width: ${p => p.theme.screens.desk}) {
    right: 92px;
    top: 24px;

    width: 400px;
    height: 80px;
  }

  @media (min-width: ${p => p.theme.screens.deskMax}) {
    right: 176px;
  }
`;

export const Span = styled.span`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -3px;
    width: 100%;
    height: 1px;
    background-color: transparent;
    transition: all ${p => p.theme.transition.hover};
  }
`;

export const NavItemLink = styled.a`
  position: relative;

  height: 40px;

  display: flex;
  justify-content: center;
  align-items: flex-start;

  font-family: ${p => p.theme.fonts.fourth};
  font-size: 24px;
  line-height: 121%;
  text-transform: uppercase;

  color: ${p => p.theme.colors.general.white};
  cursor: pointer;

  transition: all ${p => p.theme.transition.hover};

  &:hover,
  &:focus {
    color: ${p => (p.$isOpen ? p.theme.colors.general.red : p.theme.colors.general.white)};

    ${Span}::after {
      background-color: ${p => (p.$isOpen ? 'transparent' : p.theme.colors.general.white)};
    }
  }

  @media (min-width: ${p => p.theme.screens.mobMax}) {
    width: 48px;
    height: 48px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 12px;
    line-height: 117%;

    color: ${p => p.theme.colors.general.dark};
  }

  @media (min-width: ${p => p.theme.screens.desk}) {
    width: 80px;
    height: 80px;

    font-size: 16px;
    line-height: 119%;
  }
`;
