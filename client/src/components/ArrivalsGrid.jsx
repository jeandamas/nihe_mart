import React from "react";
import { amasaha, imiringa, siporo, electronic } from "../assets";
import { useTranslation } from "react-i18next";

const ArrivalsGrid = () => {
  const { t } = useTranslation();

  return (
    <div className="grid sm:grid-rows-2 sm:grid-cols-4 gap-5 w-[100%] my-[20px]">
      <div className="sm:col-span-2 sm:row-span-2 bg-blue3 bg-opacity-[50%] relative flex justify-center">
        <img src={amasaha} className="w-[50%] m-auto" alt="img" />
        <div className="absolute text-white bottom-3 left-3">
          <h1 className="text-lg md:text-[1.5em] font-bold">{t("watches")}</h1>
          <p className="md:text-[1.2em] hidden">{t("watchDesc")}</p>
        </div>
      </div>
      <div className="sm:col-span-2 row-span-1 bg-primary bg-opacity-[80%] relative flex justify-end">
        <img
          src={imiringa}
          className="md:w-[400px] md:h-[300px] w-[200px]"
          alt="img"
        />
        <div className="absolute text-white bottom-3 left-3">
          <h1 className="text-lg md:text-[1.5em] font-bold">{t("jewelry")}</h1>
          <p className="md:text-[1.2em] hidden">{t("jewelryDesc")}</p>
        </div>
      </div>
      <div className="sm:col-span-1 row-span-1 bg-blue3 bg-opacity-[100%] relative flex justify-center p-[20px]">
        <img src={electronic} alt="img" />
        <div className="absolute text-white bottom-3 left-3">
          <h1 className="text-lg md:text-[1.5em] font-bold">
            {t("electronic")}
          </h1>
          <p className="md:text-[1.2em] hidden">{t("electronicDesc")}</p>
        </div>
      </div>
      <div className="sm:col-span-1 row-span-1 bg-blue3 bg-opacity-[100%] relative flex justify-center p-[20px]">
        <img src={siporo} alt="img" />
        <div className="absolute text-white bottom-3 left-3">
          <h1 className="text-lg md:text-[1.5em] font-bold">{t("sport")}</h1>
          <p className="md:text-[1.2em] hidden">{t("sportDesc")}</p>
        </div>
      </div>
    </div>
  );
};

export default ArrivalsGrid;
