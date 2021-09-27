/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import img1 from "../Assets/Multimedia/Kawaii Anime Hoodie.jpg"
import img2 from "../Assets/Multimedia/Hooded Winter Long Sleeve Chinese style Embroidery Hoodie.jpg"
import img3 from "../Assets/Multimedia/Harajuku Bear Anime Hoodie.jpg"
import img4 from "../Assets/Multimedia/Sleeping Kitty Embroidery Hoodie.jpg"
import img5 from "../Assets/Multimedia/Shiba Inu Print Kawaii Velvet Long-sleeved Hooded Plush Coat.jpg"
import img6 from "../Assets/Multimedia/Beading Star Jacket.jpg"
import img7 from "../Assets/Multimedia/Outwear Graffiti Jacket.jpg"
import img8 from "../Assets/Multimedia/Rock Star Jacket.jpg"
import img9 from "../Assets/Multimedia/Short Sleeves.jpg"
import img10 from "../Assets/Multimedia/Purple Long Sleeve loose O-neck T-shirt.jpg"
import img11 from "../Assets/Multimedia/Button Up Blouse Shirt.jpg"
import img12 from "../Assets/Multimedia/Harajuku Long Sleeve Embroidery Stripe T-Shirt.jpg"
import img13 from "../Assets/Multimedia/Purge Boots.jpg"
import img14 from "../Assets/Multimedia/Lace-up High Heel Boots.jpg"
import img15 from "../Assets/Multimedia/Martin Boots.jpg"
import img16 from "../Assets/Multimedia/Leather Knee High Boots.jpg"
import img17 from "../Assets/Multimedia/Studded Strap Lace Up Platform Boots.jpg"
import img18 from "../Assets/Multimedia/Punk Ripped Leggings.jpg"
import img19 from "../Assets/Multimedia/Warm Fuzzy Thigh High Socks.jpg"
import img20 from "../Assets/Multimedia/Graffiti Leggings.jpg"
import img21 from "../Assets/Multimedia/Design Fashion Camera Mini Purse.jpg"
import img22 from "../Assets/Multimedia/Sweatshirt Slim Dress.jpg"
import img23 from "../Assets/Multimedia/Puff Sleeve Eileen Dress.jpg"
import img24 from "../Assets/Multimedia/Fase Lunar Aesthetic HODDIE Blackwithe - Japan Goth Moon.PNG"
import img25 from "../Assets/Multimedia/Black And Blue High Waist Jeans.jpg"
import img26 from "../Assets/Multimedia/LINKED UP CARGO JOGGERS.jpg"
import img27 from "../Assets/Multimedia/Checkerboard Stylish Pants.jpg"
import img28 from "../Assets/Multimedia/Dragon Style Loose Joggers.jpg"
import img29 from "../Assets/Multimedia/HODDIE SASUKE EYES.jpg"
import img30 from "../Assets/Multimedia/T-SHORTS GOKU TRAINING.jpg"
import img31 from "../Assets/Multimedia/POKEMON BABE.jpg"
import img32 from "../Assets/Multimedia/MIKASA_2077.jpg"


const useStyles = makeStyles({
    media: {
    height: 370,
    width: 370,
    marginTop: 2,
    },
});
export const CardList = ({id, name, tipo ,source}) => {
    const classes = useStyles();
    return (
        <>
        
        <Card className="cardFather animate__animated animate__bounceIn">
                    <CardActionArea>
                    <Link to={`/ItemDetailContainer/${id}`}>
                    <CardMedia
                            className={classes.media}
                            image={source}
                            title={name} />
                    </Link>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {name}
                            </Typography>
                        </CardContent>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {tipo}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions className="product_Button">
                        <Button variant="contained" color="secondary" id="buyButton"><Link to={`/ItemDetailContainer/${id}`} id="linkDetail">Ver detalle</Link></Button>
                    </CardActions>

        </Card>
        </>
    )
}
