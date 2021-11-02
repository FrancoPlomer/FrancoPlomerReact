import { useEffect, useState } from 'react';
import { getFirestore } from '../Firebase';
import { getAuth, createUserWithEmailAndPassword, updateProfile,signInWithEmailAndPassword ,signInWithPopup, GoogleAuthProvider,  signOut  } from "firebase/auth";
import "firebase/compat/auth"
import swal from 'sweetalert';


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

export const PromiseHookOrder = (name, email, Cart, total) => {
    const db = getFirestore();
    const ordersCollection = db.collection("orders");
    ordersCollection
        .add({
            buyer: {
                name, 
                email,
            },
            items: Cart,
            total: total
        })
        .then((docRef) =>{
            swal(`Tu compra id:#${docRef.id} fue confirmada`, {
                icon: "success",
            });
        })
        .catch((err) => {throw err})
}

export const Login = async (email, password) => 
{
    const auth =  getAuth();
    await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            swal("Su cuenta fue creada con exito", `` , "success");
        })
        .catch((err) => {
            swal("", `${err.message}`, "warning");
        })
}


export const signUp = async (email, password, setUser) => 
{
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
            const user = userCredential.user;
            setUser(user.displayName)
            swal("Bienvenido", `${user.displayName}` , "success");
            return user.displayName;
        })
        .catch((error) => {
            swal("", `${error.message}`, "warning");
        });
}

export const updateUserName = async (userName, setUser) => 
{
    const auth = getAuth();
    updateProfile(auth.currentUser, {
        displayName: userName,
    }).then(() => 
    {
        setUser(auth.currentUser.displayName)
    }).catch((err) => 
    {
        console.log(err.message)
    })
}


export const signUpWhitGoogle = async (setUser, setEmail) => 
{
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
    .then((result) => {
        const user = result.user;
        setUser(user.displayName);
        setEmail(user.email)
        swal("Bienvenido", `${user.displayName}` , "success");
        // ...
    }).catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        if(errorCode !== "")
        {
            swal("", `${errorCode}`, "warning");
        }
        else if (errorMessage !== "")
        {
            swal("", `${errorMessage}`, "warning");
        }
        else if (email !== "")
        {
            swal("", `${email}`, "warning");
        }
        else
        {
            swal("", `${credential}`, "warning");
        }
    });

}

export const updateLogOut = async (setUser) => 
{
    const auth = getAuth();
    signOut(auth).then(() => {
        setUser("")
        swal("", "Deslogueado con exito", "success");
    }).catch((error) => {
        swal("", `${error.message}`, "warning");
    });
}
