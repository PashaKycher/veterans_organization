import { AnimatePresence, motion } from "motion/react";
import React from "react";
import { setIsOpen } from "../store/loginSlice";
import api from "../api/axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { setUserData } from "../store/userSlice";
import { useDispatch } from "react-redux";

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [state, setState] = React.useState("login");

    const [formData, setFormData] = React.useState({
        full_name: "",
        email: "",
        password: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await api.post(`/api/users/${state}`, formData);
            if (data.succses) {
                if (state === "login") {
                    localStorage.setItem("token", data.token);
                    dispatch(setUserData(data.updatedUser));
                    dispatch(setIsOpen(false));
                    toast.success(data.message);
                    if (data.updatedUser.role === "user") {
                        navigate("/user")
                    } else if (data.updatedUser.role === "superAdmin") {
                        navigate("/owner")
                    } else if (data.updatedUser.role === "newsAdmin") {
                        navigate("/owner")
                    } else if (data.updatedUser.role === "positionAdmin") {
                        navigate("/owner")
                    } else if (data.updatedUser.role === "analyticalAdmin") {
                        navigate("/owner")
                    } else if (data.updatedUser.role === "clubAdmin") {
                        navigate("/owner")
                    } else if (data.updatedUser.role === "leadersAdmin") {
                        navigate("/owner")
                    } else {
                        dispatch(setIsOpen(true));
                        navigate("/")
                    }
                } else if (state === "register") {
                    dispatch(setIsOpen(false));
                    navigate("/")
                }
            } else {
                toast.error(data.error);
            }
        } catch (error) {
            toast.error(error?.response?.data?.message || error.message);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    return (
        <AnimatePresence>
            <motion.main
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="min-h-screen bg-bg flex items-center justify-center px-4">

                <form onSubmit={handleSubmit} className="relative w-full max-w-sm bg-white border border-gray-300/60 rounded-2xl px-8 py-10">
                    <button type="button" onClick={() => dispatch(setIsOpen(false))} className="absolute top-3 right-4 text-gray-500 hover:text-red-500">
                        ✕
                    </button>

                    <h1 className="text-2xl font-medium text-gray-900 text-center">
                        {state === "login" ? "Вхід до спільноти" : "Створення облікового запису"}
                    </h1>

                    <p className="mt-3 text-sm text-gray-600 text-center">
                        {state === "login" ? "Авторизуйтесь для доступу до матеріалів порталу." : "Реєстрація відкриває доступ до спільноти та аналітики."}
                    </p>

                    {state !== "login" && (
                        <div className="mt-6">
                            <input
                                type="text"
                                name="full_name"
                                placeholder="Повне П.І.П."
                                className="w-full h-11 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400"
                                value={formData.full_name}
                                onChange={handleChange}
                                required
                            />
                        </div>
                    )}

                    <div className="mt-4">
                        <input
                            type="email"
                            name="email"
                            placeholder="Електронна пошта"
                            className="w-full h-11 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="mt-4">
                        <input
                            type="password"
                            name="password"
                            placeholder="Пароль"
                            className="w-full h-11 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-400"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <button type="submit" className="mt-6 w-full h-11 rounded-full bg-[#2F3E46] text-white text-sm hover:opacity-90 transition">
                        {state === "login" ? "Увійти" : "Зареєструватися"}
                    </button>

                    <p onClick={() => setState((prev) => prev === "login" ? "register" : "login")} className="mt-6 text-sm text-gray-600 text-center cursor-pointer">
                        {state === "login" ? (
                            <span>Немає облікового запису? <span className="text-blue-500 hover:text-green-500 hover:underline">Створити</span></span>
                        ) : (
                            <span>Вже маєте обліковий запис? <span className="text-blue-400 hover:text-green-500 hover:underline">Увійти</span></span>
                        )}
                    </p>
                </form>
            </motion.main>
        </AnimatePresence>
    );
};

export default Login;
