import styled from 'styled-components';

export const ArtItemWrapper = styled.div`
  width: 216px;
  height: 256px;
  margin-bottom: 24px;

  border-radius: ${p => p.theme.radius.sm};
  overflow: hidden;
  cursor: grab;

  @media (min-width: ${p => p.theme.screens.tab}) {
    width: 284px;
    height: 336px;

    border-radius: ${p => p.theme.radius.lg};
  }

  @media (min-width: ${p => p.theme.screens.desk}) {
    width: 240px;
    height: 280px;
  }
`;

export const ImageStyled = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
