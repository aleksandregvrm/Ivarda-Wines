import { createContext, useContext, useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const authContext = createContext();

export const UserProvider = ({ children }) => {
  const { loginWithRedirect, logout, user } =
    useAuth0();

  const [myUser, setMyUser] = useState(null);
  useEffect(() => {
    setMyUser(user);
  }, [user]);
  return (
    <authContext.Provider
      value={{
        loginWithRedirect,
        logout,
        myUser,
      }}
    >
      {children}
    </authContext.Provider>
  );
};
// make sure use
export const useAuthContext = () => {
  return useContext(authContext);
};
