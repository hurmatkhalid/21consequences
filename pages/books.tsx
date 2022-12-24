import React from "react";
import Header from "../components/Header";
import ComingSoon from "../components/ComingSoon";
import Head from "next/head";
import SideNavbar from "../components/Sidebar";

type Props = {};

const Books = (props: Props) => {
  return (
    <div className="min-h-screen w-full relative bg-black text-white">
      <Head>
        <title>21Consequences - Books</title>
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

export default Books;
