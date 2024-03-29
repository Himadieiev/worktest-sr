import styled from 'styled-components';

export const FAQWrapper = styled.section`
  padding-top: 60px;

  @media (min-width: ${p => p.theme.screens.tab}) {
    padding-top: 80px;
  }

  @media (min-width: ${p => p.theme.screens.desk}) {
    padding-top: 120px;
  }
`;

export const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: ${p => p.theme.screens.tab}) {
    gap: 36px;
  }

  @media (min-width: ${p => p.theme.screens.desk}) {
    gap: 48px;
  }
`;
