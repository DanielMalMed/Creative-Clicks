import { AuthContext } from "../context/authcontext";
import { useContext } from "react";

export const AuthContext = () => {
    const context = useContext(AuthContext)

    if(!context) {
        throw Error( 'useAuthContext must be inside AuthContextProvider')
    }
    return context
}