import { assets } from "../..//assets/assets";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../api/axios";
import moment from "moment";

const PositionCard = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [position, setPosition] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchPosition = async () => {
        try {
            const { data } = await api.get(`/api/position/get/${id}`);
            if (data.data) {
                setPosition(data.data);
            }
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchPosition();
    }, [id]);

    if (loading) return <div className="py-16 text-center text-gray-500">Завантаження…</div>;
    if (!position) return <div className="py-16 text-center">Позицію не знайдено</div>;

    return (
        <div className="bg-gray-50 pt-18">
            <section className="max-w-4xl mx-auto px-4 py-12">

                {/* Back */}
                <button onClick={() => {navigate("/position"); scrollTo(0, 0)}} className="flex items-center gap-2 mb-8 text-primary font-medium hover:opacity-80">
                    <img src={assets.arrow_icon} className="rotate-180 opacity-70" />
                    Назад
                </button>

                {/* STRUCTURAL HERO */}
                <div className="mb-10">
                    <p className="text-xs uppercase tracking-wide text-gray-500 mb-2">
                        Позиція
                    </p>
                    {/* title */}
                    <h1 className="text-xl lg:text-4xl font-semibold leading-tight mb-4">
                        {position.title}
                    </h1>
                    {/* meta */}
                    <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
                        <span>{moment(position.publishedAt).format("DD.MM.YYYY")}</span>
                        <span>•</span>
                        <span>{position.author?.user_name}</span>
                        {position.position_type && (<><span>•</span><span className="capitalize">{position.position_type}</span></>)}
                    </div>
                </div>

                {/* POSITION CARD */}
                <div className="bg-white border border-gray-200 rounded-xl shadow-sm px-6 md:px-10 py-8">
                    {/* Content */}
                    <article className="prose prose-gray max-w-none" dangerouslySetInnerHTML={{ __html: position.content }} />
                    {/* Related article */}
                    {position.article && (
                        <div className="mt-10 p-5 border rounded-lg bg-gray-50">
                            <p className="text-xs uppercase tracking-wide opacity-60 mb-2">
                                Позиція щодо матеріалу
                            </p>
                            <button className="text-primary font-medium hover:underline" onClick={() => navigate(`/${position.article_model === "News" ? "news" : "analytical"}/${position.article._id}`)}>
                                {position.article.title}
                            </button>
                        </div>
                    )}
                    {/* Tags */}
                    {position.tags?.length > 0 && (
                        <div className="mt-8 flex flex-wrap gap-2">
                            {position.tags.map(tag => (<span key={tag} className="px-3 py-1 text-xs rounded-full bg-gray-100 text-gray-700">#{tag}</span>))}
                        </div>
                    )}
                    {/* Divider */}
                    <hr className="my-10" />
                    {/* Service info */}
                    <div className="text-sm text-gray-500 leading-relaxed">
                        <p>
                            Цей матеріал є публічною позицією автора та відображає його субʼєктну
                            оцінку подій, процесів або рішень.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default PositionCard;
