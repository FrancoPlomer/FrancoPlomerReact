import React from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useCart } from '../../Context/CartContext';
import { Link } from 'react-router-dom';

export const CardWidget = () => {
    const {Cart} = useCart()
    return (
        <>
            {
                ( Cart.length !== 0)
                ? 
                    <div className="cartItem">
                        <div id="cartItem_Length">
                            <span>{Cart.length}</span>
                        </div>
                        <Link to = "/Cart" id="cartIcon">
                            <ShoppingCartIcon fontSize="large" />                            
                        </Link>
                    </div>
                :
                <strong>No hay productos en el carrito</strong>
            }
        </>
    )
}
