import React from 'react'
import './style.scss'
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { getPriceAfterDiscount } from '../../utils';
import { useNavigate } from 'react-router-dom';
const Card = ({deals}) => {
  const navigate = useNavigate()
  console.log(deals);
  return (
    <>
      
        {
            deals?.map(item=>(
                <div key={item.id} className='card'>
                    <div className='cardUpper'>
                      <img src={item?.thumbnail} alt="" onClick={()=>(navigate(`product/${item.id}`))} />
                      {/* <FavoriteIcon className='favorite'/> */}
                    </div>
                    <div className='cardLower'>
                      <h3 className='font-semibold '>{item.title}</h3>
                    
                      <div className='price'>
                      <h2 className='font-bold text-gray-600'>$ {getPriceAfterDiscount(item?.price,item?.discountPercentage)}</h2>
                      <del>$ {item.price}.00</del>
                      <h5>{item.discountPercentage}  % Off</h5>

                      </div>
                      
                      <div>
                      <Rating name="read-only" value={item.rating} className='rating' readOnly  precision={0.5}/>
                      <span >({item.rating.toFixed(1)})</span>
                      </div>
                    <button>Add to Cart</button>
                    </div>
                </div>
            ))
        }
    </>
  )
}

export default Card