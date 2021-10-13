import { useEffect, useState } from 'react';
import { getFirestore } from '../Firebase';

export const PromiseHookCategory = (categoria) => {
    const [Loading, setLoading] = useState(false);    
    const [Items, setItems] = useState([])
    useEffect(() => {
        getProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categoria, Loading])
    const getProducts = async() => 
    {
        const db = getFirestore();
        if (categoria === ""){
            const productsCollection = db.collection("products");
            productsCollection
                .get()
                .then((querySnapshot) => {
                    if(querySnapshot.empty){
                        console.log("No hay productos")
                    } else {
                        setItems(querySnapshot.docs.map((doc) => ( {id:doc.id,...doc.data() })));
                    }
                })
                .catch((err) => {throw err})
                .finally(() => setLoading(true))            
        }
        else{
            const productsCollection = db.collection("products").where("tipo", "==", categoria);
            productsCollection
            .get()
            .then((querySnapshot) => {
                if(querySnapshot.empty){
                    console.log("No hay productos")
                } else {
                    setItems(querySnapshot.docs.map((doc) => ( {id:doc.id,...doc.data() })));
                }
            })
            .catch((err) => {throw err})
            .finally(() => setLoading(true))    
        }
    }
    return({Items, Loading})
}

export const PromiseHookId = (id) => {
    const [Loading, setLoading] = useState(false);    
    const [Items, setItems] = useState([])

    const db = getFirestore();
    useEffect(() => {
        getProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id, Loading])
    const getProducts = async() => 
    {
        const productsCollection = db.collection("products").where("id", "==", id);
        productsCollection
        .get()
        .then((querySnapshot) => {
            if(querySnapshot.empty){
                console.log("No hay productos")
            } else {
                setItems(querySnapshot.docs.map((doc) => ( {id:doc.id,...doc.data() })));
            }
        })
        .catch((err) => {throw err})
        .finally(() => setLoading(true))  
    }
    return({Items, Loading})
}

export const PromiseHookOrder = (name, phone, email, Cart) => {
    const db = getFirestore();
    console.log(name, phone, email, Cart)
    const ordersCollection = db.collection("orders");
    ordersCollection
        .add({
            buyer: {
                name, 
                phone,
                email,
            },
            items: Cart,
            total: 2000
        })
        .then((docRef) => console.log(docRef.id))
        .catch((err) => {throw err})
}
