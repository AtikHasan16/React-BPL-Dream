import React, { use } from "react";

const SelectedPlayers = ({ playerPromiseData }) => {
  const playerData = use(playerPromiseData);
  // console.log(playerData);

  return (
    <div className="border-2 rounded-4xl p-6 my-4">
      {playerData.map((player) => (
        <h1 className="text-4xl border-2 rounded-4xl p-6 my-4">
          Selected Player Container {player.id}
        </h1>
      ))}
    </div>
  );
};

export default SelectedPlayers;
