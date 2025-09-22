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
  const [availableCoin, setAvailableCoin] = useState(6000000);
  // console.log(availableCoin);

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
            Selected Players
          </h1>
        </div>
        <div className="join ">
          <button
            onClick={() => setDisplay(true)}
            className={`join-item btn rounded-l-xl border-r-0 ${
              display === true ? "bg-[#E7FE29]" : "bg-base"
            }`}
          >
            Available
          </button>
          <button
            onClick={() => setDisplay(false)}
            className={`join-item btn rounded-r-xl border-j-0 ${
              display === false ? "bg-[#E7FE29]" : "bg-base"
            }`}
          >
            Selected <span>{0}</span>
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
            ></AvailablePlayers>
          </Suspense>
        </div>
      ) : (
        <div className="flex justify-center">
          <Suspense
            fallback={
              <span className="loading loading-spinner loading-xl"></span>
            }
          >
            <SelectedPlayers
              playerPromiseData={playerPromiseData}
            ></SelectedPlayers>
          </Suspense>
        </div>
      )}
    </>
  );
}

export default App;
