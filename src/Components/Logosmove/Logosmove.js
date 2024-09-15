import Marquee from "react-fast-marquee";
import Google from '../../Imgs/Google42.png'
import Airbub from '../../Imgs/m-logo2.png'
import creative from '../../Imgs/m-logo3.png'
import Shopify from '../../Imgs/m-logo4.png'
import Amazon from '../../Imgs/m-logo5.png'
import './Logosmove.css'
function Logosmove() {
    return (
        <div className="Logosmove text-center">
            <div className='container-main'>
                <h2>Greatest By Trusted Companies</h2>
                <Marquee>
                    <div className="d-flex justify-content-between">
                        <img src={Google} alt="Google" />
                        <img src={Airbub} alt="Google" />
                        <img src={creative} alt="Google" />
                        <img src={Shopify} alt="Google" />
                        <img src={Amazon} alt="Google" />
                        <img src={creative} alt="Google" />
                    </div>
                </Marquee>
            </div>
        </div>
    );
}

export default Logosmove;
