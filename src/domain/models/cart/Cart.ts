import { FullProduct } from "../products/FullProduct";

export interface Cart {
    quantity: number;
    product: FullProduct
}