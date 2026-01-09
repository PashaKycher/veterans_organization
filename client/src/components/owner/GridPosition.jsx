import PositionCard from "./PositionCard";

const GridPosition = ({ positions, refresh, editable = false }) => {
  if (!positions.length)
    return <p className="text-gray-500 text-sm">Немає позицій</p>;

  return (
    <section className="px-6 md:px-16 lg:px-24 xl:px-40 py-16">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
        {positions.map(pos => (
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
