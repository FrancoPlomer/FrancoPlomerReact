import React, { useState } from 'react'
import { useCart } from '../Context/CartContext'
import Button from '@material-ui/core/Button';
import swal from 'sweetalert';
import "firebase/compat/firestore"
import { getFirestore } from '../Firebase';

export const Cart = () => {
    const {Cart, clear, removeItem, isInCart, AddBuy, Logged, Buy} = useCart()
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

    
    const handleFinish = () => {
        const total = handleTotalCalculate();
        swal({
            title: "Estas seguro que deseas terminar tu compra?",
            text: "Una vez terminada se cargara segun tu informacion de cliente",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willFinish) => {
            if (willFinish) {
              if(Logged){
                  setHiddeButton(true);
                  AddBuy( Cart , total );
                  const db = getFirestore();
                  const ordersCollection = db.collection("orders");
                  ordersCollection
                      .add(Buy)
                      .then ((docRef) => console.log("Se agrego con exito a la colecion", docRef.id))
                      .catch((err) => console.log(err))
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
          });
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
                        <Button variant="outlined" color="primary" onClick={handleClear}>
                            Limpiar carrito
                        </Button>
                        <Button variant="outlined" color="secondary" onClick={handleTotalCalculate} >
                            Calcular Total
                        </Button>
                        <Button variant="outlined" color="primary" onClick={handleFinish} >
                            Terminar compra
                        </Button>
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
