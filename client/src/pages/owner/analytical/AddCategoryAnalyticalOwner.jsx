import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { Title } from '../../../components/helpers/Title';
import api from '../../../api/axios';

const AddCategoryAnalyticalOwner = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [category, setCategory] = useState({
    title: '',
    description: '',
  });

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (isLoading) return;

    setIsLoading(true);

    try {
      const token = localStorage.getItem('token');
      const { data } = await api.post('/api/analyticalcategory/add', category, { headers: { Authorization: token } });
      if (data.success) {
        localStorage.setItem("token", data.token);
        toast.success(data.message);
        setCategory({ title: '', description: '' });
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="px-4 py-10 md:px-10 flex-1">

      <Title 
        title="Створіть категорію" 
        subtitle="Додайте назву та опис, щоб сформувати категорію" 
      />

      <form 
        onSubmit={onSubmitHandler}
        className="flex flex-col gap-6 mt-10 max-w-2xl text-gray-600"
      >

        {/* title */}
        <div className="flex flex-col">
          <label htmlFor="title" className="font-medium text-gray-700">Назва категорії</label>
          <input 
            type="text" 
            id="title" 
            placeholder="Введіть назву"
            required
            value={category.title}
            onChange={(e) => setCategory({ ...category, title: e.target.value })}
            className="mt-1 px-4 py-3 border border-gray-300 rounded-xl bg-white shadow-sm outline-none focus:border-army-700 transition"
          />
        </div>

        {/* description */}
        <div className="flex flex-col">
          <label htmlFor="description" className="font-medium text-gray-700">Опис</label>
          <textarea
            id="description"
            placeholder="Додайте опис"
            rows={6}
            value={category.description}
            onChange={(e) => setCategory({ ...category, description: e.target.value })}
            className="mt-1 px-4 py-3 border border-gray-300 rounded-xl bg-white shadow-sm outline-none focus:border-army-700 transition resize-none"
          />
        </div>

        {/* button */}
        <button 
          type="submit"
          className="w-full py-3 rounded-xl text-white font-semibold shadow-md bg-linear-to-r from-green-400 to-green-600 hover:opacity-90 transition flex items-center justify-center gap-2 border border-green-600 cursor-pointer">
          {isLoading ? 'Завантаження...' : 'Завантажити категорію'}
        </button>
      </form>
    </div>
  );
};

export default AddCategoryAnalyticalOwner;

