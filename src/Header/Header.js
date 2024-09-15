import '../Commen/Commen.css'
import './Header.css'
import Logo from '../Imgs/Logo-main.png'
import { Outlet, Link } from "react-router-dom";
function Header() {
    return (
        <>
            <div className='container-main'>
                <nav className="navbar navbar-expand-lg navbar-light Border-navbar">
                    <div className="container-main container-fluid">
                        <a className="navbar-brand" href="fg"><img src={Logo} alt='Main-logo' /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto me-5 mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <Link to="/">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/About">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Services">Services</Link>
                                </li>

                                {/* <li className="nav-item">
                                    <Link to="/Blog">Blog</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Contact">Contact</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Form">Form</Link>
                                </li> */}
                            </ul>
                            <form >

                                <Link to="/Contact">  <button className="button-main" >Contact Us</button> </Link>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
            <Outlet />
        </>
    )
}
export default Header