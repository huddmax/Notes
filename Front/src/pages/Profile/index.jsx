import { useState } from "react";

import { useAuth } from "../../hooks/auth";

import { Container } from "./styles";
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';

import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Form } from './styles';
import { Avatar } from './styles';

export function Profile() {
    const { user, updateProfile } = useAuth();

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [passwordOld, setpasswordOld] = useState();
    const [passwordNew, setpasswordNew] = useState();

    async function handleUpdate(){
        const user = {
            name,
            email,
            password: passwordNew,
            old_password: passwordOld,
        }

        console.log("chamei a handle");


        await updateProfile({ user });
    }

    return (
        <Container>

            <header>
                <a href="/">
                <FiArrowLeft />
                </a>
            </header>

            <Form>
                <Avatar>
                    <img src="https://github.com/huddmax.png" alt="foto do usuário" />

                <label htmlFor="avatar">
                    <FiCamera />
                    
                    <input
                        id="avatar"
                        type="file"
                        
                        />

                </label>
                        </Avatar>

                <Input
                    placeholder="Nome"
                    type="text"
                    icon={FiUser}
                    value={name}
                    onChange={e=>setName(e.target.value)}
                />

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    value={email}
                    onChange={e=>setEmail(e.target.value)}
                />

                <Input
                    placeholder="Senha Atual"
                    type="password"
                    icon={FiLock}
                    onChange={e=>setpasswordOld(e.target.value)}
                />

                <Input
                    placeholder="Nova Senha"
                    type="password"
                    icon={FiLock}
                    onChange={e=>setpasswordNew(e.target.value)}
                />

                <Button
                    title="Salvar"
                    onClick={handleUpdate}
                />

            </Form>

        </Container>
    )

}