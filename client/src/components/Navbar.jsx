import React, { useState } from "react";
import { logo, cart, cartBg, likes } from "../assets";
import { Link, NavLink } from "react-router-dom";
import Search from "./Search";
import Languages from "./Languages";
import { Icon } from "@iconify/react";
import { FaX } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import Profile from "./Profile";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [search, setSearch] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { t } = useTranslation();

  const handleSidebarOpen = () => {
    setSidebarOpen(true);
  };
  const handleClose = () => {
    setSidebarOpen(false);
  };
  return (
    <div className="sticky z-50 flex items-center justify-between gap-3 px-5 m-5 bg-white rounded-lg shadow-lg -top-1">
      <Link to="/" className="w-[82px] h-[87px]">
        <img
          src={logo}
          alt="logo"
          className=" min-w-[60px] min-h-[67px] w-[82px] h-[87px] object-contain"
        />
      </Link>

      <ul className="hidden gap-5 md:flex xl:gap-10">
        <NavLink
          to={"/"}
          activeclassname="active"
          className="transition-colors hover:text-primary"
        >
          {t("home")}
        </NavLink>
        <NavLink
          to={"/tumenye"}
          activeclassname="active"
          className="transition-colors hover:text-primary"
        >
          {t("about")}
        </NavLink>
        <NavLink
          to={"/tuvugishe"}
          activeclassname="active"
          className="transition-colors hover:text-primary"
        >
          {t("contact")}
        </NavLink>
        <NavLink
          to={"/ubufasha"}
          activeclassname="active"
          className="transition-colors hover:text-primary"
        >
          {t("help")}
        </NavLink>
      </ul>

      <div className="hidden xl:block">
        <Search />
      </div>
      <div className="flex items-center gap-5">
        <div
          className="flex items-center justify-center p-2 rounded-full xl:hidden hover:bg-gray-100"
          onClick={() => setSearch(true)}
        >
          <Icon icon={"material-symbols-light:search"} className="w-6 h-6" />
        </div>
        <div className="items-center justify-between hidden gap-5 md:flex">
          <Languages />
          <Profile />
        </div>
        <Link
          to={"/ibyo-wakunze"}
          className="flex items-center justify-center w-10 h-10"
        >
          <Icon
            icon={"solar:heart-outline"}
            className="w-5 h-5 lg:h-6 lg:w-6"
          />
        </Link>
        <Link
          to={"/agatebo"}
          className="w-10 h-10 flex items-center justify-center bg-[#3B9DF8] rounded-full"
        >
          <Icon
            icon={"ion:cart-outline"}
            className="w-5 h-5 lg:h-6 lg:w-6"
            color="white"
          />
        </Link>
        <div
          className="flex items-center justify-center p-2 rounded-full md:hidden hover:bg-gray-100"
          onClick={() => handleSidebarOpen()}
        >
          <Icon icon={"clarity:bars-line"} fontSize={24} />
        </div>
      </div>

      {/* mobile search */}
      <div
        className={` xl:hidden absolute bg-white p-4 w-full flex items-center justify-center gap-4 ${
          search ? "top-0" : "-top-[100%]"
        } transition-all duration-100`}
      >
        <div className=" w-full md:w-[60%]">
          <Search search={search} />
        </div>
        <div
          className="flex items-center justify-center p-2 rounded-full hover:bg-gray-100"
          onClick={() => setSearch(false)}
        >
          <Icon icon={"iconoir:cancel"} fontSize={24} />
        </div>
      </div>
      {/* mobile nav */}
      <div
        id="sidebar"
        onClick={handleClose}
        className={` ${
          sidebarOpen ? "block" : "hidden"
        } fixed md:hidden inset-0 h-screen bg-black bg-opacity-50 z-30 backdrop-blur-sm duration-200`}
      ></div>
      <div
        className={`${
          sidebarOpen ? "right-0 " : "-right-[100%]"
        } z-30  fixed min-w-[320px] top-0 rounded-l-lg bottom-0 bg-white p-5  transition-all duration-500 md:hidden`}
      >
        <div className={"flex items-center justify-between"}>
          <Link to={"/"}>
            <img src="/logo.svg" alt="logo" className="w-[50px]" />
          </Link>
          <div
            onClick={() => setSidebarOpen(false)}
            className="flex items-center justify-center p-2 border rounded-full border-primary hover:bg-primary hover:text-white"
          >
            <FaX />
          </div>
        </div>
        <div className="flex flex-col gap-5 mt-5 md:hidden xl:gap-10">
          <NavLink
            to={"/"}
            activeclassname="active"
            className="transition-colors hover:text-primary"
          >
            {t("home")}
          </NavLink>
          <NavLink
            to={"/tumenye"}
            activeclassname="active"
            className="transition-colors hover:text-primary"
          >
            {t("about")}
          </NavLink>
          <NavLink
            to={"/tuvugishe"}
            activeclassname="active"
            className="transition-colors hover:text-primary"
          >
            {t("contact")}
          </NavLink>
          <NavLink
            to={"/ubufasha"}
            activeclassname="active"
            className="transition-colors hover:text-primary"
          >
            {t("help")}
          </NavLink>
          <div className="flex items-center gap-5">
            <Languages />
            <Profile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
