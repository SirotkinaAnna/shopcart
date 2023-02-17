
import PrevNext from "./PrevNextButtons";
import firstImg from '../images/image-product-1.jpg'
import imageS from '../images/image-product-2.jpg'
import imageTh from '../images/image-product-3.jpg'
import imageFo from '../images/image-product-4.jpg'
import ImageShow from "./ImageShow";


import ImageFirst from './ImageFirst'
function CarouselInner() {
    return <div id="carouselControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
            <div className="carousel-item active">
                <ImageFirst source={firstImg} />
            </div>
            <div className="carousel-item">
                <ImageFirst source={imageS} />
            </div>
            <div className="carousel-item">
                <ImageFirst source={imageTh} />
            </div>
            <div className="carousel-item">
                <ImageFirst source={imageFo} />
            </div>
        </div>
        <PrevNext />
        <div className='d-none row d-md-flex flex-row justify-content-between mt-3'>
            <div className="col-md-3 "> <button type="button" data-bs-target="#carouselControls" data-bs-slide-to="0" className="active m-0 p-0 rounded-3 bg-white" aria-current="true" aria-label="Slide 1">

                <ImageShow source={firstImg} />
            </button></div>
            <div className="col-md-3">
                <button type="button" data-bs-target="#carouselControls" data-bs-slide-to="1" aria-current="true" aria-label="Slide 2" className=" m-0 p-0 rounded-3 bg-white">

                    <ImageShow source={imageS} />
                </button></div>
            <div className="col-md-3"><button type="button" data-bs-target="#carouselControls" data-bs-slide-to="2" aria-current="true" aria-label="Slide 3" className=" m-0 p-0 rounded-3 bg-white">

                <ImageShow source={imageTh} />
            </button></div>
            <div className="col-md-3"><button type="button" data-bs-target="#carouselControls" data-bs-slide-to="3" aria-current="true" aria-label="Slide 4" className=" m-0 p-0 rounded-3 bg-white">

                <ImageShow source={imageFo} />
            </button></div></div>
    </div>
}
export default CarouselInner;