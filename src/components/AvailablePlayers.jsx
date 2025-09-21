import React, { use } from "react";
import PlayerCard from "./PlayerCard";

const AvailablePlayers = ({ playerPromiseData }) => {
  const data = use(playerPromiseData);
  console.log(data);

  return (
    <div className="grid md:grid-cols-3 gap-8 w-10/12">
      {data.map((data) => {
        return <PlayerCard key={data.id} data={data}></PlayerCard>;
      })}
    </div>
  );
};

export default AvailablePlayers;
