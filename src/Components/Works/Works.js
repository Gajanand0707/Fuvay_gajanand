import { Col, Row } from 'react-bootstrap';
import '../../Commen/Commen.css'
import './Works.css'
import Digital from '../../Imgs/Digital-Marketing.png'
import About from '../../Imgs/About-img.png'
function Works() {
    return (
        <div className="Works">
            <div className='container-main'>
                <Row className=' align-items-center'>
                    <Col md={6}>
                        <h3 className='Fuvay-h3 mb-3'>What We Do</h3>
                        <h2 className='Fuvay-h2 mb-3'>What Are Here To Help You Build Your Website</h2>
                        <p className='Fuvay-p mb-3'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here</p>
                        <p className='Fuvay-p mb-3'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem .</p>
                        <button className='button-main mt-3'>See More</button>
                    </Col>
                    <Col md={6}>
                        <div className='Works text-center '>
                            <div className=' Works-box d-flex gap-4 mb-4'>
                                <div className='Digital'>
                                    <img src={Digital} alt='Digital Marketing' />
                                    <h4>Digital Marketing</h4>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page </p>
                                    <button>Read More</button>
                                </div>
                                <div className='Digital'>
                                    <img src={Digital} alt='Digital Marketing' />
                                    <h4>Web Development</h4>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page </p>
                                    <button>Read More</button>
                                </div>
                            </div>
                            <div className= '  Works-box  d-flex gap-4'>
                                <div className='Digital'>
                                    <img src={Digital} alt='Digital Marketing' />
                                    <h4>UI UX Designing</h4>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page </p>
                                    <button>Read More</button>
                                </div>
                                <div className='Digital'>
                                    <img src={Digital} alt='Digital Marketing' />
                                    <h4>Graphic Designing</h4>
                                    <p>It is a long established fact that a reader will be distracted by the readable content of a page </p>
                                    <button>Read More</button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className=' align-items-center'>
                    <Col md={6}>
                        <div className='about-img'>
                            <img src={About} alt='img' />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className='ms-3 Works-text'>
                            <h3 className='Fuvay-h3 mb-3'>About Us</h3>
                            <h2 className='Fuvay-h2 mb-3'>We Are Here To Help You Build Your Digital Agency</h2>
                            <p className='Fuvay-p mb-3'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here</p>
                            <p className='Fuvay-p mb-3'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem .</p>
                            <button className='button-main mt-3'>Learn More</button>
                        </div>
                    </Col>

                </Row>
              
            </div>
        </div>
    );
}

export default Works;
