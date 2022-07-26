import React from 'react'
import { Row, Col, Form} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Header from '../../assets/component/Header';
import Sidebar from '../../assets/component/Sidebar';
import Footer from '../../assets/component/Footer';
// import tf1 from '../../assets/images/dsb-prof-1.png'
// import tf2 from '../../assets/images/logo.png'
// import tf3 from '../../assets/images/7.png'
// import tf4 from '../../assets/images/logo2.png'

function Newpin() {
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
                <h3>Change PIN
                </h3>
                <p>Type your new 6 digits security PIN to use in Zwallet.         
                </p>
                    <div className='pad-content '>
                    <Form className='margin-btm d-flex justify-content-center flex-row pin-input-wrapper gap-3'> {/** INI PENTING */}
                    <Form.Group className="mb-3 d-flex align-items-center pin-inpt">
                        <Form.Control name='pin' maxlength="1" max="9" min="0"  className="pin-inp"/>  {/** INI PENTING */}
                        <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3 d-flex align-items-center pin-inpt">
                        <Form.Control name='pin' maxlength="1" max="9" min="0"  className="pin-inp"/>  {/** INI PENTING */}
                        <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3 d-flex align-items-center pin-inpt ">
                        <Form.Control name='pin' maxlength="1" max="9" min="0"  className="pin-inp"/>  {/** INI PENTING */}
                        <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                    </Form.Group>
                    
                    <Form.Group className="mb-3 d-flex align-items-center pin-inpt ">
                        <Form.Control name='pin' maxlength="1" max="9" min="0"  className="pin-inp"/>  {/** INI PENTING */}
                        <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3 d-flex align-items-center  pin-inpt">
                        <Form.Control name='pin' maxlength="1" max="9" min="0"  className="pin-inp"/>  {/** INI PENTING */}
                        <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3 d-flex align-items-center pin-inpt ">
                        <Form.Control name='pin' maxlength="1" max="9" min="0"  className="pin-inp"/>  {/** INI PENTING */}
                        <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                    </Form.Group>
                </Form>  {/** INI PENTING */}
                <div class="d-grid">
                    <Link to={'/profile'} class="btn btn-primary">Change PIN</Link>
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

export default Newpin