import {HiOutlineShoppingBag} from "react-icons/hi2";
import {CiSearch} from "react-icons/ci";
import Logo from "/public/assets/logo.svg";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const navItems = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Services",
      path: "/services",
    },
    {
      title: "MyBookings",
      path: "/my-bookings",
    },
    {
      title: "Blog",
      path: "/blog",
    },
    {
      title: "Contacts",
      path: "/contacts",
    },
  ];

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-3 space-y-4 shadow"
          >
            {navItems.map((item) => (
              <Link
                className="font-semibold hover:text-primary duration-300"
                href={item.path}
                key={item.path}
              >
                {item.title}
              </Link>
            ))}
          </ul>
        </div>
        <Link href={"/"}>
          <Image src={Logo} width={80} height={50} alt="Logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal space-x-6">
          {navItems.map((item) => (
            <Link
              className="font-semibold hover:text-primary duration-300"
              href={item.path}
              key={item.path}
            >
              {item.title}
            </Link>
          ))}
        </ul>
      </div>
      <div className="navbar-end flex gap-3 items-center">
        <HiOutlineShoppingBag className="text-xl" />
        <CiSearch className="text-xl" />
        <button className="btn btn-outline btn-primary">Appointment</button>
      </div>
    </div>
  );
};

export default Navbar;
