"use client"

import * as Collapsible from '@radix-ui/react-collapsible';
import { ChevronDown, Folder } from 'lucide-react';
import Link from 'next/link';
import { ReactElement } from 'react';

type CollapsibleCProps = {
  title: string,
  pages: Array<Pages>
}

type Pages = {
  icon: ReactElement<any, any>,
  linkTo: string,
  text: string,
}

export function CollapsibleC({title, pages}: CollapsibleCProps) {

  return (
    <Collapsible.Root 
      className='ml-2'
    >
      <Collapsible.Trigger className='flex gap-2 items-center'>
        <ChevronDown size={18}/>
        <Folder size={18}/>
        {title}
      </Collapsible.Trigger>
      <Collapsible.Content className='flex flex-col my-1'>
        {
          pages.map( (item, index) => (
            <Link 
              href={item.linkTo}
              key={index}
              className="ml-7 my-1"
            >
              <span className='flex items-center gap-1' >{item.icon} - {item.text}</span>
            </Link>
          ))
        }
      </Collapsible.Content>
    </Collapsible.Root>
  );
}