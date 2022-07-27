import React from 'react'
import {Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Header from '../../assets/component/Header';
import Sidebar from '../../assets/component/Sidebar';
import Footer from '../../assets/component/Footer';
// import tf1 from '../../assets/images/dsb-prof-1.png'
// import tf2 from '../../assets/images/logo.png'
// import tf3 from '../../assets/images/7.png'
// import tf4 from '../../assets/images/logo2.png'

function Personalinfo() {
  return (
    <div>
        <div>
            <Header/>
        </div>

        <section>
        <Row className='pad-content mw-100'>
            <Sidebar/>
            <Col className='col-md-10'>
                <div>
                <div class="d-flex flex-column gap-5 bg-white">
                <h3>Personal Information</h3>
                <p>We got your personal information from the sign up proccess. If you want to make changes on your information, contact our support.</p>
                <div class="bg-white">
                    <p>First Name</p>
                    <h5>Robert</h5>
                </div>
                <div class="bg-white">
                    <p>Last Name</p>
                    <h5>Chandler</h5>
                </div>
                <div class="bg-white">
                    <p>Verified E-mail</p>
                    <h5>pewdiepie1@gmail.com</h5>
                </div>
                <div class="d-flex justify-content-between align-items-center bg-white">
                    <div>
                        <p>Phone Number</p>
                        <h5>+62 813-9387-7946</h5>
                    </div>
                    <div>
                        <Link className='text-decoration-none font-400' to={"/managephone"}>Manage</Link>
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

export default Personalinfo