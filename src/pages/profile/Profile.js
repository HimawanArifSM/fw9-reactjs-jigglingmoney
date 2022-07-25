import React from 'react'
import {Navbar, Container, Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {FiArrowUp,FiPlus,FiBell, FiUser, FiLogOut, FiArrowRight,FiEdit2} from 'react-icons/fi'
import { AiOutlineAppstore } from "react-icons/ai";

import user1 from '../../assets/images/profile-pict.png'
// import tf1 from '../../assets/images/dsb-prof-1.png'
// import tf2 from '../../assets/images/logo.png'
// import tf3 from '../../assets/images/7.png'
// import tf4 from '../../assets/images/logo2.png'

function Profile() {
  return (
    <div>
        <div>
            <Navbar className='zwallet-footer mw-100' expand='sm'>
                <Container>
                    <Link className='navbar-brand highlight fw-bold' to='/home'>Zwallet</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <div className="d-flex p-3 p-md-0 flex-column flex-sm-row gap-3 ms-auto align-items-center">
                        <Link to={"/profile"} className='f400-bck'><img src={user1} alt="pict"/></Link>
                        <Link to={"/profile"} className='text-decoration-none' >
                            <div className="text-center f400-bck ">Robert Chandler</div>
                            <div className="text-center f400-bck text-decoration-none">+62 8139 3877 7946</div>
                        </Link>
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
                <div className="bg-white text-center d-flex justify-content-center flex-column gap-2 pad-content" >
                <div className="justify-content-center d-flex"><img src={user1} alt="pict"/>
                </div>
                <div className='d-flex gap-2 align-items-center justify-content-center'><FiEdit2 />Edit</div>
                <h3>Robert Chandler</h3>
                <h5 >+62 813-9387-7946</h5>
                <Link to={"/personalinfo"} className="btn d-flex justify-content-between bg-gray">
                    <h>Personal Information</h>
                    <FiArrowRight size={25}/>
                </Link>
                <Link to={"/changepassword"} className="btn d-flex justify-content-between bg-gray">
                    <h>Change Password</h>
                    <FiArrowRight size={25}/>
                </Link>
                <Link to={"/changepin"} className="btn d-flex justify-content-between bg-gray">
                    <h>Change PIN</h>
                    <FiArrowRight size={25}/>
                </Link>
                <Link to={"/login"} className="btn bg-gray justify-content-start d-flex">
                    <h>Logout</h>
                </Link>
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

export default Profile