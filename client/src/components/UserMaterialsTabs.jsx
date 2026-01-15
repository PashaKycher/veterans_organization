import React from "react";
import moment from "moment";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";

const tabs = [
    { key: "analiticals", label: "Аналітика" },
    { key: "news", label: "Новини" },
    { key: "position", label: "Позиція" },
];

const UserMaterialsTabs = ({ user, activeTab, setActiveTab, analiticals, news, position }) => {
    const navigate = useNavigate();

    return (
        <div className="bg-white rounded-2xl shadow-sm p-6">
            {/* Tabs */}
            <div className="flex gap-2 border-b border-gray-200 pb-2">
                {tabs.map((tab) => (
                    <button
                        key={tab.key}
                        onClick={() => setActiveTab(tab.key)}
                        className={`px-4 py-2 text-sm rounded-lg transition ${activeTab === tab.key ? "bg-gray-900 text-white" : "text-gray-600 hover:bg-gray-100"}`}>
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Content */}
            <div className="mt-6 space-y-4">
                {activeTab === "analiticals" && (analiticals.length > 0 ? (analiticals.map((analytical) =>
                    <motion.article
                        key={analytical._id}
                        whileHover={{ y: -4 }}
                        className="bg-white border border-neutral-200 rounded-xl p-6 cursor-pointer transition flex flex-col h-full">

                        <h3 className="text-xl font-semibold text-title">
                            {analytical.title}
                        </h3>

                        <p className="mt-4 text-sm text-text leading-relaxed">
                            {analytical.excerpt}
                        </p>

                        <div className="mt-auto pt-6 flex justify-between items-center text-xs text-primary">
                            <span>{moment(analytical.publishedAt).format("DD-MM-YYYY")}</span>

                            <button type="button" onClick={() => { navigate(`/analytical/${analytical._id}`); scrollTo(0, 0) }} className=" inline-flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors duration-200 group">Читати <span className="transform transition-transform duration-200 group-hover:translate-x-1">→</span></button>
                        </div>
                    </motion.article>
                )) : (<p className="text-sm text-gray-500">Цей користувач ще не додав аналітичних матеріалів</p>))}

                {activeTab === "news" && (news.length > 0 ? (news.map((news) =>
                    <motion.article
                        key={news._id}
                        whileHover={{ y: -4 }}
                        className="bg-white border border-neutral-200 rounded-xl p-6 cursor-pointer transition flex flex-col h-full">

                        <h3 className="text-xl font-semibold text-title">
                            {news.title}
                        </h3>

                        <p className="mt-4 text-sm text-text leading-relaxed">
                            {news.excerpt}
                        </p>

                        <div className="mt-auto pt-6 flex justify-between items-center text-xs text-primary">
                            <span>{moment(news.publishedAt).format("DD-MM-YYYY")}</span>

                            <button type="button" onClick={() => { navigate(`/news/${news._id}`); scrollTo(0, 0) }} className=" inline-flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors duration-200 group">Читати <span className="transform transition-transform duration-200 group-hover:translate-x-1">→</span></button>
                        </div>
                    </motion.article>
                )) : (<p className="text-sm text-gray-500">Цей користувач ще не додав новин</p>))}

                {activeTab === "position" && (position.length > 0 ? (position.map((position) =>
                    <motion.article
                        key={position._id}
                        whileHover={{ y: -4 }}
                        className="bg-white border border-neutral-200 rounded-xl p-6 cursor-pointer transition flex flex-col h-full">

                        <h3 className="text-xl font-semibold text-title">
                            {position.title}
                        </h3>

                        <p className="mt-4 text-sm text-text leading-relaxed">
                            {position.excerpt}
                        </p>

                        <div className="mt-auto pt-6 flex justify-between items-center text-xs text-primary">
                            <span>{moment(position.publishedAt).format("DD-MM-YYYY")}</span>

                            <button type="button" onClick={() => { navigate(`/position/${position._id}`); scrollTo(0, 0) }} className=" inline-flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors duration-200 group">Читати <span className="transform transition-transform duration-200 group-hover:translate-x-1">→</span></button>
                        </div>
                    </motion.article>
                )) : (<p className="text-sm text-gray-500">Цей користувач ще не додав позицій</p>))}
            </div>
        </div>
    );
};

export default UserMaterialsTabs;
