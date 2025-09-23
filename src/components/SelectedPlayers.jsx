import PlayerCard from "./PlayerCard";
import SelectedCard from "./SelectedCard";

const SelectedPlayers = ({ playerSelect, removePlayer, handleAvailable }) => {
  // console.log(playerData);

  return (
    <div className="w-10/12 mx-auto mt-5  ">
      {" "}
      <div className="space-y-4 mb-20">
        {playerSelect.map((player) => (
          <SelectedCard
            removePlayer={removePlayer}
            key={player.id}
            player={player}
          ></SelectedCard>
        ))}
      </div>
      <button
        onClick={handleAvailable}
        className="btn rounded-2xl text-gray-900 outline-3 outline-offset-4 bg-[#E7FE29]"
      >
        Add More Player
      </button>
    </div>
  );
};

export default SelectedPlayers;
