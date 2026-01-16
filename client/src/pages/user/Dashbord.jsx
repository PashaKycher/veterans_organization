import React, { useEffect, useState } from 'react'
import { Title } from '../../components/helpers/Title';
import { useNavigate } from 'react-router-dom';
import api from '../../api/axios';

const Dashboard = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [analytical, setAnalytical] = useState(0);
  const [news, setNews] = useState(0);

  const fetchProfile = async () => {
    try {
      const token = localStorage.getItem("token");
      const { data } = await api.get("/api/users/data", { headers: { Authorization: token } });
      if (data.success) {
        setUser(data.user);
        setAnalytical(data.user.analiticals.length);
        setNews(data.user.news.length);
        localStorage.setItem("token", data.token);
      }
    } catch (error) {
      console.error(error)
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <section className="w-full min-h-screen bg-neutral-50 px-8 py-10 text-neutral-900">
      {/* Header */}
      <header className="mb-10">
        <Title
          title="Простір учасника"
          subtitle="Ви — частина спільноти Клубу Захисників України"
        />
      </header>
      {/* Metrics Ounter */}
      <h2 className="mb-4 text-lg font-medium">Метрика матеріалів, які ви додали до обраних</h2>
      <div className="mb-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
        <Metric title="Аналітика" value={`${analytical} матеріали`} />
        <Metric title="Новини" value={`${news} матеріали`} />
      </div>
      {/* Role */}
      <section className="mb-10 max-w-2xl">
        <h2 className="mb-3 text-lg font-medium">Ваша роль</h2>
        <p className="text-sm leading-relaxed text-neutral-700">КЗУ — це не статус і не формальність. Це спільнота людей відповідальності й дії. Участь визначається внеском.</p>
      </section>
      {/* Actions */}
      <section className="mb-10">
        <h2 className="mb-4 text-lg font-medium">Можливі дії</h2>
        <div className="flex flex-wrap gap-3">
          <div onClick={() => navigate("/supportform?mode=support")}><Action label="Долучитись до ініціативи" /></div>
          <div onClick={() => navigate('/clubform')}><Action label="Подати заявку до Клубу" /></div>
          <div onClick={() => navigate('/ideaform')}><Action label="Запропонувати ідею" /></div>
        </div>
      </section>
      {/* Recommended */}
      <section className="max-w-2xl">
        <h2 className="mb-4 text-lg font-medium">Ваша роль у спільноті</h2>
        <ul className="space-y-3 border-l border-neutral-300 pl-4 text-sm text-neutral-700">
          <li>Сформуйте свій профіль як учасника спільноти відповідальності</li>
          <li>Ознайомтесь з аналітикою Клубу, щоб розуміти ключові процеси війни та державотворення</li>
          <li>Сформулюйте власну позицію щодо принципових питань</li>
          <li>Долучайтесь до внутрішнього діалогу спільноти</li>
          <li>Підтримайте розвиток Клубу як інституції</li>
        </ul>
      </section>
    </section>
  );
};

const Action = ({ label }) => (
  <button className=" rounded border border-neutral-800 px-4 py-2 text-sm text-neutral-800 transition hover:bg-neutral-900 hover:text-white">{label}</button>
);

const Metric = ({ title, value }) => (
  <div className="rounded-md border border-neutral-300 bg-white p-4">
    <div className="text-lg font-semibold">{value}</div>
    <div className="mt-1 text-xs uppercase tracking-wide text-neutral-500">
      {title}
    </div>
  </div>
);

export default Dashboard;

