import React, { useEffect, useState } from "react";
import { Pencil } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../api/axios";
import { assets } from "../assets/assets";
import { setUserData } from "../store/userSlice";

const MAX_FILE_SIZE = 5 * 1024 * 1024;

const UserIdentityPage = () => {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    full_name:  "",
    user_name:  "",
    bio:  "",
    mobile:  "",
    locstion:  "",
    avatar: null,
    cover_photo: null,
    address: {
      country:  "",
      state:  "",
      pincode:  "",
      city:  "",
      street:  "",
      bilding:  "",
      apartment:  ""
    }
  });

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem("token");
      const { data } = await api.get("/api/users/data", { headers: { Authorization: token } });
      if (data.success) {
        setForm({
          full_name: data.user.full_name || "",
          user_name: data.user.user_name || "",
          bio: data.user.bio || "",
          mobile: data.user.mobile || "",
          locstion: data.user.locstion || "",
          avatar: null,
          cover_photo: null,
          address: {
            country: data.user.address.country || "",
            state: data.user.address.state || "",
            pincode: data.user.address.pincode || "",
            city: data.user.address.city || "",
            street: data.user.address.street || "",
            bilding: data.user.address.bilding || "",
            apartment: data.user.address.apartment || ""
          }
        })
        localStorage.setItem("token", data.token);
      }
    } catch (error) {
      console.error(error)
    }
  };

  const onChange = e => { setForm({ ...form, [e.target.name]: e.target.value }) };
  const onAddressChange = e => { setForm({ ...form, address: { ...form.address, [e.target.name]: e.target.value } }) };
  const onSubmit = async e => {
    e.preventDefault();

    if (form.avatar && form.avatar.size > MAX_FILE_SIZE) {
      toast.error("Аватар не повинен перевищувати 5 МБ");
      return;
    }

    if (form.cover_photo && form.cover_photo.size > MAX_FILE_SIZE) {
      toast.error("Ковер фото не повинен перевищувати 5 МБ");
      return;
    }

    try {
      const formData = new FormData();

      formData.append("full_name", form.full_name);
      formData.append("user_name", form.user_name);
      formData.append("bio", form.bio);
      formData.append("mobile", form.mobile);
      formData.append("locstion", form.locstion);
      formData.append("address", JSON.stringify(form.address));

      if (form.avatar) formData.append("avatar", form.avatar);
      if (form.cover_photo) formData.append("cover_photo", form.cover_photo);

      const token = localStorage.getItem("token");
      const { data } = await api.put("/api/users/update", formData, { headers: { Authorization: token } });

      if (data.success) {
        toast.success(data.message)
        dispatch(setUserData(data.user))
        localStorage.setItem("token", data.token)
        setForm({
          full_name: "",
          user_name: "",
          bio: "",
          mobile: "",
          locstion: "",
          avatar: null,
          cover_photo: null,
          address: { country: "", city: "", street: "", apartment: "" }
        })
        navigate(-1)
      } else {
        console.error(data);
        toast.error(data.message);
      }

    } catch (error) {
      console.error(error);
      toast.error(
        error?.response?.data?.message || "Помилка оновлення профілю"
      );
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <div className="bg-bg min-h-screen text-text overflow-hidden w-full">

      {/* Cover */}
      <div className="relative p-4">
        <img
          src={form.cover_photo ? URL.createObjectURL(form.cover_photo) : user.cover_photo || assets.bridge}
          className="w-full h-56 object-cover rounded-xl"
        />
        <label className="absolute right-4 bottom-4 bg-white/80 p-2 rounded cursor-pointer">
          <Pencil size={16} />
          <input type="file" hidden onChange={e => setForm({ ...form, cover_photo: e.target.files[0] })} />
        </label>
      </div>

      {/* Avatar + Contact & location */}
      <div className="grid grid-cols-1 md:flex gap-6 mt-6 items-center p-4">
        <div className="relative w-32 h-32 mx-auto">
          <img
            src={form.avatar ? URL.createObjectURL(form.avatar) : user.avatar || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"}
            className="w-32 h-32 rounded-full object-cover"
          />
          <label className="absolute bottom-0 right-0 bg-white p-1 rounded-full cursor-pointer">
            <Pencil size={14} />
            <input type="file" hidden onChange={e => setForm({ ...form, avatar: e.target.files[0] })} />
          </label>
        </div>

        <div className="flex-1">
          <input name="user_name" value={form.user_name} onChange={onChange} placeholder="Імʼя в спільноті" className="text-2xl font-semibold w-full border-b pb-1 outline-none px-3 my-1" />
          <input name="full_name" value={form.full_name} onChange={onChange} placeholder="Повне імʼя" className="text-2xl font-semibold w-full border-b pb-1 outline-none px-3 my-1" />
          <div>
            <h3 className="font-semibold my-2">Контакт і локація</h3>
            <input name="locstion" value={form.locstion} onChange={onChange} placeholder="Місто / регіон" className="w-full border p-2 rounded mb-3" />
            <input name="mobile" value={form.mobile} onChange={onChange} placeholder="Контактний номер" className="w-full border p-2 rounded" />
          </div>
        </div>
      </div>

      {/* Identity */}
      <form onSubmit={onSubmit} className="mt-10 p-4 space-y-6">
        {/* Bio */}
        <textarea rows={6} name="bio" value={form.bio} onChange={onChange} placeholder="Про себе" className="w-full mt-2 border rounded p-3" />

        {/* Address */}
        <div>
          <h3 className="font-semibold mb-2">Адреса (за потреби)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <input name="country" placeholder="Країна" onChange={onAddressChange} className="border p-3 rounded" value={form.address.country} />
            <input name="state" placeholder="Область" onChange={onAddressChange} className="border p-3 rounded" value={form.address.state} />
            <input name="city" placeholder="Місто" onChange={onAddressChange} className="border p-3 rounded" value={form.address.city} />
            <input name="street" placeholder="Вулиця" onChange={onAddressChange} className="border p-3 rounded" value={form.address.street} />
            <input name="bilding" placeholder="Будинок" onChange={onAddressChange} className="border p-3 rounded" value={form.address.bilding} />
            <input name="apartment" placeholder="Квартира / офіс" onChange={onAddressChange} className="border p-3 rounded" value={form.address.apartment} />
            <input name="pincode" placeholder="Поштовий індекс" onChange={onAddressChange} className="border p-3 rounded" value={form.address.pincode} />


          </div>
        </div>

        <div className="grid grid-cols-1 md:flex md:justify-end gap-4 pt-6">
          <button type="button" onClick={() => navigate(-1)} className="px-4 py-2 border rounded-lg">Скасувати</button>
          <button type="submit" className="px-6 py-3 rounded-lg bg-green-600 text-white font-semibold">Зберегти</button>
        </div>
      </form>
    </div>
  );
};

export default UserIdentityPage;
