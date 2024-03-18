import styled from 'styled-components';

export const ArtsWrapper = styled.section`
  padding-top: 60px;

  @media (min-width: ${p => p.theme.screens.tab}) {
    padding-top: 80px;
  }

  @media (min-width: ${p => p.theme.screens.desk}) {
    padding-top: 120px;
  }
`;
