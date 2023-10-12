// import { useAuthContext } from "../context/user_context";
import { useNavigate } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";

const PrivateRoute = ({children}) => {
  const navigate = useNavigate();
  const {user} = useAuth0();
  if(user){
    return children; 
  }
  useEffect(()=>{
   navigate('/')
  },[user])
}
export default PrivateRoute