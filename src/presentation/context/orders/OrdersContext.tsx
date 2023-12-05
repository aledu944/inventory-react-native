import { createContext } from "react";

interface ContextProps {
    isLoading: boolean;
    createNewOrder: (orderDetails: { total: number; clientId: string }) => void
}


export const OrdersContext = createContext({} as ContextProps);