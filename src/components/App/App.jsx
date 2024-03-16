import { useState } from 'react';
import { useMediaQuery } from '@uidotdev/usehooks';

import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

import { AppStyled, Container, HeaderHeroWrapper } from './App.styled';

export const App = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };

  const isSmallScreen = useMediaQuery('(max-width: 479px)');

  return (
    <AppStyled>
      {isSmallScreen && isBurgerMenuOpen ? (
        <BurgerMenu />
      ) : (
        <>
          <HeaderHeroWrapper>
            <Header toggleBurgerMenu={toggleBurgerMenu} />
            <Hero />
            {isBurgerMenuOpen && <BurgerMenu />}
          </HeaderHeroWrapper>

          <Container></Container>
        </>
      )}
    </AppStyled>
  );
};
