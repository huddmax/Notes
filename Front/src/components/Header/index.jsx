import { RiShutDownLine } from 'react-icons/ri'

import { useAuth } from '../../hooks/auth'

import { Container, Profile, Logout } from './style.js';

export function Header() {
    const { signOut } = useAuth();

    return (

        <Container>
            <Profile>
                <img
                    src="https://github.com/huddmax.png"
                    alt="Foto perfil do github"
                />

                <div>
                    <span>Bem Vindo!</span>
                    <strong>Hudson Machado</strong>
                </div>
            </Profile>

            <Logout onClick={signOut}>
           <RiShutDownLine/>
            </Logout>
        </Container>

    );
}