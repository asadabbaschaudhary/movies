import { createContext, useEffect, useState } from "react";
import { getUser } from "../helper";

export const AuthContext = createContext();
export const AuthContextProvider = (props) =>{
  const [user,setUser] = useState(null);
  useEffect (()=>{
    const currentUser = getUser();
    setUser(currentUser);
  },[]);

  return(
    <AuthContext.Provider value={{user,setUser}}>{props.children}</AuthContext.Provider>
  )
}
