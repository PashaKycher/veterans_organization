import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import api from "../../api/axios";
import { motion } from "motion/react";
import { useDispatch } from "react-redux";
import { setIsOpen } from "../../store/loginSlice";

const VerifyEmail = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const token = searchParams.get("token");

    const [status, setStatus] = useState("loading");

    useEffect(() => {
        if (!token) {
            setStatus("error");
            return;
        }

        const verify = async () => {
            try {
                const { data } = await api.post("/api/users/verify-email", { token });

                if (data.success) {
                    setStatus("success");
                    setTimeout(() => {navigate("/"); dispatch(setIsOpen(true))}, 1000);
                } else {
                    setStatus("error");
                }
            } catch {
                setStatus("error");
            }
        };

        verify();
    }, [token, navigate]);

    return (
        <main className="min-h-screen bg-[#F1F4F4] flex items-center justify-center px-4">
            <motion.section
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md bg-white border border-gray-300/60 rounded-2xl p-8 text-center"
            >
                {status === "loading" && (
                    <>
                        <h1 className="text-xl font-medium text-gray-900">
                            Перевірка електронної пошти
                        </h1>
                        <p className="mt-4 text-sm text-gray-600">
                            Зачекайте, відбувається підтвердження доступу.
                        </p>
                    </>
                )}

                {status === "success" && (
                    <>
                        <h1 className="text-xl font-medium text-gray-900">
                            Email підтверджено
                        </h1>
                        <p className="mt-4 text-sm text-gray-600">
                            Ваша адреса електронної пошти підтверджена.
                            Зараз ви будете перенаправлені до сторінки входу.
                        </p>
                    </>
                )}

                {status === "error" && (
                    <>
                        <h1 className="text-xl font-medium text-gray-900">
                            Неможливо підтвердити email
                        </h1>
                        <p className="mt-4 text-sm text-gray-600">
                            Посилання недійсне або втратило чинність.
                            Спробуйте повторно зареєструватися або зверніться до підтримки.
                        </p>
                        <button
                            onClick={() => navigate("/login")}
                            className="mt-6 inline-flex justify-center px-6 py-2 rounded-full border border-gray-400 text-sm text-gray-800 hover:bg-gray-100 transition"
                        >
                            Перейти до входу
                        </button>
                    </>
                )}
            </motion.section>
        </main>
    );
};

export default VerifyEmail;
