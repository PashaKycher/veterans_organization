const FiltersUsers = ({ filters, onChange }) => {
  const update = (key, value) => {
    onChange(prev => ({ ...prev, [key]: value }));
  };

  return (
    <section className="px-6 md:px-16 lg:px-24 xl:px-40">
      <div className="bg-white border border-border-button rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-4">

        <select value={filters.sort} onChange={(e) => update("sort", e.target.value)} className="border p-2 rounded-md text-sm">
          <option value="">Без сортування</option>
          <option value="az">Від А до Я</option>
          <option value="za">Від Я до А</option>
        </select>

        <input type="text" placeholder="Пошук: імʼя, псевдонім, email" value={filters.search} onChange={(e) => update("search", e.target.value)} className="border p-2 rounded-md text-sm"/>
      </div>
    </section>
  );
};

export default FiltersUsers;
