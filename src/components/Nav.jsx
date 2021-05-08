import React from 'react'
import './Nav.css'
import {Link} from 'react-router-dom'

function Nav() {
    return (
        <div className="nav">
            <div className="nav_outer">
               <div className="nav_inner">
               <Link>Home</Link>
               <Link>Free Courses</Link>
               <Link>Top Rated</Link>
               <Link>Best Sellers</Link>
                <Link>New Courses</Link>
               </div> 
            </div>
        </div>
    )
}

export default Nav
