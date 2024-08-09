import { Container, Links, Content } from './style.js';

import { Header } from '../../components/Header/index.jsx';

import { Button } from '../../components/Button/index.jsx';

import { ButtonText } from '../../components/ButtonText/index.jsx';

import { Section } from '../../components/Section/index.jsx';

import { Tag } from '../../components/Tag/index.jsx';

export function Details() {
  
  return (
    <Container>

      <Header></Header>

      <main>
        <Content>

        

          <ButtonText title="Excluir Nota"></ButtonText>
          
          <h1>Introdução ao React</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id commodi, obcaecati voluptas, temporibus quaerat laboriosam molestiae a amet quisquam autem modi at perspiciatis quasi, dicta consectetur quos expedita dolorum dolores.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, corporis repudiandae fugit illo quia facilis sapiente, recusandae hic inventore aut rerum culpa nihil temporibus iusto asperiores ex ipsa minima laudantium!
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quos nam dolores! Officia reprehenderit alias enim. Dolor delectus enim quasi laboriosam at corporis eaque fugiat nemo, veritatis iste maxime! Atque?
          </p>

      <Section title="Utils Links">
       
        <Links>
          <li>  <a href="#">https://bitbrother.com.br</a>  </li>
          <li>  <a href="#">https://bitbrother.com.br</a>  </li>
        </Links>
        
      </Section>

      <Section title="Marcadores">

        <Tag title="Express" />
        <Tag title="NodeJS" />

      </Section>

          <Button title='Voltar' />
          
          </Content>
      </main>
      
    </Container>
  )
}
