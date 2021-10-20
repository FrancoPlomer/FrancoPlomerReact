import { createContext, memo, useContext, useState } from "react";
import "firebase/compat/firestore"


export const CartContext = createContext([])

export const CartProvider = memo(({ children }) =>
{
    const [Cart, setCart] = useState([])
    const [Logged, setLogged] = useState(false)
    const [Buyer, setBuyer] = useState({
        buyer:
        {
            name: "", 
            email: "",
        }
    })

    const [BasePrice, setBasePrice] = useState(0)
    const [User, setUser] = useState("")


    const AddItem = (Item, quantity, price, id, precioBase) => {
        const NewItem = {
            id,
            Item, 
            quantity,
            price,
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

    const AddBuyer = (User, Email) => {
        setBuyer({...Buyer,
        buyer: {
            name: User,
            email: Email,
        }})
        setLogged(true)
    
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

    return <CartContext.Provider value={{Cart, AddItem, removeItem, AddBuyer,  clear, isInCart, setBasePrice, BasePrice, Logged, Buyer, User, setUser, setLogged}}>{ children }</CartContext.Provider>
});

export const useCart = () => 
{
    const context = useContext(CartContext)
    if (!context)
    {
        throw new Error("useCart debe llamarse dentro de un provider")
    }
    return context;
}