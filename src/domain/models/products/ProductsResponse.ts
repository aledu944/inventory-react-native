// Generated by https://quicktype.io

import { Category } from "../categories/Category";

export interface Product {
    id:          string;
    name:        string;
    slug:        string;
    image:       string;
    description: string;
    stock:       string;
    price:       number;
    status:      boolean;
    createdAt:   string;
    updatedAt:   string;
    brand:       Brand;
    category:    Category;
    provider:    Provider;
}

interface Brand {
    id:        string;
    name:      string;
    slug:      string;
    createdAt: string;
    updatedAt: string;
}


interface Provider {
    id:        string;
    name:      string;
    direction: string;
    email:     null | string;
    phone:     null | string;
    status:    boolean;
    createdAt: string;
    updatedAt: string;
}
