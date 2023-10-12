import { RiShutDownLine } from 'react-icons/ri'
import { Container, Profile, Logout } from './styles';

export function Header () {

  return (
  <Container >
    <Profile to="/profile">
      <img src="http://github.com/kimciddev.png" alt="User's profile image" />

      <div>
        <span>
          Bem-Vindo
        </span>
        <strong>
          Kim Cid Teixeira
        </strong>
      </div>
    </Profile>

       <Logout>
        <RiShutDownLine />
      </Logout>

  </ Container>
  )
}