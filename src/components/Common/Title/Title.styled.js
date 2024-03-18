import styled from 'styled-components';

export const TitleWrapper = styled.h2`
  margin-bottom: 24px;

  font-family: ${p => p.theme.fonts.first};
  font-size: 44px;
  line-height: 91%;
  text-transform: uppercase;
  text-align: center;

  color: ${p => p.theme.colors.general.white};

  @media (min-width: ${p => p.theme.screens.tab}) {
    margin-bottom: 40px;

    font-size: 80px;
    line-height: 100%;
  }

  @media (min-width: ${p => p.theme.screens.desk}) {
    margin-bottom: 80px;

    font-size: 160px;
  }
`;
