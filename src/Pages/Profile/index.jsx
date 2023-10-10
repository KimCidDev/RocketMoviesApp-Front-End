import { Container, Form, Avatar } from './styles';

import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

export function Profile () {
  
  
  return (
    <Container>
      <header>
        <a href="/"><FiArrowLeft /></a>
      </header>

    <Form>
      <Input
        placeholder="Name"
        type="text"
        icon={FiUser}
      />
      <Input
        placeholder="Email"
        type="text"
        icon={FiMail}
      />
        <Input
          placeholder="Old Password"
          type="password"
          icon={FiLock}
        />
      <Input
        placeholder="New Password"
        type="password"
        icon={FiLock}
      />

      <Button title="Salvar"/>

    </Form>





      
    </Container>
  ) 
}