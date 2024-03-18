import { Btn, BtnsWrapper } from './SliderBtns.styled';

export const SliderBtns = ({
  isBeginning,
  isEnd,
  sliderNumber,
  previous,
  next,
  isAllSlidesShow,
}) => {
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
