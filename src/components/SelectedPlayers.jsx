import PlayerCard from "./PlayerCard";
import SelectedCard from "./SelectedCard";

const SelectedPlayers = ({ playerSelect, removePlayer }) => {
  // console.log(playerData);

  return (
    <div className="w-10/12 mx-auto mt-5 mb-20 space-y-4">
      {playerSelect.map((player) => (
        <SelectedCard
          removePlayer={removePlayer}
          key={player.id}
          player={player}
        ></SelectedCard>
      ))}

      <button className="btn rounded-2xl outline-3 outline-offset-4 bg-[#E7FE29]">
        Add More Player
      </button>
    </div>
  );
};

export default SelectedPlayers;
