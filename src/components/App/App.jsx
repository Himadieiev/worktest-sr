import { useState } from 'react';
import { useMediaQuery } from '@uidotdev/usehooks';

import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import About from '../About/About';
import MindMap from '../MindMap/MindMap';
import FAQ from '../FAQ/FAQ';
import Arts from '../Arts/Arts';
import ContactUs from '../ContactUs/ContactUs';
import Footer from '../Footer/Footer';

import { AppStyled, HeaderHeroWrapper } from './App.styled';

export const App = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);

  const toggleBurgerMenu = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };

  const isSmallScreen = useMediaQuery('(max-width: 479px)');

  return (
    <AppStyled id="start">
      {isSmallScreen && isBurgerMenuOpen ? (
        <>
          <HeaderHeroWrapper>
            <Header toggleBurgerMenu={toggleBurgerMenu} isOpen={isBurgerMenuOpen} />
            <BurgerMenu isOpen={isBurgerMenuOpen} toggle={toggleBurgerMenu} />
          </HeaderHeroWrapper>
          <div style={{ visibility: 'hidden' }}>
            <About />
            <MindMap />
            <FAQ />
            <Arts />
            <ContactUs />
            <Footer />
          </div>
        </>
      ) : (
        <>
          <HeaderHeroWrapper>
            <Header isBurgerMenuOpen={isBurgerMenuOpen} toggleBurgerMenu={toggleBurgerMenu} />
            <Hero />
            {isBurgerMenuOpen && <BurgerMenu toggle={toggleBurgerMenu} />}
          </HeaderHeroWrapper>
          <About />
          <MindMap />
          <FAQ />
          <Arts />
          <ContactUs />
          <Footer />
        </>
      )}
    </AppStyled>
  );
};
