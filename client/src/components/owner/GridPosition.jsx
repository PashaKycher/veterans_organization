import { useMemo } from "react";
import PositionCard from "./PositionCard";

const GridPosition = ({ filter, positions, refresh, editable = false }) => {
  if (!positions.length)
    return <p className="text-gray-500 text-sm">Немає позицій</p>;

  const data = useMemo(() => {
    let itemsData = [...positions];

    if (filter) { const q = filter.toLowerCase(); itemsData = itemsData.filter(i => i.title?.toLowerCase().includes(q) || i.excerpt?.toLowerCase().includes(q)) }

    return itemsData;
  }, [filter, positions]);

  return (
    <section>
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
        {data.map(pos => (
          <PositionCard
            key={pos._id}
            position={pos}
            refresh={refresh}
            editable={editable}
          />
        ))}
      </div>
    </section>
  );
};

export default GridPosition;
