import { useEffect, useState } from "react";

const useProducts = () => {
    const [products , setProducts] = useState([])
    const [isLoading , setIsLoading] = useState(true)
    useEffect(()=>{
        fetch('http://localhost:5000/products')
        .then(res=>res.json())
        .then(data => {
            setProducts(data)
            setIsLoading(false)
        })

    },[])

    return [products , isLoading]
};

export default useProducts;
// https://fast-sands-29069.herokuapp.com/orders