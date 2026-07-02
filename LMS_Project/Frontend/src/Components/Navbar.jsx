import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className=' fixed top-0 inset-x-0 z-50 bg-[#F9F9F6]/85 backdrop-blur-xl border-b border-black'>
        <div className=" max-w-7xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
            {/* Left Part */}
            <Link to="/" className='flex items-center gap-2'>
            <span className=' h-7 w-9 bg-[#002FA7] '>
                LMS
            </span>
            <span>
                JECRC
            </span>
            </Link>
        
        <div>Center</div>
        <div>Right</div>
        </div>
    </header>
  )
}

export default Navbar