import { RiShutDownLine } from 'react-icons/ri';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

// import

import { useAuth } from '../../hooks/auth';
import { api } from '../../../../API/src/services/api.js';


import { Container, Profile, Logout } from './style.js';
import { Link } from 'react-router-dom';

export function Header() {
    const { signOut, user } = useAuth();

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    return (

        <Container>
                {/* <Link to = "/Profile"> */}
            <Profile>
                <img
                    src={ avatarUrl }
                    alt={ user.name }
                    />

                <div>
                    <span>Bem Vindo!</span>
                    <strong> { user.name } </strong>
                </div>
            </Profile>
                    {/* </Link> */}

            <Logout onClick={signOut}>
           <RiShutDownLine/>
            </Logout>
        </Container>

    );
}