import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const useAuthContext = () => {
    const context = useContext(AuthContext);
    if(!context){
        return Error("you are accessing context out of the context provider tree!!")
    }
    return context;
}