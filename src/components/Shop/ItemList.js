/* eslint-disable no-unused-vars */
import React from 'react'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';




export const CardList = ({id, name}) => {
    return (
        <>
        
        <Card className="cardFather animate__animated animate__bounceIn">
                    <CardActionArea>
                        <Link to={`/ItemDetailContainer/${id}`} className="linkImgSrc">
                            <CardMedia
                                    className="cardFatherImg"
                                    image={require(`../../Assets/Multimedia/${name}.jpg`)?.default}
                                    title={name}                                 
                            />
                            <Typography gutterBottom variant="h6" component="h3" id="textCardImg">
                                    {name}
                            </Typography>
                        </Link>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2" id="textCardImg_Content">
                                    {name}
                                </Typography>
                            </CardContent>
                    </CardActionArea>
                    <CardActions className="product_Button">
                        <Button 
                        variant="contained" color="secondary" id="buyButton">
                            <Link to={`/ItemDetailContainer/${id}`} id="linkDetail">
                                Ver detalle
                            </Link>
                        </Button>
                    </CardActions>
        </Card>
        </>
    )
}
