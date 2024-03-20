import { Formik } from 'formik';

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
import { useState } from 'react';

const ContactUs = () => {
  const [buttonText, setButtonText] = useState('Mint');

  return (
    <ContactUsWrapper id="mint">
      <ContentWrapper>
        <Title>Are you in?</Title>
        <TextWrapper>
          <CrossIconStyled />
          <Text>
            Join the YACHT APE community to be one of the first to receive our limited edition NFT
          </Text>
        </TextWrapper>
        <Formik
          initialValues={{ discord: '', wallet: '' }}
          validationSchema={validateSchema}
          onSubmit={async (values, { setSubmitting, setStatus, resetForm }) => {
            try {
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
                  <DiscordIconStyled />
                </IconWrapper>
                <InputStyled
                  type="text"
                  name="discord"
                  placeholder="@username"
                  hasError={errors.discord && touched.discord}
                />
                <ErrorMessageStyled name="discord" component="div" />
              </Label>

              <Label>
                <IconWrapper>
                  <FoxIconStyled />
                </IconWrapper>
                <InputStyled
                  type="text"
                  name="wallet"
                  placeholder="Wallet address"
                  hasError={errors.wallet && touched.wallet}
                />
                <ErrorMessageStyled name="wallet" component="div" />
              </Label>

              <Btn type="submit" disabled={isSubmitting} error={errors.wallet || errors.discord}>
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
