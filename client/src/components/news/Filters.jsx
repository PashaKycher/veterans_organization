import React, { useEffect, useState } from "react";
import api from "../../api/axios";

const Filters = ({ filters, onChange }) => {
   const [category, setCategory] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await api.get('/api/newscategory/get');
      if (data.success) {
        setCategory(data.data);
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error(error.message);
    }
  }
  const update = (key, value) => {
    onChange(prev => ({ ...prev, [key]: value }));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="px-6 md:px-16 lg:px-24 xl:px-40">
      <div className="bg-white border border-border-button rounded-xl p-6 grid grid-cols-1 md:grid-cols-4 gap-4">

        <select
          value={filters.category}
          onChange={(e) => update("category", e.target.value)}
          className="border p-2 rounded-md text-sm">
          <option value="">Всі напрями</option>
          {category.map(c => (
            <option key={c._id} value={c._id}>{c.title}</option>
          ))}
        </select>

        <select
          value={filters.sort}
          onChange={(e) => update("sort", e.target.value)}
          className="border p-2 rounded-md text-sm">
          <option value="">Без сортування</option>
          <option value="desc">Новіші</option>
          <option value="asc">Старіші</option>
        </select>

        <input
          type="date"
          value={filters.date}
          onChange={(e) => update("date", e.target.value)}
          className="border p-2 rounded-md text-sm"
        />

        <input
          type="text"
          value={filters.search}
          placeholder="Пошук за змістом"
          onChange={(e) => update("search", e.target.value)}
          className="border p-2 rounded-md text-sm"
        />

      </div>
    </section>
  );
};

export default Filters;
