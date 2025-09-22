import React, { useState } from "react";
import { toast } from "react-toastify";

const PlayerCard = ({
  data,
  availableCoin,
  setAvailableCoin,
  playerSelect,
  setPlayerSelect,
}) => {
  const [buttonSelect, setButtonSelect] = useState(false);
  // console.log(playerSelect);

  const handleChose = (data) => {
    // console.log(data);

    if (playerSelect.length === 6) {
      return toast("6 Players already been selected");
    }
    if (availableCoin >= data.playerPrice) {
      setButtonSelect(true);
      setAvailableCoin(availableCoin - data.playerPrice);
      toast(
        `Player has been selected. Remaining coin ${
          availableCoin - data.playerPrice
        }`
      );
      return setPlayerSelect([...playerSelect, data]);
    } else {
      return toast("You don not have sufficient coin");
    }
  };

  return (
    <div>
      <div className="card  shadow-xl h-[500px] ">
        <figure>
          <img
            className="object-cover"
            src={data.playerImage}
            alt={data.playerName}
          />
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
            <h1>Rating: {data.playerRating}</h1>
            <h1>{data.playerRole}</h1>
            <div className="flex justify-between items-center">
              <h1>Price: ${data.playerPrice}</h1>
              <button
                onClick={() => handleChose(data)}
                disabled={buttonSelect}
                className="btn"
              >
                {buttonSelect ? "Selected" : "Choose Player"}
              </button>
            </div>
          </div>
        </div>

        <h1></h1>
      </div>
    </div>
  );
};

export default PlayerCard;
