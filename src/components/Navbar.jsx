import navLogo from "../assets/logo.png";
import coin from "../assets/Currency.png";

export default function Navbar() {
  return (
    <div className="navbar  justify-between w-10/12 mx-auto text-lg my-6">
      <img className="btn btn-ghost btn-xl" src={navLogo} alt="" />
      <div className="flex items-center gap-6 ">
        <div className="flex flex-col md:flex-row md:gap-6 text-center">
          <p>Home</p>
          <p>Fixture</p>
          <p>Teams</p>
          <p>Schedules</p>
        </div>
        <button className="btn btn-lg rounded-xl">
          {0} Coin <img src={coin} alt="" />
        </button>
      </div>
    </div>
  );
}
