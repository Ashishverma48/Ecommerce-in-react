
import { useEffect, useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'
import { useParams } from 'react-router-dom'
import { getPriceAfterDiscount } from '../../utils'
import Rating from '@mui/material/Rating';
import Header from '../../component/Header/Header'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Details() {
  
  const [item,setItem] = useState({}) 
  const {id} = useParams()
  console.log(id);
  useEffect(()=>{
    fetch(`https://dummyjson.com/products/${id}`)
    .then(response=>response.json())
    .then(data =>setItem(data))

  },[])
  console.log(item?.title ? item?.title:'');
  return (
    <>
    <Header/>
    <div className="bg-white">
      <div className="pt-6 flex">


        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-2xl sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 w-1/2">
          
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                 src={item?.images && item?.images[0]}
                 alt={item?.images && item?.images[0]}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                 src={item?.images && item?.images[1]}
                 alt={item?.images && item?.images[1]}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="hidden lg:grid lg:grid-cols-1 lg:gap-y-8">
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                 src={item?.images && item?.images[2]}
                 alt={item?.images && item?.images[2]}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="aspect-h-2 aspect-w-3 overflow-hidden rounded-lg">
              <img
                 src={item?.images && item?.images[3]}
                 alt={item?.images && item?.images[3]}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          
        </div>

        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 flex flex-col lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16 w-full">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{item?.title &&  item?.title}</h1>
          </div>

          {/* Options */}
          <div className="mt-6 lg:row-span-3 lg:mt-3">
            <h2 className="sr-only">Product information</h2>
            <div className='flex gap-4 items-center'> 
            <p className="text-3xl font-medium tracking-tight text-indigo-600"> $ {getPriceAfterDiscount(item?.price,item?.discountPercentage)}</p>
            <p   className="text-2xl line-through tracking-tight text-gray-900">$ {item.price}</p>
            <p className='text-green-700 font-medium'>{item.discountPercentage} % Off</p>
            </div>

            {/* Reviews */}
            <div className="mt-6">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                
                  
                <Rating name="read-only" value={item?.rating ? item?.rating : 4} className='rating' readOnly  precision={0.5}/>
                  
                
                <p className="sr-only">{item?.stock} out of 5 stars</p>
                <a href="#!" className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  {item?.stock} Stocks
                </a>
              </div>
            </div>

            <form className="mt-10">
             

              <button
                type="submit"
                className="mt-10 flex  items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <ShoppingCartIcon/>
                Add to Cart
              </button>
            </form>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{item.description}</p>
              </div>
            </div>

              
            <div className="mt-6 flex gap-4">
              <h2 className="text-sm font-medium text-gray-900">Brand </h2>
              <h4 className="text-sm font-medium text-indigo-600">{item?.brand}</h4>

             
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
