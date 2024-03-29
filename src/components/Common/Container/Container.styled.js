import styled from 'styled-components';

export const ContainerStyled = styled.div`
  width: 344px;
  padding: 0 64px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${p => p.theme.screens.tab}) {
    width: 736px;
    padding: 0 72px;
  }

  @media (min-width: ${p => p.theme.screens.desk}) {
    width: 1248px;
    padding: 0 108px;
  }

  @media (min-width: ${p => p.theme.screens.deskMax}) {
    width: 1408px;
    padding: 0 188px;
  }
`;
