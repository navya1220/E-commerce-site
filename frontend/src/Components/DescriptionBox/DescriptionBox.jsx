import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
return (
    <div className='descriptionbox'>
        <div className='descriptionbox-navigator'>
            <div className='descriptionbox-nav-box'>Description</div>
            <div className='descriptionbox-nav-box fade'>Description</div>
        </div>
        <div className='descriptionbox-description'>
            <p>An e-commerce website is an online platform that facilitate buying and selling of products or services oer the internet services as a virtual marketplace where businesses and individual showcase their products, interact with customers, and conduct transactions without the need for a physical presence.</p>
        </div>
    </div>
)
}

export default DescriptionBox
