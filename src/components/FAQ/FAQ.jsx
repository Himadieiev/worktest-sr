import { useState } from 'react';

import Title from '../Common/Title/Title';
import FAQItem from './FAQItem/FAQItem';
import { FAQ_DATA } from './../../constants/faqData';

import { FAQList, FAQWrapper } from './FAQ.styled';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = index => {
    setActiveIndex(index);
  };

  return (
    <FAQWrapper id="faq">
      <Title>FAQ</Title>

      <FAQList>
        {FAQ_DATA.map((item, index) => (
          <FAQItem
            key={index}
            item={item}
            isActive={index === activeIndex}
            onItemClick={handleItemClick}
            index={index}
          />
        ))}
      </FAQList>
    </FAQWrapper>
  );
};

export default FAQ;
