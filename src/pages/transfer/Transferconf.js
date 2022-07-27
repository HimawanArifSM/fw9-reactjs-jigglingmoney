import React from 'react'
import { Row, Col} from 'react-bootstrap'
import Modals from './Modals'

import tf1 from '../../assets/images/photo-samuel-shusi.png'
import Header from '../../assets/component/Header';
import Sidebar from '../../assets/component/Sidebar';
import Footer from '../../assets/component/Footer';
// import tf2 from '../../assets/images/photo-momo-taro.png'
// import tf3 from '../../assets/images/photo-jessica-keen.png'
// import tf4 from '../../assets/images/photo-michael-le.png'

function Transferconf() {
  return (
    <div>
        <div>
            <Header/>
        </div>
        <section>
        <Row className='pad-content mw-100 '>
            <Sidebar/>
            <Col className='col-md-10'>
                <div className="flex-column d-flex gap-5 bg-white">
                    <p className="font-700">Transfer To</p>
                    <div className="d-flex flex-row justify-content-between bg-white-shadow">
                        <div className="d-flex flex-row justify-content-between gap-3">
                            <img src={tf1} alt="pict"/>
                            <div>
                                <p>Samuel Suhi</p>
                                <p5>+62 813-8492-9994</p5>
                            </div>
                            
                        </div>
                    </div>
                    <p>Details</p>
                    <div className="d-flex flex-column justify-content-between bg-white-shadow">
                        <p>Amount</p>
                        <h3>Rp100.000</h3>
                    </div>
                    <div className="d-flex flex-column justify-content-between bg-white-shadow">
                        <p>Balance Left</p>
                        <h3>Rp20.000</h3>
                    </div>
                    <div className="d-flex flex-column justify-content-between bg-white-shadow">
                        <p>Date/Time</p>
                        <h3>May 11, 2020 - 12.20</h3>
                    </div>
                    <div className="d-flex flex-column justify-content-between bg-white-shadow">
                        <p>Notes</p>
                        <h3>For buying some socks</h3>
                    </div>
                    <div className=" d-flex justify-content-end">
                        <Modals/>
                    </div>
                
                </div>
                
            </Col>
        </Row>
        </section>
        <footer>
                <Footer/>
        </footer>

        
    </div>
  )
}

export default Transferconf