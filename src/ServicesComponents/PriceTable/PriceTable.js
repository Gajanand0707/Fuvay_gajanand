import './PriceTable.css'
import '../../Commen/Commen.css'
import { Row, Col } from 'react-bootstrap'
import ListIcon from '../../Imgs/Listicon.svg'
function PriceTable() {
    return (
        <>
            <div className="PriceTable">
                <div className="container-main">
                    <h3 className='Fuvay-h3 text-center mb-3'>Price table</h3>
                    <h2 className='Fuvay-h2 text-center  mb-5'>Our Price Paln</h2>
                    <Row>
                        <Col md={4}>
                            <div className="PriceTable-main">
                                <h2 className="py-3 text-white">Basic Plan</h2>
                                <div className="list-main">
                                    <h3 className="mb-4">$29<span>/Month</span></h3>
                                    <p className=""> Sodales curae dictum nisi duis purus sapien cum facilisi odio</p>
                                    <div className="Table-list d-flex gap-3 mb-3 align-items-center">
                                        <img src={ListIcon} alt="List-icon" />
                                        <p className="m-0">Business Solution</p>
                                    </div>
                                    <div className="Table-list d-flex gap-3 mb-3 align-items-center">
                                        <img src={ListIcon} alt="List-icon" />
                                        <p className="m-0">Expert Consultancy</p>
                                    </div>
                                    <div className="Table-list d-flex gap-3 mb-3 align-items-center">
                                        <img src={ListIcon} alt="List-icon" />
                                        <p className="m-0">Business Solution</p>
                                    </div>
                                    <div className="Table-list d-flex gap-3 mb-3 align-items-center">
                                        <img src={ListIcon} alt="List-icon" />
                                        <p className="m-0">Growth Management</p>
                                    </div>
                                    <div className="Table-list d-flex gap-3 mb-3 align-items-center">
                                        <img src={ListIcon} alt="List-icon" />
                                        <p className="m-0">Content Solution</p>
                                    </div>
                                    <button className="w-100 mt-3 text-white">Get Started</button>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="PriceTable-main">
                                <h2 className="py-3 text-white">Standard Plan</h2>
                                <div className="list-main">
                                    <h3 className="mb-4">$59<span>/Month</span></h3>
                                    <p className=""> Sodales curae dictum nisi duis purus sapien cum facilisi odio</p>
                                    <div className="Table-list d-flex gap-3 mb-3 align-items-center">
                                        <img src={ListIcon} alt="List-icon" />
                                        <p className="m-0">Business Solution</p>
                                    </div>
                                    <div className="Table-list d-flex gap-3 mb-3 align-items-center">
                                        <img src={ListIcon} alt="List-icon" />
                                        <p className="m-0">Expert Consultancy</p>
                                    </div>
                                    <div className="Table-list d-flex gap-3 mb-3 align-items-center">
                                        <img src={ListIcon} alt="List-icon" />
                                        <p className="m-0">Business Solution</p>
                                    </div>
                                    <div className="Table-list d-flex gap-3 mb-3 align-items-center">
                                        <img src={ListIcon} alt="List-icon" />
                                        <p className="m-0">Growth Management</p>
                                    </div>
                                    <div className="Table-list d-flex gap-3 mb-3 align-items-center">
                                        <img src={ListIcon} alt="List-icon" />
                                        <p className="m-0">Content Solution</p>
                                    </div>
                                    <button className="w-100 mt-3 text-white">Get Started</button>
                                </div>
                            </div>
                        </Col>
                        <Col md={4}>
                            <div className="PriceTable-main">
                                <h2 className="py-3 text-white">Premium Plan</h2>
                                <div className="list-main">
                                    <h3 className="mb-4">$89<span>/Month</span></h3>
                                    <p className=""> Sodales curae dictum nisi duis purus sapien cum facilisi odio</p>
                                    <div className="Table-list d-flex gap-3 mb-3 align-items-center">
                                        <img src={ListIcon} alt="List-icon" />
                                        <p className="m-0">Business Solution</p>
                                    </div>
                                    <div className="Table-list d-flex gap-3 mb-3 align-items-center">
                                        <img src={ListIcon} alt="List-icon" />
                                        <p className="m-0">Expert Consultancy</p>
                                    </div>
                                    <div className="Table-list d-flex gap-3 mb-3 align-items-center">
                                        <img src={ListIcon} alt="List-icon" />
                                        <p className="m-0">Business Solution</p>
                                    </div>
                                    <div className="Table-list d-flex gap-3 mb-3 align-items-center">
                                        <img src={ListIcon} alt="List-icon" />
                                        <p className="m-0">Growth Management</p>
                                    </div>
                                    <div className="Table-list d-flex gap-3 mb-3 align-items-center">
                                        <img src={ListIcon} alt="List-icon" />
                                        <p className="m-0">Content Solution</p>
                                    </div>
                                    <button className="w-100 mt-3 text-white">Get Started</button>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}
export default PriceTable;