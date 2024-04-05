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
            type="button"
          >
            Prev
          </Btn>
          <Btn
            className={`button nextBtn${sliderNumber}`}
            onClick={next}
            disabled={isEnd}
            type="button"
          >
            Next
          </Btn>
        </BtnsWrapper>
      ) : (
        <BtnsWrapper>
          <Btn type="button" disabled>
            Prev
          </Btn>
          <Btn type="button" disabled>
            Next
          </Btn>
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
