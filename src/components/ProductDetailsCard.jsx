import React, { useEffect, useState } from 'react'
import { BsStarFill } from 'react-icons/bs'
import { useDispatch } from 'react-redux';
import Slider from "react-slick";
import { addToCart } from '../redux/slices/cartSlice';

const ProductDetailsCard = ({ product }) => {
    const [quantity, setQuantity] = useState(0)
    const dispatch = useDispatch()
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    };
    const addCart = () => {
        dispatch(addToCart({ id: product?.id, title: product?.title, image: product?.thumbnail, quantity: quantity, price: product?.price }))

    }

    return (
        <div className="flex md:flex-wrap sm:flex-wrap lg:w-[65%] md:w-[80%] sm:w-[90%] lg:flex-wrap space-x-5 border p-5 rounded-3xl shadow-blue-200 shadow-md">
            {/* <img src={product?.thumbnail} className='w-6/12 md:w-full sm:w-full rounded-2xl' alt="img" /> */}
            <div className='lg:max-w-[100%] md:max-w-[100%] sm:max-w-[100%]'>
                <Slider {...settings}>
                    {
                        product?.images.length > 1 ? (product?.images?.map((img, i) => (
                            <div>
                                <img key={i} src={img} className='w-full  rounded-3xl max-h-[400px]' alt="img" />
                            </div>
                        ))) : (<img src={product?.thumbnail} className='w-full max-h-[400px] rounded-2xl' alt="img" />)
                    }
                </Slider>
            </div>
            <div className='align-middle flex flex-col justify-center w-6/12 md:w-full sm:w-full'>
                <p className='font-semibold text-2xl text-blue-900 md:mt-5 sm:mt-5'>{product?.brand}</p>
                <div className='flex my-5 justify-between items-center'>
                    <span className='bg-gray-200 hover:bg-gray-400 transition text-sm px-2 py-1 rounded-2xl text-blue-900'>{product?.category}</span>
                    <span className='bg-gray-200 hover:bg-gray-400 transition text-sm px-2 py-1 rounded-2xl text-blue-900'>{product?.stock ? <p>in stock</p> : <p>out of stock</p>}</span>
                </div>
                <div className='flex my-5 justify-between items-center'>
                    <span className='flex bg-gray-200 space-x-3 transition items-center text-lg px-2 py-1 rounded-2xl text-blue-900'>< BsStarFill color='orange' className='mr-2' size={30} />{(product?.rating).toFixed(1)}</span>
                    <span className='text-6xl font-light text-blue-800'>${product?.price}</span>
                </div>
                <p className='font-semibold text-3xl mt-5 mb-2'>{product?.title}</p>
                <p className='text-gray-500 text-sm'>{product?.description}</p>
                <div className='flex items-center gap-5 mt-5'>
                    <span className='text-gray-500 text-sm'>Quantity: </span>
                    <div className='bg-gray-200 w-fit px-5 rounded-3xl flex items-center gap-5'>
                        <span onClick={() => quantity > 0 ? setQuantity(quantity - 1) : null} className='cursor-pointer font-bold'>-</span>
                        <input type="text" className='w-5 text-center bg-transparent outline-none text-2xl font-bold' value={quantity} />
                        <span onClick={() => setQuantity(quantity + 1)} className='cursor-pointer font-bold'>+</span>
                    </div>
                </div>
                <button onClick={addCart} className='bg-blue-800 text-white w-full mt-5 py-2 hover:bg-blue-600 rounded-lg transition'>Add to Cart</button>
            </div>
        </div>
    )
}

export default ProductDetailsCard