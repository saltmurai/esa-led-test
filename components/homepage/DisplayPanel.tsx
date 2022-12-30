import clsx from "clsx";
import { IoIosLock } from "react-icons/io";
import ResultLight from "./ResultLight";
import StatusBar from "./StatusBar";

export default function DisplayPanel() {
  return (
    <>
      <div className="flex w-ful gap-3 mt-2 h-80 flex-1">
        <StatusBar></StatusBar>
        <StatusBar></StatusBar>
      </div>
    </>
  );
}
