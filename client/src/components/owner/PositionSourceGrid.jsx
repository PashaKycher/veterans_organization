import { useEffect, useState, useMemo } from "react";
import api from "../../api/axios";
import { useNavigate } from "react-router-dom";

const PositionSourceGrid = ({ filter }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    let isMounted = true;

    const fetchAll = async () => {
      try {
        setLoading(true);

        const [analyticalRes, newsRes] = await Promise.all([
          api.get("/api/analytical/get"),
          api.get("/api/news/get"),
        ]);

        if (!isMounted) return;

        const analytical = analyticalRes.data?.success
          ? analyticalRes.data.data
          : [];

        const news = newsRes.data?.success
          ? newsRes.data.data
          : [];

        setData([...analytical, ...news]);
      } catch (error) {
        console.error("Fetch error:", error);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchAll();

    return () => {
      isMounted = false;
    };
  }, []);

  const filteredData = useMemo(() => {
    let result = data.filter(item => item.positionId === null);

    if (filter) {
      const q = filter.toLowerCase();
      result = result.filter(
        i =>
          i.title?.toLowerCase().includes(q) ||
          i.excerpt?.toLowerCase().includes(q)
      );
    }

    return result;
  }, [data, filter]);

  if (loading) {
    return (
      <div className="py-20 text-center text-neutral-500">
        Завантаження матеріалів…
      </div>
    );
  }

  return (
    <section>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
        {filteredData.map(a => (
          <div
            key={a._id}
            className="relative bg-white border border-neutral-200 rounded-xl p-6 flex flex-col h-full"
          >
            <span className="absolute top-4 left-4 text-xs font-medium px-3 py-1 rounded-full bg-neutral-100">
              {a.position_type === "Analytical"
                ? "Аналітика"
                : a.position_type === "News"
                ? "Новина"
                : ""}
            </span>

            <span
              className={`absolute top-4 right-4 w-3 h-3 rounded-full ${
                a.status === "draft"
                  ? "bg-blue-600"
                  : a.status === "review"
                  ? "bg-yellow-500"
                  : a.status === "published"
                  ? "bg-green-600"
                  : "bg-red-600"
              }`}
            />

            <h3 className="mt-10 text-lg md:text-xl font-semibold text-title">
              {a.title}
            </h3>

            <button
              onClick={() =>
                navigate(
                  `/owner/addposition?article=${a._id}&model=${a.position_type}`
                )
              }
              className="mt-auto pt-6 text-sm text-emerald-600 hover:underline self-end"
            >
              Створити позицію →
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PositionSourceGrid;
