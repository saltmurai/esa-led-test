import { useState } from "react";
import useBearStore from "../../lib/zustand";
import clsx from "clsx";

function checkValue(value: any) {
  return value?.min && value?.max && value?.correctionFactor;
}

export default function InputParam({ param }: { param: string }) {
  const paramStore = useBearStore((state: any) => state.param);
  const addParam = useBearStore((state: any) => state.addParam);
  const [value, setValue] = useState({});
  const saveHandler = () => {
    console.log(value);
    setValue({ name: param, ...value });
    addParam(value);
    console.log(paramStore);
  };
  // console.log(value);
  return (
    <div className="w-full bg-gray-100 h-20 flex gap-8 rounded-md border-solid border-2 border-b-gray-300">
      <div className="flex-1 flex items-center">{param}</div>
      <div>
        <label>Min</label>
        <input
          type="number"
          step={0.1}
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          onChange={(e) => {
            setValue({ ...value, min: e.target.value });
          }}
        />
      </div>
      <div>
        <label>Max</label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          onChange={(e) => {
            setValue({ ...value, max: e.target.value });
          }}
        />
      </div>
      <div>
        <label>Correction factor</label>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
          onChange={(e) => {
            setValue({ ...value, correction: e.target.value });
          }}
        />
      </div>
      <div className={clsx("btn")} onClick={saveHandler}>
        Save
      </div>
      <div className="btn btn-error">Clear</div>
    </div>
  );
}
