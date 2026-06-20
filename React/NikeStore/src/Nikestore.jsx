import React, { useState } from 'react';
import { ShoppingBag, Search, Heart, Menu, X, ArrowRight } from 'lucide-react';
import Header from './Header';
import Banner from './Banner';

export default function NikeStore() {
      const [mode, setMode] = useState(0)
  return (
    <div className="min-h-screen bg-white font-sans text-black selection:bg-black selection:text-white">      
      <Header mode={mode} setMode={setMode}/>
      <Banner mode={mode}/>     
    </div>
  );
}