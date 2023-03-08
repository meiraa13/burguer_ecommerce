import Input from '../Input';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import { SubmitHandler, useForm } from 'react-hook-form';
import { IRegisterFormValues, UserContext } from '../../../providers/UserContext';
import { useContext } from 'react';
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object({
  name:yup.string().required('Campo obrigatório'),
  email:yup.string().email('Preencha com formato válido de email').required('Campo obrigatório'),
  password:yup.string()
  .matches(/.{6,}/, 'Sua senha deve ter no mínimo 6 caracteres'),
  confirmPassword:yup.string().oneOf([yup.ref('password')], 'Deve ser igual a senha').required('Campo obrigatório'),
  
 
})

const RegisterForm = () => {

  const {register, handleSubmit, formState: { errors }} = useForm<IRegisterFormValues>({resolver:yupResolver(schema)})
  const { userRegister } = useContext(UserContext)

  function submit(data:IRegisterFormValues){

    userRegister(data)

  }
  

  return(

    <StyledForm onSubmit={handleSubmit(submit)}>
        <Input label='nome' register={register('name')} type='text' error={errors.name}/>
        <Input label='senha' register={register('password')} type='password' error={errors.password}   />
        <Input label='confirme senha' register={register('confirmPassword')} type='password' error={errors.confirmPassword} />
        <Input label='email' register={register('email')} type='email' error={errors.email} />
        <StyledButton $buttonSize='default' $buttonStyle='gray'>
          Cadastrar
        </StyledButton>
    </StyledForm>
  
  )

};

export default RegisterForm;
