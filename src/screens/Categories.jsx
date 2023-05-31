import React, { useEffect } from 'react'
import { BiCategoryAlt } from 'react-icons/bi'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategories } from '../redux/slices/categoriesSlice'
import Loader from '../components/Loader'
import { Link } from 'react-router-dom'
import AnimatedLayout from '../animated-Layout/AnimatedLayout'

const Categories = () => {
    const dispatch = useDispatch()
    const categories = useSelector(state => state.getAllCategories)
    useEffect(() => {
        dispatch(getAllCategories())
    }, [dispatch])
    console.log(categories)
    return (

        <div className='flex flex-wrap justify-center space-x-10 items-center my-3 min-h-[80vh]'>
            {
                categories.isLoading ? <Loader /> : categories?.data?.data?.map(cat => (
                    <AnimatedLayout>
                        <Link to={`/products-by-category/${cat}`}>
                            <p className='bg-gray-200 cursor-pointer hover:bg-gray-300 transition text-2xl px-8 py-3 m-2
                     rounded-2xl text-blue-900 flex
                     items-center'><BiCategoryAlt className='mr-3' /> {cat}</p>
                        </Link>
                    </AnimatedLayout>
                ))
            }
        </div>

    )
}

export default Categories