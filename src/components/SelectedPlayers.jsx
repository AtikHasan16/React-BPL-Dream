import PlayerCard from "./PlayerCard";
import SelectedCard from "./SelectedCard";

const SelectedPlayers = ({ playerSelect, setPlayerSelect, removePlayer }) => {
  // console.log(playerData);

  return (
    <div className="w-10/12 mx-auto mt-5 mb-20 space-y-4">
      {playerSelect.map((player) => (
        <SelectedCard
        removePlayer={removePlayer}
          playerSelect={playerSelect}
          setPlayerSelect={setPlayerSelect}
          key={player.id}
          player={player}
        ></SelectedCard>
      ))}
    </div>
  );
};

export default SelectedPlayers;
