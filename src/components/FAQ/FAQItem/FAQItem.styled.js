import styled from 'styled-components';

export const FAQItemWrapper = styled.div`
  position: relative;

  width: 216px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: ${p => (p.$isActive ? '8px' : '0px')};
  padding-bottom: ${p => (p.$isActive ? '8px' : '0px')};
  margin-top: ${p => (p.$isActive ? '-8px' : '0px')};
  margin-bottom: ${p => (p.$isActive ? '-8px' : '0px')};

  display: flex;
  align-items: center;

  transition: all ${p => p.theme.transition.hover};
  background-color: ${p => (p.$isActive ? p.theme.colors.bg.grey : 'transperent')};
  border-radius: ${p => p.theme.radius.sm};
  cursor: pointer;

  &:hover,
  &:focus {
    .number {
      color: ${p => p.theme.colors.general.white};
    }

    .question {
      color: ${p => p.theme.colors.general.red};
    }
  }

  @media (min-width: ${p => p.theme.screens.tab}) {
    width: 592px;
    padding-left: 16px;
    padding-right: 16px;
    padding-top: ${p => (p.$isActive ? '18px' : '0px')};
    padding-bottom: ${p => (p.$isActive ? '18px' : '0px')};
    margin-top: ${p => (p.$isActive ? '-18px' : '0px')};
    margin-bottom: ${p => (p.$isActive ? '-18px' : '0px')};

    border-radius: ${p => p.theme.radius.md};
  }

  @media (min-width: ${p => p.theme.screens.desk}) {
    width: 1032px;
    padding-left: 24px;
    padding-right: 24px;
    padding-top: ${p => (p.$isActive ? '24px' : '0px')};
    padding-bottom: ${p => (p.$isActive ? '24px' : '0px')};
    margin-top: ${p => (p.$isActive ? '-24px' : '0px')};
    margin-bottom: ${p => (p.$isActive ? '-24px' : '0px')};

    border-radius: ${p => p.theme.radius.lg};
  }
`;

export const ImageWrapper = styled.div`
  display: none;

  @media (min-width: ${p => p.theme.screens.tab}) {
    position: absolute;

    display: ${p => (p.$isActive ? 'block' : 'none')};

    width: 148px;
    height: 183px;

    overflow: hidden;
    border-radius: ${p => p.theme.radius.md};
    transform: rotate(-16deg);
    transition: all ${p => p.theme.transition.hover};
  }

  @media (min-width: ${p => p.theme.screens.desk}) {
    width: 248px;
    height: 282px;

    border-radius: ${p => p.theme.radius.lg};
    transform: rotate(-8deg);
  }
`;

export const Number = styled.p`
  width: 26px;
  margin-right: 5px;
  margin-left: auto;
  margin-bottom: auto;

  font-family: ${p => p.theme.fonts.third};
  font-weight: 400;
  font-size: 12px;
  line-height: 167%;

  transition: all ${p => p.theme.transition.hover};
  color: ${p => (p.$isActive ? p.theme.colors.general.white : p.theme.colors.general.red)};

  @media (min-width: ${p => p.theme.screens.tab}) {
    width: 35px;
    margin-right: 19px;
    margin-top: 2px;

    font-size: 16px;
    line-height: 169%;
  }

  @media (min-width: ${p => p.theme.screens.desk}) {
    width: 52px;
    margin-right: 24px;
    margin-top: 10px;

    font-size: 24px;
    line-height: 167%;
  }
`;

export const Wrapper = styled.div`
  width: 169px;

  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (min-width: ${p => p.theme.screens.tab}) {
    width: 339px;

    gap: 12px;
  }

  @media (min-width: ${p => p.theme.screens.desk}) {
    width: 635px;

    gap: 36px;
  }
`;

export const Question = styled.p`
  font-family: ${p => p.theme.fonts.first};
  font-size: 20px;
  line-height: 100%;
  text-transform: uppercase;

  transition: all ${p => p.theme.transition.hover};
  color: ${p => (p.$isActive ? p.theme.colors.general.red : p.theme.colors.general.white)};

  @media (min-width: ${p => p.theme.screens.tab}) {
    font-size: 32px;
  }

  @media (min-width: ${p => p.theme.screens.desk}) {
    font-size: 64px;
  }
`;

export const Answer = styled.p`
  display: ${p => (p.$isActive ? 'block' : 'none')};

  font-family: ${p => p.theme.fonts.second};
  font-size: 12px;
  line-height: 117%;
  text-transform: uppercase;

  transition: all ${p => p.theme.transition.hover};
  color: ${p => p.theme.colors.general.white};

  @media (min-width: ${p => p.theme.screens.desk}) {
    font-size: 16px;
    line-height: 119%;
  }
`;
