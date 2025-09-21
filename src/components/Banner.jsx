import React from "react";
import BannerLogo from "../assets/banner-main.png";
import BannerShadow from "../assets/bg-shadow.png";
const Banner = () => {
  return (
    <div
      className="bg-black rounded-3xl text-center text-white p-16 space-y-6 w-10/12 mx-auto bg-cover bg-no-repeat bg-center mb-10"
      style={{ backgroundImage: `url(${BannerShadow})` }}
    >
      <img className="mx-auto" src={BannerLogo} alt="" />
      <h1 className="text-5xl font-bold">
        Assemble Your Ultimate Dream 11 Cricket Team
      </h1>
      <h1 className="text-2xl text-[#ffffff70]">
        Beyond Boundaries Beyond Limits
      </h1>

      <a
        role="button"
        className="btn bg-[#E7FE29] outline-2 outline-[#E7FE29] outline-offset-4 rounded-2xl"
      >
        Claim Free Credit
      </a>
    </div>
  );
};

export default Banner;
