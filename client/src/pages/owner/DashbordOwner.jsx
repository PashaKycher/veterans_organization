import React, { useEffect, useState } from 'react'
import { Title } from '../../components/helpers/Title';
import api from '../../api/axios';

const DashboardOwner = () => {
  const [user, setUser] = useState(null);
  const [analiticals, setAnaliticals] = useState([]);
  const [news, setNews] = useState([]);
  const [position, setPosition] = useState([]);

  const [analiticalsLength, setAnaliticalsLength] = useState([]);
  const [newsLength, setNewsLength] = useState([]);
  const [positionLength, setPositionLength] = useState([]);

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem("token");
      const { data } = await api.get("/api/users/data", { headers: { Authorization: token } });
      if (data.success) {
        setUser(data.user);
        localStorage.setItem("token", data.token);
      }
    } catch (error) {
      console.error(error)
    }
  };
  const feachAnaliticl = async () => {
    try {
      const { data } = await api.get(`/api/analytical/get-by-user-id/${user._id}`);
      if (data.success) {
        setAnaliticals(data.data)
      }
    } catch (error) {
      console.error(error);
    }
  };
  const feachNews = async () => {
    try {
      const { data } = await api.get(`/api/news/get-by-user-id/${user._id}`);
      if (data.success) {
        setNews(data.data)
      }
    } catch (error) {
      console.error(error);
    }
  };
  const feachPosition = async () => {
    try {
      const { data } = await api.get(`/api/position/get-by-user-id/${user._id}`);
      if (data.success) {
        setPosition(data.data)
      }
    } catch (error) {
      console.error(error);
    }
  };

  const feachPositionLength = async () => {
    try {
      const { data } = await api.get(`/api/position/get-length`);
      if (data.success) {
        setPositionLength(data.data)
      }
    } catch (error) {
      console.error(error);
    }
  }

  const feachNewsLength = async () => {
    try {
      const { data } = await api.get(`/api/news/get-length`);
      if (data.success) {
        setNewsLength(data.data)
      }
    } catch (error) {
      console.error(error);
    }
  }

  const feachAnaliticalLength = async () => {
    try {
      const { data } = await api.get(`/api/analytical/get-length`);
      if (data.success) {
        setAnaliticalsLength(data.data)
      }
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchProfile();
  }, []);

  useEffect(() => {
    if (!user?._id) return;

    feachAnaliticl();
    feachNews();
    feachPosition();
    feachPositionLength();
    feachNewsLength();
    feachAnaliticalLength();
  }, [user]);

  return (
    <section className="w-full min-h-screen bg-neutral-50 px-8 py-10 text-neutral-900">
      {/* Header */}
      <header className="mb-10">
        <Title
          title="Панель відповідальності"
          subtitle="Ви — частина спільноти Клубу Захисників України"
        />
      </header>

      {/* Metrics All */}
      <h3>Загальна метрика</h3>
      <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
        <Metric title="Аналітика" value={`${analiticalsLength} матеріали`} />
        <Metric title="Новини" value={`${newsLength} матеріали`} />
        <Metric title="Позиції" value={`${positionLength} матеріали`} />
      </div>
      
      {/* Metrics Ounter */}
      <h3>Особиста метрика</h3>
      <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
        <Metric title="Аналітика" value={`${analiticals.length} матеріали`} />
        <Metric title="Новини" value={`${news.length} матеріали`} />
        <Metric title="Позиції" value={`${position.length} матеріали`} />
      </div>

      {/* <section className="mb-12">
        <h2 className="mb-4 text-lg font-medium">
          Контент
        </h2>
        <div className="flex flex-wrap gap-3">
          <Action label="Додати аналітику" />
          <Action label="Опублікувати позицію" />
          <Action label="Модерувати матеріали" />
        </div>
      </section>
      <section className="mb-12">
        <h2 className="mb-4 text-lg font-medium">
          Клуб
        </h2>
        <div className="flex flex-wrap gap-3">
          <Action label="Додати лідера" />
          <Action label="Оновити ролі" />
          <Action label="Переглянути заявки" />
        </div>
      </section> */}

      {/* Responsibility block */}
      <section className="max-w-2xl border-t border-neutral-300 pt-6">
        <p className="text-sm leading-relaxed text-neutral-700">
          Портал КЗУ — це інструмент формування класу відповідальності.
          Кожне рішення впливає на спільноту, репутацію та майбутнє.
        </p>
      </section>
    </section>
  );
};

const Metric = ({ title, value }) => (
  <div className="rounded-md border border-neutral-300 bg-white p-4">
    <div className="text-lg font-semibold">{value}</div>
    <div className="mt-1 text-xs uppercase tracking-wide text-neutral-500">
      {title}
    </div>
  </div>
);

// const Action = ({ label }) => (
//   <button
//     className="
//       rounded border border-neutral-800
//       px-4 py-2 text-sm
//       text-neutral-800
//       transition
//       hover:bg-neutral-900 hover:text-white
//     "
//   >
//     {label}
//   </button>
// );

export default DashboardOwner;


