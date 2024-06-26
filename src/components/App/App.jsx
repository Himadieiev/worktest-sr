import { useState } from 'react';
import { useMediaQuery } from '@uidotdev/usehooks';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

  const isMediumScreen = useMediaQuery('(max-width: 767px)');

  return (
    <AppStyled id="start">
      {isMediumScreen && isBurgerMenuOpen ? (
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
      <ToastContainer
        position="top-right"
        autoClose={2000}
        theme="colored"
        pauseOnHover
        draggable
      />
    </AppStyled>
  );
};
