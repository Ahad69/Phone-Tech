import { useEffect, useState } from "react"

const useAdmin = user =>{
    const [admin , setAdmin] = useState(false)
    const [isLoading , setIsLoading] = useState(true)
    console.log(admin)
    useEffect(()=>{
        const email = user?.email;
        if(email){
            fetch(`https://fast-sands-29069.herokuapp.com/admin/${email}` , {
                method : 'GET',
                headers : {
                    'authorization' : `Bearer ${localStorage.getItem('accessToken')}`
                  },
            })
            .then(res=> res.json())
            .then(data => {
                setAdmin(data)
                setIsLoading(false)
            })
        }

    },[user])
    return [admin , isLoading]
}
export default useAdmin;