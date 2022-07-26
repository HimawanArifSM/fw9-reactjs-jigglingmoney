import React from 'react'
import { Row, Col, Form} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { FiPhone} from 'react-icons/fi'

// import user1 from '../../assets/images/profile-pict.png'
import Header from '../../assets/component/Header';
import Sidebar from '../../assets/component/Sidebar';
import Footer from '../../assets/component/Footer';
// import tf1 from '../../assets/images/dsb-prof-1.png'
// import tf2 from '../../assets/images/logo.png'
// import tf3 from '../../assets/images/7.png'
// import tf4 from '../../assets/images/logo2.png'

function Addphone() {
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
                <h3>Add Phone Number
                </h3>
                <p>Add at least one phone number for the transfer ID so you can start transfering your money to another user.        
                </p>
                    <div className='pad-content '>
                    <Form className='margin-btm d-flex justify-content-center flex-row pin-input-wrapper gap-3'> {/** INI PENTING */}
                    <Form.Group className="mb-3 d-flex align-items-center flex-nowrap">
                        <FiPhone className=' icon-style '/>+62
                        <Form.Control name="password"  type="password" placeholder="Enter your phone number"  className="fw-input "/>  {/** INI PENTING */}
                        <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                    </Form.Group>
                </Form>  {/** INI PENTING */}
                <div class="d-grid">
                    <Link to={'/managephone'} class="btn btn-primary">Add Phone Number</Link>
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

export default Addphone