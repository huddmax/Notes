import { FiPlus, FiSearch } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import { api } from '../../../../API/src/services/api.js'

import { Container, Brand, Menu, Search, Content, NewNote } from './styles.js';

import { Header } from '../../components/Header';

import { Input } from '../../components/Input';

import { ButtonText } from '../../components/ButtonText';

import { Section } from '../../components/Section';

import { Note } from '../../components/Note';
import { Link } from 'react-router-dom';

export function Home() {
    const [tags, setTags] = useState([]);
    const [tagsSelected, setTagsSelected] = useState([]);

    function handleTagSelected(tagName) {
        const alreadySelected = tagsSelected.includes(tagName);

        if (alreadySelected) {
            const filteredTags = tagsSelected.filter(tag => tag !== tagName);
            setTagsSelected(filteredTags);
        } 

        else {

            setTagsSelected(prevState => [...prevState, tagName])
        }
    }

    useEffect(() => {
        async function fetchTags() {
            const response = await api.get("/tags");
            setTags(response.data)
        }

        fetchTags()

     }, []);
    return (
        <Container>
            <Brand>
                <h1>Rocketnotes</h1>
            </Brand>

            <Header></Header>

            <Menu>
                <li><ButtonText
                    title="Todos"
                    onClick = {() => handleTagSelected("all")}
                    isactive={tagsSelected.length == 0}
                    />
                </li>

                {
                    tags && tags.map(tag =>(
                        <li
                        key = {String(tag.id)}
                        >
                        <ButtonText
                                title={tag.name}
                                onClick = {() => handleTagSelected(tag.name)}
                                isactive = { tagsSelected.includes(tag.name)}
                        />
                        </li>
                    ))
                }
           
                
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
                <Link to= "/New">
                    <FiPlus />
                    Criar Nota

                </Link>
            </NewNote>

            

        </Container>

    );
}