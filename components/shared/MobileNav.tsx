import React from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  
import logo from "@/assets/bird_2.jpg"
import Link from 'next/link';
import Image from 'next/image';
  
const MobileNav = () => {
  return (

        <header> 
            <Link href = "/" className = "flex items-center gap-2 md:py-2">
            
                <Image src = {logo} alt = "logo" width = {240} height = {240}></Image>
            </Link>

        </header>
        
    );
}

export default MobileNav