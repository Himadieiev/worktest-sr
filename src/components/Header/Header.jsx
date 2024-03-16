import {
  Btn,
  BtnContent,
  DiscordIconStyled,
  HeaderStyled,
  LogoIconStyled,
  LogoLink,
  ShipIconStyled,
  SocialLinks,
  TwitterIconStyled,
} from './Header.styled';

const Header = ({ toggleBurgerMenu }) => {
  return (
    <HeaderStyled>
      <LogoLink>
        <LogoIconStyled />
      </LogoLink>
      <Btn type="button" onClick={toggleBurgerMenu}>
        <BtnContent>MENU</BtnContent>
      </Btn>
      <SocialLinks>
        <li>
          <a href="/">
            <Btn>
              <DiscordIconStyled />
            </Btn>
          </a>
        </li>
        <li>
          <a href="/">
            <Btn>
              <ShipIconStyled />
            </Btn>
          </a>
        </li>
        <li>
          <a href="/">
            <Btn>
              <TwitterIconStyled />
            </Btn>
          </a>
        </li>
      </SocialLinks>
    </HeaderStyled>
  );
};

export default Header;
