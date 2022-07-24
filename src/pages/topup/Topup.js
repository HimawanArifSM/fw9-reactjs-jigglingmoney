import React from 'react'
import {Navbar, Container, Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {FiArrowUp,FiPlus,FiBell, FiMenu, FiUser, FiLogOut} from 'react-icons/fi'

import user1 from '../../assets/images/profile-pict.png'
// import tf1 from '../../assets/images/dsb-prof-1.png'
// import tf2 from '../../assets/images/logo.png'
// import tf3 from '../../assets/images/7.png'
// import tf4 from '../../assets/images/logo2.png'

function Topup() {
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
                            <FiBell/>
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
                    <Link to={"/home"} className='align-items-center d-flex gap-1 f400-bck text-decoration-none' href="/dashboard/home.html">
                        <FiMenu />
                        <p5 >Dashboard</p5>
                    </Link>
                    <Link to={"/transfer"} className='align-items-center d-flex gap-1 f400-bck text-decoration-none'  href="/transfer/transfer.html">
                        <FiArrowUp />
                        <p5>Transfer</p5>
                    </Link>
                    <Link to={"/topup"} className='align-items-center d-flex gap-1 f400-bck text-decoration-none' href="/topUp/topUp.html">
                        <FiPlus />
                        <p5>Top Up</p5>
                    </Link>
                    <Link to={"/profile"} className='align-items-center d-flex gap-1 f400-bck text-decoration-none'>
                        <FiUser />
                        <p5>Profile</p5>
                    </Link>
                </div>
                <div>
                    <Link to={"/login"} className='align-items-center d-flex gap-1 f400-bck text-decoration-none' href="/login.html">
                        <FiLogOut />
                        <p5>Logout</p5>
                    </Link>
                </div>
            </Col>
            <Col className='col-9'>
                <div>
                <div className="row d-flex flex-col gap-4 bg-white">
                <h3>How To Top Up</h3>
                
 
                <div className="bg-white-shadow pad-sec-2">
                    <span  className='f400-main'>1. </span>Go to the nearest ATM or you can use E-Banking.
                </div>
                <div className="bg-white-shadow pad-sec-2">
                    <span className='f400-main'>2. </span>   Type your security number on the ATM or E-Banking.
                </div>
                <div className="bg-white-shadow pad-sec-2">
                    <span className='f400-main'>3. </span>   Select “Transfer” in the menu
                </div>
                <div className="bg-white-shadow pad-sec-2">
                    <span className='f400-main'>4. </span>   Type the virtual account number that we provide you at the top.
                </div>
                <div className="bg-white-shadow pad-sec-2">
                    <span className='f400-main'>5. </span>   Type the amount of the money you want to top up.
                </div>
                <div className="bg-white-shadow pad-sec-2">
                    <span className='f400-main'>6. </span>   Read the summary details.
                </div>
                <div className="bg-white-shadow pad-sec-2">
                    <span className='f400-main'>7. </span>   Press transfer / top up.
                </div>
                <div className="bg-white-shadow pad-sec-2">
                    <span className='f400-main'>8. </span>   You can see your money in Zwallet within 3 hours.
                </div>

            </div>
                </div>
            </Col>
        </Row>
        </section>
        <footer>
                <div class=" d-flex flex-row justify-content-between zwallet-footer mw-100">
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

export default Topup