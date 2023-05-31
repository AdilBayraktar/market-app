import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCartTotalAmount, removeFromCart } from '../redux/slices/cartSlice'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { carts, totalAmount, itemCount } = useSelector(state => state.carts)
    useEffect(() => {
        dispatch(getCartTotalAmount())
    }, [dispatch])
    console.log(totalAmount, itemCount)
    return (
        <div className='flex flex-col justify-center items-center min-h-[84vh]'>

            {
                carts.length > 0 ?
                    <>
                        <table className="table-fixed border w-[80%] my-10">
                            <thead>
                                <tr>
                                    <th className='p-3 text-start'></th>
                                    <th className='p-3 text-start'>Title</th>
                                    <th className='p-3 text-start'>Quantity</th>
                                    <th className='p-3 text-start'>Price</th>
                                    <th className='p-3 text-start'>Total</th>
                                    <th className='p-3 text-start'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    carts?.map((cart, i) => (
                                        <tr key={i} className='border'>
                                            <td className='p-3'><img src={cart?.image} className='w-[50px] h-[50px] rounded-full' alt="product" /></td>
                                            <td onClick={() => navigate(`/product/${cart?.id}`)} className='p-3  underline cursor-pointer'>{cart?.title}</td>
                                            <td className='p-3'>{cart?.quantity}</td>
                                            <td className='p-3'>{cart?.price}</td>
                                            <td className='p-3'>{cart?.price * cart?.quantity}</td>
                                            <td onClick={() => dispatch(removeFromCart(cart?.id))} className='p-3'><button className='bg-red-600 text-white px-3 py-1 rounded-md'>Delete</button></td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                        <div className="flex justify-end mb-10 text-blue-900 bg-gray-300 p-2 rounded-xl font-semibold text-2xl text-end">
                            <p>Total Amount:</p>
                            <p className='mx-2'>${
                                carts.reduce((cartTotal, cartItem) => {
                                    return (cartTotal += (cartItem.price * cartItem.quantity));
                                }, 0)
                            }</p>
                        </div>
                    </>
                    : <div className='flex flex-col justify-center items-center'>
                        <p className='bg-red-300 py-5 w-[60vw] text-center rounded-md'>You Do not have items in your cart</p>
                        <button onClick={() => navigate('/')} className='bg-blue-700 px-2 py-1 my-5 rounded-lg text-white'>Back to home </button>
                    </div>
            }

        </div>
    )
}

export default Cart