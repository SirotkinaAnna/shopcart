import CarouselInner from './carouselInner';
import { GoX } from 'react-icons/go';
function CarouselBig({ click }) {

    return <div className="carouselBig d-flex w-100 align-items-center justify-content-center">
        <div className="row myCarousel position-relative">
            <div className="d-flex justify-content-end mb-3 mx-0 px-0">
                <button onClick={click} className="text-end p-0 m-0 fs-2"><GoX /></button>
            </div>
            <CarouselInner />

        </div></div>

}
export default CarouselBig;