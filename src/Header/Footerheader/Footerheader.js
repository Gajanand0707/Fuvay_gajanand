import '../../Commen/Commen.css'
import '../Header.css'
import FooterLogo from '../../Imgs/Footerlogo.png'
function Footerheader() {
    return (
        <>
            <div className='container-main'>
                <nav className="navbar chan-bg-h navbar-expand-lg navbar-light ">
                    <div className="container-main container-fluid">
                        <a className="navbar-brand" href="fg"><img src={FooterLogo} alt='Main-logo' /></a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav ms-auto  mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link color-a " aria-current="page" href="fg">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link color-a " aria-current="page" href="fg">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link color-a" href="gf">Services</a>
                                </li>



                                <li className="nav-item">
                                    <a className="nav-link color-a " href="fg" tabindex="-1" aria-disabled="true">Blog</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link color-a" href="fg" tabindex="-1" aria-disabled="true">Contact</a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}
export default Footerheader