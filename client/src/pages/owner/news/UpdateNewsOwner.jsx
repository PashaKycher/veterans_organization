import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../../api/axios";
import toast from "react-hot-toast";
import { Title } from "../../../components/helpers/Title";
import { assets } from "../../../assets/assets";
import { useSelector } from "react-redux";

const UpdateNewsOwner = () => {
  const user = useSelector((state) => state.user.user);
  const { id } = useParams();
  const navigate = useNavigate();

  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // 🔹 server images
  const [existingImages, setExistingImages] = useState([]);
  // 🔹 new uploads
  const [images, setImages] = useState([]);

  const [form, setForm] = useState({
    author: {},
    title: "",
    excerpt: "",
    content: "",
    category: "",
    tags: "",
    position_type: "analysis",
    status: "draft",
    is_featured: false,
  });

  /* -------------------- categories -------------------- */
  const fetchCategories = async () => {
    try {
      const { data } = await api.get("/api/newscategory/get");
      if (data.success) setCategories(data.data);
    } catch {
      toast.error("Не вдалося завантажити категорії");
    }
  };

  /* -------------------- news -------------------- */
  const fetchNews = async () => {
    try {
      const { data } = await api.get(`/api/news/get/${id}`);
      if (data.success) {
        const post = data.data;

        setForm({
          author: post.author || {},
          title: post.title || "",
          excerpt: post.excerpt || "",
          content: post.content || "",
          category: post.category?._id || "",
          tags: post.tags?.join(", ") || "",
          position_type: post.position_type || "News",
          status: post.status || "draft",
          is_featured: post.is_featured || false,
        });

        setExistingImages(post.image_urls || []);
      }
    } catch {
      toast.error("Не вдалося завантажити матеріал");
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

      const post_type = images.length === 0 && existingImages.length === 0 ? "text" : "text_with_image";
      const formData = new FormData();
      formData.append("title", form.title);
      formData.append("excerpt", form.excerpt);
      formData.append("content", form.content);
      formData.append("category", form.category);
      formData.append("post_type", post_type);
      formData.append("position_type", form.position_type);
      formData.append("status", form.status);
      formData.append("is_featured", form.is_featured);

      // tags
      form.tags.split(",").map(t => t.trim()).filter(Boolean).forEach(tag => formData.append("tags[]", tag));
      // existing images
      if (existingImages.length > 0) { existingImages.forEach(url => formData.append("existing_images[]", url)); }
      if (existingImages.length === 0 && images.length === 0) { formData.append("existing_images", ""); }

      // new images
      images.forEach(img => { formData.append("images", img); });

      const { data } = await api.post(`/api/news/update/${id}`, formData, { headers: { Authorization: token, "Content-Type": "multipart/form-data", } });

      if (data.success) {
        if (form.status === "published") {
          await api.get(`/api/news/publish/${data.id}`, { headers: { Authorization: token } });
        }
        toast.success("Аналітичний матеріал оновлено");
        navigate("/owner/news");
        localStorage.setItem("token", data.token);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message || "Помилка оновлення");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchNews();
  }, []);

  return (
    <div className="px-6 md:px-12 max-w-5xl py-10 w-full">
      <Title
        title="Створення аналітичного матеріалу"
        subtitle="Глибокий текст, відповідальність за слово та позицію"
      />

      <form onSubmit={onSubmitHandler} className="mt-8 w-full bg-white space-y-6">

        {/* author */}
        <div className="flex flex-col md:flex-row gap-5 md:gap-10 items-center justify-start">
          <div className="w-10 h-10 md:w-20 md:h-20">
            <img src={form.author?.avatar || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} alt="Author" className="mx-auto w-10 h-10 max-md:mt-3 mb-1 md:w-20 md:h-20 rounded-full object-cover" />
          </div>
          <div className="grid gap-1">
            <p className="fond-semibold text-primary text-medium ">{form.author?.full_name}</p>
            <p className="fond-medium text-neutral-500 text-xs ">{form.author?.email}</p>
          </div>
        </div>

        {/* title */}
        <div>
          <label className="label">Заголовок</label>
          <input type="text" className="w-full border rounded-lg px-4 py-3" value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} required />
        </div>

        {/* excerpt */}
        <div>
          <label className="label">Короткий опис</label>
          <textarea rows={3} className="w-full border rounded-lg px-4 py-3" value={form.excerpt} onChange={(e) => setForm({ ...form, excerpt: e.target.value })} />
        </div>

        {/* content */}
        <div>
          <label className="label">Основний текст</label>
          <textarea rows={10} className="w-full border rounded-lg px-4 py-3 min-h-[200px]" value={form.content} onChange={(e) => setForm({ ...form, content: e.target.value })} required />
        </div>

        {/* category */}
        <div>
          <label className="label">Категорія</label>
          <select className="w-full border rounded-lg px-4 py-3" value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} required>
            <option value="">Оберіть категорію</option>
            {categories.map(cat => (<option key={cat._id} value={cat._id}>{cat.title}</option>))}
          </select>
        </div>

        {/* tags */}
        <div>
          <label className="label">Теги (через кому)</label>
          <input className="w-full border rounded-lg px-4 py-3" value={form.tags} onChange={(e) => setForm({ ...form, tags: e.target.value })} />
        </div>

        {/* images */}
        <div className="group relative flex flex-wrap gap-3 p-4 rounded-xl border border-dashed border-graphite/30 bg-white">

          {/* existing images */}
          {existingImages.map((url, index) => (
            <div key={index} className="w-20 h-20 rounded-lg overflow-hidden border relative">
              <img src={url} className="w-full h-full object-cover" />
              <button type="button" className="absolute top-1 right-1 text-xs bg-black/60 text-white px-1 rounded" onClick={() => setExistingImages(prev => prev.filter((_, i) => i !== index))}>
                ✕
              </button>
            </div>
          ))}

          {/* new images */}
          {images.map((img, index) => (
            <div key={index} className="w-20 h-20 rounded-lg overflow-hidden border relative">
              <img src={URL.createObjectURL(img)} className="w-full h-full object-cover" />
              <button type="button" className="absolute top-1 right-1 text-xs bg-black/60 text-white px-1 rounded" onClick={() => setImages(prev => prev.filter((_, i) => i !== index))}>
                ✕
              </button>
            </div>
          ))}

          {/* upload */}
          <label htmlFor="images">
            <div className="w-20 h-20 rounded-lg overflow-hidden border bg-lightGray cursor-pointer">
              <img src={assets.upload_icon} alt="upload" className="w-full h-full object-cover" />
            </div>
            <input type="file" id="images" multiple accept="image/*" className="hidden" onChange={(e) => { const files = Array.from(e.target.files); setImages(prev => [...prev, ...files].slice(0, 5)); }} />
          </label>
        </div>

        {/* position & status */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="grid gap-2">
            <label className="label">Тип матеріалу</label>
            <select className="w-full border rounded-lg px-2 py-1" value={form.position_type} onChange={(e) => setForm({ ...form, position_type: e.target.value })}>
              <option value="news">Новина</option>
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

        {/* submit */}
        <button type="submit" disabled={isLoading} className="px-6 py-3 rounded-lg bg-green-600 text-white font-semibold">
          {isLoading ? "Збереження..." : "Оновити"}
        </button>
      </form>
    </div>
  );
};

export default UpdateNewsOwner;
