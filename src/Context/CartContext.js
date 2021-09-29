import { createContext, useContext, useState } from "react";


export const CartContext = createContext([])

export const CartProvider = ({ children }) =>
{
    const [Cart, setCart] = useState([])
    const [BasePrice, setBasePrice] = useState(0)
    const AddItem = (Item, quantity, price, source, id, precioBase) => {
        const NewItem = {
            id,
            Item, 
            quantity,
            price,
            source,
            precioBase,
        }
        const referencia = Cart.find((product) => product.id === NewItem.id);
        if(referencia === undefined){
            setCart([...Cart, NewItem])
        }
        else{
            alert("Ya existe este producto en el carrito")
        }
    }
    const removeItem = (id) => 
    {
        const newCart = Cart.filter((product) => product.id !== id);
        setCart(newCart)
    }
    const clear = () => 
    {
        setCart([])
    }
    const isInCart = (id,quantity, precioBase) =>
    {
        const newCart = Cart.map((producto) => {
            if (producto.id === id)
            {
                setBasePrice(producto.price)
                return {
                    ...producto,
                    quantity: quantity + 1,
                    price: precioBase * (quantity + 1),
                }
            }
            return producto;
        })

        setCart(newCart)
    }

    return <CartContext.Provider value={{Cart, AddItem, removeItem, clear, isInCart, setBasePrice, BasePrice}}>{ children }</CartContext.Provider>
};

export const useCart = () => 
{
    const context = useContext(CartContext)
    if (!context)
    {
        throw new Error("useCart debe llamarse dentro de un provider")
    }
    return context;
}