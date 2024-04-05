import PropTypes from 'prop-types';

import { Answer, FAQItemWrapper, ImageWrapper, Number, Question, Wrapper } from './FAQItem.styled';

const FAQItem = ({ item, isActive, onItemClick, index }) => {
  const { number, imgSrc, question, answer } = item;

  const handleClick = () => {
    onItemClick(index);
  };

  return (
    <FAQItemWrapper
      onKeyDown={e => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onItemClick(index);
        }
      }}
      onClick={handleClick}
      $isActive={isActive}
      tabIndex="0"
    >
      <ImageWrapper $isActive={isActive}>
        <img src={imgSrc} alt="nft-monkey" loading="lazy" />
      </ImageWrapper>
      <Number className="number" $isActive={isActive}>
        {number}
      </Number>
      <Wrapper>
        <Question className="question" $isActive={isActive}>
          {question}
        </Question>
        <Answer $isActive={isActive}>{answer}</Answer>
      </Wrapper>
    </FAQItemWrapper>
  );
};

export default FAQItem;

FAQItem.propTypes = {
  item: PropTypes.shape({
    number: PropTypes.string.isRequired,
    imgSrc: PropTypes.string.isRequired,
    question: PropTypes.string.isRequired,
    answer: PropTypes.string.isRequired,
  }).isRequired,
  isActive: PropTypes.bool.isRequired,
  onItemClick: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};
