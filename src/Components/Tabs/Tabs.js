import { Tab } from 'react-bootstrap';
import '../../Commen/Commen.css'
import Tabs from 'react-bootstrap/Tabs';
import './Tabs.css'
// import { Outlet, Link } from "react-router-dom";
import Tabs1 from '../../Imgs/tabs1.png'
import Tabs2 from '../../Imgs/tabs2.png'
import Tabsm from '../../Imgs/tabsm.png'
import Tabsm1 from '../../Imgs/tabsm1.png'
import Tabsm3 from '../../Imgs/Tabsm3.png'
import Tabsm4 from '../../Imgs/Tabsm4.png'
function Studies() {
    return (
        <>
            <div className='Tabs-main'>
                <div className='container-main'>
                    <h3 className='Fuvay-h3'>Our Work</h3>
                    <h2 className='Fuvay-h2 mb-5'>See Our Recent Case Studies</h2>

                    <Tabs
                        defaultActiveKey="home"
                        id="fill-tab-example"
                        className="mb-5"
                        fill
                    >
                        <Tab eventKey="home" title="UI UX Design">
                            <div className='Design-Home d-flex'>
                                <img src={Tabs1} alt='g' />
                                <img src={Tabs2} alt='g' />
                            </div>
                            <div className=' d-flex'>
                                <img className='tab-img-m' src={Tabsm} alt='g' />
                                <img className='tab-img-s' src={Tabsm1} alt='g' />
                            </div>
                            <div className=' d-flex'>
                                <img className='tab-img-s' src={Tabsm4} alt='g' />
                                <img className='tab-img-m' src={Tabsm3} alt='g' />
                            </div>

                        </Tab>
                        <Tab eventKey="profile" title="Web Development">

                            <div className=' d-flex'>
                                <img className='tab-img-m' src={Tabsm} alt='g' />
                                <img className='tab-img-s' src={Tabsm1} alt='g' />
                            </div>
                            <div className=' d-flex'>
                                <img className='tab-img-s' src={Tabsm4} alt='g' />
                                <img className='tab-img-m' src={Tabsm3} alt='g' />
                            </div>
                        </Tab>
                        <Tab eventKey="longer-tab" title="Digital Marketing">

                            <div className=' d-flex'>
                                <img className='tab-img-s' src={Tabsm4} alt='g' />
                                <img className='tab-img-m' src={Tabsm3} alt='g' />
                            </div>
                        </Tab>
                        <Tab eventKey="contact" title="Graphic Design" >
                            <div className='Design-Home d-flex'>
                                <img src={Tabs1} alt='g' />
                                <img src={Tabs2} alt='g' />
                            </div>
                            <div className=' d-flex'>
                                <img className='tab-img-m' src={Tabsm} alt='g' />
                                <img className='tab-img-s' src={Tabsm1} alt='g' />
                            </div>

                        </Tab>
                        {/* <Link to="/Blog">Explore More</Link> */}
                    </Tabs>
                </div>
            </div>
        </>
    )
}
export default Studies;