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
  width: 48px;
  height: 32px;

  fill: ${p => p.theme.colors.general.dark};

  @media (min-width: ${p => p.theme.screens.desk}) {
    width: 72px;
    height: 50px;
  }
`;

export const DiscordIconStyled = styled(DiscordIcon)`
  width: 16px;
  height: 16px;

  fill: ${p => p.theme.colors.general.dark};

  @media (min-width: ${p => p.theme.screens.tab}) {
    width: 24px;
    height: 24px;
  }
`;

export const ShipIconStyled = styled(ShipIcon)`
  width: 16px;
  height: 16px;

  fill: ${p => p.theme.colors.general.dark};

  @media (min-width: ${p => p.theme.screens.tab}) {
    width: 24px;
    height: 24px;
  }
`;

export const TwitterIconStyled = styled(TwitterIcon)`
  width: 16px;
  height: 16px;

  fill: ${p => p.theme.colors.general.dark};

  @media (min-width: ${p => p.theme.screens.desk}) {
    width: 24px;
    height: 24px;
  }
`;

export const LogoLink = styled.a``;

export const Btn = styled.button`
  width: 48px;
  height: 48px;
  padding: 10px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: ${p => p.theme.radius.xs};
  backdrop-filter: blur(12px);
  background-color: ${p => p.theme.colors.bg.semiTrDark};

  @media (min-width: ${p => p.theme.screens.desk}) {
    width: 80px;
    height: 80px;

    border-radius: ${p => p.theme.radius.sm};
  }
`;

export const BtnContent = styled.span`
  font-family: ${p => p.theme.fonts.fourth};
  font-size: 12px;
  line-height: 117%;
  text-transform: uppercase;
  color: ${p => p.theme.colors.general.dark};

  @media (min-width: ${p => p.theme.screens.desk}) {
    font-size: 16px;
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
