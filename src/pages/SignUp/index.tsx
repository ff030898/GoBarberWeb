import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiLock, FiMail, FiUser } from 'react-icons/fi';
import { Link } from "react-router-dom";
import * as Yup from 'yup';
import Logo from '../../assets/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { useToast } from '../../hooks/toast';
import getVaidationErrors from '../../utils/getValidationErros';
import { AnimatorContainer, Background, Container, Content } from './styles';


const SignUp: React.FC = () => {

  const formRef = useRef<FormHandles>(null);
  const { addToast } = useToast();

  // eslint-disable-next-line @typescript-eslint/ban-types
  const handleSubmit = useCallback(async (data: object) => {
    try {
      formRef.current?.setErrors({});
      const Schema = Yup.object().shape({
        name: Yup.string().required('Nome é obrigatório'),
        email: Yup.string().required('Email é obrigatório').email('Digite um email válido'),
        password: Yup.string().min(6, 'No mínimo 6 digitos')
      });

      await Schema.validate(data, {
        abortEarly: false
      });

      addToast({
        type: 'success',
        title: 'Bem vindo',
        description: 'Cadastro realizado com sucesso!'
      });

    } catch (err) {
      if(err instanceof Yup.ValidationError){
        const erros = getVaidationErrors(err);
        formRef.current?.setErrors(erros);
      }

      addToast({
        type: 'error',
        title: 'Erro no cadastro',
        description: 'Não foi possível criar sua conta. Verifique os campos digitados'
      });
    }
  }, [SignUp]);

  return (
    <Container>

      <Background />

      <Content>
      <AnimatorContainer>
        <img src={Logo} alt="GoBarber" />
        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Faça seu cadastro</h1>
          <Input name="name" icon={FiUser} type="text" placeholder="Nome" />
          <Input name="email" icon={FiMail} type="email" placeholder="Email" />
          <Input name="password" icon={FiLock} type="password" placeholder="Senha" />
          <Button type="submit">Cadastrar</Button>

        </Form>

        <Link to="/">
          <FiArrowLeft />
         Voltar para logon
         </Link>
         </AnimatorContainer>
      </Content>


    </Container>

  );
};

export default SignUp;


