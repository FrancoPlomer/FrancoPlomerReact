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
        <div>
            <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
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
                    <MenuItem value={"buzo"} ><Link to="?categoria=buzo" className="itemMenu">buzo</Link></MenuItem>
                    <MenuItem value={"camperas"}><Link to="?categoria=camperas" className="itemMenu">camperas</Link></MenuItem>
                    <MenuItem value={"pantalones"} ><Link to="?categoria=pantalones" className="itemMenu">pantalones</Link></MenuItem>
                    <MenuItem value={"remeras"} ><Link to="?categoria=remeras" className="itemMenu">remeras</Link></MenuItem>
                    <MenuItem value={"zapatos"} ><Link to="?categoria=zapatos" className="itemMenu">zapatos</Link></MenuItem>
                    <MenuItem value={"accesorios"} ><Link to="?categoria=accesorios" className="itemMenu">accesorios</Link></MenuItem>
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