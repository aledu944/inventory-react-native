import { ReactNode, useState, useEffect } from 'react';
import { CartContext } from './CartContext';

import { Cart, FullProduct } from '../../../domain/models';
import { ToastAndroid } from 'react-native';


export const CartProvider = ({ children }: { children: ReactNode }) => {

    const [cart, setCart] = useState<Cart[]>([]);
    const [total, setTotal] = useState<number>(0);


    const showToastWithGravity = (message: string) => {
        ToastAndroid.showWithGravity(
            message,
            ToastAndroid.SHORT,
            ToastAndroid.CENTER,
        );
    };

    const calculateTotal = () => {
        let newTotal = 0;
        cart.forEach(({ product, quantity }) => {
            newTotal += product.price * quantity;
        });

        setTotal(newTotal);

    };


    async function addProductToCart(product: FullProduct, quantity: number = 1) {
        const existingProductIndex = cart.findIndex((item) => item.product.id === product.id);

        if (existingProductIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart[existingProductIndex].quantity += quantity;
            setCart(updatedCart);
        } else {
            setCart((prevCart) => [...prevCart, { quantity, product }]);
            showToastWithGravity('Se agrego el producto al carrito')
        }


    }

    const decreaseQuantity = (productId: string) => {
        const existingProductIndex = cart.findIndex((item) => item.product.id === productId);

        if (existingProductIndex !== -1) {
            const updatedCart = [...cart];
            updatedCart[existingProductIndex].quantity = Math.max(1, updatedCart[existingProductIndex].quantity - 1);
            setCart(updatedCart);
            calculateTotal();
        }
    };

    const removeProductFromCart = (productId: string) => {
        const updatedCart = cart.filter((item) => item.product.id !== productId);
        setCart(updatedCart);
        showToastWithGravity('Se elimino el producto del carrito')

    };

    const resetCart = () => {
        setCart([]);
    }


    useEffect(() => {
        calculateTotal();
    }, [cart])


    return (
        <CartContext.Provider
            value={{
                cart,
                total,
                // METHODS
                resetCart,
                addProductToCart,
                decreaseQuantity,
                removeProductFromCart,
            }}
        >
            {children}
        </CartContext.Provider>
    )
}