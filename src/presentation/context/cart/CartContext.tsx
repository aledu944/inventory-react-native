import { createContext } from 'react'
import { Cart, FullProduct } from '../../../domain/models';

interface ContextProps {
    
    cart: Cart[];
    total: number;

    decreaseQuantity: (productId: string) => void;
    removeProductFromCart: (productId: string) => void;
    addProductToCart(product: FullProduct): Promise<void>;
}

export const CartContext = createContext( {} as ContextProps );