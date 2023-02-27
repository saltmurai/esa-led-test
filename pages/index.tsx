import Head from "next/head";
import ControlBar from "../components/homepage/ControlBar";
import DriverInfo from "../components/homepage/DriverInfo";
import ResultLight from "../components/homepage/ResultLight";
import DisplayPanel from "../components/homepage/DisplayPanel";
import { useQuery } from "@tanstack/react-query";
import useGlobalStore from "../lib/zustand";
import { useState } from "react";

export default function Home() {
  const store = useGlobalStore((state: any) => state.param);
  const updateParam = useGlobalStore((state: any) => state.updateParam);
  const { data, isLoading, error } = useQuery(
    ["ground"],
    async () => {
      const res = await fetch("/api/fetchData");
      return res.json();
    },
    {
      onSuccess: (data) => {
        updateParam(data);
      },
      refetchOnWindowFocus: true,
      refetchOnMount: true,
    }
  );

  return (
    <>
      <Head>
        <title>ESA PROJECT</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-gray-300 flex flex-col h-screen gap-2 px-1">
        <ControlBar></ControlBar>
        {/* <DriverInfo></DriverInfo> */}
        {/* <ResultLight></ResultLight> */}
        <DisplayPanel></DisplayPanel>
      </div>
    </>
  );
}
