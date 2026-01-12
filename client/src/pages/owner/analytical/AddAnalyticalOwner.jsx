import React, { useEffect, useState } from "react";
import api from "../../../api/axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Title } from "../../../components/helpers/Title";
import { assets } from "../../../assets/assets";
import { useSelector } from "react-redux";

const AddAnalyticalOwner = () => {
  const user = useSelector((state) => state.user.user);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const MAX_FILE_SIZE = 5 * 1024 * 1024;

  const [categories, setCategories] = useState([]);
  const [images, setImages] = useState([]);

  const [form, setForm] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "",
    tags: "",
    position_type: "Analytical",
    status: "draft",
    is_featured: false,
    post_type: "",
  });

  const removeImage = (index) => {
    setImages(images.filter((_, i) => i !== index));
  };

  /* -------------------- categories -------------------- */
  const fetchCategories = async () => {
    try {
      const { data } = await api.get("/api/analyticalcategory/get");
      if (data.success) setCategories(data.data);
    } catch {
      toast.error("Не вдалося завантажити категорії");
    }
  };


  /* -------------------- submit -------------------- */
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    if (isLoading) return;

    if (images.length > 5) {
      toast.error("Максимальна кількість зображень - 5");
      return;
    }

    if (form.image) {
      if (form.image.size > MAX_FILE_SIZE) {
        toast.error("Розмір зображення не повинен перевищувати 5 МБ");
        return;
      }
    }

    if (form.excerpt.length > 300) {
      toast.error("Максимальна кількість символів у описі - 300");
      return;
    }

    if (!form.title || !form.content || !form.category) {
      toast.error("Заповніть обовʼязкові поля");
      return;
    }

    setIsLoading(true);

    try {
      const token = localStorage.getItem("token");
      const post_type = images.length === 0 ? "text" : images.length > 0 && form.content ? "text_with_image" : "image";
      const formData = new FormData();
      formData.append("position_type", form.position_type);
      formData.append("status", form.status);
      formData.append("title", form.title);
      formData.append("excerpt", form.excerpt);
      formData.append("content", form.content);
      formData.append("category", form.category);
      formData.append("post_type", post_type);
      formData.append("is_featured", form.is_featured);
      form.tags.split(",").map(t => t.trim()).filter(Boolean).forEach(tag => formData.append("tags[]", tag));

      images.forEach(img => { formData.append("images", img); });

      const { data } = await api.post("/api/analytical/create", formData, { headers: { Authorization: token, "Content-Type": "multipart/form-data" } });

      if (data.success) {
        if (form.status === "published") {
          console.log(data.id)
          await api.get(`/api/analytical/publish/${data.id}`, { headers: { Authorization: token } });
        }
        toast.success("Аналітичний матеріал створено");
        navigate("/owner/analytical");
        localStorage.setItem("token", data.token);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message || "Помилка створення");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);
  /* -------------------- UI -------------------- */
  return (
    <div className="px-6 md:px-12 max-w-5xl py-10 w-full">
      <Title
        title="Створення аналітичного матеріалу"
        subtitle="Глибокий текст, відповідальність за слово та позицію"
      />

      <form onSubmit={onSubmitHandler} className="mt-8 w-full bg-white space-y-6">

        {/* position & status */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="grid gap-2">
            <label className="label">Тип матеріалу</label>
            <select className="w-full border rounded-lg px-2 py-1" value={form.position_type} onChange={(e) => setForm({ ...form, position_type: e.target.value })}>
              <option value="Analytical">Аналітика</option>
              {/* <option value="position">Позиція</option> */}
            </select>
          </div>

          <div className="grid gap-2">
            <label className="label">Статус</label>
            <select className="w-full border rounded-lg px-2 py-1" value={form.status} onChange={(e) => setForm({ ...form, status: e.target.value })}>
              <option value="draft">Чернетка</option>
              <option value="review">На перевірці</option>
              {(user.roleOwner === "editor" || user.roleOwner === "admin") && <option value="published">Опубліковано</option>}
              {(user.roleOwner === "editor" || user.roleOwner === "admin") && <option value="archived">Архів</option>}
            </select>
          </div>
        </div>

        {/* category */}
        <div>
          <label className="label">Категорія</label>
          <select className="w-full border rounded-lg px-4 py-3" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} required>
            <option value="">Оберіть категорію</option>
            {categories.map(cat => (
              <option key={cat._id} value={cat._id}>{cat.title}</option>
            ))}
          </select>
        </div>

        {/* tags */}
        <div>
          <label className="label">Теги (через кому)</label>
          <input
            className="w-full border rounded-lg px-4 py-3"
            value={form.tags}
            onChange={(e) => setForm({ ...form, tags: e.target.value })}
          />
        </div>

        {/* title */}
        <div>
          <label className="label">Заголовок</label>
          <input
            type="text"
            placeholder="Заголовок"
            className="w-full border rounded-lg px-4 py-3"
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
            required
          />
        </div>

        {/* excerpt */}
        <div>
          <label className="label">Короткий опис</label>
          <textarea rows={3} placeholder="Короткий опис" className="w-full border rounded-lg px-4 py-3" value={form.excerpt} onChange={(e) => setForm({ ...form, excerpt: e.target.value })} />
        </div>

        {/* content */}
        <div>
          <label className="label">Основний текст</label>
          <textarea rows={10}
            placeholder="Основний текст"
            className="w-full border rounded-lg px-4 py-3 min-h-[200px]"
            value={form.content}
            onChange={(e) => setForm({ ...form, content: e.target.value })}
            required
          />
        </div>

        {/* images */}
        <div htmlFor="images" className="group relative flex flex-wrap gap-3 p-4 rounded-xl border border-dashed border-graphite/30 bg-white cursor-pointer hover:border-primary transition">
          {/* PREVIEW */}
          {images.length > 0 ? (
            images.map((img, index) => (
              <div key={index} className="w-20 h-20 rounded-lg overflow-hidden border border-graphite/20 bg-lightGray relative">
                <img src={URL.createObjectURL(img)} alt={`preview-${index}`} className="w-full h-full object-cover" />
                <button
                  type="button"
                  onClick={() => { (e) => preventDefault(); removeImage(index) }}
                  className="absolute top-1 right-1 text-xs bg-black/60 text-white px-1 rounded hover:text-red-500 transition"
                >
                  ✕
                </button>
              </div>
            ))
          ) : (
            <label htmlFor="images">
              <div className="w-20 h-20 rounded-lg overflow-hidden border border-graphite/20 bg-lightGray relative">
                <img src={assets.upload_icon} alt="upload" className="w-full h-full object-cover" />
              </div>
              <input type="file" id="images" multiple accept="image/*" className="hidden"
                onChange={(e) => { const files = Array.from(e.target.files); setImages(prev => [...prev, ...files].slice(0, 5)); }}
              />
            </label>
          )}

          {/* HOVER OVERLAY */}
          {images.length > 0 && (
            <label htmlFor="images">
              <div className="w-20 h-20 rounded-lg overflow-hidden border border-graphite/20 bg-lightGray relative">
                <img src={assets.upload_icon} alt="upload" className="w-full h-full object-cover" />
              </div>
              <input type="file" id="images" multiple accept="image/*" className="hidden"
                onChange={(e) => { const files = Array.from(e.target.files); setImages(prev => [...prev, ...files].slice(0, 5)); }}
              />
            </label>
          )}
        </div>

        {/* is_featured */}

        {/* submit */}
        <button
          type="submit"
          disabled={isLoading}
          className="px-6 py-3 rounded-lg bg-green-600 text-white font-semibold"
        >
          {isLoading ? "Збереження..." : "Створити"}
        </button>
      </form>
    </div>
  );
};

export default AddAnalyticalOwner;
