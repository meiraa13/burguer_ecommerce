import Input from '../Input';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IRegisterFormValues, UserContext } from '../../../providers/UserContext';
import { useContext } from 'react';

const RegisterForm = () => {

  const {register, handleSubmit, formState: { errors }} = useForm<IRegisterFormValues>()
  const { userRegister } = useContext(UserContext)

  function submit(data:IRegisterFormValues){

    userRegister(data)

  }
  

  return(

    <StyledForm onSubmit={handleSubmit(submit)}>
        <Input label='nome' register={register('name')} type='text' error={errors.name}/>
        <Input label='senha' register={register('password')} type='password' error={errors.password}   />
        {/* <Input label='confirme senha' /> */}
        <Input label='email' register={register('email')} type='email' error={errors.email} />
        <StyledButton $buttonSize='default' $buttonStyle='gray'>
          Cadastrar
        </StyledButton>
    </StyledForm>
  
  )

};

export default RegisterForm;
