import {Navigate,Outlet} from "react-router-dom";
import React from "react"
import { useLocation } from "react-router"
import {UserContext} from "./App"
const useAuth=()=>{
    const {Logged} =React.useContext(UserContext)
    return Logged && Logged.login
}

const ProtedRountes=()=>{
    const location=useLocation()
    const isAuth=useAuth()
    console.log(isAuth)
    isAuth ? <Outlet/> : <Navigate 
    to={"/"}
    replace 
    state={{from:location}}
    />
}

export default ProtedRountes