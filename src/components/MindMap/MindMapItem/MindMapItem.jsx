import PropTypes from 'prop-types';

import { scrollToSection } from '../../../utils/scrollToSection';

import { ArrowIconStyled, MindMapItemWrapper, Text, Title } from './MindMapItem.styled';

const MindMapItem = ({ item }) => {
  const { bgColor, text, icon, title } = item;

  return (
    <>
      {icon ? (
        <MindMapItemWrapper
          $bgColor={bgColor}
          role="button"
          tabIndex="0"
          onClick={() => scrollToSection('start')}
          onKeyDown={e => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              scrollToSection('start');
            }
          }}
          aria-label="Up Page Link"
        >
          <ArrowIconStyled aria-label="Arrow Icon" />
          <div>
            {title.map((titleItem, index) => (
              <Title key={index}>{titleItem}</Title>
            ))}
          </div>
        </MindMapItemWrapper>
      ) : (
        <MindMapItemWrapper $bgColor={bgColor}>
          <Text>{text}</Text>
          <Title>{title}</Title>
        </MindMapItemWrapper>
      )}
    </>
  );
};

export default MindMapItem;

MindMapItem.propTypes = {
  item: PropTypes.shape({
    bgColor: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    icon: PropTypes.bool,
    title: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};
