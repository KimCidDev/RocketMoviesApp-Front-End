import { Container, Form } from './styles';

import { FiMail, FiLock } from 'react-icons/Fi'

import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';
import { Input } from '../../components/Input';

export function SignIn () {


  return (
    <Container>
      <Form>
        <h1>RocketNotes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis</p>
        <h2>Faça seu login</h2>

        <Input
          placeholder="Email"
          type="text"
          icon={FiMail} />
        <Input
          placeholder="Password"
          type="password"
          icon={FiLock} />

        <Button title="Entrar" label="form"/>

        <a href="#">Criar Conta</a>
      </Form>

    </Container>
  )
}