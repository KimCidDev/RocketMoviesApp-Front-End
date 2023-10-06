import { Container } from './styles';

import { Button } from '../../components/Button';

export function Details () {

  return (
    <Container>
      <h1>Something important</h1>
      <span>something else</span>


      <Button  title="login" loading/>
      <Button title="logout" />
      <Button  title="signup"/>
    </Container>
  )
}
