import { FooterText, FooterWrapper } from './Footer.styled';

const Footer = ({ isOpen }) => {
  return (
    <FooterWrapper $isOpen={isOpen}>
      <FooterText>© Yacht ape 2024 all rights reserved</FooterText>
    </FooterWrapper>
  );
};

export default Footer;
