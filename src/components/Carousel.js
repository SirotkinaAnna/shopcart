import { useState } from 'react'
import firstImg from '../images/image-product-1.jpg'
import imageS from '../images/image-product-2.jpg'
import imageTh from '../images/image-product-3.jpg'
import imageFo from '../images/image-product-4.jpg'
import imageFirst from '../images/image-product-1-thumbnail.jpg'
import imageSecond from '../images/image-product-2-thumbnail.jpg'
import imageThird from '../images/image-product-3-thumbnail.jpg'
import imageForth from '../images/image-product-4-thumbnail.jpg'
import ImageShow from './ImageShow';
import ImageFirst from './ImageFirst'


import './carousel.css'
function Carousel({ click }) {
    const [src, setSrc] = useState(firstImg);

    const handleClick = (src) => {
        setSrc(src);
    }


    return <div className='d-none d-md-block w-75 mx-auto'>
        <div className='row mb-md-4 position-relative' onClick={click}>
            <ImageFirst source={src} />

        </div>

        <div className="d-none d-md-flex row rounded-3 bg-white  justify-content-between ">
            <div className='col-md-3'>    <ImageShow source={imageFirst} onClick={() => handleClick(firstImg)} /></div>

            <div className='col-md-3'>   <ImageShow source={imageSecond} onClick={() => handleClick(imageS)} /></div>
            <div className='col-md-3'>  <ImageShow source={imageThird} onClick={() => handleClick(imageTh)} /></div>
            <div className='col-md-3'>   <ImageShow source={imageForth} onClick={() => handleClick(imageFo)} /></div>
        </div>


    </div>
}

export default Carousel;