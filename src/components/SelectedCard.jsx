import React from "react";

const SelectedCard = ({
  player,
  playerSelect,
  setPlayerSelect,
  removePlayer,
}) => {
  const handleRemove = () => {
    removePlayer(player);
  };
  return (
    <div className="flex items-center justify-between shadow border border-gray-300 rounded-2xl p-5 ">
      <div className="flex justify-center items-center gap-3">
        <img className="w-20 rounded-2xl" src={player.playerImage} alt="" />
        <div>
          <h1 className="text-xl font-bold">{player.playerName}</h1>
          <p>{player.playerRole}</p>
        </div>
      </div>
      <button onClick={handleRemove} className="text-2xl btn">
        👎
      </button>
    </div>
  );
};

export default SelectedCard;
