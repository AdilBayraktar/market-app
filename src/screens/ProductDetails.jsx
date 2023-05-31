import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getProduct } from '../redux/slices/singleProductSlice'
import Loader from '../components/Loader'
import ProductDetailsCard from '../components/ProductDetailsCard'

const ProductDetails = () => {
    const { id } = useParams()
    const dispatch = useDispatch()
    const product = useSelector(state => state.getProduct)
    useEffect(() => {
        dispatch(getProduct(id))
        window.scrollTo(0, 0)
    }, [])

    console.log(product)
    return (
        <div className='flex justify-center max-w-[90%] m-auto my-10 min-h-[75vh]'>
            {
                product.isLoading ? <Loader />
                    : <ProductDetailsCard product={product?.data?.data} />
            }
        </div>
    )
}

export default ProductDetails