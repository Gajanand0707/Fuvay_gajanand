import { Col, Row } from 'react-bootstrap';
import '../../Commen/Commen.css';
import './Discover.css';
import Product1 from '../../Imgs/Product1.svg'
import Product2 from '../../Imgs/Product2.svg'
import Product3 from '../../Imgs/Product3.svg'
import Product4 from '../../Imgs/Product4.svg'
import Product5 from '../../Imgs/Product5.svg'
import TechnologiesImg from '../../Imgs/DiscoverFuvaytechnologies.png'
import green from '../../Imgs/green.bler.svg'
function Discover() {
    return (
        <>
            <div className='Discover'>
                <div className='container-main'>
                    <Row>
                        <Col md={6}>
                            <h3 className='Fuvay-h3'>What we do</h3>
                            <h2 className='Fuvay-h2'>Discover Fuvay Technologies</h2>
                        </Col>
                        <Col md={6}>
                            <p className='Fuvay-p'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here</p>
                        </Col>
                    </Row>
                    <div className='What-We-Do text-center flex-wrap
    justify-content-center mt-5 d-flex gap-3'>
                        <div className='Products '>
                            <img src={Product1} alt='Products1' />
                            <h4 className='mt-2'>Business Plan</h4>
                        </div>
                        <div className='Products'>
                            <img src={Product2} alt='Products1' />
                            <h4 className='mt-2'>Product Design</h4>
                        </div>
                        <div className='Products'>
                            <img src={Product3} alt='Products1' />
                            <h4 className='mt-2'>Analysis</h4>
                        </div>
                        <div className='Products'>
                            <img src={Product4} alt='Products1' />
                            <h4 className='mt-2'>Reporting</h4>
                        </div>
                        <div className='Products'>
                            <img src={Product5} alt='Products1' />

                        </div>

                    </div>
                    <div className='Discover-Fuvay-Technologies rounded '>
                        <Row className='align-items-center'>
                            <Col md={6}>
                                <div className='Discover-Fuvay-Technologies-text'>
                                    <h3 className='Fuvay-h2 mb-4'>Discover Fuvay Technologies</h3>
                                    <p className='Fuvay-p mb-4'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here</p>
                                    <p className='Fuvay-p'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem .</p>
                                </div>
                            </Col>
                            <Col md={6}>
                                <div className='Discover-Fuvay-Technologies-img text-center'>
                                    <img src={TechnologiesImg} alt='TechnologiesImg' />
                                </div>
                            </Col>
                        </Row>

                    </div>
                </div>
            </div>
        </>
    )
}
export default Discover;