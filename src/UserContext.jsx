
import { createContext,useState } from "react";

// ایجاد کانتکست 
export const UserContext= createContext();

// ایجاد پرووایدر 
export const UserProvider =({children})=>{
    const [user, setuser] = useState("مهمان");
    
    return(
        <UserContext.Provider value={{user,setuser}} >
            {children}
        </UserContext.Provider>
    );
}