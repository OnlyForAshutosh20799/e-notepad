import React from 'react'

function Navbar() {
  return (
    <>
    
    <div>
        <nav>
            <div className='w-full h-[60px] bg-gray-400 text-black  flex justify-end items-center '>
                <ul className=' flex justify-center gap-24 mr-11'>
                    <li className='hover:bg-black p-2 px-6 hover:rounded-lg hover:text-white  cursor-pointer'>Home</li>
                    <li className='hover:bg-black p-2 px-6 hover:rounded-lg hover:text-white cursor-pointer'>About</li>
                    <li className='hover:bg-black p-2 px-6 hover:rounded-lg hover:text-white cursor-pointer'>Login</li>
                    <li className='hover:bg-black p-2 px-6 hover:rounded-lg hover:text-white cursor-pointer'>SignUp</li>
                </ul>
            </div>
        </nav>
    </div>
    
    </>
  )
}

export default Navbar