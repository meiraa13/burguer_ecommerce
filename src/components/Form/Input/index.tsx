import { FieldError, UseFormRegisterReturn } from 'react-hook-form';
import { StyledTextField } from '../../../styles/form';
import { StyledParagraph } from '../../../styles/typography';

interface IInput{
  label:string;
  type: 'text' | 'email' | 'password';
  register: UseFormRegisterReturn<string>;
  error?: FieldError;
}

const Input = ({label, type, register, error}: IInput) => (
  <fieldset>
    <StyledTextField label={label} type={type} {...register} />
    <StyledParagraph fontColor='red'>{error?.message}</StyledParagraph>
  </fieldset>
);

export default Input;
