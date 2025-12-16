import { useMemo, useState } from "react";
import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
import { newsArticles } from "../../assets/assets";

const Grid = ({ filters }) => {
  const navigate = useNavigate();

  const data = useMemo(() => {
    let items = [...newsArticles];

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
        {data.map((article) => (
          <motion.article
            key={article._id}
            whileHover={{ y: -2 }}
            className="bg-white rounded-xl border border-neutral-200 p-6 cursor-pointer hover:shadow-md transition"
            onClick={() => { navigate(`/news/${article._id}`); scrollTo(0, 0); }}>

            <div className="flex flex-col md:flex-row gap-6">
              <img
                src={article.image}
                alt={article.name}
                className="w-full md:w-40 h-32 object-cover rounded-lg"
              />

              <div className="flex-1">
                <h3 className="text-lg font-semibold text-title">
                  {article.name}
                </h3>

                <p className="mt-3 text-sm text-text">
                  {article.disc}
                </p>

                <p className="mt-4 text-xs text-gray-500">
                  {article.createdAt}
                </p>
              </div>
            </div>
          </motion.article>
        ))}

        {data.length === 0 && (
          <p className="text-center text-gray-500 pt-16">
            Матеріалів за заданими умовами не знайдено.
          </p>
        )}
      </div>
    </section>
  );
};

export default Grid;
