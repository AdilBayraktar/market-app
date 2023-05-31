import React from 'react'
import { BsStarFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const ProductCard = ({ product }) => {
    const addToCart = () => {
        console.log(product)
        const cart = []
        localStorage.setItem(cart, cart.push(product))
    }
    return (

        <div className='border m-5 max-w-[300px] bg-white rounded-lg shadow-md cursor-pointer hover:shadow-slate-400 transition'>
            <Link to={`/product/${product?.id}`}>
                <div className='p-3'>
                    <img src={product?.thumbnail} alt="" className='m-auto rounded-xl max w-full h-40' />
                    <p className='font-semibold text-gray-800 h-12 my-3'>{product?.title}</p>
                    <p className='text-gray-500'>{(product?.description).substring(0, 40)}...</p>
                    <div className="flex justify-between items-center mt-3 mb-2">
                        <span className='text-3xl text-blue-800 font-normal'>${product?.price}</span>
                        <span className='flex text-'>< BsStarFill color='orange' size={20} />{product?.rating}</span>
                    </div>
                    <div className="space-x-2 justify-start items-center">
                        <span className='bg-gray-200 text-xs px-2 py-1 rounded-2xl text-blue-900'>{product?.brand}</span>
                        <Link to={`/products-by-category/${product?.category}`}><span className='bg-gray-200 hover:bg-gray-400 transition text-xs px-2 py-1 rounded-2xl text-blue-900'>{product?.category}</span></Link>
                    </div>
                </div>
            </Link>
            <button className='bg-blue-800 text-white w-full py-2 hover:bg-blue-600 rounded-b-lg transition' onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    )
}

export default ProductCard