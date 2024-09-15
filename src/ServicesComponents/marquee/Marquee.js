
import Marquee from "react-fast-marquee";
import LightAI from '../../Imgs/LightAI.svg'
import './Marquee.css'
function MarqueeServices() {
    return (
        <div className="Marquee text-center">
            <div className='container-main'>
                <Marquee>
                    <div className="d-flex gap-5 me-5 justify-content-between">
                        <img src={LightAI} alt="LightAI" />
                        <img src={LightAI} alt="LightAI" />
                        <img src={LightAI} alt="LightAI" />
                        <img src={LightAI} alt="LightAI" />
                        <img src={LightAI} alt="LightAI" />
                        <img src={LightAI} alt="LightAI" />
                    </div>
                </Marquee>
            </div>
        </div>
    );
}

export default MarqueeServices;
