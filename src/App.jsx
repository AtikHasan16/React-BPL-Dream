import { Suspense, useState } from "react";
import "./App.css";
import AvailablePlayers from "./components/AvailablePlayers";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import SelectedPlayers from "./components/SelectedPlayers";

function App() {
  const playerPromise = async () => {
    const response = await fetch("/public/player.json");
    return response.json();
  };
  const playerPromiseData = playerPromise();
  // console.log(playerPromiseData);

  const [display, setDisplay] = useState(true);

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <div className="flex justify-between w-10/12 mx-auto">
        <div>
          <h1 className="text-4xl"> Available Players</h1>
          <h1 className="text-4xl"> Selected Players</h1>
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
