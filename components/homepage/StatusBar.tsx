import clsx from "clsx";
import { IoIosLock } from "react-icons/io";
import ButtonGrid from "./ButtonGrid";

export default function StatusBar() {
  return (
    <>
      <div className="flex flex-1 flex-col">
        <div className="flex">
          <div className="flex bg-white">
            <div className="btn rounded-none">NO</div>
            <div className="btn rounded-none">YES</div>
          </div>
          <div className="flex flex-1 ml-3 bg-gray-100">
            <div>
              Barcode <br></br>Auto:
            </div>
            <div className="flex justify-end flex-1 bg-white border-2 rounded-md">
              <div className="bg-white flex text-center items-center">
                <div className="h-full flex justify-center items-center border w-12">
                  <IoIosLock size={24} className="" />
                </div>
              </div>
              <div className={clsx("flex items-center", "bg-red-300")}>
                Waiting
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white h-full flex items-center justify-center">
          <ButtonGrid></ButtonGrid>
        </div>
      </div>
    </>
  );
}
