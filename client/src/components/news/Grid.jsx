import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import api from "../../api/axios";
import moment from "moment";

const Grid = ({ filters }) => {
  const [analyticals, setAnalyticals] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const { data } = await api.get("/api/analytical/get");
      if (data.success) {
        setAnalyticals(data.data);
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const data = useMemo(() => {
    let items = [...analyticals];

    if (filters.category) { items = items.filter(i => i.category?._id === filters.category) }
    if (filters.date) { items = items.filter(i => moment(i.createdAt).isSame(filters.date, "day")) }
    if (filters.sort === "asc") { items.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)) }
    if (filters.sort === "desc") { items.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)) }
    if (filters.search) { const q = filters.search.toLowerCase(); items = items.filter(i => i.title?.toLowerCase().includes(q) || i.excerpt?.toLowerCase().includes(q)) }

    return items;
  }, [filters, analyticals]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="px-6 md:px-16 lg:px-24 xl:px-40 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {data.map(article => (
          <motion.article
            key={article._id}
            whileHover={{ y: -4 }}
            className="bg-white border border-neutral-200 rounded-xl p-6 cursor-pointer transition flex flex-col h-full">

            <h3 className="text-xl font-semibold text-title">
              {article.title}
            </h3>

            <p className="mt-4 text-sm text-text leading-relaxed">
              {article.excerpt}
            </p>

            <div className="mt-auto pt-6 flex justify-between items-center text-xs text-primary">
              <span>{moment(article.publishedAt).format("DD-MM-YYYY")}</span>

              <button type="button" onClick={() => { navigate(`/analytical/${article._id}`); scrollTo(0, 0) }} className=" inline-flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors duration-200 group">Читати <span className="transform transition-transform duration-200 group-hover:translate-x-1">→</span></button>
            </div>
          </motion.article>
        ))}

        {data.length === 0 && (
          <p className="text-center text-primary pt-16">
            Матеріалів за заданими умовами не знайдено.
          </p>
        )}
      </div>
    </section>
  );
};

export default Grid;
