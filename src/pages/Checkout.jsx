import React from 'react'
import Subtotal from '../components/Subtotal'
import './Checkout.css'
import {useStateValue} from '../components/StateProvider'
import ProductCart from '../components/ProductCart';


function Checkout() {
    const [{basket}] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
                {
                    basket.length === 0 ? (
                        <div>
                            <h2 className="checkout__title">Your cart is empty.</h2>
                        <p>You have no item selected, Please pick a course.</p>
                        </div>
                    ) : (
                        <div>
                            <h2 className="shoppingBasketTitle">Items in the cart</h2>
                            {
                                basket.map(item => (
                                    <ProductCart
                                    id= {item.id}
                                    title= {item.title}
                                    image= {item.image}
                                    price= {item.price}
                                    rating= {item.rating}
                                   
                                    />
                                    
                    )
                    )
                                       }                     
                          </div>
                    )
                }
            </div>
            {
                basket.length > 0 && (
                    <div className= "checkout__right">
                <Subtotal />
            </div>
                )
            }
        </div>
    )
}

export default Checkout
