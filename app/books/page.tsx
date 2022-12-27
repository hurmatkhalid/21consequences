import React from "react";
import Header from "../Header";
import ComingSoon from "./ComingSoon";
import SideNavbar from "../Sidebar";

type Props = {};

const Books = (props: Props) => {
  return (
    <div className="min-h-screen w-full relative bg-black text-white">
      <Header />
      <div className="max-w-7xl h-screen overflow-y-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-transparent snap-y snap-mandatory mx-auto">
        <ComingSoon />
      </div>
      <SideNavbar />
    </div>
  );
};

export default Books;
