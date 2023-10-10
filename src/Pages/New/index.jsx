import { Container, Form } from './styles';

import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';
import { Button } from '../../components/Button';

export function New () {
  return (
    <Container>
      <Header />


      <main>
        <Form>
          <header>
            <h1>Create New Note</h1>
            <a href="/"> Voltar</a>
          </header>

          <Input 
          placeholder="Título"
          />
          <Textarea placeholder="Observações" />

          <Section title="links úteis">
            <NoteItem value="https://google.com.br"/>
            <NoteItem isNew placeholder="Novo Link"/>
          </Section>


          <Section title="Marcadores">
            <div className="tags">
            <NoteItem value="https://google.com.br"/>
            <NoteItem isNew placeholder="Nova Tag"/>
            </div>
          </Section>

          <Button title="Salvar"/>
        </Form>
      </main>
    </Container>

  )
}