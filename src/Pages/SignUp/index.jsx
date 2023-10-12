import { Link } from 'react-router-dom';
import { Container, Form, Background } from './styles';

import { FiMail, FiLock, FiUser } from 'react-icons/fi';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

export function SignUp () {


  return (
    <Container>
      
      <Background />
      <Form>
        <h1>RocketNotes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis</p>
        <h2>Cadastre-se</h2>

        <Input
          placeholder="Name"
          type="text"
          icon={FiUser} />
        <Input
          placeholder="Email"
          type="text"
          icon={FiMail} />
        <Input
          placeholder="Password"
          type="password"
          icon={FiLock} />

        <Button title="Entrar"/>

        <Link to="/">Já é cadastrado? Faça o LogIn</Link>
      </Form>

    </Container>
  )
}