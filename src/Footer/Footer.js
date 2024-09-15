import { Col, Row } from 'react-bootstrap'
import './Footer.css'
import '../Commen/Commen.css';
import Email from '../Imgs/Icon.png'
function Footer() {
    return (
        <>
            <div className='Footer'>
                <div className='container-main'>
                    <Row>
                        <Col md={4}>
                            <p className='footer-p'>Leverage agile frameworks to provide a robust synopsis for strategy  collaborative thinking to further the overall value proposition.</p>
                            <div className='con d-flex  gap-3 align-items-center'>
                                <img src={Email} alt='h' />
                                <div className="icon-box">
                                    <p>Email </p>
                                    <p>contact@trucking.com</p>
                                </div>
                            </div>
                            <div className='con d-flex  gap-3 align-items-center'>
                                <img src={Email} alt='h' />
                                <div className="icon-box">
                                    <p>Call Us  </p>
                                    <p>(00) 112 365 489</p>
                                </div>
                            </div>
                            <div className='con d-flex  gap-3 align-items-center'>
                                <img src={Email} alt='h' />
                                <div className="icon-box">
                                    <p>Mon - Sat 9.00 - 18.00 </p>
                                    <p>Sunday Closed</p>
                                </div>
                            </div>

                        </Col>
                        <Col md={2}>
                            <div className='Footer-link-1'>
                                <h3>Quick Links</h3>
                                <a href="f">About Us</a>
                                <a href="f">Our Team</a>
                                <a href="f">Our Project</a>
                                <a href="f">Pricing</a>
                                <a href="f">Contact</a>
                            </div>

                        </Col>
                        <Col md={3}>
                            <div className='Footer-link-1'>
                                <h3>Services</h3>
                                <a href="f">Contract Logistics</a>
                                <a href="f">Specialized Transport</a>
                                <a href="f">Packaging Solutions</a>
                                <a href="f">Liquid Transportation</a>
                                <a href="f">Warehouse & Distribution</a>
                            </div>
                        </Col>
                        <Col md={3}>
                            <h3>Social Meia</h3>
                            <div className='Social-icons d-flex gap-3'>
                                <img src={Email} alt='h' />
                                <img src={Email} alt='h' />
                                <img src={Email} alt='h' />
                            </div>

                        </Col>
                    </Row>

                </div>
            </div>
            <div className='Copyrigh'>
                <div className='container-main'>
                    <div className='Copyrigh-sec'>
                    <p>Copyright © Fuvaytechnologies 2023</p>
                    <p>Privacy Policy   |  Term & Condition</p>
                    </div>
                  
                </div>
            </div>
        </>
    )
}
export default Footer