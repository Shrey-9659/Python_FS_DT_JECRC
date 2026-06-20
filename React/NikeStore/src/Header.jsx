import React, { useState } from 'react';
import { ShoppingBag, Search, Heart, Menu, X, ArrowRight, Moon } from 'lucide-react';

const Header = ({mode, setMode}) => {

  return (
    <header className="sticky top-0 bg-white z-40 px-6 md:px-12 py-4 flex justify-between items-center transition-all duration-300">
        
        <div className="flex items-center cursor-pointer">
          <svg className="w-16 h-7 fill-current text-black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 6.5c-2.3 1.3-5.9 3.9-8.4 6.6-2.1 2.3-3.1 4.7-3.4 5.9-.1.4-.4.5-.6.1-.5-1.1-1.3-3.2-3-5.2-1.8-2.1-4.1-3.5-5.5-4-.4-.1-.4-.5 0-.6 2.8-.7 7.7.3 11.2 3.1 3.2-3.1 7.2-5.4 9.5-6 .3-.1.5.1.2.3z"/>
          </svg>
        </div>

        <nav className="hidden md:flex space-x-6 text-[16px] font-medium tracking-wide">
          
            <button
              className={`hover:border-b-2 hover:border-black pb-1 transition-all border-b-2 border-black font-semibold`}
            >"New & Featured"
            </button>
          <a href="#" className="hover:border-b-2 hover:border-black pb-1">Men</a>
          <a href="#" className="hover:border-b-2 hover:border-black pb-1">Women</a>
          <a href="#" className="hover:border-b-2 hover:border-black pb-1">Kids</a>
          <a href="#" className="hover:border-b-2 hover:border-black pb-1 text-red-600">Sale</a>
        </nav>

        <div className="flex items-center space-x-4">
          
          

          <button onClick={() => setMode(!mode)} className="p-2 hover:bg-gray-100 rounded-full relative">
            <Moon className="h-6 w-6 stroke-[1.5]" />
          </button>
        </div>
      </header>
  )
}

export default Header