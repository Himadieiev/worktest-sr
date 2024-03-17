import styled from 'styled-components';

export const AppStyled = styled.div`
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
  background: #dc3b5a;

  @media (min-width: ${p => p.theme.screens.tab}) {
    max-width: 736px;
    height: 421px;
    padding: 12px 12px 0 12px;

    border-radius: ${p => p.theme.radius.md};
  }

  @media (min-width: ${p => p.theme.screens.desk}) {
    max-width: 1408px;
    height: 677px;
    padding: 24px 96px 0 96px;

    border-radius: ${p => p.theme.radius.lg};
  }
`;

export const Container = styled.div`
  width: 360px;
  padding: 0 72px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${p => p.theme.screens.tab}) {
    width: 768px;
    padding: 0 88px;
  }

  @media (min-width: ${p => p.theme.screens.desk}) {
    width: 1440px;
    padding: 0 204px;
  }
`;
