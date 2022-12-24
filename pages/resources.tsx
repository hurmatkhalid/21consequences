import React from "react";
import ComingSoon from "../components/ComingSoon";
import Header from "../components/Header";
import Head from "next/head";
import SideNavbar from "../components/Sidebar";

type Props = {};

const Resources = (props: Props) => {
  return (
    <div className="min-h-screen w-full bg-black relative text-white">
      <Head>
        <title>21Consequences - Resources</title>
        <link rel="icon" href="/Logo.png" />
      </Head>
      <Header />
      <div className="max-w-7xl h-screen overflow-y-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-transparent snap-y snap-mandatory mx-auto">
        <ComingSoon />
      </div>
      <SideNavbar />
    </div>
  );
};

export default Resources;
