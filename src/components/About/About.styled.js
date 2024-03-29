import styled from 'styled-components';

import { ReactComponent as CrossIcon } from '../../assets/svg/cross.svg';

export const AboutSectionWrapper = styled.section`
  position: relative;

  padding-top: 63px;

  @media (min-width: ${p => p.theme.screens.tab}) {
    padding-top: 80px;
    padding-bottom: 88px;
  }

  @media (min-width: ${p => p.theme.screens.desk}) {
    padding-top: 120px;
    padding-bottom: 126px;
  }
`;

export const ContentWrapper = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  @media (min-width: ${p => p.theme.screens.tab}) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const Title = styled.h2`
  margin-bottom: 16px;

  font-family: ${p => p.theme.fonts.first};
  font-size: 40px;
  line-height: 100%;
  text-transform: uppercase;

  color: ${p => p.theme.colors.general.white};

  span {
    color: ${p => p.theme.colors.general.red};
  }

  @media (min-width: ${p => p.theme.screens.tab}) {
    width: 269px;
    margin-bottom: 68px;

    font-size: 60px;
  }

  @media (min-width: ${p => p.theme.screens.desk}) {
    width: 538px;
    margin-bottom: 56px;
    margin-right: 85px;

    font-size: 120px;
  }
`;

export const TextOne = styled.p`
  margin-bottom: 36px;

  font-family: ${p => p.theme.fonts.second};
  font-size: 16px;
  line-height: 119%;
  text-transform: uppercase;
  text-align: right;

  color: ${p => p.theme.colors.general.white};

  @media (min-width: ${p => p.theme.screens.tab}) {
    width: 275px;
    margin-bottom: 0;
    margin-left: auto;
    margin-top: 11px;
  }

  @media (min-width: ${p => p.theme.screens.desk}) {
    width: 409px;

    font-size: 24px;
    line-height: 121%;
  }
`;

export const TextTwo = styled.p`
  font-family: ${p => p.theme.fonts.second};
  font-size: 12px;
  line-height: 117%;
  text-transform: uppercase;
  text-align: center;

  color: ${p => p.theme.colors.general.white};

  @media (min-width: ${p => p.theme.screens.tab}) {
    font-size: 16px;
    line-height: 119%;
  }

  @media (min-width: ${p => p.theme.screens.desk}) {
    font-size: 24px;
    line-height: 121%;
  }
`;

export const CrossIconStyled = styled(CrossIcon)`
  width: 24px;
  height: 24px;

  @media (min-width: ${p => p.theme.screens.desk}) {
    width: 36px;
    height: 36px;
  }
`;

export const TextIconWrapper = styled.div`
  margin-bottom: 40px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media (min-width: ${p => p.theme.screens.tab}) {
    width: 269px;
    margin-bottom: 0;

    gap: 24px;
  }

  @media (min-width: ${p => p.theme.screens.desk}) {
    width: 417px;

    gap: 36px;
  }
`;

export const ImageStyled = styled.img`
  width: 216px;

  @media (min-width: ${p => p.theme.screens.tab}) {
    position: absolute;
    right: 0;
    top: 125px;

    width: 313px;
  }

  @media (min-width: ${p => p.theme.screens.desk}) {
    top: 222px;

    width: 492px;
  }
`;
