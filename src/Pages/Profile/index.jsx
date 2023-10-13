import { Container, Form, Avatar } from './styles';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../hooks/auth';

import { FiArrowLeft, FiMail, FiLock, FiUser, FiCamera } from 'react-icons/fi';

import { api } from '../../services/api.js';

import avatarPlaceholder from '../../assets/avatar_placeholder.svg';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';


export function Profile () {
  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState();
  const [passwordNew, setPasswordNew] = useState();

  const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
  const [avatar, setAvatar] = useState(avatarURL);
  const [avatarFile, setAvatarFile] = useState(null);

  
  async function handleUpdate () {
    const user = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld
    }

    await updateProfile({user, avatarFile});
  }

  async function handleChangeAvatar (event) {
    const file = event.target.files[0];

    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft />
          </Link>
      </header>

    <Form>
      <Avatar>
        <img src={avatar} alt="User's profile picture" />

        <label htmlFor="avatar">
          <FiCamera />
          <input 
          id="avatar"
          type="file" 
          onChange={handleChangeAvatar}/>
        </label>

      </Avatar>
      <Input
        placeholder="Name"
        type="text"
        icon={FiUser}
        value={name}
        onChange={e=>setName(e.target.value)}
      />
      <Input
        placeholder="Email"
        type="text"
        icon={FiMail}
        value={email}
        onChange={e=>setEmail(e.target.value)}
      />
        <Input
          placeholder="Old Password"
          type="password"
          icon={FiLock}
          onChange={e=>setPasswordOld(e.target.value)}
        />
      <Input
        placeholder="New Password"
        type="password"
        icon={FiLock}
        onChange={e=>setPasswordNew(e.target.value)}
      />

      <Button title="Salvar" onClick={handleUpdate}/>

    </Form>





      
    </Container>
  ) 
}