import navLogo from "../assets/logo.png";
import coin from "../assets/Currency.png";

export default function Navbar({availableCoin}) {
  return (
    <div className="navbar  justify-between w-10/12 mx-auto text-lg my-6">
      <img className="btn btn-ghost btn-xl" src={navLogo} alt="" />
      <div className="flex items-center gap-6 ">
        <div className="md:flex flex-col md:flex-row md:gap-6 text-center hidden">
          <p>Home</p>
          <p>Fixture</p>
          <p>Teams</p>
          <p>Schedules</p>
        </div>
        <button className="btn btn-lg rounded-xl">
          {availableCoin} Coin <img src={coin} alt="" />
        </button>
      </div>
    </div>
  );
}
