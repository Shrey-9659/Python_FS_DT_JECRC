import React from 'react'

const Banner = ({mode}) => {
  return (
    <main className={`px-6 md:px-12 py-6 ${mode ? 'bg-white' : 'bg-black'} h-[60vh]`}>
      </main> 
  )
}

export default Banner