import { GoChevronLeft, GoChevronRight } from 'react-icons/go';

function PrevNext() {
    return <div><div className="position-absolute myButton px-0 w-25">
        <button className=" rounded-5 bg-light text-center fs-4 px-2 pb-2" type="button" data-bs-target="#carouselControls" data-bs-slide="prev"><GoChevronLeft /></button>
    </div>
        <div className="position-absolute myButtonRight px-0 w-25 text-end">
            <button className="rounded-5 bg-light text-center fs-4  px-2 pb-2" type="button" data-bs-target="#carouselControls" data-bs-slide="next"><GoChevronRight /></button>
        </div>
    </div>
}
export default PrevNext;