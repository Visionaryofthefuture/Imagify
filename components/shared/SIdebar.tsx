"use client"

import React from 'react'
import Link from 'next/link'
import logo from "@/assets/bird_2.jpg"
import { navLinks } from '@/constants/routes'
import "@/app/globals.css"
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { Button } from '../ui/button'

const SIdebar = () => {

  const active_link = usePathname(); {/* The react hook by next js to know if my current active link is the specified path in url */}

  return (
    <aside className = "sidebar">
        <div className = "flex gap-4 size-full flex-col">
            <Link href = "/" className = "sidebar-logo">

                <Image  alt = "Design-logo" src = {logo}  width = {180} height = {180}/>
            </Link>

            <nav className = "sidebar-nav">
              <SignedIn>
                <ul className = "sidebar-nav_elements">
                  { navLinks.map((link) =>
                  {
                      const active = link.route === active_link 

                      return  (
                        <li key={link.route} className={`sidebar-nav_element group ${
                          active ? 'bg-purple-gradient text-white' : 'text-gray-700'
                        } `}>     

                        <Link className = "sidebar-link" href = {link.route}> {link.label}</Link>                       
                          </li>

                      )
                  })}
                  <li><UserButton afterSwitchSessionUrl=" /"  showName = {true}/> </li>

                </ul>



                  </SignedIn>
                    <SignedOut>

            <Button className="flex justify-center ">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
                </nav>
        </div>

        
    </aside>
  )
}

export default SIdebar