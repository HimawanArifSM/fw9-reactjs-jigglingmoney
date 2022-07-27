import React from 'react'
import { Row, Col} from 'react-bootstrap'
import tf1 from '../../assets/images/dsb-prof-1.png'
import tf2 from '../../assets/images/logo.png'
import tf3 from '../../assets/images/7.png'
import tf4 from '../../assets/images/logo2.png'
import Header from '../../assets/component/Header';
import Sidebar from '../../assets/component/Sidebar';
import Footer from '../../assets/component/Footer';

function History() {
  return (
    <div>
        <div>
            <Header/>
        </div>

        <section>
        <Row className='pad-content mw-100'>
            <Sidebar/>
            <Col className='col-md-10'>
                <div>
                    <div class="d-flex flex-column gap-5 bg-white">
                        <p class="font-700">Transaction History</p>
                        <p5 class="font-400" >This Week</p5>
                        <div class="d-flex flex-row justify-content-between">
                            <div class="d-flex flex-row justify-content-between gap-3">
                                <img src={tf1} alt="pict"/>
                                <div>
                                    <p>Samuel Suhi</p>
                                    <p5>Transfer</p5>
                                </div>
                            </div>
                        <div>
                            <p>+Rp50.000</p>
                        </div>
                        </div>
                        <div class="d-flex flex-row justify-content-between">
                            <div class="d-flex flex-row justify-content-between gap-3">
                                <img src={tf2} alt="pict"/>
                                <div>
                                    <p>Netflix</p>
                                    <p5>Subscription</p5>
                                </div>
                            </div>
                            <div>
                                <p>-Rp149.000</p>
                            </div>
                        </div>
                        <p5>This Month</p5>
                        <div class="d-flex flex-row justify-content-between">
                            <div class="d-flex flex-row justify-content-between gap-3">
                                <img src={tf3} alt="pict"/>
                                <div>
                                    <p>Christine Martin</p>
                                    <p5>Transfer</p5>
                                </div>
                            </div>
                            <div>
                                <p>+Rp150.000</p>
                            </div>
                        </div>
                        <div class="d-flex flex-row justify-content-between">
                            <div class="d-flex flex-row justify-content-between gap-3">
                                <img src={tf4} alt="pict"/>
                                <div>
                                    <p>Adobe Inc.</p>
                                    <p5>Subscription</p5>
                                </div>
                            </div>
                            <div>
                                <p>-Rp249.000</p>
                            </div>
                        </div>
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

export default History