import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Title } from "../../components/helpers/Title";
import api from "../../api/axios";

const NewsUser = () => {
    const navigate = useNavigate();
    const [news, setNews] = useState([])

    const fetchProfile = async () => {
    try {
      const token = localStorage.getItem("token");
      const { data } = await api.get("/api/users/data", { headers: { Authorization: token } });
      if (data.success) {
        setNews(data.user.news);
        localStorage.setItem("token", data.token);
      }
    } catch (error) {
      console.error(error)
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

    if (!news.length) {return (<div className="text-sm text-gray-500 p-4">Ви ще не додали жодної новини</div>)}

    return (
        <section className="bg-bg min-h-screen text-text overflow-hidden w-full space-y-4">
            <div className='p-4'><Title title='Новини' subtitle='Ці статті ви додали до обраних' /></div>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 px-6 md:px-16 lg:px-24 xl:px-40 py-16">
                {news.map(item => (
                    <div key={item._id} onClick={() => navigate(`/news/${item._id}`)} className="relative bg-white border border-neutral-200 rounded-xl p-6 cursor-pointer transition flex flex-col h-full">
                        <div>
                            <h4 className="font-medium text-graphite">{item.title}</h4>
                            <p className="text-sm text-gray-600 mt-2 line-clamp-3">{item.excerpt}</p>
                            <div className="text-xs text-gray-400 mt-3">{new Date(item.createdAt).toLocaleDateString("uk-UA")}</div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default NewsUser;
