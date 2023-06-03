import React, {useEffect, useState} from 'react'
import {Route} from 'react-router-dom'
import './Admin.css'
import AdminTabletView from './AdminTabletView/AdminTabletView'
import AdminLaptopView from './AdminLaptopView/AdminLaptopView'
import AdminMobileView from './AdminMobileView/AdminMobileView'
import AdminTabletDetails from './AdminTabletDetails/AdminTabletDetails'
import AdminLaptopDetails from './AdminLaptopDetails/AdminLaptopDetails'
import AdminMobileDetails from './AdminMobileDetails/AdminMobileDetails'
import LaptopPost from './LaptopPost/LaptopPost'
import MobilePost from './MobilePost/MobilePost'
import TabletPost from './TabletPost/TabletPost'
import AdminFeedbackView from './AdminFeedbackView/AdminFeedbackView'
import AdminBlog from './AdminBlog/AdminBlog'
import AdminDrawer from './AdminDrawer/AdminDrawer'
import AdminLogin from './AdminLogin/AdminLogin'
import AdminMain from './AdminMain/Admin.Main'
import axios from 'axios'
import AdminAuth from './AdminAuth/AdminAuth'

const Admin = ()=>{
    const [state, setState] = useState(false)
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

    return(
        <>
            <AdminDrawer state={state} setState={setState}/>
            <Route path='/admin' component={Admin}>
                
                <Route exact path='/admin'><AdminLogin/></Route>
                {/* <AdminAuth > */}
                <Route path='/admin/main' ><AdminMain setState={setState} isLoggedIn={isLoggedIn}/></Route>
                <Route path='/admin/laptopPost'><LaptopPost setState={setState}/></Route>
                <Route path='/admin/mobilePost'><MobilePost setState={setState}/></Route>
                <Route path='/admin/tabletPost'><TabletPost setState={setState}/></Route>
                <Route path='/admin/tabletView'><AdminTabletView setState={setState}/></Route>
                <Route path='/admin/laptopView'><AdminLaptopView setState={setState}/></Route>
                <Route path='/admin/mobileView'><AdminMobileView setState={setState}/></Route>
                <Route path='/admin/tabletDetails/:productID'> <AdminTabletDetails setState={setState}/> </Route>
                <Route path='/admin/laptopDetails/:productID'> <AdminLaptopDetails setState={setState}/> </Route>
                <Route path='/admin/mobileDetails/:productID'> <AdminMobileDetails setState={setState}/> </Route>
                <Route path='/admin/blog' ><AdminBlog setState={setState}/></Route>
                <Route path='/admin/feedback'><AdminFeedbackView setState={setState}/></Route>
                {/* </AdminAuth> */}
            </Route>
        </>
    )
}

export default Admin