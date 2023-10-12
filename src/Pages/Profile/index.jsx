import { Container, Form, Avatar } from './styles';
import { Link } from 'react-router-dom'

import { FiArrowLeft, FiMail, FiLock, FiUser, FiCamera } from 'react-icons/fi';

import { Button } from '../../components/Button';
import { Input } from '../../components/Input';

export function Profile () {
  
  
  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft />
          </Link>
      </header>

    <Form>
      <Avatar>
        <img src="http://github.com/kimciddev.png" alt="User's profile picture" />

        <label htmlFor="avatar">
          <FiCamera />
          <input 
          id="avatar"
          type="file" />
        </label>

      </Avatar>
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