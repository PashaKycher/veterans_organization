import React from 'react'
import { Title } from '../../components/helpers/Title';

const DashboardUser = () => {
  return (
    <section className="w-full min-h-screen bg-neutral-50 px-8 py-10 text-neutral-900">
      {/* Header */}
      <header className="mb-10">
        <Title
          title="Простір учасника"
          subtitle="Ви — частина спільноти Клубу Захисників України"
        />
      </header>

      {/* Role */}
      <section className="mb-10 max-w-2xl">
        <h2 className="mb-3 text-lg font-medium">
          Ваша роль
        </h2>
        <p className="text-sm leading-relaxed text-neutral-700">
          КЗУ — це не статус і не формальність.
          Це спільнота людей відповідальності й дії.
          Участь визначається внеском.
        </p>
      </section>

      {/* Actions */}
      <section className="mb-10">
        <h2 className="mb-4 text-lg font-medium">
          Можливі дії
        </h2>
        <div className="flex flex-wrap gap-3">
          <Action label="Долучитись до ініціативи" />
          <Action label="Подати заявку до Клубу" />
          <Action label="Запропонувати ідею" />
        </div>
      </section>

      {/* Recommended */}
      <section className="max-w-2xl">
        <h2 className="mb-4 text-lg font-medium">
          Рекомендовано
        </h2>
        <ul className="space-y-3 border-l border-neutral-300 pl-4 text-sm text-neutral-700">
          <li>
            Аналітика: Роль ветеранів у державотворенні
          </li>
          <li>
            Позиція КЗУ: Про відповідальність еліт
          </li>
        </ul>
      </section>
    </section>
  );
};

const Action = ({ label }) => (
  <button
    className="
      rounded border border-neutral-800
      px-4 py-2 text-sm
      text-neutral-800
      transition
      hover:bg-neutral-900 hover:text-white
    "
  >
    {label}
  </button>
);

export default DashboardUser;

