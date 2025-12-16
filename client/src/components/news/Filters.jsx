import React from "react";
import { newsCategories } from "../../assets/assets";

const Filters = ({ filters, onChange }) => {
  const update = (key, value) => {
    onChange(prev => ({ ...prev, [key]: value }));
  };

  return (
    <section className="px-6 md:px-16 lg:px-24 xl:px-40">
      <div className="bg-white border border-border-button rounded-xl p-6 grid grid-cols-1 md:grid-cols-4 gap-4">

        <select
          value={filters.category}
          onChange={(e) => update("category", e.target.value)}
          className="border p-2 rounded-md text-sm">
          <option value="">Всі напрями</option>
          {newsCategories.map(c => (
            <option key={c._id} value={c._id}>{c.name}</option>
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
