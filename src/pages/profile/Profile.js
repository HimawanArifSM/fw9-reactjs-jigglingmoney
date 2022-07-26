import React from 'react'
import { Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { FiArrowRight,FiEdit2} from 'react-icons/fi'

import user1 from '../../assets/images/profile-pict.png'
import Header from '../../assets/component/Header';
import Sidebar from '../../assets/component/Sidebar';
import Footer from '../../assets/component/Footer';
// import tf1 from '../../assets/images/dsb-prof-1.png'
// import tf2 from '../../assets/images/logo.png'
// import tf3 from '../../assets/images/7.png'
// import tf4 from '../../assets/images/logo2.png'

function Profile() {
  return (
    <div>
        <div>
            <Header/>
        </div>

        <section>
        <Row className='pad-content mw-100  d-flex justify-content-between'>
            <Sidebar/>
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
                <Footer/>
        </footer>
    </div>
  )
}

export default Profile