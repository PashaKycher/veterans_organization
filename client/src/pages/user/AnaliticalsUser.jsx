import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Title } from "../../components/helpers/Title";
import api from "../../api/axios";

const AnaliticalsUser = () => {
    const navigate = useNavigate();
    const [analiticals, setAnaliticals] = useState([])

    const fetchProfile = async () => {
    try {
      const token = localStorage.getItem("token");
      const { data } = await api.get("/api/users/data", { headers: { Authorization: token } });
      if (data.success) {
        setAnaliticals(data.user.analiticals);
        localStorage.setItem("token", data.token);
      }
    } catch (error) {
      console.error(error)
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);


    if (!analiticals.length) {return (<div className="text-sm text-gray-500 p-4">Ви ще не додали жодної аналітики</div>)}

    return (
        <section className="bg-bg min-h-screen text-text overflow-hidden w-full space-y-4">
            <div className='p-4'><Title title='Аналітика' subtitle='Ці статті ви додали до обраних' /></div>
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-10 px-6 md:px-16 lg:px-24 xl:px-40 py-16">
                {analiticals.map(item => (
                    <article key={item._id} onClick={() => navigate(`/analytical/${item._id}`)} className="relative bg-white border border-neutral-200 rounded-xl p-6 cursor-pointer transition flex flex-col h-full">
                        <h3 className="font-semibold text-lg text-graphite">{item.title}</h3>
                        <p className="text-sm text-gray-600 mt-2 line-clamp-3">{item.excerpt }</p>
                        <div className="text-xs text-gray-400 mt-3">{new Date(item.createdAt).toLocaleDateString("uk-UA")}</div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default AnaliticalsUser;
