import React from 'react'
import { Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {FiArrowUp,FiPlus, FiArrowDown} from 'react-icons/fi'
//import { AiOutlineAppstore } from "react-icons/ai";
import Footer from '../../assets/component/Footer';

import graph from '../../assets/images/graphic-travic.png'
import contact1 from '../../assets/images/dsb-prof-1.png'
import contact2 from '../../assets/images/logo.png'
import contact3 from '../../assets/images/7.png'
import contact4 from '../../assets/images/logo2.png'
import Header from '../../assets/component/Header';
import Sidebar from '../../assets/component/Sidebar';

function home() {
  return (
    <div>
        <Header/>
        <section>
        <Row className='pad-content mw-100'>
            <Sidebar/>
            <Col className='col-10'>
                <div>
                    <div class="d-flex justify-content-between bg-main-ct pad-sec-1">
                        <div>
                            <p>Balance</p>
                            <h4>Rp120.000</h4>
                            <p>+62 813-9387-7946</p>
                        </div>
                        <div class="d-flex flex-column gap-2 ">
                            <a href="/transfer/transfer.html" className="btn blue-button align-items-center d-flex gap-1">
                                <FiArrowUp />
                                <p5>Transfer</p5>
                            </a>
                            <a href="/topUp/topUp.html" className="btn blue-button align-items-center d-flex gap-1">
                                <FiPlus />
                                <p5>Top Up</p5>
                            </a>
                        </div>
                    </div>
                    <Row className='pad-sec-2 justify-content-between'>
                        <Col className='col-12 col-md-7 bg-white pad-sec-1'>
                            <div class="d-flex justify-content-between">
                                    <div>
                                    <FiArrowDown/>
                                    <p7>Income</p7>
                                        <p>Rp2.120.000</p>
                                </div>
                                <div>
                                    <FiArrowUp/>
                                    <p7>Expense</p7>
                                    <p>Rp1.560.000</p>
                                </div>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <img class="img-fluid" src={graph} alt="pict"/>
                            </div>
                        </Col>
                        <Col className='d-flex flex-column col-4 bg-white   pad-sec-1 gap-4 '>
                            <div class="d-flex justify-content-between">
                                <p5>Transaction History</p5>
                                <Link className='f400-bck text-decoration-none' to={"/history"}>See all</Link>
                            </div>
                            <div class="d-flex justify-content-between">
                                <div class="d-flex flex-row gap-2">
                                    <img src={contact1} alt="pict"/>
                                    <div class="d-flex flex-column">
                                        <p5>Samuel Suhi</p5>
                                        <p9>Transfer</p9>
                                    </div>
                                </div>
                                <div>
                                    <p>+Rp50.000</p>
                                </div>
                            </div>
                            <div class="d-flex justify-content-between">
                                <div class="d-flex flex-row gap-2">
                                    <img src={contact2} alt="pict"/>
                                    <div class="d-flex flex-column">
                                        <p5>Netflix</p5>
                                        <p9>Subscription</p9>
                                    </div>
                                </div>
                                <div>
                                    <p>-Rp149.000</p>
                                </div>
                            </div>
                            <div class="d-flex justify-content-between">
                                <div class="d-flex flex-row gap-2">
                                    <img src={contact3} alt="pict"/>
                                    <div class="d-flex flex-column">
                                        <p5>Christine Martin</p5>
                                        <p9>Transfer</p9>
                                    </div>
                                </div>
                                <div>
                                    <p>+Rp150.000</p>
                                </div>
                            </div>
                            <div class="d-flex justify-content-between">
                                <div class="d-flex flex-row gap-2a">
                                    <img src={contact4} alt="pict"/>
                                    <div class="d-flex flex-column">
                                        <p5>Adobe Inc.</p5>
                                        <p9>Subscription</p9>
                                    </div>
                                </div>
                                <div>
                                    <p>-Rp249.000</p>
                                </div>
                            </div>
                        </Col>
                    </Row>
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

export default home

