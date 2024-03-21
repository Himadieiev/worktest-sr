import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  position: ${p => (p.$isOpen ? 'absolute' : 'static')};
  bottom: 10%;

  padding-top: 60px;
  padding-bottom: 24px;

  @media (min-width: ${p => p.theme.screens.tab}) {
    padding-top: 80px;
    padding-bottom: 40px;
  }

  @media (min-width: ${p => p.theme.screens.desk}) {
    padding-top: 120px;
  }
`;

export const FooterText = styled.p`
  font-family: ${p => p.theme.fonts.second};
  font-size: 12px;
  line-height: 117%;
  text-transform: uppercase;
  text-align: center;

  color: ${p => p.theme.colors.general.white};

  @media (min-width: ${p => p.theme.screens.desk}) {
    font-size: 16px;
    line-height: 119%;
  }
`;
