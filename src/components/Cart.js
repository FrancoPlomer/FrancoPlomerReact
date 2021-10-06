import React, { useState } from 'react'
import { useCart } from '../Context/CartContext'
import Button from '@material-ui/core/Button';
export const Cart = () => {
    const {Cart, clear, removeItem, isInCart} = useCart()
    const [Price, setPrice] = useState(0)
    const [Ref, setRef] = useState(false)
    let total = 0;
    const handleClear = () => {
        clear();
        setPrice(0)
        setRef(false)
    }
    const handleRemove = (id) => {
        removeItem(id)
        setPrice(0)
        setRef(false)
    }
    const handleUpdate = (id, quantity, precioBase) => {
        isInCart(id, quantity, precioBase)
    }

    const handleTotalCalculate = () => 
    {
        Cart.map((item) => {
            total += item.price;
            setPrice(total)
            return total;
        });
        setRef(true)
    }

    return (
        <div>
            <div id="quantityProducts">
                <h1>Cantidad de productos en el carrito: {Cart.length}</h1>
            </div>
            <hr/>
            {(Cart.length === 0) ? <h2>No hay productos en el carrito </h2> : 
            <div>
                {Cart.map((Product) =>
                <div>
                    <div key={Product.Item} className="productCart">
                        <div className="productCart__Img">
                            <img src={require(`../Assets/Multimedia/${Product.Item}.jpg`)?.default} alt={Product.Item} className="productCart__Img-src"/>
                        </div>
                        <div>
                            <p>Nombre del producto: {Product.Item}</p>
                            <p>Precio: 💲{Product.price},00ARS</p>
                            <p>Cantidad: {Product.quantity}</p>
                            <Button variant="outlined" color="primary" onClick={() => handleRemove(Product.id)}>
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
                <div className="bodyButton">
                    <Button variant="outlined" color="primary" onClick={handleClear}>
                        Limpiar carrito
                    </Button>
                    <Button variant="outlined" color="secondary" onClick={handleTotalCalculate} >
                        Calcular Total
                    </Button>
                    <Button variant="outlined" color="primary" onClick={handleClear} >
                        Terminar compra
                    </Button>
                </div>
                {Ref && 
                    <div id="TotalPrice">
                        <hr/>
                        <h3>Total: 💲{Price}</h3>
                    </div>
                }
            </div>            
            }
        </div>
    )
}
