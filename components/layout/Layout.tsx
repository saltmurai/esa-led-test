import { ReactNode } from "react";
import Topbar from "./Topbar";
import BottomBar from "./BottomBar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main className="h-screen">
      <div className="w-100 h-screen bg-gray-200 flex flex-col justify-between">
        <Topbar></Topbar>
        {children}
        <BottomBar></BottomBar>
      </div>
    </main>
  );
}
