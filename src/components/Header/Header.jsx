import PropTypes from 'prop-types';

import {
  Btn,
  DiscordIconStyled,
  HeaderStyled,
  LinkStyled,
  LogoIconStyled,
  LogoLinkStyled,
  ShipIconStyled,
  SocialLinks,
  Span,
  TwitterIconStyled,
} from './Header.styled';

const Header = ({ toggleBurgerMenu, isOpen, isBurgerMenuOpen }) => {
  return (
    <HeaderStyled>
      <LogoLinkStyled
        $isOpen={isOpen}
        href="https://himadieiev.github.io/worktest-sr/"
        aria-label="Main Page Link"
      >
        <LogoIconStyled $isOpen={isOpen} aria-label="Logo Icon" />
      </LogoLinkStyled>
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
          <LinkStyled
            href="https://discord.com/"
            target="_blank"
            rel="noopener noreferrer"
            $isOpen={isOpen}
            aria-label="Discord Link"
          >
            <DiscordIconStyled $isOpen={isOpen} aria-label="Discord Icon" />
          </LinkStyled>
        </li>
        <li>
          <LinkStyled
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            $isOpen={isOpen}
            aria-label="Instagram Link"
          >
            <ShipIconStyled $isOpen={isOpen} aria-label="Ship Icon" />
          </LinkStyled>
        </li>
        <li>
          <LinkStyled
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
            $isOpen={isOpen}
            aria-label="Twitter Link"
          >
            <TwitterIconStyled $isOpen={isOpen} aria-label="Twitter Icon" />
          </LinkStyled>
        </li>
      </SocialLinks>
    </HeaderStyled>
  );
};

export default Header;

Header.propTypes = {
  isBurgerMenuOpen: PropTypes.bool,
  isOpen: PropTypes.bool,
  toggleBurgerMenu: PropTypes.func.isRequired,
};
