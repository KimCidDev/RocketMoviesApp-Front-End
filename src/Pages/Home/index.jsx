import { FiPlus, FiSearch } from 'react-icons/Fi';

import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";
import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input"
import { Note } from "../../components/Note"
import { Section } from "../../components/Section"

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
        <Input placeholder="Pesquisar pelo título" icon={FiSearch} />
      </Search>

      <Content>
        <Section title="Minhas Notas">
        <Note data={{
          title: 'React',
          tags: [
            {id: "1", name: "React"}
          ]
        }}
        />

        </Section>
      </Content>

      <NewNote>
        <FiPlus />
        Criar Nota
      </NewNote>


    </Container>
  )
}