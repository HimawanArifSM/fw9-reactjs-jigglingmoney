import React from 'react'
import { Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {FiClipboard} from 'react-icons/fi'
import Header from '../../assets/component/Header';
import Sidebar from '../../assets/component/Sidebar';
import Footer from '../../assets/component/Footer';
// import tf1 from '../../assets/images/dsb-prof-1.png'
// import tf2 from '../../assets/images/logo.png'
// import tf3 from '../../assets/images/7.png'
// import tf4 from '../../assets/images/logo2.png'

function Managephone() {
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
                <h3>Manage Phone Number</h3>
                <p>You can only delete the phone number and then you must add another phone number.</p>
                <div class="d-flex justify-content-between bg-white-shadow align-items-center margin-btm-ex" >
                    <div>
                        <p>Primary</p>
                        <h3>+62 813 9387 7946</h3>
                    </div>
                    <div>
                        <Link to={"/addphone"} type="button" class="btn"><FiClipboard/></Link>
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

export default Managephone