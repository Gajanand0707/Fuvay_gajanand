
import '../../Commen/Commen.css'
import { BiChevronDown } from "react-icons/bi";
import Service from '../../Imgs/Services.svg'
import './ServicesBenner.css'
import Servics1 from '../../Imgs/Servics1.svg'
function ServicesBenner() {
    return (
        <>
            <div className="Services-main">

                <div className='Page-Benner text-center'>
                    <div className='container-main'>
                        <img src={Service} alt='text-img' />
                        <h1 className='mb-4'>Service</h1>
                        <h2 className='mb-4'>Creative Web & Digital Agency</h2>
                        <p className='mb-4 mx-auto'>A lump sum is a single payment of money, as opposed to a series of payments made over time (such as an annuity).</p>
                        <BiChevronDown />
                    </div>
                </div>

                <div className="Services ">
                    <div className="container-main">
                        <h2 className="Fuvay-h2 text-center mb-5">Our Service</h2>
                        <div className="Services-pro d-flex gap-3 flex-wrap justify-content-center">
                            <div className="Services-box">
                                <img src={Servics1} alt="Servics1" />
                                <h5 className="my-3">UI UX Design</h5>
                                <p className="mb-3">Nisullam congue rhoncus risus dapibus habitant mauris eget ante pharetra .</p>
                                <button>Learn More >></button>
                            </div>
                            <div className="Services-box">
                                <img src={Servics1} alt="Servics1" />
                                <h5 className="my-3">Digital Marketing</h5>
                                <p className="mb-3">Nisullam congue rhoncus risus dapibus habitant mauris eget ante pharetra .</p>
                                <button>Learn More >></button>
                            </div>
                            <div className="Services-box">
                                <img src={Servics1} alt="Servics1" />
                                <h5 className="my-3">Web Development</h5>
                                <p className="mb-3">Nisullam congue rhoncus risus dapibus habitant mauris eget ante pharetra .</p>
                                <button>Learn More >></button>
                            </div>
                            <div className="Services-box">
                                <img src={Servics1} alt="Servics1" />
                                <h5 className="my-3">Technology Solution</h5>
                                <p className="mb-3">Nisullam congue rhoncus risus dapibus habitant mauris eget ante pharetra .</p>
                                <button>Learn More >></button>
                            </div>
                            <div className="Services-box">
                                <img src={Servics1} alt="Servics1" />
                                <h5 className="my-3">Business Solution</h5>
                                <p className="mb-3">Nisullam congue rhoncus risus dapibus habitant mauris eget ante pharetra .</p>
                                <button>Learn More >></button>
                            </div>
                            <div className="Services-box">
                                <img src={Servics1} alt="Servics1" />

                                <p className="my-4">Nisullam congue rhoncus risus dapibus habitant mauris eget ante pharetra .</p>
                                <button>Learn More >></button>
                            </div>
                            <div className="Services-box">
                                <img src={Servics1} alt="Servics1" />
                                <h5 className="my-3">Content strategy</h5>
                                <p className="mb-3">Nisullam congue rhoncus risus dapibus habitant mauris eget ante pharetra .</p>
                                <button>Learn More >></button>
                            </div>
                            <div className="Services-box">
                                <img src={Servics1} alt="Servics1" />
                                <h5 className="my-3">Product Design</h5>
                                <p className="mb-3">Nisullam congue rhoncus risus dapibus habitant mauris eget ante pharetra .</p>
                                <button>Learn More >></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ServicesBenner