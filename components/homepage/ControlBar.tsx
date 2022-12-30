import clsx from "clsx";
import Image from "next/image";
import { AiFillSetting, AiOutlineAlignRight } from "react-icons/ai";
import { MdSimCardDownload } from "react-icons/md";
import { GrHistory } from "react-icons/gr";
import { useState } from "react";
import { HiSwitchHorizontal } from "react-icons/hi";
import { CgArrowsHAlt } from "react-icons/cg";
import { RiShutDownLine } from "react-icons/ri";
const ICON_SIZE = 20;

export default function ControlBar() {
  const [on, setOn] = useState(false);
  const [at, setAt] = useState(true);
  const [oneWay, setOneway] = useState(true);

  const onOffHandler = () => {
    setOn(!on);
  };

  const modeHandler = () => {
    setAt(!at);
  };
  const oneWayHandler = () => {
    setOneway(!oneWay);
  };

  const menu = [
    {
      name: "System Set",
      icon: <AiFillSetting size={ICON_SIZE} />,
      handler: () => {},
    },
    {
      name: "Param Set",
      icon: <AiOutlineAlignRight size={ICON_SIZE} />,
      handler: () => {},
    },
    {
      name: "Param Load",
      icon: <MdSimCardDownload size={ICON_SIZE} />,
      handler: () => {},
    },
    {
      name: "History",
      icon: <GrHistory size={ICON_SIZE} />,
      handler: () => {},
    },
  ];
  return (
    <>
      <div
        className={clsx(
          "flex justify-around bg-white h-16 items-center rounded-md"
        )}
      >
        <div className="flex justify-center items-center">
          <Image src={"/esa-logo.png"} width={193} height={36} alt="ESA-LOGO" />
        </div>
        <div className="flex">
          {/* Menu */}
          <div className="flex bg-white gap-4 px-2">
            {menu.map((item, index) => {
              return (
                <div key={index} className="btn flex flex-col">
                  {item.icon}
                  <div className="">{item.name}</div>
                </div>
              );
            })}
          </div>
          {/* Control */}
          <div className="flex gap-4 px-2">
            <div
              className={clsx(
                "btn text-white w-14 bg-red-500",
                on && "bg-green-500"
              )}
              onClick={onOffHandler}
            >
              {on ? "ON" : "OFF"}
            </div>
            <div
              className={clsx(
                "btn text-white w-14 bg-orange-400",
                clsx(at && "bg-blue-400")
              )}
              onClick={modeHandler}
            >
              {at ? "AT" : "MT"}
            </div>
            <div className={clsx("btn bg-yellow-400 w-16 text-white")}>
              Retest
            </div>
            <div className={clsx("btn bg-black text-white")}>RST</div>
          </div>
          {/* Switch */}
          <div className="px-2">
            <div
              className="btn bg-green-500 text-white"
              onClick={oneWayHandler}
            >
              {oneWay ? (
                <CgArrowsHAlt size={ICON_SIZE} />
              ) : (
                <HiSwitchHorizontal size={ICON_SIZE} />
              )}
            </div>
          </div>
        </div>
        {/* Progess Bar and On Off */}
        <div className="flex bg-white justify-between items-center">
          <div className="flex flex-col mt-2">
            <progress
              className="progress w-40 h-4 progress-success"
              value="70"
              max="100"
            ></progress>
            <label>Progress: 70%</label>
          </div>
          <div className="btn ml-2">
            <RiShutDownLine size={ICON_SIZE} />
          </div>
        </div>
      </div>
    </>
  );
}
