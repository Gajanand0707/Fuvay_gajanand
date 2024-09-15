
import { Col, Row } from 'react-bootstrap';
import '../../Commen/Commen.css'
import Beaner from '../../Imgs/Benner2.png'
import './Benner.css'
import Chanj from '../../Imgs/chanj.png'

function Benner() {
    return (
        <div className="Benner ">
            <div className='container-main'>
                <Row className=' align-items-center'>
                    <Col md={6}>
                        <h1 className='mb-2' animation="slide-out-right">Fuvay Technologies</h1>
                        <h2 className='mb-4'>Creative Web & Digital  Agency</h2>
                        <p className='Fuvay-p'>A lump sum is a single payment of money, as opposed to a series of payments made over time (such as an annuity).</p>
                        <div className='benner-btn d-flex gap-5 mt-5'>
                            <button className='button-main'>Contact Us</button>

                        </div>
                    </Col>
                    <Col md={6}>
                        <div className='Benner-img'>
                            <img src={Beaner} alt='Benner-img' />
                        </div>

                    </Col>
                </Row>
                <div className='chanj text-center mt-5'>
                    <img src={Chanj} alt='fff' />
                </div>
            </div>
        </div>
    );
}

export default Benner;
