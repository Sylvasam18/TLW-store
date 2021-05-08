import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'

function Product({id,title,price,rating,image}) {
    const [{basket}, dispatch] = useStateValue();

    console.log('basket content', basket)

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item:{
             id: id,
             title: title,
             price: price,
             image: image,
             rating: rating,
        }
        })
        
    }
    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating)
                        .fill()
                        .map((_) => (
                            <p>*</p>
                        ))
                    }
                </div>
               
                </div>
                <img alt="" src={image} />
                <button onClick={addToBasket}>Add to cart</button>
        </div>
    )
}

export default Product
