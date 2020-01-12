import styled from 'styled-components';
import { media } from '../../helpers/style-helper';
import Envelope from '../SignUpForm/envelope.svg';

export const FormContainer = styled.div`
  color: white;
  background: linear-gradient(90deg, #765E9C, #622d8a);
  padding: 16px 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 0;
  margin-left: -20px;
  margin-right: -20px;
  font-size: 16px;

  margin-bottom: -41px;

  ${media.tablet`
    max-width: 500px;
    border-radius: 6px;
    margin: auto;
  `}
`

export const TextContainer = styled.div`
  flex: 1 1 0;
  padding-right: 16px;
`

export const MainText = styled.h3`
  font-size: 1.4em;
  font-weight: 400;
  line-height: 1.4;
  max-width: 400px;
  margin: 0;
  ${media.tablet`
    font-size: 1.6em;
  `}
`

export const SmallText = styled.p`
  margin: 0;
  text-align: center;
  strong {
    font-weight: 700;
  }
`

export const Input = styled.input`
  flex: 1 1 0;
  font-weight: 300;
  border: none;
  border-radius: 4px;
  background-image: url(${Envelope});
  background-size: 26px 26px;
  background-repeat: no-repeat;
  background-position: 12px;
  height: 32px;
  padding: 6px 6px 6px 44px;
  margin: 16px 12px 16px;
  max-width: calc(100% - 160px);
`

export const Form = styled.form`
  display: flex;
  align-items: center;
`
