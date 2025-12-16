import React, { useState } from "react";

import Hero from "../components/analytica/Hero";
import Filters from "../components/analytica/Filters";
import Grid from "../components/analytica/Grid";

const Analytical = () => {
  const [filters, setFilters] = useState({
    category: "",
    sort: "",
    date: "",
    search: "",
  });

  return (
    <main className="bg-bg min-h-screen text-text overflow-hidden">
      <Hero />
      <Filters filters={filters} onChange={setFilters} />
      <Grid filters={filters} />
    </main>
  );
};

export default Analytical;
