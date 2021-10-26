import React, { useEffect, useState } from 'react';
import {PromiseHookCategory} from "../../Hooks/PromiseHook"
import { Load } from '../../Helpers/Loading';
import "animate.css";
import { CardList } from './ItemList';
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { Link} from 'react-router-dom';
import { Carrousel } from '../Carrousel/Carrousel';
import { Inicio } from '../Inicio/Inicio';

export default function Products() {
    const [Tipo, setTipo] = useState('');
    const handleChange = (event) => {
        setTipo(event.target.value);
    };
    useEffect(() => {
    }, [Tipo])
    const {Items, Loading} = PromiseHookCategory(Tipo)
    return (
    <>
        <Carrousel />
        <Inicio />
        <div>
            <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth className="formCategory">
                <InputLabel id="demo-simple-select-label">Categorias</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={Tipo}
                label="Categorias"
                className="selectCategory"
                onChange={handleChange}
                >
                    <MenuItem value={""} ><Link to="?categoria=" className="itemMenu">General</Link></MenuItem>
                    <MenuItem value={"Baño"} ><Link to="?categoria=Baño" className="itemMenu">Baño</Link></MenuItem>
                    <MenuItem value={"Cocina"}><Link to="?categoria=Cocina" className="itemMenu">Cocina</Link></MenuItem>
                    <MenuItem value={"Deco"} ><Link to="?categoria=Deco" className="itemMenu">Deco</Link></MenuItem>
                    <MenuItem value={"Telas"} ><Link to="?categoria=Telas" className="itemMenu">Telas</Link></MenuItem>
                    <MenuItem value={"Hoteleria"} ><Link to="?categoria=Hoteleria" className="itemMenu">Hoteleria</Link></MenuItem>
                    <MenuItem value={"Cama"} ><Link to="?categoria=Cama" className="itemMenu">Cama</Link></MenuItem>
                </Select>
            </FormControl>
            </Box>
        </div>
        <div className="container_Products">
            
                {
                    Loading ? Items?.map(
                        (product) =>
                        
                        {
                            return <CardList key={product.id} id={product.id} name={product.nombre}/>
                        }
                        )
                    : <Load />
                }
        </div>
    </>
);
}