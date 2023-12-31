// Generated by https://quicktype.io

export interface CustomerPurchases {
    id:           string;
    total:        number;
    type:         string;
    createdAt:    string;
    updatedAt:    string;
    user:         User;
    orderDetails: OrderDetail[];
}

export interface OrderDetail {
    id:        string;
    quantity:  number;
    createdAt: string;
    updatedAt: string;
    product:   Product;
}

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
}

export interface User {
    id:        string;
    name:      string;
    lastname:  string;
    email:     string;
    avatar:    string;
    gender:    string;
    password:  string;
    createdAt: string;
    updatedAt: string;
}
