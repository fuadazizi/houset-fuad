import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

export default function useAuth() {
    const authContext = useContext(AuthContext);
    return authContext;
}
