import React from "react";
import Header from "../Header";
import SideNavbar from "../Sidebar";
import ComingSoon from "./ComingSoon";

type Props = {};

const Resources = (props: Props) => {
  return (
    <div className="min-h-screen w-full bg-black relative text-white">
      <Header />
      <div className="max-w-7xl h-screen overflow-y-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-transparent snap-y snap-mandatory mx-auto">
        <ComingSoon />
      </div>
      <SideNavbar />
    </div>
  );
};

export default Resources;
