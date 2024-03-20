import styled from 'styled-components';

export const BtnsWrapper = styled.div`
  width: 150px;
  height: 24px;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  gap: 48px;
  justify-content: center;
  align-items: center;

  @media (min-width: ${p => p.theme.screens.tab}) {
    height: 30px;
  }
`;

export const Btn = styled.button`
  font-family: ${p => p.theme.fonts.third};
  font-size: 24px;
  line-height: 125%;

  color: ${p => p.theme.colors.general.white};

  &:disabled {
    color: ${p => p.theme.colors.general.grey};
  }
`;
