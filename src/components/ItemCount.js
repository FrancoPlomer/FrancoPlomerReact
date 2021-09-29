import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import { useCart } from '../Context/CartContext';

export const ItemCount = ( {Precio, stateCount, setStateCount, name, source, id} ) => {
    const [Price, setPrice] = useState(Precio)
    const [Ref, setRef] = useState(true)
    const {AddItem, setBasePrice, BasePrice} = useCart();
    setBasePrice(Precio)
    const HandleIncrement = () => 
    {
        setStateCount ((initialValue) => initialValue + 1)
        setPrice(Precio * (stateCount + 1) )
    }
    const HandleDecrement = () => 
    {
        setStateCount ((initialValue) => 
        (initialValue > 0 ) ? (initialValue - 1) : 0)
        setPrice( (stateCount - 1 > 0) ? Precio * (stateCount - 1) : Precio )
    }
    const HandleReset = () => 
    {
        setStateCount ((initialValue) => initialValue = 1)
        setPrice (Precio)
    }
    const onAdd = () =>
    {
        setRef (!Ref)
        AddItem(name, stateCount, Price, source, id, BasePrice)
    }

    return (
        <>
        {(Ref) ?                  
        <div className="ContainerCount">
            <strong id="ContainerCount_HEAD--countValue--Detail">
                💲{`${Price}`},00ARS
            </strong>
            <div className="ContainerCount_HEAD">
                <Button variant="contained" color="secondary" onClick = {HandleDecrement}>
                    -
                </Button>
                <strong id="ContainerCount_HEAD--countValue">
                    {stateCount}
                </strong>
                <Button variant="contained" color="secondary" onClick = {HandleIncrement}>
                    +
                </Button>
                </div>
            <div className="ContainerCount_Reset">
                <Button variant="contained" color="secondary"  onClick = {HandleReset}>
                    Reset
                </Button>
            </div>
            <div className="ContainerCount_Reset">
                <Button variant="contained" color="secondary" id="buyButton" onClick = {onAdd}>Agregar</Button>
            </div>
        </div> 
        : 
        <div className="ContainerCount-Confirm">
            <strong id="ContainerCount_HEAD--countValueConfirm">
                x{stateCount}
            </strong>
            <strong id="ContainerCount_HEAD--countValue--Detail">
                💲{`${Price}`},00ARS
            </strong>
            <div className="ContainerCount_Reset">
                <Button variant="contained" color="secondary" id="buyButton">
                    <Link to = "/Cart" className="itemMenu">Comprar</Link>
                </Button>
            </div>
        </div>
        }
        </>
    );
}
