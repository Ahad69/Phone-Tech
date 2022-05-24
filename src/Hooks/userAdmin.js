import { useEffect, useState } from "react"

const useAdmin = user =>{
    const [admin , setAdmin] = useState(false)
    const [isLoading , setIsLoading] = useState(true)
    useEffect(()=>{
        const email = user?.email;
        console.log(email)
        if(email){
            fetch(`http://localhost:5000/admin/${email}` , {
                method : 'GET',
                headers : {
                    'authorization' : `Bearer ${localStorage.getItem('accessToken')}`
                  },
            })
            .then(res=> res.json())
            .then(data => {
                    console.log(data)
                setAdmin(data)
                setIsLoading(false)
            })
        }

    },[user])
    return [admin , isLoading]
}
export default useAdmin;