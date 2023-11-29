import { ReactNode, useEffect, useState } from "react"
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AuthContext } from "./AuthContext"
import authRepository from "../../../domain";
import { User } from "../../../domain/models";
import { axiosError } from "../../../helpers";



export const AuthProvider = ({ children }: { children: ReactNode }) => {
    
    const [authState, setAuthState] = useState<'auth' | 'not-auth' |  'checking'>('checking');

    const [session, setSession] = useState<{ user: User | undefined, token: string | undefined }>({
        user: undefined,
        token: undefined,
    })




    async function loginWithEmailAndPassword(email:string, password:string) {
        try {
            const data = await authRepository.login(email, password);
            await AsyncStorage.setItem('AUTH_TOKEN', data.token);
            setSession({ user: data.user, token: data.token });
            setAuthState('auth');

        } catch (error) {
            setAuthState('not-auth');
            axiosError(error);
        }
        
    }


    async function checkAuth() {
        const token = await AsyncStorage.getItem('AUTH_TOKEN');
        console.log(token);

        if( !token ){
            setAuthState('not-auth');
            return;
        }
    }

    useEffect(() => {
        checkAuth();
    }, [])
    

    return (
        <AuthContext.Provider
            value={{
                session,
                // METHODS
                loginWithEmailAndPassword
            }}
        
        >
            { children }
        </AuthContext.Provider>
    )

}