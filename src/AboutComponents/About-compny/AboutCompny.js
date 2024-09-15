
import './AboutCompny.css';
import '../../Commen/Commen.css';
import { Col, Row } from 'react-bootstrap';
import AboutCompnyImg from '../../Imgs/About-the-compny.png'
import Digital from '../../Imgs/Digital.svg'
import Product from '../../Imgs/Product.svg'
function AboutCompny() {
    return (
        <>
            <div className='AboutCompny'>
                <div className='container-main'>
                    <Row >
                        <Col md={6}>
                            <div className='AboutCompny-img  pe-3' >
                                <img src={AboutCompnyImg} alt='AboutCompny-img' />
                            </div>
                        </Col>
                        <Col md={6}>
                            <div className='AboutCompny-text '>
                                <h3 className='Fuvay-h3 mb-3'>About The Company</h3>
                                <h2 className='Fuvay-h2 mb-4'>Discover Fuvay Technologies</h2>
                                <p className='Fuvay-p  mb-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here</p>

                                <p className='Fuvay-p  mb-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem .</p>
                                <div className='Marketing mb-4 flex-wrap d-flex gap-3'>
                                    <button className='Marketing  d-flex gap-3 align-items-center'><img src={Digital} alt='Digital Marketing' /> Digital Marketing</button>
                                    <button className='Marketing d-flex gap-3 align-items-center'><img src={Product} alt='Digital Marketing' />Product Marketing</button>
                                </div>
                                <p className='Fuvay-p  mb-5'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here</p>
                                <button className='button-main'>Learn More</button>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}
export default AboutCompny;