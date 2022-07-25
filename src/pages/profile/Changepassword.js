import React from 'react'
import {Navbar, Container, Row, Col, Form} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {FiArrowUp,FiPlus,FiBell, FiUser, FiLogOut, FiLock} from 'react-icons/fi'
import { AiOutlineAppstore } from "react-icons/ai";

import user1 from '../../assets/images/profile-pict.png'
// import tf1 from '../../assets/images/dsb-prof-1.png'
// import tf2 from '../../assets/images/logo.png'
// import tf3 from '../../assets/images/7.png'
// import tf4 from '../../assets/images/logo2.png'

function Changepassword() {
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
        <Row className='pad-content mw-100  d-flex justify-content-between'>
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
            <Col className='col-md-10'>
                <div>
                <div class="d-flex gap-5 flex-column bg-white">
                <h3>Change Password
                </h3>
                <p>You must enter your current password and then type your new password twice.             
                </p>
                    <div className='pad-content'>
                    <Form >
                    <Form.Group className="mb-3 d-flex align-items-center flex-nowrap">
                        <FiLock className='fw-inp-icon icon-style '/>
                        <Form.Control name="password"  type="password" placeholder="Current password"  className="fw-input "/>  {/** INI PENTING */}
                        <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3 d-flex align-items-center flex-nowrap">
                        <FiLock className='fw-inp-icon icon-style '/>
                        <Form.Control name="password"  type="password" placeholder="New password"  className="fw-input "/>  {/** INI PENTING */}
                        <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3 d-flex align-items-center flex-nowrap">
                        <FiLock className='fw-inp-icon icon-style '/>
                        <Form.Control name="password"  type="password" placeholder="Repeat new password"  className="fw-input "/>  {/** INI PENTING */}
                        <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                    </Form.Group>
                </Form>
                <div class="d-grid">
                    <Link to={'/profile'} class="btn btn-primary">Reset Pasword</Link>
                </div>
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

export default Changepassword