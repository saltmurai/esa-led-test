import { useState } from "react";
import StatusBar from "./StatusBar";
import { useQuery } from "@tanstack/react-query";
import useGlobalStore from "../../lib/zustand";
const URL = `${process.env.NEXT_PUBLIC_MODBUS_DATA}`;

interface channelState {
  id: number;
  state: "ON" | "OFF";
}

function inRange(value: number, min: number, max: number) {
  return value >= min && value <= max;
}

function compareChannel(data: any, groundTruth: any) {
  // check property of data in range of corresponding value in database
  // if not, return false
  // else return true
  if (!inRange(data["A_AC"][0], groundTruth[0].min, groundTruth[0].max))
    return false;
  if (!inRange(data["A_DC"][0], groundTruth[1].min, groundTruth[1].max))
    return false;
  if (!inRange(data["Freq"][0], groundTruth[2].min, groundTruth[2].max))
    return false;
  if (!inRange(data["PF_AC"][0], groundTruth[3].min, groundTruth[3].max))
    return false;
  if (!inRange(data["PF_DC"][0], groundTruth[4].min, groundTruth[4].max))
    return false;
  if (!inRange(data["P_AC"][0], groundTruth[5].min, groundTruth[5].max))
    return false;
  if (!inRange(data["P_DC"][0], groundTruth[6].min, groundTruth[6].max))
    return false;
  if (!inRange(data["V_AC"][0], groundTruth[7].min, groundTruth[7].max))
    return false;
  if (!inRange(data["V_DC"][0], groundTruth[8].min, groundTruth[8].max))
    return false;
  return true;
}

export default function DisplayPanel() {
  // every 2 seconds fetch data from localhost:5000/esatech/data
  // const store
  const store = useGlobalStore((state: any) => state.param);
  const [buttonState, setButtonState] = useState([
    { id: 1, state: "READY" },
    { id: 2, state: "READY" },
    { id: 3, state: "READY" },
    { id: 4, state: "READY" },
    { id: 5, state: "READY" },
  ]);
  const { data, isLoading, error } = useQuery(
    ["data"],
    () => fetch(URL).then((res) => res.json()),
    {
      refetchInterval: 2000,
      onSuccess(data) {
        const isOn = compareChannel(data, store);
        setButtonState((prevState) => {
          const newState = [...prevState];
          if (data["chanel"] === 0) {
            return [
              { id: 1, state: "READY" },
              { id: 2, state: "READY" },
              { id: 3, state: "READY" },
              { id: 4, state: "READY" },
              { id: 5, state: "READY" },
            ];
          }
          newState[data["chanel"] - 1].state = isOn ? "ON" : "OFF";
          return newState;
        });
      },
    }
  );

  return (
    <>
      <div className="flex w-ful gap-3 rounded-md h-80 flex-1">
        <StatusBar chanelState={buttonState}></StatusBar>
      </div>
    </>
  );
}
