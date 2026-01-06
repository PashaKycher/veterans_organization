import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import toast from "react-hot-toast";
import api from "../../api/axios";
import moment from "moment";
import { useSelector } from "react-redux";


const GridAnalyticalCategory = ({ filters }) => {
    const user = useSelector(state => state.user.user);
    const [category, setCategory] = useState([]);

    const fetchData = async () => {
        try {
            const { data } = await api.get('/api/analyticalcategory/get');
            if (data.success) {
                setCategory(data.data);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    const delCategory = async (id) => {
        try {
            const token = localStorage.getItem('token');
            const { data } = await api.post('/api/analyticalcategory/delete', {id:id}, { headers: { Authorization: token } });
            if (data.success) {
                localStorage.setItem("token", data.token);
                toast.success(data.message);
                fetchData();
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <section className="px-6 md:px-16 lg:px-24 xl:px-40 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                {category.map(article => (
                    <motion.article
                        key={article._id}
                        className="bg-white border border-neutral-200 rounded-xl p-6 transition flex flex-col h-full">

                        <h3 className="text-xl font-semibold text-title">
                            {article.title}
                        </h3>

                        <p className="mt-4 text-sm text-text leading-relaxed">
                            {article.description}
                        </p>

                        <div className="mt-auto pt-6 flex flex-col md:flex-row gap-4 md:justify-between">
                            <div className="mt-6 flex justify-between items-center text-xs text-gray-500">
                                <span>{moment(article.createdAt).format("DD-MM-YYYY")}</span>
                            </div>

                            {(user.roleOwner === "editor" || user.roleOwner === "admin") && <button className="inline-flex items-center justify-center text-xs font-medium px-3 py-1.5 rounded-lg text-red-700 bg-red-100 hover:bg-red-600 hover:text-white border border-red-300 transition-all duration-200 active:scale-95" type="button" onClick={()=>delCategory(article._id)}>видалити</button>}
                        </div>
                    </motion.article>
                ))}
            </div>
        </section>
    );
};

export default GridAnalyticalCategory;
