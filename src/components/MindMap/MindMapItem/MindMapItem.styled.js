import styled from 'styled-components';

import { ReactComponent as ArrowIcon } from '../../../assets/svg/arrow.svg';

export const LinkItem = styled.div`
  cursor: pointer;
`;

export const MindMapItemWrapper = styled.div`
  width: 216px;
  height: 242px;
  padding: 24px 12px;
  margin-bottom: 24px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  background-color: ${p => p.bgColor};
  border-radius: ${p => p.theme.radius.sm};
  transition: all ${p => p.theme.transition.hover};

  &:hover {
    box-shadow: ${p => (p.icon ? 'inset 0 0 10px rgba(0, 0, 0, 0.5)' : 'none')};
  }

  @media (min-width: ${p => p.theme.screens.tab}) {
    width: 284px;
    height: 242px;
    margin-bottom: 0;

    border-radius: ${p => p.theme.radius.md};
  }

  @media (min-width: ${p => p.theme.screens.desk}) {
    width: 504px;
    height: 480px;

    border-radius: ${p => p.theme.radius.lg};
  }
`;

export const Text = styled.p`
  font-family: ${p => p.theme.fonts.second};
  font-size: 12px;
  line-height: 117%;
  text-transform: uppercase;

  color: ${p => p.theme.colors.general.white};

  @media (min-width: ${p => p.theme.screens.tab}) {
    width: 128px;
    margin-left: auto;
  }

  @media (min-width: ${p => p.theme.screens.desk}) {
    width: 228px;

    font-size: 24px;
    line-height: 121%;
  }
`;

export const ArrowIconStyled = styled(ArrowIcon)`
  width: 24px;
  height: 24px;
  margin-left: auto;
  margin-top: 12px;
  margin-right: 12px;

  fill: ${p => p.theme.colors.general.white};

  @media (min-width: ${p => p.theme.screens.desk}) {
    width: 40px;
    height: 40px;
  }
`;

export const Title = styled.h3`
  /* width: ${p => (p.icon ? '150px' : '100%')}; */

  font-family: ${p => p.theme.fonts.first};
  font-size: 32px;
  line-height: 100%;
  text-transform: uppercase;

  color: ${p => p.theme.colors.general.white};

  @media (min-width: ${p => p.theme.screens.desk}) {
    font-size: 64px;
  }
`;
