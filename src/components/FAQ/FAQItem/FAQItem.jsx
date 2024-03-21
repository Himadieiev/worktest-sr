import { Answer, FAQItemWrapper, ImageWrapper, Number, Question, Wrapper } from './FAQItem.styled';

const FAQItem = ({ item, isActive, onItemClick, index }) => {
  const { number, imgSrc, question, answer } = item;

  const handleClick = () => {
    onItemClick(index);
  };

  return (
    <FAQItemWrapper onClick={handleClick} $isActive={isActive}>
      <ImageWrapper $isActive={isActive}>
        <img src={imgSrc} alt="nft-monkey" />
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
