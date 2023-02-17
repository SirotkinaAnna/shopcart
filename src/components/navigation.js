import logo from '../images/logo.svg';
import DropDown from './DropDown'
import avatar from '../images/image-avatar.png'
import './avatar.css'
function NavBar({ sum, handleDelete }) {
    return <div className='d-flex flex-row border-bottom my-0'>

        <nav class="navbar navbar-expand-lg align-items-center w-100  py-0 h-100">
            <div className='row'>
                <div className='col d-flex align-items-center mt-3 mt-md-0'>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand px-3" href="#main">
                        <img src={logo} className="" alt="logo" />
                    </a>
                </div>
                <div className="col collapse navbar-collapse m-0 p-0 w-50" id="navbarNav">
                    <ul class="navbar-nav px-3">
                        <li className="nav-item ms-md-3">
                            <a className="nav-link " aria-current="page" href="#main">Collections</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#main">Men</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#main">Women</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#main">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#main">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className='col-md-4 d-flex align-items-start align-items-md-center justify-content-end mt-3 mt-md-0'><DropDown sum={sum} imageSource={avatar} handleDelete={handleDelete} />
        </div>

    </div>

}
export default NavBar;