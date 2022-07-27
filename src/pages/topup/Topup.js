import React from 'react'
import { Row, Col} from 'react-bootstrap'
import Header from '../../assets/component/Header';
import Sidebar from '../../assets/component/Sidebar';
import Footer from '../../assets/component/Footer';
// import tf1 from '../../assets/images/dsb-prof-1.png'
// import tf2 from '../../assets/images/logo.png'
// import tf3 from '../../assets/images/7.png'
// import tf4 from '../../assets/images/logo2.png'

function Topup() {
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
                <div className="d-flex flex-column gap-4 bg-white">
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
                <Footer/>
        </footer>
    </div>
  )
}

export default Topup