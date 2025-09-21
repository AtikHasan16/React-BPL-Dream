import { Suspense } from "react";
import "./App.css";
import AvailablePlayers from "./components/AvailablePlayers";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";

function App() {
  const playerPromise = async () => {
    const response = await fetch("/public/player.json");
    return response.json();
  };
  const playerPromiseData = playerPromise();
  console.log(playerPromiseData);

  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
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
    </>
  );
}

export default App;
