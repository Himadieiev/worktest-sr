import styled from 'styled-components';

import { ReactComponent as CrossIcon } from '../../../assets/svg/cross.svg';

export const MovingBannerWrapper = styled.div`
  position: absolute;
  left: -8px;
  right: -8px;
  bottom: 0;

  height: 52px;

  display: flex;

  background-color: ${p => p.theme.colors.general.red};
  cursor: pointer;

  @media (min-width: ${p => p.theme.screens.tab}) {
    left: -16px;
    right: -16px;
  }

  @media (min-width: ${p => p.theme.screens.desk}) {
    height: 86px;
  }
`;

export const Text = styled.span`
  margin-right: 24px;

  font-family: ${p => p.theme.fonts.first};
  font-size: 36px;
  line-height: 0.6;
  text-transform: uppercase;

  color: ${p => p.theme.colors.general.white};

  @media (min-width: ${p => p.theme.screens.desk}) {
    font-size: 64px;
    margin-right: 36px;
  }
`;

export const CrossIconStyled = styled(CrossIcon)`
  margin-right: 24px;

  width: 36px;
  height: 36px;

  @media (min-width: ${p => p.theme.screens.desk}) {
    margin-right: 36px;
  }
`;
