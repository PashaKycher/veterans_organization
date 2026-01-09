
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import api from "../../../api/axios";
import toast from "react-hot-toast";

const AddPositionOwner = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const articleId = searchParams.get("article");
  const articleModel = searchParams.get("model");
  const [form, setForm] = useState({
    title: "",
    content: "",
    tags: "",
    position_type: articleModel || "single",
    article: articleId || null,
    article_model: articleModel || null
  });

  const onChange = e =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const onSubmit = async e => {
    e.preventDefault();

    if (!form.title || !form.content) {
      toast.error("Заповніть заголовок і текст");
      return;
    }
    if (form.position_type !== form.article_model) {
      if (form.article_model !== null) {
        toast.error("Тип позиції не відповідає моделі статті");
        return;
      }
    }

    try {
      const token = localStorage.getItem("token");
      const { data } = await api.post("/api/position/create", { ...form, tags: form.tags ? form.tags.split(",").map(t => t.trim()) : [] }, { headers: { Authorization: token } });

      if (data.success) {
        toast.success("Позицію створено");
        navigate("/owner/position");
        localStorage.setItem("token", data.token);
      }
    } catch {
      toast.error("Помилка створення позиції");
    }
  };

  return (
    <div className="px-6 md:px-16 py-12 bg-gray-50 w-full">
      <h1 className="text-3xl font-semibold mb-8">Створити позицію</h1>

      <form onSubmit={onSubmit} className="max-w-4xl space-y-6">

        {/* TITLE */}
        <input
          type="text"
          name="title"
          placeholder="Заголовок позиції"
          value={form.title}
          onChange={onChange}
          className="w-full px-4 py-3 rounded-xl border focus:outline-none"
        />

        {/* TYPE */}
        <select
          name="position_type"
          value={form.position_type}
          onChange={onChange}
          className="px-4 py-2 rounded-lg border"
        >
          <option value="single">Самостійна позиція</option>
          <option value="Analytical">Позиція до аналітики</option>
          <option value="News">Позиція до новини</option>
        </select>

        {/* ARTICLE INFO */}
        {form.article && (
          <div className="text-sm text-gray-600 bg-gray-100 p-4 rounded-lg">
            Привʼязано до матеріалу ({form.article_model === "Analytical" ? "Аналітики" : "Новин"})
          </div>
        )}

        {/* CONTENT */}
        <textarea
          name="content"
          value={form.content}
          onChange={onChange}
          rows={12}
          placeholder="Текст позиції. Коротко. Субʼєктно. По суті."
          className="w-full px-4 py-3 rounded-xl border focus:outline-none resize-none"
        />

        {/* TAGS */}
        <input
          type="text"
          name="tags"
          placeholder="Теги (через кому)"
          value={form.tags}
          onChange={onChange}
          className="w-full px-4 py-2 rounded-lg border"
        />

        {/* ACTIONS */}
        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            className="px-6 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700 transition"
          >
            Зберегти
          </button>

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="px-6 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
          >
            Скасувати
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPositionOwner;
