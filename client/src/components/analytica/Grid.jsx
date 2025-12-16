import React, { useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { analyticalReviews } from "../../assets/assets";
import { motion } from "motion/react";

const Grid = ({ filters }) => {
  const navigate = useNavigate();

  const data = useMemo(() => {
    let items = [...analyticalReviews];

    if (filters.category) { items = items.filter(i => i.category_id === filters.category); }
    if (filters.date) { items = items.filter(i => i.createdAt === filters.date); }
    if (filters.sort === "asc") { items.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)); }
    if (filters.sort === "desc") { items.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)); }
    if (filters.search) {
      items = items.filter(i =>
        i.name.toLowerCase().includes(filters.search.toLowerCase()) ||
        i.disc.toLowerCase().includes(filters.search.toLowerCase())
      );
    }

    return items;
  }, [filters]);

  return (
    <section className="px-6 md:px-16 lg:px-24 xl:px-40 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {data.map(article => (
          <motion.article
            key={article._id}
            whileHover={{ y: -4 }}
            onClick={() => { navigate(`/analytical/${article._id}`); scrollTo(0, 0) }}
            className="bg-white border border-neutral-200 rounded-xl p-6 cursor-pointer transition">

            <h3 className="text-xl font-semibold text-title">
              {article.name}
            </h3>

            <p className="mt-4 text-sm text-text leading-relaxed">
              {article.disc}
            </p>

            <div className="mt-6 flex justify-between items-center text-xs text-gray-500">
              <span>{article.createdAt}</span>
              <span className="text-primary font-medium">Читати →</span>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Grid;
