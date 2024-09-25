import React from "react";
import { about, shop } from "../assets";
import { Cta, Team } from "../components";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col m-0 font-poppins">
      <div className="bg-gradient-to-r from-blue2 to-deepBlue flex flex-col md:flex-row justify-around px-[40px] gap-3">
        <div className="content-center md:w-[50%] px-5">
          <h1 className="text-white text-[28px] md:text-[48px] lg:text-[60px] font-bold text-center md:text-start">
            {t("about")}
          </h1>
          <p className="text-white text-base md:text-[22px] text-center md:text-start md:w-[70%]">
            Explore a world of possibilities and join thousands of satisfied
            customers{" "}
          </p>
        </div>
        <div className="md:w-[50%]">
          {/* <img src={about} alt="img" /> */}
          <img src={shop} alt="img" className="w-full h-[500px]" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row p-[50px] gap-5">
        <div className="flex flex-col md:w-[50%] gap-5">
          <div>
            <h1 className="text-black font-bold text-[30px] text-center md:text-start">
              {t("who")}
            </h1>
            <p className="text-[16px] font-poppins text-center md:text-start">
              {t("whoDesc")}
            </p>
          </div>
          <div>
            <h1 className="text-black font-bold text-[30px] text-center md:text-start">
              {t("mission")}
            </h1>
            <p className="text-[16px] font-poppins text-center md:text-start">
              {t("missionDesc")}
            </p>
          </div>
          <div>
            <h1 className="text-black font-bold text-[30px] text-center md:text-start">
              Delivery fee
            </h1>
            <ul className="flex flex-col items-center md:items-start">
              <li>Kigali: 1k</li>
              <li>Other provinces: 2k</li>
              <li>Other parts of kigali: 1.5k</li>
              <li>Free delivery on 3 products</li>
            </ul>
          </div>
        </div>
        <div className="md:w-[50%] flex-col items-center hidden">
          <h1 className="text-black font-bold text-[30px]">Meet Our Team</h1>
          <Team />
        </div>
      </div>
      <Cta />
    </div>
  );
};

export default About;
