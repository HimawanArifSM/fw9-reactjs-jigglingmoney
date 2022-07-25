import React from 'react'
import {Navbar, Container, Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {FiArrowUp,FiPlus,FiBell, FiUser, FiLogOut} from 'react-icons/fi'
import { AiOutlineAppstore } from "react-icons/ai";
import Modals from './Modals'
import {FcHighPriority} from 'react-icons/fc'

import user1 from '../../assets/images/profile-pict.png'
import tf1 from '../../assets/images/photo-samuel-shusi.png'
//import tf2 from '../../assets/images/failed.png'
// import tf3 from '../../assets/images/photo-jessica-keen.png'
// import tf4 from '../../assets/images/photo-michael-le.png'

function Failed() {
  return (
    <div>
        <div>
            <Navbar className='zwallet-footer mw-100' expand='sm'>
                <Container>
                    <Link className='navbar-brand highlight fw-bold' to='/home'>Zwallet</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <div className="d-flex p-3 p-md-0 flex-column flex-sm-row gap-3 ms-auto align-items-center">
                        <a className='f400-bck' href="/profile/profilev2.html"><img src={user1} alt="pict"/></a>
                        <a className='text-decoration-none' href="/profile/profilev2.html" >
                            <div className="text-center f400-bck ">Robert Chandler</div>
                            <div className="text-center f400-bck text-decoration-none">+62 8139 3877 7946</div>
                        </a>
                        <div>
                            <FiBell size={30}/>
                        </div>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

        <section>
        <Row className='pad-content mw-100 gap-2 d-flex justify-content-between'>
            <Col className='col-12 col-md-2 d-flex flex-column justify-content-between sidebar bg-white'>
            <div className="d-flex flex-column gap-5 ">
                    <Link to={"/home"} className='align-items-center d-flex gap-1 f400-bck text-decoration-none'>
                        <AiOutlineAppstore />
                        <p5 >Dashboard</p5>
                    </Link>
                    <Link to={"/transfer"} className='align-items-center d-flex gap-1 f400-bck text-decoration-none'>
                        <FiArrowUp />
                        <p5>Transfer</p5>
                    </Link>
                    <Link to={"/topup"} className='align-items-center d-flex gap-1 f400-bck text-decoration-none'>
                        <FiPlus />
                        <p5>Top Up</p5>
                    </Link>
                    <Link to={"/profile"} className='align-items-center d-flex gap-1 f400-bck text-decoration-none'>
                        <FiUser />
                        <p5>Profile</p5>
                    </Link>
                </div>
                <div>
                    <Link to={"/login"} className='align-items-center d-flex gap-1 f400-bck text-decoration-none'>
                        <FiLogOut />
                        <p5>Logout</p5>
                    </Link>
                </div>
            </Col>
            <Col className='col-9'>
                <div>
                <div className="row d-flex flex-col gap-5 bg-white">
                <div class="text-center d-flex flex-column gap-3 ">
                    <FcHighPriority className='mx-auto' size={69}/>
                    <p class="font-700">Transfer Failed</p>
                    <p>We can't transfer your money at the moment, we recommend you to check your internet connection and try again.</p>
                </div>
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
                
                <div className="d-flex flex-row justify-content-between bg-white-shadow">
                    <div className="d-flex flex-row justify-content-between gap-3">
                        <img src={tf1} alt="pict"/>
                        <div>
                            <p>Samuel Suhi</p>
                            <p5>+62 813-8492-9994</p5>
                        </div>
                        
                    </div>
                </div>
                <div className=" d-flex justify-content-end">
                <Modals/>
                </div>
                </div>
                </div>
            </Col>
        </Row>
        </section>
        <footer>
                <div className=" d-flex flex-row justify-content-between zwallet-footer mw-100">
                    <div><p5>2020 Zwallet. All right reserved.</p5>
                    </div>
                    <div className='d-flex flex-row gap-3'>
                        <p5>+62 5637 8882 9901</p5>
                        <p5>contact@zwallet.com</p5>
                    </div>
                </div> 
        </footer>

        
    </div>
  )
}

export default Failed