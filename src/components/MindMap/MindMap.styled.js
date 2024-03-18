import styled from 'styled-components';

export const MindMapWrapper = styled.section`
  padding-top: 112px;

  @media (min-width: ${p => p.theme.screens.tab}) {
    padding-top: 132px;
  }

  @media (min-width: ${p => p.theme.screens.desk}) {
    padding-top: 206px;
  }
`;
