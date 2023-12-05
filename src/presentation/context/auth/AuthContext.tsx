import { createContext } from "react";
import { User } from "../../../domain/models";


interface ContextProps {
    authState: "auth" | "not-auth" | "checking";
    session: { user: User | undefined, token: string | undefined };
    
    closeSession(): Promise<void>
    loginWithEmailAndPassword: (email: string, password: string) => Promise<void>;
    createNewAccount(client: {
        email: string;
        password: string;
        lastname: string;
        name: string;
    }): Promise<void>
}

export const AuthContext = createContext({} as ContextProps);