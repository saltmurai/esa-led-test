import Head from "next/head";
import Layout from "../components/layout/Layout";
import ControlBar from "../components/homepage/ControlBar";
import DriverInfo from "../components/homepage/DriverInfo";
import ResultLight from "../components/homepage/ResultLight";
import DisplayPanel from "../components/homepage/DisplayPanel";

export default function Home() {
  return (
    <>
      <Head>
        <title>ESA PROJECT</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-gray-300 flex flex-col h-screen gap-2 px-1">
        <ControlBar></ControlBar>
        <DriverInfo></DriverInfo>
        <ResultLight></ResultLight>
        <DisplayPanel></DisplayPanel>
        <div></div>
        <div></div>
      </div>
    </>
  );
}
