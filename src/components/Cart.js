import React, { useState } from 'react'
import { useCart } from '../Context/CartContext'
import Button from '@material-ui/core/Button';
import swal from 'sweetalert';
import "firebase/compat/firestore"
import { PromiseHookOrder } from '../Hooks/PromiseHook';

export const Cart = () => {
    const {Cart, clear, removeItem, isInCart, Logged, Buyer} = useCart()
    const [Price, setPrice] = useState(0)
    const [Ref, setRef] = useState(false)   
    const [hiddeButton, setHiddeButton] = useState(false)
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
        return total;
    }

    
    const handleFinish = (e) => {
        e.preventDefault();
        const finishtotal = handleTotalCalculate();
        swal({
            title: "Estas seguro que deseas terminar tu compra?",
            text: "Una vez terminada se cargara segun tu informacion de cliente",
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
        .then(async (willFinish) => {
            if (willFinish) {
                if(Logged){
                    setHiddeButton(true);
                    PromiseHookOrder(Buyer.buyer.name, Buyer.buyer.email, Cart, finishtotal)
                    handleClear();
                    swal("Tu compra fue confirmada", {
                        icon: "success",
                    });
                } else {
                swal("Debes completar tus datos de comprador primero", {
                    icon: "warning",
                });
            }
            } else {
                swal("Puedes continuar comprando");
            }
        })
    }

    return (
        <div className="cartContent">
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
                            {!hiddeButton 
                            &&
                            <div>
                                <Button variant="outlined" color="primary" onClick={() => handleRemove(Product.id)}>
                                    Remover producto
                                </Button>
                                <Button variant="outlined" color="success" onClick={() => handleUpdate(Product.id, Product.quantity, Product.precioBase)}>
                                    +1
                                </Button>    
                            </div>
                            }
                        </div> 
                    </div>
                    <hr />
                </div>
                )}
                {hiddeButton ? 
                    <h2>Tu compra fue confirmada</h2>
                :
                    <div className="bodyButton">
                        <form onSubmit={handleFinish}>
                            <Button variant="outlined" color="primary" onClick={handleClear}>
                                Limpiar carrito
                            </Button>
                            <Button variant="outlined" color="secondary" onClick={handleTotalCalculate} >
                                Calcular Total
                            </Button>
                            <Button type="submit" variant="outlined" color="primary">
                                Terminar compra
                            </Button>
                        </form>
                    </div>
                }
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
