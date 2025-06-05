"use client";

import { styled } from "styled-components";
import JumbotronBackground from "./jumbotron-background";
import Navbar from "./navbar";

const Jumbotron = () => {
  return (
    <JumbotronBackground>
      <BrushDiv className="h-[100vh] w-[100%] absolute bg-azure-web opacity-50" />
      <div className="py-8">
        <Navbar />
        <div className="flex justify-center items-center h-[80vh] px-[15%] w-[100%] font-extrabold relative">
          <div className="w-[50%] text-center">
            <h1 className="text-raisin-black text-7xl text-left">
              We’re Responsible for The Safety of Cosmetics Testing
            </h1>
            <p className="text-left font-thin leading-relaxed tracking-wider my-10">
              Lorem ipsum dolor sit amet, qui minim labore adipisicing minim
              sint cillum sint consectetur cupidatat.
            </p>
            <div className="text-left">
              <a
                href=""
                className="rounded-[30px] mx-4 text-white bg-verdigris box-border py-4 px-8"
              >
                Out Services
              </a>
              <a
                href=""
                className="rounded-[30px] mx-4 border border-timberwolf box-border py-4 px-8"
              >
                Discover
              </a>
            </div>
          </div>
          <div className="w-[50%]">
            <img />
          </div>
        </div>
      </div>
    </JumbotronBackground>
  );
};

const BrushDiv = styled.div``;

export default Jumbotron;
