import { Formik } from 'formik';
import { useState } from 'react';
import { toast } from 'react-toastify';

import Title from '../Common/Title/Title';
import { validateSchema } from '../../utils/validateSchema';

import {
  Btn,
  ContactUsWrapper,
  ContentWrapper,
  CrossIconStyled,
  DiscordIconStyled,
  ErrorMessageStyled,
  FormStyled,
  FoxIconStyled,
  IconWrapper,
  InputStyled,
  Label,
  Text,
  TextWrapper,
} from './ContactUs.styled';

const ContactUs = () => {
  const [buttonText, setButtonText] = useState('Mint');

  return (
    <ContactUsWrapper id="mint">
      <ContentWrapper>
        <Title>Are you in?</Title>
        <TextWrapper>
          <CrossIconStyled aria-label="Decor Element" />
          <Text>
            Join the YACHT APE community to be one of the first to receive our limited edition NFT
          </Text>
        </TextWrapper>
        <Formik
          initialValues={{ discord: '', wallet: '' }}
          validationSchema={validateSchema}
          onSubmit={async (values, { setSubmitting, setStatus, resetForm }) => {
            try {
              toast.success('Success! Your data has been sent.');
              console.log(values);
              setStatus({ success: true });
              setButtonText('Success');
              setTimeout(() => {
                setStatus(null);
                setSubmitting(false);
                setButtonText('Mint');
                resetForm();
              }, 1500);
            } catch (error) {
              setStatus({ success: false });
            }
          }}
        >
          {({ isSubmitting, errors, touched, status }) => (
            <FormStyled>
              <Label>
                <IconWrapper>
                  <DiscordIconStyled aria-label="Discord Label" />
                </IconWrapper>
                <InputStyled
                  type="text"
                  name="discord"
                  placeholder="@username"
                  $hasError={errors.discord && touched.discord}
                />
                <ErrorMessageStyled name="discord" component="div" />
              </Label>

              <Label>
                <IconWrapper>
                  <FoxIconStyled aria-label="Fox Label" />
                </IconWrapper>
                <InputStyled
                  type="text"
                  name="wallet"
                  placeholder="Wallet address"
                  $hasError={errors.wallet && touched.wallet}
                />
                <ErrorMessageStyled name="wallet" component="div" />
              </Label>

              <Btn type="submit" disabled={isSubmitting}>
                {status && status.success
                  ? 'Success'
                  : errors.wallet || errors.discord
                  ? 'Error'
                  : buttonText}
              </Btn>
            </FormStyled>
          )}
        </Formik>
      </ContentWrapper>
    </ContactUsWrapper>
  );
};

export default ContactUs;
