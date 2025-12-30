import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "motion/react";
import toast from "react-hot-toast";
import api from "../../api/axios";
import { assets } from "../../assets/assets";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { setUserData } from "../../store/userSlice";

const AnalyticalCard = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const [article, setArticle] = useState(null);
    const [currentImage, setCurrentImage] = useState(0);
    const [isLiking, setIsLiking] = useState(false);
    const [user, setUser] = useState(useSelector((state) => state.user));

    const userData = async () => {
        try {
            const token = localStorage.getItem("token");
            const { data } = await api.get("/api/users/data", { headers: { Authorization: token } });
            if (data.success) { dispatch(setUserData(data.user)); setUser(data.user) }
        } catch (error) {
            console.error(error)
        }
    }

    const fetchData = async () => {
        try {
            const { data } = await api.get(`/api/analytical/get/${id}`);
            if (data.success) {

                setArticle(data.data);
                data.data.likes.includes(user._id) ? setArticle((prev) => ({ ...prev, likedByMe: true })) : setArticle((prev) => ({ ...prev, likedByMe: false }));
                user?.analiticals?.includes(data.data._id) ? setArticle((prev) => ({ ...prev, is_featured: true })) : setArticle((prev) => ({ ...prev, is_featured: false }));
                setArticle((prev) => ({ ...prev, likes: data.data.likes.length }));
            }
        } catch {
            toast.error("Не вдалося завантажити статтю");
        }
    };

    useEffect(() => {
        if (!id) navigate("/analytical");
        userData();
    }, [id]);

    useEffect(() => {
        fetchData();
    }, [user]);

    const handleLike = async () => {
        if (isLiking) return;

        try {
            setIsLiking(true);

            const { data } = await api.put(`/api/analytical/like/${id}`, {}, { headers: { Authorization: localStorage.getItem("token") } });

            if (data.success) {
                setArticle((prev) => ({ ...prev, likes: data.likes, likedByMe: data.likedByMe, }));
            }
        } catch {
            toast.error("Не вдалося поставити лайк");
        } finally {
            setIsLiking(false);
        }
    };

    const handleFeatured = async () => {
        try {
            await api.put(`/api/users/analytical-featured/${id}`, {}, { headers: { Authorization: localStorage.getItem("token") } });
            setArticle((prev) => ({ ...prev, is_featured: !prev.is_featured }));
        } catch {
            toast.error("Помилка при зміні статусу");
        }
    };

    useEffect(() => {
        if (!id) return;

        const timer = setTimeout(async () => {
            try {
                const { data } = await api.get(`/api/analytical/add-view/${id}`);
            } catch (error) {
                console.error("Не вдалося оновити view", error);
            }
        }, 10000); // 10 секунд

        return () => clearTimeout(timer);
    }, [id]);

    if (!article) {
        return (
            <div className="w-full py-32 text-center text-gray-500">
                Завантаження…
            </div>
        );
    }

    return (
        <div className="bg-gray-50 pt-18">
            <div className="px-6 md:px-16 lg:px-24 xl:px-32 py-12">

                {/* Back */}
                <button onClick={() => navigate(-1)} className="flex items-center gap-2 mb-8 text-sm text-gray-600 hover:text-gray-900">
                    <img src={assets.arrow_icon} className="rotate-180 opacity-60" />Назад
                </button>

                <div className="grid grid-cols-1 xl:grid-cols-3 gap-12">

                    {/* MAIN CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="lg:col-span-2 space-y-8">

                        {/* Category & Date */}
                        <div className="text-sm text-gray-500">
                            {article.category?.title} ·{" "}{moment(article.publishedAt).format("DD.MM.YYYY")}
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl font-semibold text-gray-900 leading-tight">
                            {article.title}
                        </h1>

                        {/* Excerpt */}
                        <p className="text-gray-600 leading-relaxed">
                            {article.excerpt}
                        </p>

                        {/* Image slider */}
                        {article.image_urls?.length > 0 && (
                            <div className="relative">
                                <img src={article.image_urls[currentImage]} className="w-full rounded-xl object-cover" />
                                {article.image_urls.length > 1 && (
                                    <div className="flex justify-center gap-2 mt-3">
                                        {article.image_urls.map((_, index) => (
                                            <button key={index} onClick={() => setCurrentImage(index)} className={`w-2 h-2 rounded-full ${currentImage === index ? "bg-gray-800" : "bg-gray-300"}`}
                                            />
                                        ))}
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Content */}
                        <div
                            className="prose prose-gray max-w-none leading-relaxed border-t pt-6"
                            style={{ whiteSpace: "pre-line" }}
                            dangerouslySetInnerHTML={{ __html: article.content }}
                        />

                        {/* Tags */}
                        {article.tags?.length > 0 && (
                            <div className="flex flex-wrap gap-2 pt-6">
                                {article.tags.map((tag) => (
                                    <span key={tag} className="text-xs px-3 py-1 bg-gray-200 rounded-full text-gray-700">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        )}

                        {/* Actions */}
                        <div className="flex items-center gap-6 pt-8 border-t">
                            <button onClick={handleLike} className="flex items-center gap-2 text-sm text-gray-700">
                                👍 <span className={`text-xs px-3 py-2 rounded-full ${article.likedByMe ? "bg-yellow-100" : ""} `}>{article.likes || 0}</span>
                            </button>

                            <button onClick={handleFeatured} className={`text-xs px-3 py-1 rounded-full text-gray-700  ${article.is_featured ? "bg-green-300 hover:bg-gray-300" : "bg-gray-200 hover:bg-green-300"} `}> {article.is_featured ? "Видалити з обраного" : "Додати в обране"}
                            </button>
                        </div>
                    </motion.div>

                    {/* RIGHT SIDEBAR (optional future blocks) */}
                    <div className="lg:block">
                        <div className="sticky top-20 space-y-4 bg-white shadow p-6 rounded-xl">
                            <h3 className="font-semibold text-lg">Інформація</h3>
                            <p className="text-gray-600 text-sm">
                                Аналітичний матеріал базується на офіційних джерелах, відкритих даних та експертних оцінках.
                            </p>
                            {/* Author */}
                            <div className="border-t pt-2">
                                <p className="text-gray-600 text-medium underline-offs">
                                    Автор.
                                </p>
                                <div className="flex items-center gap-4 pt-2">
                                    <img src={article.author?.avatar} className="w-12 h-12 rounded-full object-cover" />
                                    <div>
                                        <p className="font-medium text-gray-900">
                                            {article.author?.full_name}
                                        </p>
                                        <p className="text-sm text-gray-500">
                                            {article.author?.email}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AnalyticalCard;


