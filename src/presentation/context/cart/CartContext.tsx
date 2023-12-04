import { createContext } from 'react'
import { Cart, FullProduct } from '../../../domain/models';

interface ContextProps {
    
    cart: Cart[];

    removeProductFromCart: (productId: string) => void;
    addProductToCart(product: FullProduct): Promise<void>;
}

export const CartContext = createContext( {} as ContextProps );