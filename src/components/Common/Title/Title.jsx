import PropTypes from 'prop-types';

import { TitleWrapper } from './Title.styled';

const Title = ({ children }) => {
  return <TitleWrapper>{children}</TitleWrapper>;
};

export default Title;

Title.propTypes = {
  children: PropTypes.node,
};
