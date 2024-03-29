import styled from 'styled-components';

export const MindMapWrapper = styled.section`
  padding-top: 60px;

  @media (min-width: ${p => p.theme.screens.tab}) {
    padding-top: 80px;
  }

  @media (min-width: ${p => p.theme.screens.desk}) {
    padding-top: 120px;
  }
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
`;
