import { Col, Row } from 'react-bootstrap'
import '../../Commen/Commen.css'
import './Customers.css'
import Carousel from 'react-bootstrap/Carousel';
import Slid from '../../Imgs/Slid-img.png'
import Reting from '../../Imgs/reting.png'
import { BiRightArrowAlt } from "react-icons/bi";
function Customers() {
    return (
        <>
            <div className='Customers'>
                <div className='container-main'>
                    <Row className='align-items-end'>
                        <Col md={7}>
                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={Slid}
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>

                                        <p className='Fuvay-p'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has </p>
                                        <div className='auther d-flex  justify-content-between align-items-center'>
                                            <h3 className='slid-h3'>Gloria Rose</h3>
                                            <div className='retting'>
                                                <img src={Reting} alt='g' />
                                                <p className='Fuvay-p'>12 Reviews on yelp</p>
                                            </div>
                                        </div>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={Slid}
                                        alt="Second slide"
                                    />

                                    <Carousel.Caption>
                                        <p className='Fuvay-p'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has </p>
                                        <div className='auther d-flex  justify-content-between align-items-center'>
                                            <h3 className='slid-h3'>Gloria Rose</h3>
                                            <div className='retting'>
                                                <img src={Reting} alt='g' />
                                                <p className='Fuvay-p'>12 Reviews on yelp</p>
                                            </div>
                                        </div>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={Slid}
                                        alt="Third slide"
                                    />

                                    <Carousel.Caption>
                                        <p className='Fuvay-p'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has </p>
                                        <div className='auther d-flex  justify-content-between align-items-center '>
                                            <h3 className='slid-h3'>Gloria Rose</h3>
                                            <div className='retting'>
                                                <img src={Reting} alt='g' />
                                                <p className='Fuvay-p'>12 Reviews on yelp</p>
                                            </div>
                                        </div>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                        <Col md={5} className=''>
                            <div className='Customers-text'>
                                <h2 className='Fuvay-h2 mb-4'>What Our Customers Say About Us?</h2>
                                <p className='Fuvay-p'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using</p>
                                <p className='Fuvay-p'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem .</p>
                                <div className='form-customer d-flex mt-5'>
                                    <input type='text' placeholder='Write about Assignment' />
                                    <div className='span-form'><BiRightArrowAlt /></div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}
export default Customers