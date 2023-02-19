import { Maximize, Minus, X } from 'lucide-react';
import React from 'react';

export function Topbar() {
  return (
    <div className="row-span-1 col-span-22 flex justify-between bg-[#2a273f]">
      <div className="flex gap-4 items-center px-2">
        <span>File</span>
        <span>Edit</span>
        <span>Selection</span>
        <span>View</span>
        <span>Go</span>
        <span>Run</span>
        <span>Terminal</span>
        <span>Help</span>
      </div>
      <div className="flex gap-7 items-center px-2">
        <Minus size={18}/>
        <Maximize size={18}/>
        <X size={18}/>
      </div>
    </div>
  );
}