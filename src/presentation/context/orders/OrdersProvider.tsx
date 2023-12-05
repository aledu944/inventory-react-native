import { useState } from "react";
import { createOrder } from "../../../domain/repositories/orderRepository";
import { useCart } from "../../hooks"
import { OrdersContext } from "./OrdersContext"
import { ToastAndroid } from "react-native";



export const OrdersProvider = ({ children }) => {

    const { cart, resetCart } = useCart();

    const [isLoading, setIsLoading] = useState(false);
        
    const createNewOrder = async (orderDetails: { total: number, clientId: string }) => {

        setIsLoading(true);
        const items = cart.map(item => {
            return {
                productId: item.product.id,
                quantity: item.quantity,
            }
        })


        const order = {
            ...orderDetails,
            type: 'delivery',
            userId: null,
            items: [...items]
        }
        try {
            const response = await createOrder(order);
            ToastAndroid.show(response, ToastAndroid.SHORT );
            
        } catch (error) {
            console.log(error);
            ToastAndroid.show(error.message, ToastAndroid.SHORT );
        }

        

        setIsLoading(false)
        resetCart();
    }


    return (
        <OrdersContext.Provider
            value={{
                isLoading,
                createNewOrder
            }}
        >
            { children }
        </OrdersContext.Provider>
    )
}