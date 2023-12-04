import { ReactNode, useState } from 'react';
import { CartContext } from './CartContext';

import { Cart, FullProduct } from '../../../domain/models';


export const CartProvider = ({ children }: { children: ReactNode }) => {

    const [cart, setCart] = useState<Cart[]>([]);



    async function addProductToCart(product: FullProduct, quantity: number = 1) {
        const existingProductIndex = cart.findIndex((item) => item.product.id === product.id);

        if (existingProductIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart[existingProductIndex].quantity += quantity;
            setCart(updatedCart);
        } else {
            setCart((prevCart) => [...prevCart, { quantity, product }]);
        }
    }

    const removeProductFromCart = (productId: string) => {
        const updatedCart = cart.filter((item) => item.product.id !== productId);
        setCart(updatedCart);
      };


    return (
        <CartContext.Provider
            value={{
                cart,

                // METHODS
                addProductToCart,
                removeProductFromCart
            }}
        >
            {children}
        </CartContext.Provider>
    )
}