import React from 'react'
import { Link } from 'react-router-dom'
import { SlBasket } from 'react-icons/sl'

const Navbar = () => {
    return (
        <div className='flex justify-between px-10 h-16 items-center bg-blue-950 top-0 text-white rounded-b-3xl shadow-md sticky z-50'>
            <Link to={'/'}><div className='font-semibold text-2xl'>My Market</div></Link>
            <div className='flex space-x-5'>
                <Link to={'/'} className='hover:text-slate-300 transition'>Home</Link>
                <Link to={'/categories'} className='hover:text-slate-300 transition'>Categories</Link>
            </div>

            <Link to={'/cart'}>
                <div className="relative">
                    <SlBasket size={25} className='cursor-pointer' />
                    <span className='absolute -top-2 -right-3 px-2 bg-red-600 text-white rounded-full text-sm'>1</span>
                </div>
            </Link>

        </div>
    )
}

export default Navbar