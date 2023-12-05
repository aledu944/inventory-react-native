import { ReactNode, useEffect, useState } from "react"
import AsyncStorage from '@react-native-async-storage/async-storage';

import { AuthContext } from "./AuthContext"
import authRepository from "../../../domain";
import { User } from "../../../domain/models";
import { axiosError } from "../../../helpers";



export const AuthProvider = ({ children }: { children: ReactNode }) => {
    
    const [isLoading, setIsLoading] = useState(false);
    const [authState, setAuthState] = useState<'auth' | 'not-auth' |  'checking'>('checking');

    const [session, setSession] = useState<{ user: User | undefined, token: string | undefined }>({
        user: undefined,
        token: undefined,
    })




    async function loginWithEmailAndPassword(email:string, password:string) {
        setIsLoading(true)
        try {
            const data = await authRepository.login(email, password);
            await AsyncStorage.setItem('AUTH_TOKEN', data.token);
            setSession({ user: data.user, token: data.token });
            setAuthState('auth');
            setIsLoading(false)

        } catch (error) {
            setAuthState('not-auth');
            axiosError(error);
        }
        setIsLoading(false)

    }


    async function createNewAccount(client:{ email: string, password: string, lastname: string, name: string}) {
        setIsLoading(true)

        try {
            const data = await authRepository.newAccount(client)
            await AsyncStorage.setItem('AUTH_TOKEN', data.token);
            setSession({ user: data.user, token: data.token });
            setAuthState('auth');
        } catch (error) {
            setAuthState('not-auth');
            axiosError(error);
            setIsLoading(false)

        }
        setIsLoading(false)

    }

    async function closeSession() {
        await AsyncStorage.removeItem('AUTH_TOKEN');
        setAuthState('not-auth');
        checkAuth();
        
    }


    async function checkAuth() {
        const token = await AsyncStorage.getItem('AUTH_TOKEN');

        if( !token ){
            setAuthState('not-auth');
            return;
        }
        try {
            const data = await authRepository.checkAuth(token);
            await AsyncStorage.setItem('AUTH_TOKEN', data.token);
            setSession({ user: data.user, token: data.token });
            setAuthState('auth');
            
        } catch (error) {
            axiosError(error);
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
                authState,
                // METHODS
                closeSession,
                loginWithEmailAndPassword,
                createNewAccount
            }}
        
        >
            { children }
        </AuthContext.Provider>
    )

}