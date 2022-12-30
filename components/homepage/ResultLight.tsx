import { useState } from "react";

export default function ResultLight() {
  const [resultLight, setResultLight] = useState([
    {
      name: "No work",
      color: "bg-gray-300",
    },
    {
      name: "No work",
      color: "bg-gray-300",
    },
    {
      name: "No work",
      color: "bg-gray-300",
    },
    {
      name: "No work",
      color: "bg-gray-300",
    },
    {
      name: "No work",
      color: "bg-gray-300",
    },
    {
      name: "No work",
      color: "bg-gray-300",
    },
    {
      name: "No work",
      color: "bg-gray-300",
    },
    {
      name: "No work",
      color: "bg-gray-300",
    },
    {
      name: "No work",
      color: "bg-gray-300",
    },
    {
      name: "No work",
      color: "bg-gray-300",
    },
    {
      name: "No work",
      color: "bg-gray-300",
    },
    {
      name: "No work",
      color: "bg-gray-300",
    },
  ]);
  return (
    <>
      <div className="flex w-full bg-white justify-center items-center px-1 py-2 rounded-md">
        <h1 className="font-bold text-center">Result Light</h1>
        <div className="flex flex-1 justify-around">
          {resultLight.map(
            (
              light: {
                name: string;
                color: string;
              },
              index: number
            ) => {
              return (
                <div key={index}>
                  <div
                    className={`h-10 w-10 ${light.color} rounded-full`}
                  ></div>
                  <div>{light.name}</div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </>
  );
}
