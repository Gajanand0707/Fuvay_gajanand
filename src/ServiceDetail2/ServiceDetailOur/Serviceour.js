import './Serviceour.css'
import '../../Commen/Commen.css'
import { Row, Col } from 'react-bootstrap'
import Rectangle from '../../Imgs/Rectangle 125.png'
import Lift from '../../Imgs/lift.svg'
import Right from '../../Imgs/Right.svg'
import Formsec from './ServiceForm'
import Accordionser from './Accordionser'
function Serviceour() {
    return (
        <>
            <div className="Serviceour">
                <div className='container-main'>
                    <h2 className="Fuvay-h2 text-center mb-5">Our Service Detail</h2>
                    <Row>
                        <Col md={8}>

                            <img src={Rectangle} alt="Rectangle 125" />
                            <h3 className="Fuvay-h3 mt-5">BEST IN OUR FIELD</h3>
                            <h2 className="Fuvay-h2   mb-4">
                                Why choose us for IT consulting services?
                            </h2>
                            <p className="Fuvay-p">We can help you develop and execute a clear and strategic IT roadmap with priorities that are closely linked to business goals. We will work one-on-one with your team to understand your goals. You tell us where you want to improve, the goals you want to reach and the results you’re looking to achieve and we deliver quality IT services for your enterprise.</p>
                            <h2 className="Fuvay-h2 mt-5 mb-3"> Our Strategy </h2>
                            <p className="Fuvay-p">We can help you develop and execute a clear and strategic IT roadmap with priorities that are closely linked to business goals. We will work one-on-one with your team to understand your goals. You tell us where you want to improve, the goals you want to reach and the results you’re looking to achieve and we deliver quality IT services for your enterprise.</p>
                            <div className="green-box my-5">
                                <div className="green-img1">
                                    <img src={Lift} alt="Lit" />
                                </div>
                                <p className=" Fuvay-p text-white">We can help you develop and execute a clear and strategic IT roadmap with priorities that are closely linked to business goals. We will work one-on-one with your team to understand your goals. </p>
                                <div className="green-img2  text-end">
                                    <img src={Right} alt="Lit" />
                                </div>
                            </div>
                            <Row>
                                <Col md={6} >
                                    <h2 className="Fuvay-h2 mb-4"> Design </h2>
                                    <p className="Fuvay-p">We can help you develop and execute</p>
                                    <p className="Fuvay-p">We can help you develop and execute</p>
                                    <p className="Fuvay-p">We can help you develop and execute</p>
                                    <p className="Fuvay-p">We can help you develop and execute</p>
                                </Col>
                                <Col md={6} >
                                    <h2 className="Fuvay-h2 mb-4" > Development </h2>
                                    <p className="Fuvay-p">We can help you develop and execute</p>
                                    <p className="Fuvay-p">We can help you develop and execute</p>
                                    <p className="Fuvay-p">We can help you develop and execute</p>
                                    <p className="Fuvay-p">We can help you develop and execute</p>
                                </Col>
                            </Row>
                            <h2 className="Fuvay-h2 my-4"> Case Studies </h2>
                            <Row>
                                <Col md={6} >
                                    <img src={Rectangle} alt="Rectangle 125" />
                                </Col>
                                <Col md={6} >
                                    <p>We can help you develop and execute a clear and strategic IT roadmap with priorities that are closely linked to business goals. We will work one-on-one with your team to understand your goals. You tell us where you want to improve, the goals you want to reach and the results you’re looking to achieve and we deliver quality IT services for your enterprise. </p>

                                </Col>
                            </Row>
                        </Col>
                        <Col md={4} >

                            <Accordionser />
                            <Formsec />
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}
export default Serviceour