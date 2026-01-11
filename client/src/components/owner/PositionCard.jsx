import { useNavigate } from "react-router-dom";
import api from "../../api/axios";
import { useSelector } from "react-redux";

const PositionCard = ({ position, refresh, editable }) => {
  const navigate = useNavigate();
  const user = useSelector(state => state.user.user);

  const publish = async () => {
    await api.get(`/api/position/publish/${position._id}`, { headers: { Authorization: localStorage.getItem("token") } });
    if (position.position_type !== null) {
      const { data } = await api.put(`/api/${position.position_type === "News" ? "news" : "analytical"}/addposition/${position.article._id}`, { _id: position._id }, { headers: { Authorization: localStorage.getItem("token") } });
    }
    refresh();
  };

  const remove = async () => {
    await api.delete(`/api/position/delete/${position._id}`, { headers: { Authorization: localStorage.getItem("token") } });
    refresh();
  };

  return position.status === "draft" && !editable ? null : (
    <div className="bg-white rounded-xl shadow p-6 space-y-4 flex flex-col h-full">
      <div className="text-xs text-gray-500 uppercase">
        {position.position_type} · {position.status}
      </div>

      <h3 className="font-semibold text-gray-900 line-clamp-2">
        {position.title}
      </h3>

      {position.article && (
        <p className="text-xs text-gray-500">
          <span className="font-semibold text-gray-700">На основі:</span> {position.article.title}
        </p>
      )}

      <div className="flex flex-col md:flex-row text-xs lg:text-sm gap-3 mt-auto pt-6">
        <button onClick={() => navigate(`/position/${position._id}`)} className=" text-blue-600 hover:underline">
          Переглянути
        </button>

        {position.status !== "published" && (user.roleOwner === "editor" || user.roleOwner === "admin") && (
          <button onClick={publish} className=" text-green-600 hover:underline">
            Опублікувати
          </button>
        )}

        {position.status !== "draft" && (user.roleOwner === "editor" || user.roleOwner === "admin") && (
          <button onClick={() => navigate(`/owner/editposition/${position._id}`)} className=" text-gray-600 hover:underline">
            Редагувати
          </button>
        )}

        {editable && (position.status === "draft" ? (<>
          <button onClick={() => navigate(`/owner/editposition/${position._id}`)} className=" text-gray-600 hover:underline">
            Редагувати
          </button>
          <button onClick={remove} className=" text-red-600 hover:underline">
            Видалити
          </button>
        </>) : (""))}
      </div>
    </div>
  );
};

export default PositionCard;
