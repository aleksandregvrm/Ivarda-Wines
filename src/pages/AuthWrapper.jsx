import { useAuth0 } from "@auth0/auth0-react"
const AuthWrapper = ({children}) => {
    const {isLoading,error} = useAuth0();
    if(isLoading){
        return <div className="loading"></div>
    }
    if(error){
        return <h2>There has been an error with logging in, refresh and try again ... </h2>
    }
    return <>{children}</>
}
export default AuthWrapper