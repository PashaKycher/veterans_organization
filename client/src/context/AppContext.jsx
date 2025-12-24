import { createContext, useContext, useEffect, useState } from "react";
import { toast } from 'react-hot-toast'
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    // fetch user data
    const fetchUser = async () => {
        try {
            const token = localStorage.getItem("token");
            const { data } = await api.get("/api/users/data", { headers: { Authorization: token } });
            if (data.success) {
            }
        } catch (error) {
            console.error(error.message);
        }
    };

    const value = { user, setUser, fetchUser };

    return (<AppContext.Provider value={value}>{children}</AppContext.Provider>);
};

export const useAppContext = () => {

    return useContext(AppContext);
};