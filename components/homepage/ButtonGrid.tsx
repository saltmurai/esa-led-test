import { style } from "@mui/system";
import clsx from "clsx";

function Button({
  number,
  status = "ENABLE",
  state,
}: {
  number: number;
  status?: "ENABLE" | "DISABLE";
  state?: "ON" | "OFF";
}) {
  return (
    <div
      className={clsx(
        "btn w-48 h-48 font-bold text-white bg-red-500 rounded-full hover:none",
        status === "DISABLE" && "bg-gray-500 btn-disabled",
        state === "ON" && "bg-green-500"
      )}
      style={{ fontSize: "2rem" }}
    >
      {number}
    </div>
  );
}

function ButtonGrid({ channelState }: { channelState: any }) {
  return (
    <div className="flex flex-col w-full h-full justify-between items-center gap-2">
      <div className="flex flex-row gap-4 w-full h-1/3 justify-around items-center">
        <Button number={1} state={channelState[0].state} />
        <Button number={2} state={channelState[1].state} />
        <Button number={3} state={channelState[2].state} />
      </div>
      <div className="flex flex-row gap-4 w-full h-1/3 justify-around items-center">
        <Button number={4} state={channelState[3].state} />
        <Button number={5} state={channelState[4].state} />
        <Button status="DISABLE" number={6} />
      </div>
      <div className="flex flex-row gap-4 w-full h-1/3 justify-around items-center">
        <Button status="DISABLE" number={7} />
        <Button status="DISABLE" number={8} />
        <Button status="DISABLE" number={9} />
      </div>
    </div>
  );
}

export default ButtonGrid;
