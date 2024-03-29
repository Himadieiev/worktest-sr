import { useState } from 'react';
import { useMediaQuery } from '@uidotdev/usehooks';

import Header from '../Header/Header';
import Hero from '../Hero/Hero';
import BurgerMenu from '../BurgerMenu/BurgerMenu';
import About from '../About/About';
import MovingBanner from '../About/MovingBanner/MovingBanner';
import MindMap from '../MindMap/MindMap';
import FAQ from '../FAQ/FAQ';
import Arts from '../Arts/Arts';
import ContactUs from '../ContactUs/ContactUs';
import Footer from '../Footer/Footer';

import { AppStyled, Container, HeaderHeroWrapper } from './App.styled';

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
            <Header
              toggleBurgerMenu={toggleBurgerMenu}
              isOpen={isBurgerMenuOpen}
              setIsBurgerMenuOpen={setIsBurgerMenuOpen}
            />
            <BurgerMenu isOpen={isBurgerMenuOpen} toggle={toggleBurgerMenu} />
          </HeaderHeroWrapper>
          <Container style={{ visibility: 'hidden' }}>
            <About />
            <MindMap />
            <FAQ />
            <Arts />
            <ContactUs />
            <Footer />
          </Container>
        </>
      ) : (
        <>
          <HeaderHeroWrapper>
            <Header
              isBurgerMenuOpen={isBurgerMenuOpen}
              toggleBurgerMenu={toggleBurgerMenu}
              setIsBurgerMenuOpen={setIsBurgerMenuOpen}
            />
            <Hero />
            {isBurgerMenuOpen && <BurgerMenu toggle={toggleBurgerMenu} />}
          </HeaderHeroWrapper>

          <Container>
            <About />
          </Container>

          <MovingBanner />

          <Container>
            <MindMap />
            <FAQ />
            <Arts />
            <ContactUs />
            <Footer />
          </Container>
        </>
      )}
    </AppStyled>
  );
};
