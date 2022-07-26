import React from 'react'
import { Row, Col, Form} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { FiLock} from 'react-icons/fi'

// import user1 from '../../assets/images/profile-pict.png'
import Header from '../../assets/component/Header';
import Sidebar from '../../assets/component/Sidebar';
import Footer from '../../assets/component/Footer';
// import tf1 from '../../assets/images/dsb-prof-1.png'
// import tf2 from '../../assets/images/logo.png'
// import tf3 from '../../assets/images/7.png'
// import tf4 from '../../assets/images/logo2.png'

function Changepassword() {
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
                <div class="d-flex gap-5 flex-column bg-white">
                <h3>Change Password
                </h3>
                <p>You must enter your current password and then type your new password twice.             
                </p>
                    <div className='pad-content'>
                    <Form >
                    <Form.Group className="mb-3 d-flex align-items-center flex-nowrap fw-input">
                        <FiLock className='icon-style '/>
                        <Form.Control name="password"  type="password" placeholder="Current password"  className="no-border2"/>  {/** INI PENTING */}
                        <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3 d-flex align-items-center flex-nowrap fw-input">
                        <FiLock className='icon-style '/>
                        <Form.Control name="password"  type="password" placeholder="New password"  className="no-border2"/>  {/** INI PENTING */}
                        <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="mb-3 d-flex align-items-center flex-nowrap fw-input">
                        <FiLock className='icon-style '/>
                        <Form.Control name="password"  type="password" placeholder="Repeat new password"  className="no-border2"/>  {/** INI PENTING */}
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
                <Footer/> 
        </footer>
    </div>
  )
}

export default Changepassword