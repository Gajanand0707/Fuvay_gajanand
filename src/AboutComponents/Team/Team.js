import '../../Commen/Commen.css'
import './Team.css'
import { Col, Row } from 'react-bootstrap';
import Team1 from '../../Imgs/Team1.png'
function Team() {
    return (
        <>
            <div className="Team">
                <div className="container-main">
                    <Row>
                        <Col md={6}>
                            <h3 className='Fuvay-h3'>What we do</h3>
                            <h2 className='Fuvay-h2'>Discover Fuvay Technologies</h2>
                        </Col>
                        <Col md={6}>
                            <p className='Fuvay-p'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here</p>
                        </Col>
                    </Row>
                    <Row className="mt-5">

                        <Col md="4">
                            <div className="Team-main pb-4 text-center">
                                <img src={Team1} alt="Team-mamber" />
                                <h4 className="mt-4">Rajinder Dhiman</h4>
                                <p>Web developer</p>
                            </div>
                        </Col>
                        <Col md="4">
                            <div className="Team-main pb-4 text-center">
                                <img src={Team1} alt="Team-mamber" />
                                <h4 className="mt-4">Rajinder Dhiman</h4>
                                <p>Web developer</p>
                            </div>
                        </Col>
                        <Col md="4">
                            <div className="Team-main pb-4 text-center">
                                <img src={Team1} alt="Team-mamber" />
                                <h4 className="mt-4">Rajinder Dhiman</h4>
                                <p>Web developer</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mt-4">

                        <Col md="4">
                            <div className="Team-main pb-4 text-center">
                                <img src={Team1} alt="Team-mamber" />
                                <h4 className="mt-4">Rajinder Dhiman</h4>
                                <p>Web developer</p>
                            </div>
                        </Col>
                        <Col md="4">
                            <div className="Team-main pb-4 text-center">
                                <img src={Team1} alt="Team-mamber" />
                                <h4 className="mt-4">Rajinder Dhiman</h4>
                                <p>Web developer</p>
                            </div>
                        </Col>
                        <Col md="4">
                            <div className="Team-main pb-4 text-center">
                                <img src={Team1} alt="Team-mamber" />
                                <h4 className="mt-4">Rajinder Dhiman</h4>
                                <p>Web developer</p>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}
export default Team