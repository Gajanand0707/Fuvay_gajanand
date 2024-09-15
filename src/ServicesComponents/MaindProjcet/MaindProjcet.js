import './MaindProjcet.css'
import { Row, Col } from 'react-bootstrap'

function MaindProjcet() {
    return (
        <>
            <div className="MaindProjcet ">
                <div className='container-main'>
                    <Row>
                        <Col md={6}>
                            <h4 className="text-white mb-4">What we do</h4>
                            <h2 className="text-white">Have any project in your mind?</h2>
                        </Col>
                        <Col md={6}>
                            <div className="Email-compy gap-5 rounded d-flex ">
                                <div className="mail-time">
                                    <p>Mail us any time </p>
                                    <h3>info@fuvaytechnologies.com</h3>
                                </div>
                                <div className="mail-time">
                                    <p>Mail us any time </p>
                                    <h3>+91-9627995000</h3>
                                </div>
                            </div>
                        </Col>
                    </Row>

                </div>
            </div>

        </>
    )
}
export default MaindProjcet;