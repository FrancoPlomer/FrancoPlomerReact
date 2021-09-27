import React from 'react'
import { useParams } from 'react-router'
import { PromiseHookId } from '../Hooks/PromiseHook';
import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { ItemCount } from './ItemCount';

const useStyles = makeStyles({
    media: {
    height: 370,
    width: 370,
    margin:"0 auto"
    },
});
export const ItemDetailContainer = () => {
    const [Count, setCount] = useState(1);
    const classes = useStyles();
    const {id} = useParams();
    const {Items} = PromiseHookId (id);

    return (
        <>
        {
            Items.map((item) => (
                        <Card className="cardFatherDetail animate__animated animate__bounceIn">
                        <div className="cardFatherDetail__Container">
                            <CardActionArea>
                            <CardMedia
                                    className={classes.media}
                                    image={item.source}
                                    title={item.nombre} />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {item.nombre}
                                    </Typography>
                                </CardContent>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {item.tipo}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <ItemCount Precio={item.precio} stateCount={Count} setStateCount={setCount}/>
                            </CardActions>                            
                        </div>
                        <div className="cardFatherDetail__Description">
                            <Typography gutterBottom variant="h5" component="h2">
                                {item.descripcion}
                            </Typography>
                        </div>
            </Card>
            ))
        }

        </>
    )
}
