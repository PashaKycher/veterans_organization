import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import moment from "moment";
import api from "../../api/axios";
import toast from "react-hot-toast";

const GridAnalytical = ({ filters }) => {
  const [analyticals, setAnalyticals] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const { data } = await api.get("/api/analytical/get-admin", { headers: { Authorization: localStorage.getItem("token") } });
      if (data.success) {
        setAnalyticals(data.data);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const delAnalytical = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const { data } = await api.delete(`/api/analytical/delete/${id}`, { headers: { Authorization: token } });

      if (data.success) {
        toast.success(data.message);
        fetchData();
        localStorage.setItem("token", data.token);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const data = useMemo(() => {
    let items = [...analyticals];

    if (filters.category) { items = items.filter(i => i.category?._id === filters.category) }
    if (filters.date) { items = items.filter(i => moment(i.publishedAt).isSame(filters.date, "day")) }
    if (filters.sort === "asc") { items.sort((a, b) => new Date(a.publishedAt) - new Date(b.publishedAt)) }
    if (filters.sort === "desc") { items.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)) }
    if (filters.search) { const q = filters.search.toLowerCase(); items = items.filter(i => i.title?.toLowerCase().includes(q) || i.excerpt?.toLowerCase().includes(q)) }

    return items;
  }, [filters, analyticals]);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="px-6 md:px-16 lg:px-24 xl:px-40 py-16">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
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

            <div className="mt-auto pt-6 flex justify-between items-center text-xs text-gray-500">
              <div className="flex flex-col md:flex-row gap-2 md:gap-8 mx-auto items-center">
                <button type="button"  className="inline-flex items-center justify-center text-xs font-medium px-3 py-1.5 rounded-lg text-slate-700 bg-slate-100 hover:bg-slate-700 hover:text-white border border-slate-300 transition-all duration-200 active:scale-95" onClick={() => navigate(`/owner/editanalytical/${article._id}`)}>змінити</button>

                <button type="button" className="inline-flex items-center justify-center text-xs font-medium px-3 py-1.5 rounded-lg text-red-700 bg-red-100 hover:bg-red-600 hover:text-white border border-red-300 transition-all duration-200 active:scale-95" onClick={() => delAnalytical(article._id)}>видалити</button>
              </div>
              
              <div className="flex flex-col md:flex-row gap-2 md:gap-8 mx-auto items-center">
                <span>{moment(article.publishedAt).format("DD-MM-YYYY")}</span>
              <button type="button" onClick={() => { navigate(`/analytical/${article._id}`); scrollTo(0, 0) }} className=" inline-flex items-center gap-1 text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors duration-200 group">Читати <span className="transform transition-transform duration-200 group-hover:translate-x-1">→</span></button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default GridAnalytical;
