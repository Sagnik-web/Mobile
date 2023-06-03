import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom';
import axios from 'axios'

   


function AdminAuth({children}) {
const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(()=>{
        axios.get('http://localhost:5000/api/v1/admin/myAccount',{withCredentials:true})
        .then(res=>{
            console.log(res.data.loggedIn);
            setIsLoggedIn(res.data.loggedIn)
        })
        .catch(err=>{
            console.log(err);
        })
    },[])
    const history = useHistory()
    useEffect(() => {
		
		if (isLoggedIn) {
			return history.push('/admin')
		}
  return children

	},[]);

}

export default AdminAuth