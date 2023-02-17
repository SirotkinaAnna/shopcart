import imageFirst from '../images/image-product-1-thumbnail.jpg'
import iconDelete from '../images/icon-delete.svg'

function Product({ sum, handleDelete }) {
    if (sum > 0) {
        return <div className="p-3 mx-3">
            <div className="row mb-3">
                <div className='col-2 p-0 m-0'>
                    <img src={imageFirst} alt="" className='cartImage img-fluid w-100 p-0 m-0 rounded-3' />
                </div>
                <div className='col-8 my-auto'><p className='m-0 p-0'>Fall Limited Edition Sneakers</p>
                    <p className=" m-0 p-0">$125.00 x {sum} <span className='fw-bold'>${125 * sum}.00</span></p>
                </div>
                <div className='col-2 my-auto'><button onClick={handleDelete}><img alt="" src={iconDelete} /></button></div>
            </div>
            <div className="row"><button className="btn btn-primary w-100 py-3 shadow-lg border-0">Checkout</button></div>
        </div>
    }
    else {
        return <p className="card-text text-center my-5">The cart is empty</p>
    }
}
export default Product;