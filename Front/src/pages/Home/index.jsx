import { FiPlus, FiSearch } from 'react-icons/fi';

import { Container, Brand, Menu, Search, Content, NewNote } from './styles.js';

import { Header } from '../../components/Header';

import { Input } from '../../components/Input';

import { ButtonText } from '../../components/ButtonText';

import { Section } from '../../components/Section';

import { Note } from '../../components/Note';

export function Home() {
    return (
        <Container>
            <Brand>
                <h1>Rocketnotes</h1>
            </Brand>

            <Header></Header>

            <Menu>

                <li><ButtonText title= "Todos" isactive /></li>
                <li><ButtonText title= "React" /></li>
                <li><ButtonText title= "Node.JS" /></li>
                
            </Menu>

            <Search>
                
                <Input placeholder="Pesquisar pelo título" icon={FiSearch} />
            </Search>

            <Content>

                <Section title="Minhas Notas">

                    <Note data={{
                        title: 'React',
                        tags: [
                            {id: '1', name: 'React' },
                            {id: '2', name: 'RocketSeat'}
                        ]
                    }} />

                    {/* <Note data= {{title:"react"}} /> */}

                </Section>

            </Content>

            <NewNote>
                <FiPlus />
                Criar Nota

            </NewNote>

            

        </Container>

    );
}