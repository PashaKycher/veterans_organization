import { useState } from "react";
import api from "../../api/axios";
import toast from "react-hot-toast";

const UserCard = ({ user, refresh }) => {
  const [state, setState] = useState({
    role: user.role,
    roleOwner: user.roleOwner,
    isLeader: user.isLeader,
    isClubLeader: user.isClubLeader,
    storiesForPage: user.storiesForPage || ""
  });

  const save = async () => {
    try {
      const token = localStorage.getItem("token");

      await api.put("/api/users/role", { id: user._id, role: state.role }, { headers: { Authorization: token } });
      await api.put("/api/users/role-owner", { id: user._id, roleOwner: state.roleOwner }, { headers: { Authorization: token } });
      await api.put("/api/users/is-leader", { id: user._id, isLeader: state.isLeader }, { headers: { Authorization: token } });
      await api.put("/api/users/is-club-leader", { id: user._id, isClubLeader: state.isClubLeader }, { headers: { Authorization: token } });
      await api.put("/api/users/stories-for-page", { id: user._id, storiesForPage: state.storiesForPage }, { headers: { Authorization: token } });

      toast.success("Зміни збережено");
      refresh();
    } catch (e) {
      toast.error("Помилка збереження");
    }
  };

  return (
    <article className="bg-white border rounded-xl p-6 flex flex-col xl:flex-row gap-6">
      <img src={user.avatar || "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"} className="w-full h-auto mx-auto xl:w-1/3 aspect-square rounded-lg object-cover" />

      <div className="flex-1 space-y-2">
        <div className="text-sm text-gray-500">{user.email}</div>
        <div className="font-semibold">{user.full_name}</div>
        <div className="text-sm text-gray-400">@{user.user_name}</div>

        <div className="flex flex-col md:flex-row gap-4 mt-3">
          <select value={state.role} onChange={e => setState({ ...state, role: e.target.value })}>
            <option value="user">користувач</option>
            <option value="owner">співробітник</option>
          </select>

          {state.role === "owner" && (
            <select value={state.roleOwner} onChange={e => setState({ ...state, roleOwner: e.target.value })}>
              <option value="user">користувач</option>
              <option value="reporter">репортер</option>
              <option value="editor">редактор</option>
              <option value="moderator">модератор</option>
              <option value="admin">адміністратор</option>
            </select>
          )}
        </div>

        <div className="flex gap-6 mt-3">
          <label><input type="checkbox" checked={state.isLeader} onChange={e => setState({ ...state, isLeader: e.target.checked })} /> Лідер</label>
          <label><input type="checkbox" checked={state.isClubLeader} onChange={e => setState({ ...state, isClubLeader: e.target.checked })} /> Клуб</label>
        </div>

        {(state.isLeader || state.isClubLeader) && (
          <textarea
            className="w-full border rounded-md p-2 mt-3"
            rows="3"
            value={state.storiesForPage}
            onChange={e => setState({ ...state, storiesForPage: e.target.value })}
          />
        )}

        <button onClick={save} className="mt-4 px-5 py-2.5 rounded-xl text-white bg-linear-to-r from-emerald-500 to-emerald-700">
          зберегти
        </button>
      </div>
    </article>
  );
};

export default UserCard;
