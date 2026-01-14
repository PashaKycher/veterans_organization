import React, { useState } from "react";
import { Title } from "../../../components/helpers/Title";
import FiltersUsers from "../../../components/owner/FiltersUsers";
import GridUsers from "../../../components/owner/GridUsers";

const UsersOwner = () => {
  const [filters, setFilters] = useState({
    sort: "",
    search: ""
  });

  return (
    <main className="bg-bg min-h-screen text-text overflow-hidden w-full">
      <div className="p-4">
        <Title
          title="Користувачі"
          subtitle="Управління ролями, лідерами та учасниками Клубу"
        />
      </div>

      <FiltersUsers filters={filters} onChange={setFilters} />
      <GridUsers filters={filters} />
    </main>
  );
};

export default UsersOwner;
