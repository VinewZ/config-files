import { GitBranch, Github } from 'lucide-react';
import React from 'react';

export function Footer() {
  return (
    <div className="row-span-1 col-span-22 flex justify-between items-center bg-[#2a273f]">
      <div className="flex items-center px-3">
        <GitBranch size={14}/>
        <span className='ml-2'>Main</span>
      </div>
      <div className="flex items-center px-3">
        <span className='mr-2'>Github</span>
        <Github size={14}/>
      </div>
    </div>
  );
}