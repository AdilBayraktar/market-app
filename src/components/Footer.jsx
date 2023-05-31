import React from 'react'
import { AiFillHeart } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='bottom-0 w-full bg-blue-950 rounded-t-2xl p-4 flex text-white items-center justify-center'>Created With <AiFillHeart className='mx-1 text-red-600 text-2xl' /> By <Link to="https://www.linkedin.com/in/adil-bayraktar-78687b1a2/" className='mx-1 underline' target='_blank'>Adil BAYRAKTAR</Link></div>
    )
}

export default Footer