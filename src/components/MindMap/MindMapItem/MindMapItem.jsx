import { scrollToSection } from '../../utils/scrollToSection';

import { ArrowIconStyled, LinkItem, MindMapItemWrapper, Text, Title } from './MindMapItem.styled';

const MindMapItem = ({ item }) => {
  const { bgColor, text, icon, title } = item;

  return (
    <>
      {icon ? (
        <LinkItem onClick={() => scrollToSection('start')}>
          <MindMapItemWrapper icon={icon} bgColor={bgColor}>
            <ArrowIconStyled />
            <div>
              {title.map((titleItem, index) => (
                <Title key={index}>{titleItem}</Title>
              ))}
            </div>
          </MindMapItemWrapper>
        </LinkItem>
      ) : (
        <MindMapItemWrapper bgColor={bgColor}>
          <Text>{text}</Text>
          <Title>{title}</Title>
        </MindMapItemWrapper>
      )}
    </>
  );
};

export default MindMapItem;
