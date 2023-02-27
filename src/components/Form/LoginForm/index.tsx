import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import Input from '../Input';
import { SubmitHandler, useForm } from 'react-hook-form';
import { ILoginFormValues, UserContext } from '../../../providers/UserContext';
import { useContext } from 'react';

const LoginForm = () => {
  
  const {register, handleSubmit, formState: { errors }} = useForm<ILoginFormValues>()
  const {userLogin} = useContext(UserContext)

  const submit:SubmitHandler<ILoginFormValues> = (data) =>{
    userLogin(data)

  }
  return(

    <StyledForm onSubmit={handleSubmit(submit)}>
        <Input label='email' register={register('email')} type='email' error={errors.email}  />
        <Input label='senha' register={register('password')} type='password' error={errors.password} />
        <StyledButton $buttonSize='default' $buttonStyle='green'>
          Entrar
        </StyledButton>
    </StyledForm>
  )
 
};

export default LoginForm;
