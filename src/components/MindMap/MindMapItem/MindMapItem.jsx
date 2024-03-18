import { ArrowIconStyled, MindMapItemWrapper, Text, Title } from './MindMapItem.styled';

const MindMapItem = ({ item }) => {
  const { bgColor, text, icon, title } = item;

  return (
    <MindMapItemWrapper bgColor={bgColor}>
      {icon ? <ArrowIconStyled /> : <Text>{text}</Text>}
      <Title>{title}</Title>
    </MindMapItemWrapper>
  );
};

export default MindMapItem;
