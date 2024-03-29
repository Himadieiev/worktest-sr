import {
  Btn,
  DiscordIconStyled,
  HeaderStyled,
  LogoIconStyled,
  ShipIconStyled,
  SocialLinks,
  Span,
  TwitterIconStyled,
} from './Header.styled';

const Header = ({ toggleBurgerMenu, isOpen, isBurgerMenuOpen, setIsBurgerMenuOpen }) => {
  const handleClick = () => {
    if (isOpen) setIsBurgerMenuOpen(false);
    if (isBurgerMenuOpen) setIsBurgerMenuOpen(false);

    return;
  };

  return (
    <HeaderStyled>
      <a href="https://himadieiev.github.io/worktest-sr/">
        <LogoIconStyled $isOpen={isOpen} />
      </a>
      <Btn
        type="button"
        onClick={toggleBurgerMenu}
        $isOpen={isOpen}
        $isBurgerMenuOpen={isBurgerMenuOpen}
      >
        {isBurgerMenuOpen || isOpen ? <Span>CLOSE</Span> : <Span>MENU</Span>}
      </Btn>
      <SocialLinks>
        <li>
          <a
            href="https://discord.com/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
          >
            <Btn $isOpen={isOpen}>
              <DiscordIconStyled $isOpen={isOpen} />
            </Btn>
          </a>
        </li>
        <li>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
          >
            <Btn $isOpen={isOpen}>
              <ShipIconStyled $isOpen={isOpen} />
            </Btn>
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleClick}
          >
            <Btn $isOpen={isOpen}>
              <TwitterIconStyled $isOpen={isOpen} />
            </Btn>
          </a>
        </li>
      </SocialLinks>
    </HeaderStyled>
  );
};

export default Header;
