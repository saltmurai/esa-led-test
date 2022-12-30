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
      <div className="flex w-full bg-white mt-2">
        <h1 className="font-bold text-center mt-5">Result Light</h1>
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
