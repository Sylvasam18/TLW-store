import React from 'react'
import './Home.css'
import homeBanner from '../assets/images/tlw-home.png'
import FSD from '../assets/images/Fs.png'
import AI from '../assets/images/AI.jpg'
import UI from '../assets/images/UI.jpg'
import AD from '../assets/images/AD.jpg'
import FE from '../assets/images/FE.png'
import BE from '../assets/images/BE.png'
import Product from '../components/Product'

function Home() {
    return (
        <div className="home">
            <img className="home__img" alt="" src={homeBanner} />
            <div className="home__row">
                <Product 
                  id="121317"
                  title="Fullstack Programme"
                  price={5.0}
                  rating={1}
                  image= {FSD}

                />
                <Product 
                  id="221313"
                  title="Artificial Intelligence"
                  price={3.5}
                  rating={2}
                  image= {AI}

                />
                <Product 
                  id="321311"
                  title="UI/UX Designs"
                  price={1.5}
                  rating={6}
                  image= {UI}

                />    
            </div>
            <div className="home__row">
                <Product 
                  id="421314"
                  title="FrontEnd Development"
                  price={4.5}
                  rating={4}
                  image= {FE}

                />
                <Product 
                  id="521316"
                  title="Backend Development"
                  price={5.1}
                  rating={5}
                  image= {BE}

                />
                <Product 
                  id="621315"
                  title="App Development"
                  price={5.2}
                  rating={3}
                  image= {AD}

                />    
            </div>
        </div>
    )
}

export default Home