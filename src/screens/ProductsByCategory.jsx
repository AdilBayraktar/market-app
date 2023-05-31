import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsByCategory } from '../redux/slices/productsByCategorySlice'
import { useParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import Loader from '../components/Loader'

const ProductsByCategory = () => {
    const dispatch = useDispatch()
    const { id } = useParams()
    const productsByCategory = useSelector(state => state.getProductsByCategory)
    useEffect(() => {
        dispatch(getProductsByCategory(id))
    }, [dispatch])
    console.log(productsByCategory)
    console.log(id)
    return (
        <div className='flex flex-wrap justify-center my-5'>

            {productsByCategory?.isLoading ? <Loader /> :
                productsByCategory?.data?.data?.products?.map((product, i) => (
                    <ProductCard key={i} product={product} />
                ))
            }
        </div>
    )
}

export default ProductsByCategory