import { File, Bookmark, Bug, GitBranch, Puzzle, RefreshCcw, Search, Zap } from 'lucide-react';
import React from 'react';

export function Sidebar() {
  return (
    <div className="row-span-24 col-span-1 p-2 flex flex-col gap-4">
      <File color="#82709e" size={26}/>
      <Search color="#82709e" size={26}/>
      <GitBranch color="#82709e" size={26}/>
      <Bug color="#82709e" size={26}/>
      <Puzzle color="#82709e" size={26}/>
      <Bookmark color="#82709e" size={26}/>
      <Zap color="#82709e" size={26}/>
      <RefreshCcw color="#82709e" size={26}/>
    </div>
  );
}