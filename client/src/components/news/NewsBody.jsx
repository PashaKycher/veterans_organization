import React, { useState, useMemo } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { newsArticles, newsCategories, assets } from "../../assets/assets";

const NewsBody = () => {
    const navigate = useNavigate();

    // -----------------------------
    // FORM STATES
    // -----------------------------
    const [sortOrder, setSortOrder] = useState(""); // asc | desc
    const [category, setCategory] = useState("");
    const [exactDate, setExactDate] = useState("");
    const [searchText, setSearchText] = useState("");

    // -----------------------------
    // FILTERED ARTICLES
    // -----------------------------
    const filteredArticles = useMemo(() => {
        let data = [...newsArticles];

        // TEXT SEARCH
        if (searchText.trim() !== "") {
            data = data.filter((item) =>
                item.name.toLowerCase().includes(searchText.toLowerCase()) ||
                item.disc.toLowerCase().includes(searchText.toLowerCase())
            );
        }

        // CATEGORY
        if (category !== "") {
            data = data.filter((item) => item.category_id === category);
        }

        // EXACT DATE
        if (exactDate !== "") {
            data = data.filter((item) => item.createdAt === exactDate);
        }

        // SORTING
        if (sortOrder === "asc") {
            data.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
        }
        if (sortOrder === "desc") {
            data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        }

        return data;
    }, [sortOrder, category, exactDate, searchText]);

    // -----------------------------
    // FORM HANDLER
    // -----------------------------
    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <motion.section
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col gap-10 items-center w-full py-6 md:px-16 lg:px-24 xl:px-40">

            {/* ----------- FILTER FORM ----------- */}
            <motion.form
                onSubmit={handleSubmit}
                className="w-full bg-white shadow-md rounded-xl p-6 flex flex-col lg:flex-row gap-3 items-start md:items-end">

                {/* Category */}
                <div className="flex flex-col w-full">
                    <label className="text-xs xl:text-sm text-gray-600 font-semibold">Категорія</label>
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="border p-2 rounded-md text-xs xl:text-sm"
                    >
                        <option value="">Всі категорії</option>
                        {newsCategories.map((cat) => (
                            <option key={cat._id} value={cat._id}>
                                {cat.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Sort */}
                <div className="flex flex-col w-full">
                    <label className="text-xs xl:text-sm text-gray-600 font-semibold">Сортування</label>
                    <select
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                        className="border p-2 rounded-md text-xs xl:text-sm"
                    >
                        <option value="">Не сортувати</option>
                        <option value="asc">Дата ↑</option>
                        <option value="desc">Дата ↓</option>
                    </select>
                </div>

                {/* Exact date */}
                <div className="flex flex-col w-full">
                    <label className="text-xs xl:text-sm text-gray-600 font-semibold">Точна дата</label>
                    <input
                        type="date"
                        value={exactDate}
                        onChange={(e) => setExactDate(e.target.value)}
                        className="border p-2 rounded-md text-xs xl:text-sm"
                    />
                </div>

                {/* Text search */}
                <div className="flex flex-col w-full">
                    <label className="text-xs xl:text-sm text-gray-600 font-semibold">Пошук</label>
                    <input
                        type="text"
                        placeholder="Введіть ключове слово..."
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        className="border p-2 rounded-md text-xs xl:text-sm"
                    />
                </div>

                {/* Button */}
                <button
                    type="submit"
                    className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary/80 transition"
                >
                    OK
                </button>
            </motion.form>

            {/* ----------- ARTICLES LIST ----------- */}
            <div className="w-full flex flex-col gap-10 mt-8">
                {filteredArticles.map((article) => (
                    <motion.div
                        key={article._id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="cursor-pointer bg-white rounded-xl shadow-md p-6 flex flex-col md:flex-row gap-6 border border-neutral-100 hover:shadow-lg transition"
                        onClick={() => { navigate(`/news/${article._id}`); scrollTo(0, 0) }}
                    >
                        {/* IMAGE */}
                        <img
                            src={article.image}
                            alt={article.name}
                            className="w-32 h-32 object-cover rounded-lg"
                        />

                        {/* CONTENT */}
                        <div className="flex-1">
                            <h3 className="text-lg font-bold text-primary">{article.name}</h3>

                            <p className="text-gray-700 mt-3">{article.disc}</p>

                            {/* DATE */}
                            <p className="text-sm text-gray-500 mt-4">
                                📅 {article.createdAt}
                            </p>
                        </div>
                    </motion.div>
                ))}

                {filteredArticles.length === 0 && (
                    <p className="text-center text-gray-600 py-10">
                        За вашим запитом нічого не знайдено.
                    </p>
                )}
            </div>
        </motion.section>
    );
};

export default NewsBody;
