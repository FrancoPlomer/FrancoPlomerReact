import { useEffect, useState } from 'react';
export const PromiseHookCategory = (categoria) => {
    const [Loading, setLoading] = useState(false);    
    const [Items, setItems] = useState([])
    useEffect(() => {
        getProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categoria, Loading])
    const getProducts = async() => 
    {
        let url = `http://localhost:3001/Products`;
        if (categoria !== "")
        {
            url = `http://localhost:3001/Products?tipo=${categoria}`;
        }
        await fetch (url)
            .then((response) => 
            {
                try{
                    return response.json()
                } catch (err)
                {
                    throw err;
                }
            })
            .then((data) => {
                setItems(data)
            })
            .catch((err) => 
            {
                throw err;
            })
            .finally(() => setLoading(true))
    }
    return({Items, Loading})
}

export const PromiseHookId = (id) => {
    const [Loading, setLoading] = useState(false);    
    const [Items, setItems] = useState([])
    useEffect(() => {
        getProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id, Loading])
    const getProducts = async() => 
    {
        const url = `http://localhost:3001/Products?id=${id}`
        await fetch (url)
            .then((response) => 
            {
                try{
                    return response.json()
                } catch (err)
                {
                    throw err;
                }
            })
            .then((data) => {
                setItems(data)
            })
            .catch((err) => 
            {
                throw err;
            })
            .finally(() => setLoading(true))
    }
    return({Items, Loading})
}
