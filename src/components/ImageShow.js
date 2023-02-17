import './carousel.css'
function ImageShow({ source, onClick }) {

    return <img src={source} className="img-fluid p-0 rounded-3 myImage" alt="" onClick={onClick} tabIndex="0" />

}
export default ImageShow;