import React from "react";
import Header from "../components/Header";
import Member from "../components/Member";
import imageUrlBuilder from "@sanity/image-url";
import Head from "next/head";
import { client } from "../lib/sanity";
import SideNavbar from "../components/Sidebar";

type Props = {};

const builder = imageUrlBuilder(client);

const Team = ({ team }: any) => {
  const urlFor = (source: any) => {
    return builder.image(source);
  };
  return (
    <div className="min-h-screen w-full bg-black relative text-white">
      <Head>
        <title>21Consequences - Team</title>
        <link rel="icon" href="/Logo.png" />
      </Head>

      <Header />

      <div className="max-w-[90rem] h-screen overflow-y-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-transparent snap-y snap-mandatory mx-auto">
        <div className="flex flex-col h-full items-center w-full justify-start mt-28">
          <h1 className="font-bold text-3xl uppercase text-left pl-10 w-full tracking-widest text-gray-300 mb-8">
            Core
          </h1>
          <div className="grid grid-cols-1 w-full px-20 sm:grid-cols-2 place-items-center gap-5 gap-y-10 md:grid-cols-3">
            {team.map((member: any, i: number) => (
              <Member
                key={i}
                linkedIn={member.linkedIn}
                about={member.about}
                name={member.name}
                designation={member.designation}
                image={urlFor(member.image).url()}
              />
            ))}
          </div>
        </div>
      </div>
      <SideNavbar />
    </div>
  );
};

export default Team;

export async function getServerSideProps(context: any) {
  const query = `
      *[_type == "team"] | order(DateOfYear asc){
        name,
        designation,
        image,
		linkedIn,
        about
      }
    `;
  const sanityResponse = await client.fetch(query);

  return {
    props: {
      team: sanityResponse,
    },
  };
}
