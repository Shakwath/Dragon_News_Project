import { createContext, useState } from "react";

export const Authcontex = createContext();
const Authprovider = ({children}) => {
    const [user,setuser]=useState({
        name: "shakwath",
        email: "shakawathhossain0@gmail.com",
    })
    const authInfo = {
        user,
        setuser,
    }
    return (
        <Authcontex.Provider value={authInfo}>{children}</Authcontex.Provider>
    );
};

export default Authprovider;