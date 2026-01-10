import { useEffect, useState } from "react";
import api from "../../api/axios";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";

const PositionSourceGrid = ({ filter }) => {
    const [items, setItems] = useState([]);
    const [dataFetch, setDataFetch] = useState([]);
    const navigate = useNavigate();

    const fetchAnalitic = async () => {
        const { data } = await api.get("/api/analytical/get");
        if (data.success) {
            setDataFetch(data.data);
        }
    };

    const fetchNews = async () => {
        const { data } = await api.get("/api/news/get");
        if (data.success) {
            setDataFetch(prev => [...prev, ...data.data]);
        }
    };

    useEffect(() => {
        fetchAnalitic();
        fetchNews();
    }, []);

    useEffect(() => {
        setItems(dataFetch.filter(item => item.positionId === null));
    }, [dataFetch]);

    const data = useMemo(() => {
        let itemsData = [...items];

        if (filter) { const q = filter.toLowerCase(); itemsData = itemsData.filter(i => i.title?.toLowerCase().includes(q) || i.excerpt?.toLowerCase().includes(q)) }

        return itemsData;
    }, [filter, items]);

    return (
        <section>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
                {data.map(a => (
                    <div key={a._id} className="relative bg-white border border-neutral-200 rounded-xl p-6 cursor-pointer transition flex flex-col h-full">

                        <span className={`absolute top-4 left-4 text-xs font-medium px-2 py-2 rounded-full`}>{a.position_type === "Analytical" ? "Аналітика" : a.position_type === "News" ? "Новина" : ""}</span>

                        <span className={`absolute top-4 right-4 text-xs font-medium px-2 py-2 rounded-full ${a.status === "draft" ? "bg-blue-600" : a.status === "review" ? "bg-yellow-600" : a.status === "published" ? "bg-green-600" : "bg-red-600"}`}></span>

                        <h3 className="mt-4 ext-lg md:text-xl font-semibold text-title">
                            {a.title}
                        </h3>

                        {/* <p className="mt-4 text-sm text-text leading-relaxed">
                            {a.excerpt}
                        </p> */}

                        <button onClick={() => navigate(`/owner/addposition?article=${a._id}&model=${a.position_type}`)} className="mt-auto pt-6 flex justify-end items-center text-sm text-emerald-600">
                            Створити позицію →
                        </button>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default PositionSourceGrid;
