import { Container, Links, Content } from './styles';

import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Section } from '../../components/Section';
import { Tag } from '../../components/Tag';
import { ButtonText } from '../../components/ButtonText';

export function Details () {

  return (
    <Container>
      <Header />

      <main>
        <Content>

      <ButtonText title="Excluir Nota"/>

      <h1> Introdução ao React</h1>
      <p> Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit pariatur quis consequuntur, quo eaque suscipit ipsa quod asperiores quaerat officia voluptatem ad excepturi nesciunt debitis beatae cumque optio cum facilis! Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit pariatur quis consequuntur, quo eaque suscipit ipsa quod asperiores quaerat officia voluptatem ad excepturi nesciunt debitis beatae cumque optio cum facilis!
       Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit pariatur quis consequuntur, quo eaque suscipit ipsa quod asperiores quaerat officia voluptatem ad excepturi nesciunt debitis beatae cumque optio cum facilis!</p>
      <Section title="Links Úteis">
        <Links>
          <li><a href="#">https://www.rocketseat.com.br/</a></li>
          <li><a href="#">https://www.rocketseat.com.br/</a></li>
        </Links>
      </Section>

      <Section title="Marcadores">
        <Tag title="nodejs"/>
        <Tag title="express"/>
      </Section>

      <Button  title="Voltar"/>

                
      </Content>
      </main>

    </Container>
  )
}
