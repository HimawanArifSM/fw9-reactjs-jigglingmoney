import React from 'react'
import { Row, Col, Form} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { FiEdit2} from 'react-icons/fi'
import tf1 from '../../assets/images/photo-samuel-shusi.png'
import Header from '../../assets/component/Header';
import Sidebar from '../../assets/component/Sidebar';
import Footer from '../../assets/component/Footer';
// import tf2 from '../../assets/images/photo-momo-taro.png'
// import tf3 from '../../assets/images/photo-jessica-keen.png'
// import tf4 from '../../assets/images/photo-michael-le.png'

function Transferinput() {
  return (
    <div>
        <div>
            <Header/>
        </div>

        <section>
        <Row className='pad-content mw-100 gap-2 d-flex justify-content-between'>
            <Sidebar/>
            <Col className='col-9'>
                <div>
                <div class="row d-flex flex-col gap-5 bg-white">
                <p class="font-700">Transfer Money</p>
                <div class="d-flex flex-row justify-content-between bg-white-shadow">
                    <div class="d-flex flex-row justify-content-between gap-3">
                        <img src={tf1} alt="pict"/>
                        <div>
                            <p>Samuel Suhi</p>
                            <p5>+62 813-8492-9994</p5>
                        </div>
                    </div>
                </div>
                <div class="d-flex flex-column gap-5">
                    <div>
                        <p>Type the amount you want to transfer and then
                            press continue to the next steps.</p>
                    </div>
                    <div class="d-flex flex-column align-items-center" >
                    <Form>
                            <Form.Group className="mb-3 d-flex align-items-center no-border">
                                <Form.Control name="text"  type="text" placeholder="0.00"  className="fw-input no-border"/>  {/** INI PENTING */}
                                <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                            </Form.Group>
                        </Form>
                        <p>Rp120.000 Available</p>
                        <Form>
                            <Form.Group className="mb-3 d-flex align-items-center wd200">
                                <FiEdit2 />
                                <Form.Control name="text"  type="text" placeholder="Add some notes"  className="fw-input wd200"/>  {/** INI PENTING */}
                                <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                            </Form.Group>
                        </Form>
                    </div>
                    <div class=" d-flex justify-content-end">
                        <Link to={"/transferconf"} class="btn btn-primary blue-button">Continue</Link>
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

export default Transferinput