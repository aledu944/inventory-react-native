import { createContext } from "react";
import { User } from "../../../domain/models";


interface ContextProps {
    session: { user: User | undefined, token: string | undefined };


    loginWithEmailAndPassword: (email: string, password: string) => Promise<void>
}

export const AuthContext = createContext({} as ContextProps);