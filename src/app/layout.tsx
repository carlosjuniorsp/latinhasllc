import './globals.css'
import type { Metadata } from 'next'
import NavLink from './nav'
import Image from 'next/image'
import { FaBars } from 'react-icons/fa';

export const metadata: Metadata = {
  title: 'Latinhas LLC',
  description: 'Um projeto de latinhas',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header >
          <nav className="header p-5">
            <NavLink href="/"><FaBars className="fabars" /></NavLink>
            <NavLink href="/">
              <Image
                src="/logo.png"
                alt="Smi"
                className="ml-3"
                width={100}
                height={72}
                priority
              />
            </NavLink>
            <div className="user-area">
              <span className="p-2">LM</span>
            </div>
          </nav>
        </header>
        <main className='m-10'>
          {children}
        </main>
      </body>
    </html>
  )
}
