import PropTypes from 'prop-types';

import { Btn, BtnsWrapper } from './SliderBtns.styled';

const SliderBtns = ({ isBeginning, isEnd, sliderNumber, previous, next, isAllSlidesShow }) => {
  return (
    <>
      {!isAllSlidesShow ? (
        <BtnsWrapper>
          <Btn
            className={`button prevBtn${sliderNumber}`}
            onClick={previous}
            disabled={isBeginning}
          >
            Prev
          </Btn>
          <Btn className={`button nextBtn${sliderNumber}`} onClick={next} disabled={isEnd}>
            Next
          </Btn>
        </BtnsWrapper>
      ) : (
        <BtnsWrapper>
          <Btn disabled>Prev</Btn>
          <Btn disabled>Next</Btn>
        </BtnsWrapper>
      )}
    </>
  );
};

export default SliderBtns;

SliderBtns.propTypes = {
  isBeginning: PropTypes.bool.isRequired,
  isEnd: PropTypes.bool.isRequired,
  sliderNumber: PropTypes.number.isRequired,
  previous: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  isAllSlidesShow: PropTypes.bool.isRequired,
};
