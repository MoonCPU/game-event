import React from 'react'

function Navbar() {
  return (
    <div className='relative bg-[#302C51]'>
      <div className='max-w-4xl sm:text-2xl mx-auto h-28  flex justify-between bg-gradient-to-r from-mycolor via-mycolor2 to-mycolor to-r text-white'>
        <ul className='sm:flex flex-row justify-center items-center gap-x-10 hidden'>
          <li>Home</li>
          <li>About</li>
        </ul>
        <div className="absolute inset-0 flex items-center justify-center pt-16">
          <img src="logo.png" alt="logo" className="z-50 h-40 sm:h-48" />
        </div>
        <ul className='sm:flex flex-row justify-center items-center gap-x-10 hidden'>
          <li>Rules</li>
          <li>Sponsorship</li>
        </ul>
      </div>      
    </div>

  )
}

export default Navbar