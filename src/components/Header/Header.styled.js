import styled from 'styled-components';

import { ReactComponent as LogoIcon } from '../../assets/svg/logo.svg';
import { ReactComponent as DiscordIcon } from '../../assets/svg/discord.svg';
import { ReactComponent as ShipIcon } from '../../assets/svg/ship.svg';
import { ReactComponent as TwitterIcon } from '../../assets/svg/twitter.svg';

export const HeaderStyled = styled.header`
  position: relative;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoIconStyled = styled(LogoIcon)`
  position: relative;
  z-index: 30;

  width: 48px;
  height: 32px;

  fill: ${p => (p.$isOpen ? p.theme.colors.general.white : p.theme.colors.general.dark)};

  transition: all ${p => p.theme.transition.hover};

  &:hover {
    fill: ${p => (p.$isOpen ? p.theme.colors.general.red : p.theme.colors.general.white)};
  }

  @media (min-width: ${p => p.theme.screens.desk}) {
    width: 72px;
    height: 50px;
  }
`;

export const DiscordIconStyled = styled(DiscordIcon)`
  position: relative;
  z-index: 30;

  width: 16px;
  height: 16px;

  fill: ${p => (p.$isOpen ? p.theme.colors.general.white : p.theme.colors.general.dark)};

  transition: all ${p => p.theme.transition.hover};

  @media (min-width: ${p => p.theme.screens.tab}) {
    width: 24px;
    height: 24px;
  }
`;

export const ShipIconStyled = styled(ShipIcon)`
  position: relative;
  z-index: 30;

  width: 16px;
  height: 16px;

  fill: ${p => (p.$isOpen ? p.theme.colors.general.white : p.theme.colors.general.dark)};

  transition: all ${p => p.theme.transition.hover};

  @media (min-width: ${p => p.theme.screens.tab}) {
    width: 24px;
    height: 24px;
  }
`;

export const TwitterIconStyled = styled(TwitterIcon)`
  position: relative;
  z-index: 30;

  width: 16px;
  height: 16px;

  fill: ${p => (p.$isOpen ? p.theme.colors.general.white : p.theme.colors.general.dark)};

  transition: all ${p => p.theme.transition.hover};

  @media (min-width: ${p => p.theme.screens.desk}) {
    width: 24px;
    height: 24px;
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

export const Btn = styled.button`
  position: relative;
  z-index: 30;

  width: 48px;
  height: 48px;
  padding: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: ${p => p.theme.fonts.fourth};
  font-size: 12px;
  line-height: 117%;
  text-transform: uppercase;

  color: ${p => (p.$isOpen ? p.theme.colors.general.white : p.theme.colors.general.dark)};
  border-radius: ${p => p.theme.radius.xs};

  backdrop-filter: blur(12px);
  background-color: ${p =>
    p.$isOpen ? p.theme.colors.bg.semiTrLight : p.theme.colors.bg.semiTrDark};

  transition: all ${p => p.theme.transition.hover};

  &:hover {
    color: ${p => (p.$isOpen ? p.theme.colors.general.red : p.theme.colors.general.white)};

    ${Span}::after {
      background-color: ${p =>
        p.$isOpen ? p.theme.colors.general.red : p.theme.colors.general.white};
    }

    ${DiscordIconStyled} {
      fill: ${p => (p.$isOpen ? p.theme.colors.general.red : p.theme.colors.general.white)};
    }

    ${ShipIconStyled} {
      fill: ${p => (p.$isOpen ? p.theme.colors.general.red : p.theme.colors.general.white)};
    }

    ${TwitterIconStyled} {
      fill: ${p => (p.$isOpen ? p.theme.colors.general.red : p.theme.colors.general.white)};
    }
  }

  @media (min-width: ${p => p.theme.screens.mobMax}) {
    border-top-left-radius: ${p => (p.$isBurgerMenuOpen ? p.theme.radius.none : p.theme.radius.xs)};
    border-bottom-left-radius: ${p =>
      p.$isBurgerMenuOpen ? p.theme.radius.none : p.theme.radius.xs};
  }

  @media (min-width: ${p => p.theme.screens.desk}) {
    width: 80px;
    height: 80px;

    font-size: 16px;

    border-radius: ${p => p.theme.radius.sm};
    border-top-left-radius: ${p => (p.$isBurgerMenuOpen ? p.theme.radius.none : p.theme.radius.sm)};
    border-bottom-left-radius: ${p =>
      p.$isBurgerMenuOpen ? p.theme.radius.none : p.theme.radius.sm};
  }
`;

export const SocialLinks = styled.ul`
  position: absolute;
  top: 56px;
  right: 0;

  display: flex;
  flex-direction: column;
  gap: 8px;

  @media (min-width: ${p => p.theme.screens.desk}) {
    top: 96px;

    gap: 16px;

    font-size: 16px;
  }
`;
