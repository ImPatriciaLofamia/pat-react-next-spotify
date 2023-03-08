import React from "react";
import { Inter } from "next/font/google";
import SideBarNav from "./components/SideBarNav";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-black h-screen overflow-hidden">
      <main className="">
        <SideBarNav/>
        {/* This is center */}
      </main>

      <div>
        {/* This is the player */}
      </div>
    </div>
  );
}
