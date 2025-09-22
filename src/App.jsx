import { Suspense, useState } from "react";
import "./App.css";
import AvailablePlayers from "./components/AvailablePlayers";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import SelectedPlayers from "./components/SelectedPlayers";

const playerPromise = async () => {
  const response = await fetch("/public/player.json");
  return response.json();
};
const playerPromiseData = playerPromise();

function App() {
  // console.log(playerPromiseData);
  const [display, setDisplay] = useState(true);
  const [availableCoin, setAvailableCoin] = useState(60000000);
  const [playerSelect, setPlayerSelect] = useState([]);
  // console.log(playerSelect);

  // console.log(availableCoin);

  const removePlayer = (player) => {
    const filterSelect = playerSelect.filter((ply) => ply.id !== player.id);
    console.log(filterSelect);

    setPlayerSelect(filterSelect);
    setAvailableCoin(player.playerPrice + availableCoin);
  };

  return (
    <>
      <Navbar availableCoin={availableCoin}></Navbar>
      <Banner></Banner>
      <div className="flex justify-between w-10/12 mx-auto mb-5">
        <div>
          <h1 className={`text-3xl font-bold ${!display ? "hidden" : ""}`}>
            Available Players
          </h1>
          <h1 className={`text-3xl font-bold ${display ? "hidden" : ""}`}>
            Selected Players ({playerSelect.length} / 6)
          </h1>
        </div>
        <div className="join ">
          <button
            onClick={() => setDisplay(true)}
            className={`join-item btn rounded-l-xl border-r-0 ${
              display === true ? "bg-[#E7FE29]" : ""
            }`}
          >
            Available
          </button>
          <button
            onClick={() => setDisplay(false)}
            className={`join-item btn rounded-r-xl border-j-0 ${
              display === false ? "bg-[#E7FE29]" : ""
            }`}
          >
            Selected <span>({playerSelect.length})</span>
          </button>
        </div>
      </div>
      {display === true ? (
        <div className="flex justify-center">
          <Suspense
            fallback={
              <span className="loading loading-spinner loading-xl"></span>
            }
          >
            <AvailablePlayers
              availableCoin={availableCoin}
              setAvailableCoin={setAvailableCoin}
              playerPromiseData={playerPromiseData}
              playerSelect={playerSelect}
              setPlayerSelect={setPlayerSelect}
            ></AvailablePlayers>
          </Suspense>
        </div>
      ) : (
        <Suspense
          fallback={
            <span className="loading loading-spinner loading-xl"></span>
          }
        >
          <SelectedPlayers
            removePlayer={removePlayer}
            playerSelect={playerSelect}
            setPlayerSelect={setPlayerSelect}
          ></SelectedPlayers>
        </Suspense>
      )}
    </>
  );
}

export default App;
