import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../../api/axios";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

const UpdatePositionOwner = () => {
  const user = useSelector(state => state.user.user);
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState(null);

  const fetchPosition = async () => {
    try {
      const { data } = await api.get(`/api/position/get/${id}`);
      if (data.success) {
        setForm({ ...data.data, tags: data.data.tags?.join(", ") || "", status: "" });
      }
    } catch {
      toast.error("Не вдалося завантажити позицію");
    }
  };

  useEffect(() => {
    if (!id) navigate("/owner/position");
    fetchPosition();
  }, [id]);

  const onChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const onSubmit = async e => {
    e.preventDefault();

    try {
      if(form.status === "") {
        toast.error("Оберіть статус позиції");
        return;
      }
      const token = localStorage.getItem("token");
      const { data } = await api.post(`/api/position/update/${id}`, { ...form, tags: form.tags ? form.tags.split(",").map(t => t.trim()) : [] }, { headers: { Authorization: token } });

      if (data.success) {
        toast.success("Зміни збережено");
        navigate("/owner/position");
      }
    } catch {
      toast.error("Помилка збереження");
    }
  };

  if (!form) {
    return <div className="py-32 text-center text-gray-500">Завантаження…</div>;
  }

  return (
    <div className="px-6 md:px-16 py-12 bg-gray-50 w-full">
      <h1 className="text-3xl font-semibold mb-8">Редагувати позицію</h1>

      <form onSubmit={onSubmit} className="max-w-4xl space-y-6">

        <input
          type="text"
          name="title"
          placeholder="Заголовок позиції"
          value={form.title}
          onChange={onChange}
          className="w-full px-4 py-3 rounded-xl border"
        />

        <div className="flex flex-col md:flex-row gap-2 justify-between">
          <select name="position_type" value={form.position_type} onChange={onChange} className="px-4 py-2 rounded-lg border">
            <option value="single">Самостійна позиція</option>
            <option value="Analytical">Позиція до аналітики</option>
            <option value="News">Позиція до новини</option>
          </select>

          <select name="status" value={form.status} onChange={onChange} className="px-4 py-2 rounded-lg border">
            <option value="">Оберніть статус</option>
            <option value="draft">Чернетка</option>
            <option value="review">На перевірці</option>
            {(user.roleOwner === "editor" || user.roleOwner === "admin") && <option value="published">Опубліковано</option>}
            {(user.roleOwner === "editor" || user.roleOwner === "admin") && <option value="archived">Архів</option>}
          </select>
        </div>

        {form.article && (
          <div className="text-sm text-gray-600 bg-gray-100 p-4 rounded-lg">
            Привʼязано до матеріалу ({form.article_model})
          </div>
        )}

        <textarea
          name="content"
          value={form.content}
          placeholder="Текст позиції. Коротко. Субʼєктно. По суті."
          onChange={onChange}
          rows={12}
          className="w-full px-4 py-3 rounded-xl border resize-none"
        />

        <input
          type="text"
          name="tags"
          value={form.tags}
          onChange={onChange}
          placeholder="Теги (через кому)"
          className="w-full px-4 py-2 rounded-lg border"
        />

        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            className="px-6 py-2 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700"
          >
            Оновити
          </button>

          <button
            type="button"
            onClick={() => navigate(-1)}
            className="px-6 py-2 rounded-lg bg-gray-200"
          >
            Назад
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdatePositionOwner;
