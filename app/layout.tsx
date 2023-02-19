import { Inter } from '@next/font/google'

import './globals.css'
import { Topbar } from '@/components/Topbar';
import { Sidebar } from '@/components/Sidebar';
import { Explorer } from '@/components/Explorer';
import { Footer } from '@/components/Footer';
import { ReactNode } from 'react';

const inter = Inter({subsets: ['latin']})

export const metadata = {
  title: {
    default: 'Vinicios Silva',
    template: '%s | Vinicios Silva'
  },
  robots: {
    index: true,
    follow: true
  },
  description: "Front-end developer, helped millions of users all around the globe."
}

export default function RootLayout({ children,}: {children: ReactNode}) {
  return (
    <html lang="en" className={inter.className}>
      <head />
      <body className='bg-dark-pattern bg-no-repeat bg-cover w-screen h-screen text-[rgb(143,140,168)] py-20'>
        <main className='w-9/12 h-full bg-[#232135] grid grid-cols-22 grid-rows-26 m-auto rounded-md overflow-hidden'>
          <Topbar/>
          <Sidebar/>
          <Explorer/>
          <div className="row-span-24 col-span-16 overflow-auto">
            {children}
          </div>
          <Footer/>
        </main>
      </body>
    </html>
  )
}
