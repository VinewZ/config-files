import { FileJson, MoreHorizontal, Settings, Terminal } from 'lucide-react';
import React from 'react';
import { CollapsibleC } from '../CollapsibleC';

export function Explorer() {
  return (
    <div className="row-span-24 col-span-5 py-2">
      <div className='flex items-center justify-between px-3 mb-2 text-xs'>
        <span>EXPLORER</span>
        <MoreHorizontal size={16}/>
      </div>
      <CollapsibleC 
        title="Visual Studio Code" 
        pages={[
          {icon: <FileJson size={16}/>, linkTo: '/vscode/settings', text: 'settings.json'},
          {icon: <FileJson size={16}/>, linkTo: '/vscode/extensions', text: 'extensions.json'}
        ]}
      />
      <CollapsibleC 
        title="Terminal" 
        pages={[
          {icon: <Terminal size={16}/>, linkTo: '/terminal/general', text: 'general'},
          {icon: <Settings size={16}/>, linkTo: '/terminal/omp', text: 'omp.config'}
        ]}
      />
    </div>
  );
}