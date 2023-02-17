import iconPlus from '../images/icon-plus.svg'
import iconMinus from '../images/icon-minus.svg';
import { AiOutlineShoppingCart } from "react-icons/ai";

function AddToCart({ minus, plus, count, buttonClick }) {


    return <div className="container m-0 p-0">
        <form onSubmit={buttonClick}> <div className="row">

            <div className="col-md-4 mb-3">
                <div className="input-group m-0">

                    <button className="btn bg-light py-3" type="button" onClick={minus}><img src={iconMinus} alt="minus" /></button>
                    <label for="input" className='d-none'>value</label><input type="text" className="form-control bg-light border border-0 text-center fw-bold" value={count} id="input" />
                    <button className="btn bg-light" type="button" onClick={plus}><img src={iconPlus} alt="plus" /></button>
                </div>
            </div>
            <div className="col-md-8">
                <button className="btn btn-primary w-100 py-3 shadow-lg border-0" type="submit">
                    <span className='pe-3'><AiOutlineShoppingCart /></span>
                    Add to Cart</button>
            </div>
        </div></form>

    </div>
}

export default AddToCart;