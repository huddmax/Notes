import { createContext, useContext, useEffect, useState } from "react";

import { api } from '../../../API/src/services/api';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [data, setData] = useState({});

    async function signIn({ email, password }) {

        try {
            
            const response = await api.post("/sessions", { email, password });
            const { user, token } = response.data;

            localStorage.setItem("@rocketnotes:user", JSON.stringify(user));
            localStorage.setItem("@rocketnotes:token", JSON.stringify(token));

            // api.defaults.headers.authorization = `Bearer ${token}`;
            api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

            setData({ user, token })
            
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possivel entrar.")
            }

        }
    }

    function signOut() {
        localStorage.removeItem("@rocketnotes:token");
        localStorage.removeItem("@rocketnotes:user");
        
        setData({});
    }

    async function updateProfile({ user, avatarFile }) {
    // async function updateProfile({ user }) {
        console.log("vai rolar o try??")

        try {
            await api.put("/users", user);
            localStorage.setItem("@rocketnotes:user", JSON.stringify(user));

            console.log("tentando mudar o usuario: " + user + "\n user com {}: " + {user} )
            console.log("token: " + { token: data.token })

            setData({ user, token: data.token });
            alert("perfil atualizado!");
        }
        catch (error) {
            if (error.response) {
                alert(error.response.data.message);
                
            }
            else {
                alert("Não foi possivel atualizar o perfil.")
            }
        }
    }
        


        useEffect(() => {
            const token = localStorage.getItem("@rocketnotes:token");
            const user = localStorage.getItem("@rocketnotes:user");

            if (token && user) {
                // api.defaults.headers.authorization = `Bearer ${token}`;
                api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
            
                setData({
                    token,
                    user: JSON.parse(user)
                })
            }


        }, [])

        return (
            <AuthContext.Provider value={{ signIn, user: data.user, signOut, updateProfile, }}>

                {children}
            </AuthContext.Provider>
        )
    }



function useAuth() {
    const context = useContext(AuthContext);

    return context
}

export { AuthProvider, useAuth };