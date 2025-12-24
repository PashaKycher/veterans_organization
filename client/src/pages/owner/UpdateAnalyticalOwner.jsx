import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../api/axios";
import toast from "react-hot-toast";
import { Title } from "../../components/helpers/Title";

const UpdateAnalyticalOwner = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]);

  const [form, setForm] = useState({
    title: "",
    excerpt: "",
    content: ""
  });

  const fetchAnalytical = async () => {
    try {
      const { data } = await api.get(`/api/analytical/${id}`);
      if (data.success) {
        setForm({
          title: data.data.title,
          excerpt: data.data.excerpt,
          content: data.data.content
        });
      }
    } catch {
      toast.error("Не вдалося завантажити матеріал");
    }
  };

  useEffect(() => {
    fetchAnalytical();
  }, []);

  const updateHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const token = localStorage.getItem("token");
      const formData = new FormData();

      Object.entries(form).forEach(([key, value]) =>
        formData.append(key, value)
      );

      images.forEach((img) => formData.append("images", img));

      const { data } = await api.put(
        `/api/analytical/update/${id}`,
        formData,
        { headers: { Authorization: token } }
      );

      if (data.success) {
        toast.success("Матеріал оновлено");
        navigate("/owner/analytical");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="px-6 md:px-16 py-10">
      <Title
        title="Редагування матеріалу"
        subtitle="Внесення змін до аналітики"
      />

      <form
        onSubmit={updateHandler}
        className="mt-8 max-w-3xl bg-white border rounded-xl p-6 space-y-6"
      >
        <input
          type="text"
          className="w-full border rounded-lg px-4 py-3"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
        />

        <textarea
          className="w-full border rounded-lg px-4 py-3"
          rows={3}
          value={form.excerpt}
          onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
        />

        <textarea
          className="w-full border rounded-lg px-4 py-3 min-h-[200px]"
          value={form.content}
          onChange={(e) => setForm({ ...form, content: e.target.value })}
        />

        <input
          type="file"
          multiple
          accept="image/*"
          onChange={(e) => setImages([...e.target.files])}
        />

        <div className="flex gap-4">
          <button
            type="submit"
            className="px-6 py-3 rounded-lg bg-green-600 text-white font-semibold"
          >
            {loading ? "Оновлення..." : "Зберегти зміни"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default UpdateAnalyticalOwner;

