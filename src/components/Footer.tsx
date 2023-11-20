"use client";
import React, { ReactNode } from "react";

import { ArrowRight, Facebook, Github, Instagram, Twitter } from "lucide-react";
import { Button } from "@nextui-org/button";
import { Image } from "@nextui-org/react";
import { footerColumns } from "@/constants";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinks: ReactNode[] = [
    <Facebook key="f" className="social-link" />,
    <Instagram key="i" className="social-link" />,
    <Twitter key="t" className="social-link" />,
    <Github key="g" className="social-link" />,
  ];
  return (
    <footer className="  max-width   pt-10 pb-4 bg-black text-white">
      {/* Links */}
      <div className="relative  mb-12 flex  justify-between items-center mx-6 flex-col lg:flex-row">
        <div className="    grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 pt-8 gap-2 lg:gap-8  border-b  pb-8 border-white">
          <div className="   flex flex-col    items-start gap-4 lg:gap-6">
            <h1 className="capitalize text-white text-xl font-bold tracking-wide">
              Our Store
            </h1>
            <p className="text-xs ">
              Miniture is one of the biggest international <br />
              fashion companies, one of the world’s <br />
              largest distribution groups.
            </p>
            <ul className="flex justify-center relative items-center gap-2 lg:gap-4 mb-6 lg:mb-0">
              {socialLinks.map((link, index) => (
                <Button
                  isIconOnly
                  radius="full"
                  key={index}
                  className="cursor-pointer   bg-orange-400 text-white hover:bg-black border-1 border-orange-400 rounded-full flex items-center justify-center"
                >
                  {link}
                </Button>
              ))}
            </ul>
          </div>
          {footerColumns.map((col, index) => (
            <article
              key={index}
              className="capitalize flex flex-col text-start"
            >
              <h2 className="font-bold lg:text-lg text-slate-100 mb-6">
                {col.title}
              </h2>
              <ul>
                {col.links.map((link, index) => (
                  <li
                    key={index}
                    className="text-xs font-thin  hover:bg-white/70  hover:text-black my-2 flex space-y-3 justify-center items-center rounded-full  w-fit  hover:ps-1 transition-all cursor-pointer"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </article>
          ))}
          <div className=" flex flex-col    items-start gap-4 lg:gap-6">
            <h1 className="capitalize text-white text-xl font-bold tracking-wide">
              Let’s get in touch
            </h1>
            <p className="text-xs">
              Sign up for our newsletter and receive 10% off your
            </p>
            <ul className="flex relative  items-center gap-4 lg:gap-6 mb-6 lg:mb-0">
              <input
                type="text"
                placeholder="Enter your email address"
                onChange={(e) => e.target.value}
                className=" rounded-md border-none text-black  outline-none   lg:pl-10 w-fit  py-2"
              />
              <div className=" flex items-center justify-center absolute right-4 top-2 w-6 h-6 rounded-full hover:bg-white border-1 bg-orange-400 border-orange-400 ">
                <ArrowRight
                  width={15}
                  className=" text-white hover:text-orange-400   "
                />
              </div>
            </ul>
          </div>
        </div>
      </div>
      {/* Links */}
      {/* Copyrights */}
      <div className=" mx-8  flex  items-center justify-between">
        <p className="capitalize pt-4    text-start text-xs font-thin">
          {`© ${currentYear} Miniture All rights reserved. Designed by Abdelrahman Ahmed`}
        </p>

        <Image src="/payment_icon.svg" alt="payment" />
      </div>
      {/* Copyrights */}
    </footer>
  );
};

export default Footer;
