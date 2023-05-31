import React, { useEffect, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../redux/slices/productsSlice'
import Loader from '../components/Loader'
import HeroBanner from '../components/HeroBanner'
import ReactPaginate from 'react-paginate';

const Home = () => {
    const dispatch = useDispatch()
    const products = useSelector(state => state.getAllProducts)
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 12
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = products?.data?.data?.products.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(products?.data?.data?.products.length / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % products?.data?.data?.products.length;
        window.scrollTo({
            behavior: 'smooth',
            left: 0,
            top: 0
        })
        setItemOffset(newOffset);
    };
    useEffect(() => {
        dispatch(getAllProducts())
    }, [dispatch])
    console.log(products)


    return (
        <div className=' mb-5 min-h-[80vh]'>

            {products?.isLoading ? <Loader /> :
                <>
                    <HeroBanner />
                    <div className="flex flex-wrap justify-center">
                        {currentItems?.map((product, i) => (
                            <ProductCard key={i} product={product} />
                        ))}
                    </div>
                    <ReactPaginate
                        className='pagination'
                        breakLabel="..."
                        nextLabel=">"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={pageCount}
                        previousLabel="<"
                        renderOnZeroPageCount={null}
                    />
                </>
            }
        </div>
    )
}

export default Home