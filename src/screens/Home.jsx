import React from 'react'
import ProductCard from '../components/ProductCard'

const Home = () => {
    return (
        <div className='flex flex-wrap justify-center my-5'>
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    )
}

export default Home