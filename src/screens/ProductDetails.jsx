import React from 'react'
import { BsStarFill } from 'react-icons/bs'

const ProductDetails = () => {
    return (
        <div className='flex max-w-[90%] m-auto my-10 min-h-[75vh]'>
            <div className="flex md:flex-wrap sm:flex-wrap lg:flex-nowrap space-x-5 border p-5 rounded-3xl shadow-blue-200 shadow-md">
                <img src="https://bestof.nyc3.digitaloceanspaces.com/devsnap.me/sam/product-card-2.gif" className='w-7/12 md:w-full sm:w-full' alt="img" />
                <div className='align-middle flex flex-col justify-center'>
                    <p className='font-semibold text-2xl text-blue-900'>Brand</p>
                    <div className='flex my-5 justify-between items-center'>
                        <span className='bg-gray-200 hover:bg-gray-400 transition text-sm px-2 py-1 rounded-2xl text-blue-900'>category</span>
                        <span className='bg-gray-200 hover:bg-gray-400 transition text-sm px-2 py-1 rounded-2xl text-blue-900'>in stock</span>
                    </div>
                    <div className='flex my-5 justify-between items-center'>
                        <span className='flex bg-gray-200 space-x-3 transition items-center text-lg px-2 py-1 rounded-2xl text-blue-900'>< BsStarFill color='orange' className='mr-2' size={30} />4.5</span>
                        <span className='text-6xl font-light text-blue-800'>$200</span>
                    </div>
                    <p className='font-semibold text-3xl mt-5 mb-2'>Title</p>
                    <p className='text-gray-500 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus voluptatem incidunt nemo iusto obcaecati? Labore dicta delectus ipsa voluptas distinctio earum, officiis cumque, nulla sequi vel ipsum facere odio quis?</p>
                    <button className='bg-blue-800 text-white w-full mt-5 py-2 hover:bg-blue-600 rounded-lg transition '>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails