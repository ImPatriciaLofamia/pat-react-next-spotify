import React from "react";
import { 
  HomeIcon, 
  BuildingLibraryIcon, 
  MagnifyingGlassIcon, 
  PlusCircleIcon,
  HeartIcon,
  RssIcon
} from "@heroicons/react/24/outline";

function SideBarNav() {
  return (
    <div className="text-gray-500 p-5 text-sm border-r border-gray-900">
      <div className="space-y-4">
        <button className="flex items-center space-x-2 hover:text-white">
          <HomeIcon className="w-5 h-5 " />
          <p>Home</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <MagnifyingGlassIcon className="w-5 h-5 " />
          <p>Search</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <BuildingLibraryIcon className="w-5 h-5 " />
          <p>My Library</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900"></hr>
        <button className="flex items-center space-x-2 hover:text-white">
          <PlusCircleIcon className="w-5 h-5 " />
          <p>Create Playlist</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <HeartIcon className="w-5 h-5 " />
          <p>Liked Songs</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <RssIcon className="w-5 h-5 " />
          <p>Episodes</p>
        </button>
        <hr className="border-t-[0.1px] border-gray-900"></hr>

        {/* This is where playlist would be rendered */}
      </div>
    </div>
  );
}

export default SideBarNav;
