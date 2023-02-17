import { useContext } from "react";
import CartContext from "../context/books";

function useCartContext() {
    return useContext(CartContext);
}

export default useCartContext;