import cartSvg from '../images/icon-cart.svg'
import Product from './Product'
function DropDown({ sum, imageSource, handleDelete }) {
    return <div className="dropdown m-0 p-0 border-0">
        <button className="btn bg-none m-0 p-0 border-0" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <div className='d-flex flex-row align-items-center justify-content-center'><div className='position-relative m-0 p-0 me-3'><img src={cartSvg} className="m-0 px-2" alt="" /><span className='position-absolute top-0 end-0 m-0 px-2 rounded-2 number'>{sum}</span></div>

                <img src={imageSource} className="avatar" alt="avatar" />
            </div> </button>
        <div className="dropdown-menu border-0 shadow-lg m-0 p-0">
            <div className="card border-0 m-0 p-0" >
                <div className="card-body p-0 m-0">
                    <h5 className="card-title border-bottom p-3 m-0 fw-bold">Cart</h5>


                    <Product sum={sum} handleDelete={handleDelete} />
                </div>
            </div>

        </div>
    </div>

}
export default DropDown