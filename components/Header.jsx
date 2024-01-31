'use client';
import React, {useState, useEffect} from "react"

//components
import Logo from "./Logo";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { usePathname } from "next/navigation";


export const Header = () => {
    return (
        <header className='bg-white/40 backdrop-blur-sm bg-accent py-6 bg-transparent sticky top-0 z-30 transition-all'>
        <div className="container mx-auto">
            <div className="flex justify-between items-center">
                <Logo />
                <div className="flex items-center gap-x-6 ">
                    <Nav containerStyles='hidden xl:flex text-xl gap-x-8 items-center'
                    lingStyle='relative transition-all ' 
                    underlineStyle='absolute  left-0 top-full h-[5px] bg-primary
                    w-full'/>
                <div className="xl:hidden ">
                    <MobileNav/>
                </div> 
                </div>
            </div>
        </div>
    </header>
    )
}

export default Header
