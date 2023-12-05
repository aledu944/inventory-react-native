import { useContext } from "react";
import { OrdersContext } from "../context/orders/OrdersContext";

export const useOrders = () => useContext(OrdersContext);