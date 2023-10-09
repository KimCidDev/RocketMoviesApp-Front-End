import { FiPlus } from 'react-icons/fi';

import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";

export function Home () {
  return (
    <Container>
      <Brand>
        <h1>RocketNotes</h1>
      </Brand>

      <Header></Header>

      <Menu>
       <li><ButtonText title="Xis Salada" $isactive/></li> 
       <li><ButtonText title="Xis Ovo"/></li> 
       <li><ButtonText title="Xis Catupiry"/></li>
       </Menu>


      <Search>

      </Search>

      <Content>

      </Content>

      <NewNote>
        <FiPlus />
        Criar Nota
      </NewNote>


    </Container>
  )
}