import React from 'react'

function Navbar() {
    return (
        <div className='w-full flex py-4 justify-between'>
            <div className='flex gap-4 mb-8 ml-10'>
            <button className='text-[1.5vw] hover:bg-zinc-100 rounded-2xl duration-700'>Menu⇓</button>
            <button className='text-[1.5vw] hover:bg-zinc-100 rounded-2xl duration-700'>Stock⇓</button>
            </div>
            <h1 className='text-[2.5vw] font-bold ml-12'>Shoe Pit</h1>
            <ul className='flex text-[1.5vw] font-light gap-6 mr-20'>
                <li>Product</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
        </div>
    )
}

export default Navbar
