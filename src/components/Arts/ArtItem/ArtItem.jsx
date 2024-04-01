import PropTypes from 'prop-types';

import { ArtItemWrapper, ImageStyled } from './ArtItem.styled';

const ArtItem = ({ item }) => {
  return (
    <ArtItemWrapper>
      <ImageStyled src={item.imgSrc} alt="nft" loading="lazy" />
    </ArtItemWrapper>
  );
};

export default ArtItem;

ArtItem.propTypes = {
  item: PropTypes.shape({
    imgSrc: PropTypes.string.isRequired,
  }).isRequired,
};
