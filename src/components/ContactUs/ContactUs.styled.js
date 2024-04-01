import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

import { ReactComponent as CrossIcon } from '../../assets/svg/cross.svg';
import { ReactComponent as DiscordIcon } from '../../assets/svg/discord.svg';
import { ReactComponent as FoxIcon } from '../../assets/svg/fox.svg';

export const ContactUsWrapper = styled.section`
  padding-top: 60px;

  @media (min-width: ${p => p.theme.screens.tab}) {
    padding-top: 80px;
  }

  @media (min-width: ${p => p.theme.screens.desk}) {
    padding-top: 120px;
  }
`;

export const ContentWrapper = styled.div`
  width: 216px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${p => p.theme.screens.tab}) {
    width: 397px;
  }

  @media (min-width: ${p => p.theme.screens.desk}) {
    width: 581px;
  }
`;

export const TextWrapper = styled.div`
  margin-bottom: 16px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  @media (min-width: ${p => p.theme.screens.tab}) {
    margin-bottom: 24px;

    gap: 24px;
  }

  @media (min-width: ${p => p.theme.screens.desk}) {
    margin-bottom: 40px;

    gap: 40px;
  }
`;

export const CrossIconStyled = styled(CrossIcon)`
  width: 36px;
  height: 36px;
`;

export const DiscordIconStyled = styled(DiscordIcon)`
  width: 24px;
  height: 24px;

  fill: ${p => p.theme.colors.general.blue};
`;

export const FoxIconStyled = styled(FoxIcon)`
  width: 24px;
  height: 24px;
`;

export const Text = styled.p`
  font-family: ${p => p.theme.fonts.second};
  font-size: 16px;
  line-height: 119%;
  text-transform: uppercase;
  text-align: center;

  color: ${p => p.theme.colors.general.white};

  @media (min-width: ${p => p.theme.screens.desk}) {
    font-size: 24px;
    line-height: 121%;
  }
`;

export const FormStyled = styled(Form)`
  width: 216px;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: ${p => p.theme.screens.tab}) {
    width: 248px;
  }

  @media (min-width: ${p => p.theme.screens.desk}) {
    width: 397px;

    gap: 24px;
  }
`;

export const Label = styled.label`
  position: relative;

  display: flex;
`;

export const IconWrapper = styled.div`
  width: 48px;
  height: 48px;

  display: flex;
  justify-content: center;
  align-items: center;

  border-top-left-radius: ${p => p.theme.radius.xs};
  border-bottom-left-radius: ${p => p.theme.radius.xs};
  backdrop-filter: blur(12px);
  background-color: ${p => p.theme.colors.bg.grey};

  @media (min-width: ${p => p.theme.screens.desk}) {
    width: 64px;
    height: 64px;

    border-top-left-radius: ${p => p.theme.radius.sm};
    border-bottom-left-radius: ${p => p.theme.radius.sm};
  }
`;

export const InputStyled = styled(Field)`
  padding: 22px 24px;
  width: 168px;
  height: 48px;

  border: 1px solid
    ${p => (p.$hasError ? p.theme.colors.general.red : p.theme.colors.general.white)};
  background-color: transparent;
  border-top-right-radius: ${p => p.theme.radius.sm};
  border-bottom-right-radius: ${p => p.theme.radius.sm};
  outline: none;

  font-family: ${p => p.theme.fonts.second};
  font-size: 12px;
  line-height: 117%;
  text-transform: uppercase;

  color: ${p => p.theme.colors.general.white};

  &::placeholder {
    color: ${p => p.theme.colors.general.grey};
  }

  @media (min-width: ${p => p.theme.screens.tab}) {
    width: 200px;
    height: 48px;
  }

  @media (min-width: ${p => p.theme.screens.desk}) {
    width: 333px;
    height: 64px;

    font-size: 16px;
    line-height: 119%;
  }
`;

export const ErrorMessageStyled = styled(ErrorMessage)`
  position: absolute;

  top: 48px;
  right: 0;

  font-family: ${p => p.theme.fonts.second};
  font-size: 10px;
  line-height: 120%;
  text-transform: uppercase;

  color: ${p => p.theme.colors.general.red};

  @media (min-width: ${p => p.theme.screens.desk}) {
    top: 66px;

    font-size: 12px;
    line-height: 117%;
  }
`;

export const Btn = styled.button`
  width: 216px;
  height: 41px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: ${p => p.theme.fonts.first};
  font-size: 16px;
  line-height: 119%;
  text-transform: uppercase;

  color: ${p => p.theme.colors.general.white};
  border-radius: ${p => p.theme.radius.xs};
  backdrop-filter: blur(12px);
  background-color: ${p => p.theme.colors.bg.red};
  transition: all ${p => p.theme.transition.hover};

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.general.dark};
  }

  @media (min-width: ${p => p.theme.screens.tab}) {
    width: 247px;
    height: 41px;
  }

  @media (min-width: ${p => p.theme.screens.desk}) {
    width: 397px;
    height: 70px;

    font-size: 28px;
    line-height: 121%;

    border-radius: ${p => p.theme.radius.sm};
  }
`;
