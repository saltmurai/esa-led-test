import clsx from "clsx";
import { IoIosLock } from "react-icons/io";
import ButtonGrid from "./ButtonGrid";
import { useState } from "react";

export default function StatusBar() {
  const [panelStatus, sePanelStatus] = useState("Waiting");
  const [yes, setYes] = useState(true);
  function yesHandler() {
    setYes(!yes);
  }
  return (
    <>
      <div className="flex flex-1 flex-col gap-2 bg-white px-1 rounded-md py-1">
        <div className="flex rounded-md">
          <div className="flex rounded-md">
            <div
              className={clsx(
                "btn rounded-none",
                !yes && "bg-violet-500 text-white"
              )}
              onClick={yesHandler}
            >
              NO
            </div>
            <div
              className={clsx(
                "btn rounded-none",
                yes && "bg-violet-500 text-white"
              )}
              onClick={yesHandler}
            >
              YES
            </div>
          </div>
          <div className="flex flex-1 ml-3 bg-gray-100">
            <div className="font-bold">
              Barcode <br></br>Auto:
            </div>
            <div className="flex justify-end flex-1 bg-white border-2 rounded-md">
              <div className="bg-white flex text-center items-center">
                <div className="h-full flex justify-center items-center border w-12">
                  <IoIosLock size={24} className="" />
                </div>
              </div>
              <div
                className={clsx(
                  "flex items-center justify-center text-white w-16",
                  panelStatus === "Waiting" && "bg-amber-500"
                )}
              >
                {panelStatus}
              </div>
            </div>
          </div>
        </div>
        <div className="bg-slate-400 rounded-md h-full flex items-center justify-center">
          <ButtonGrid></ButtonGrid>
        </div>
      </div>
    </>
  );
}
