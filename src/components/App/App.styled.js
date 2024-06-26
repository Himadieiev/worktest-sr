import styled from 'styled-components';

export const AppStyled = styled.div`
  position: relative;

  padding: 54px 8px 0 8px;

  @media (min-width: ${p => p.theme.screens.tab}) {
    padding: 54px 16px 0 16px;
  }

  @media (min-width: ${p => p.theme.screens.desk}) {
    padding: 16px 16px 0 16px;
  }
`;

export const HeaderHeroWrapper = styled.div`
  position: relative;

  max-width: 464px;
  width: 100%;
  height: 542px;
  margin-left: auto;
  margin-right: auto;
  padding: 8px 8px 0 8px;

  border-radius: ${p => p.theme.radius.sm};
  background-color: #dc3b5a;

  @media (min-width: ${p => p.theme.screens.tab}) {
    max-width: 736px;
    height: 421px;
    padding: 12px 12px 0 12px;

    border-radius: ${p => p.theme.radius.md};
  }

  @media (min-width: ${p => p.theme.screens.desk}) {
    max-width: 1240px;
    height: 677px;
    padding: 24px 12px 0 12px;

    border-radius: ${p => p.theme.radius.lg};
  }

  @media (min-width: ${p => p.theme.screens.deskMax}) {
    max-width: 1408px;
    padding: 24px 96px 0 96px;
  }
`;
