import { ArtItemWrapper, ImageStyled } from './ArtItem.styled';

const ArtItem = ({ item }) => {
  return (
    <ArtItemWrapper>
      <ImageStyled src={item.imgSrc} alt="nft" />
    </ArtItemWrapper>
  );
};

export default ArtItem;
