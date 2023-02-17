import AddToCart from "./AddToCart";
function ItemInfo({ sum, setSum, minus, plus, count, handleButtonClick }) {
    return <div className="container itemInfo">
        <p className="logo fw-bold">SNEAKER COMPANY</p>
        <h1 className="fw-bold">Fall Limited Edition Sneakers</h1>
        <p className="text-muted">These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
        <div className="d-flex  flex-row flex-md-column  pb-3">
            <div className="d-flex flex-row align-items-center " ><p className="me-3 fw-bold fs-2 my-0 py-0">$125.00 </p>
                <div className="price rounded-3 fs-5 fw-bold  h-75 h-md-50 align-items-center px-2">50%</div></div>
            <p className="text-muted text-decoration-line-through ms-auto ms-md-0">$250.00</p></div>

        <AddToCart sum={sum} setSum={setSum} minus={minus} plus={plus} count={count} buttonClick={handleButtonClick} />
    </div>
}
export default ItemInfo;