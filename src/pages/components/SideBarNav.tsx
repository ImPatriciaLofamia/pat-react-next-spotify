import React from "react";
import { 
  HomeIcon, 
  LibraryIcon, 
  SearchIcon, 
  PlusCircleIcon 
} from "@heroicons/react/24/outline";

function SideBarNav() {
  return (
    <div className="">
      <div>
        <button>
          <HomeIcon className="w-5 h-5" />
          <p>Home</p>
        </button>
      </div>
    </div>
  );
}

export default SideBarNav;
