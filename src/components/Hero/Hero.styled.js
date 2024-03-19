import styled from 'styled-components';

export const HeroWrapper = styled.section`
  position: relative;

  width: 216px;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: ${p => p.theme.screens.tab}) {
    width: 591px;

    align-items: start;
  }

  @media (min-width: ${p => p.theme.screens.desk}) {
    width: 1019px;
  }
`;

export const TextOne = styled.p`
  position: absolute;
  top: -22px;

  font-family: ${p => p.theme.fonts.seventh};
  font-size: 16px;
  line-height: 169%;

  color: ${p => p.theme.colors.general.dark};

  @media (min-width: ${p => p.theme.screens.tab}) {
    position: static;

    margin-top: 64px;

    font-size: 20px;
    line-height: 165%;
  }

  @media (min-width: ${p => p.theme.screens.desk}) {
    margin-top: 95px;

    font-size: 24px;
    line-height: 167%;
  }
`;

export const TextTwo = styled.p`
  margin-bottom: 6px;

  font-family: ${p => p.theme.fonts.third};
  font-size: 16px;
  line-height: 169%;

  color: ${p => p.theme.colors.general.dark};

  @media (min-width: ${p => p.theme.screens.tab}) {
    margin-bottom: 0;

    font-size: 20px;
    line-height: 165%;
  }

  @media (min-width: ${p => p.theme.screens.desk}) {
    margin-left: 120px;

    font-size: 24px;
    line-height: 167%;
  }
`;

export const TextThree = styled.p`
  font-family: ${p => p.theme.fonts.second};
  font-size: 12px;
  line-height: 117%;
  text-transform: uppercase;
  text-align: center;

  color: ${p => p.theme.colors.general.dark};

  @media (min-width: ${p => p.theme.screens.tab}) {
    text-align: justify;

    &::before {
      content: 'emptyplace';
      color: transparent;
    }
  }

  @media (min-width: ${p => p.theme.screens.desk}) {
    font-size: 16px;
    line-height: 119%;

    &::before {
      content: 'empty';
      color: transparent;
    }
  }
`;

export const MainTitle = styled.h1`
  margin-top: 5px;
  margin-bottom: 8px;

  font-family: ${p => p.theme.fonts.first};
  font-size: 44px;
  line-height: 100%;
  letter-spacing: 0.01em;

  color: ${p => p.theme.colors.general.dark};

  @media (min-width: ${p => p.theme.screens.tab}) {
    width: 100%;
    margin-bottom: 16px;
    margin-top: 0;

    display: flex;
    justify-content: space-between;

    font-size: 92px;
  }

  @media (min-width: ${p => p.theme.screens.desk}) {
    margin-bottom: 25px;

    font-size: 164px;
  }
`;

export const ImageStyled = styled.img`
  width: 216px;

  @media (min-width: ${p => p.theme.screens.tab}) {
    position: absolute;
    top: -25px;
    left: 133px;

    width: 283px;
  }

  @media (min-width: ${p => p.theme.screens.desk}) {
    top: -39px;
    left: 248px;

    width: 463px;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  top: -4px;

  display: flex;
  flex-direction: column;
  gap: 12px;

  @media (min-width: ${p => p.theme.screens.tab}) {
    top: -19px;

    width: 190px;
    margin-left: auto;

    flex-direction: column-reverse;
    gap: 16px;
  }

  @media (min-width: ${p => p.theme.screens.desk}) {
    top: -30px;

    width: 337px;

    gap: 28px;
  }
`;

export const Button = styled.button`
  width: 216px;
  height: 41px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: ${p => p.theme.fonts.first};
  font-size: 16px;
  line-height: 119%;
  text-transform: uppercase;

  color: ${p => p.theme.colors.general.dark};
  border-radius: ${p => p.theme.radius.xs};
  backdrop-filter: blur(12px);
  background-color: ${p => p.theme.colors.bg.semiTrDark};
  transition: all ${p => p.theme.transition.hover};

  &:hover {
    color: ${p => p.theme.colors.general.white};
  }

  @media (min-width: ${p => p.theme.screens.tab}) {
    width: 190px;
    height: 41px;

    border-radius: ${p => p.theme.radius.sm};
  }

  @media (min-width: ${p => p.theme.screens.desk}) {
    width: 337px;
    height: 70px;

    font-size: 28px;
    line-height: 121%;
  }
`;
