import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../../api/axios";
import { useSelector } from "react-redux";
import GridPosition from "../../../components/owner/GridPosition";
import PositionSourceGrid from "../../../components/owner/PositionSourceGrid";
import { Title } from "../../../components/helpers/Title";

const PositionOwner = () => {
    const navigate = useNavigate();
    const user = useSelector(state => state.user.user);

    const [positions, setPositions] = useState([]);
    const [statusFilter, setStatusFilter] = useState("all");
    const [showSources, setShowSources] = useState(false);
    const [showMy, setShowMy] = useState(false);
    const [showOthers, setShowOthers] = useState(false);
    const [filter, setFilter] = useState("");

    const fetchPositions = async () => {
        const { data } = await api.get("/api/position/get-admin", { headers: { Authorization: localStorage.getItem("token") } });
        if (data.success) {
            setPositions(data.data)
        };
    };

    useEffect(() => {
        fetchPositions();
    }, []);

    const myPositions = positions.filter(p => p.author?._id === user._id);
    const otherPositions = positions.filter(p => p.author?._id !== user._id);

    const filterByStatus = list => statusFilter === "all" ? list : list.filter(p => p.status === statusFilter);

    return (
        <div className="bg-bg min-h-screen text-text overflow-hidden w-full">

            <div className="p-4">
                <Title title='Позиції' subtitle='Субʼєктні тексти, що формують публічну позицію спільноти' />
            </div>

            {/* CONTROL */}
            <section className="my-8 mx-6 md:mx-16 lg:mx-24 xl:mx-40 bg-white border border-border-button rounded-xl p-6 grid grid-cols-1 md:grid-cols-3 gap-4">

                <input
                    type="text"
                    value={filter}
                    placeholder="Пошук за змістом"
                    onChange={(e) => setFilter(e.target.value)}
                    className="border p-2 rounded-xl text-sm"
                />

                <button onClick={() => navigate("/owner/addposition")} className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl font-medium text-white bg-linear-to-r from-emerald-500 to-emerald-700 hover:from-emerald-600 hover:to-emerald-800 shadow-md hover:shadow-lg transition-all duration-300 active:scale-[0.97]">cтворити позицію</button>

                <select
                    value={statusFilter}
                    onChange={e => setStatusFilter(e.target.value)}
                    className="border p-2 rounded-xl text-xs lg:text-medium">
                    <option value="all" className='text-purple-600 text-xs lg:text-medium'>● всі статуси</option>
                    <option value="draft" className='text-blue-600 text-xs lg:text-medium'>● чернетка</option>
                    <option value="review" className='text-yellow-600 text-xs lg:text-medium'>● на перевірці</option>
                    <option value="published" className='text-green-600 text-xs lg:text-medium'>● опубліковано</option>
                    <option value="archived" className='text-red-600 text-xs lg:text-medium'>● архів</option>
                </select>
            </section>

            {/* SOURCES */}
            <section className="px-6 md:px-16 lg:px-24 xl:px-40 py-16">
                <button onClick={() => setShowSources(!showSources)} className="font-medium text-gray-700 mb-4">
                    {showSources ? "▾" : "▸"} Матеріали для позицій
                </button>
                {showSources && <PositionSourceGrid filter={filter} />}

                <div className="my-10 py-0.5 bg-primary"></div>

                {/* MY POSITIONS */}
                <button onClick={() => setShowMy(!showMy)} className="font-medium text-gray-700 mb-4">
                    {showMy ? "▾" : "▸"} Мої позиції
                </button>
                {showMy && (
                    <GridPosition filter={filter} positions={filterByStatus(myPositions)} refresh={fetchPositions} editable />
                )}

                {user.roleOwner === "editor" || user.roleOwner === "admin" ? <div className="my-10 py-0.5 bg-primary"></div> : ""}

                {/* OTHER POSITIONS */}
                {(user.roleOwner === "editor" || user.roleOwner === "admin") &&
                <button onClick={() => setShowOthers(!showOthers)} className="font-medium text-gray-700 mb-4">
                    {showOthers ? "▾" : "▸"} Позиції інших авторів
                </button>}
                {(user.roleOwner === "editor" || user.roleOwner === "admin") && (
                    showOthers && (<GridPosition filter={filter} positions={filterByStatus(otherPositions)} refresh={fetchPositions} />)
                )}
            </section>
        </div>
    );
};

export default PositionOwner;
