import React from 'react'
import { useCart } from '../Context/CartContext'
import Button from '@material-ui/core/Button';
export const Cart = () => {
    const {Cart, clear, removeItem, isInCart} = useCart()
    const handleClear = () => {
        clear();
    }
    const handleRemove = (id) => {
        removeItem(id)
    }
    const handleUpdate = (id, quantity, precioBase) => {
        isInCart(id, quantity, precioBase)
    }
    return (
        <div>
            <h1>Cantidad de productos en el carrito: {Cart.length}</h1>
            <hr/>
            {Cart.map((Product) =>
            <div>
                <div key={Product.Item} className="productCart">
                    <div className="productCart__Img">
                        <img src={Product.source} alt={Product.Item} className="productCart__Img-src"/>
                    </div>
                    <div>
                        <p>Nombre del producto: {Product.Item}</p>
                        <p>Precio: 💲{Product.price},00ARS</p>
                        <p>Cantidad: {Product.quantity}</p>
                        <Button variant="outlined" color="secondary" onClick={() => handleRemove(Product.id)}>
                            Remover producto
                        </Button>
                        <Button variant="outlined" color="success" onClick={() => handleUpdate(Product.id, Product.quantity, Product.precioBase)}>
                            +1
                        </Button>    
                    </div> 
                </div>
                <hr />
            </div>
            )}
            <Button variant="outlined" color="secondary" onClick={handleClear}>
                Limpiar carrito
            </Button>
        </div>
    )
}
