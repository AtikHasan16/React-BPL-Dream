import React from "react";

const PlayerCard = ({ data }) => {
  return (
    <div>
      <div className="card  shadow-xl h-[500px] ">
        <figure>
          <img className="w-lg" src={data.playerImage} alt={data.playerName} />
        </figure>
        <div className="p-4">
          <div className="border-b border-gray-300 py-4">
            <h2 className="card-title">{data.playerName}</h2>
            <p></p>
            <div className="flex justify-between items-center">
              <p>{data.playerCountry}</p>
              <button className="btn rounded-xl">{data.playerRole}</button>
            </div>
          </div>
          <div>
            <h1>Rating</h1>
            <h1>{data.playerRole}</h1>
            <div className="flex justify-between items-center">
              <h1>Price: ${data.playerPrice}</h1>
              <button className="btn">Choose Player</button>
            </div>
          </div>
        </div>

        <h1></h1>
      </div>
    </div>
  );
};

export default PlayerCard;
