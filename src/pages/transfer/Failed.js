import React from 'react'
import { Row, Col} from 'react-bootstrap'
import Modals from './Modals'
import {FcHighPriority} from 'react-icons/fc'
import { useSelector } from "react-redux";

import Header from '../../assets/component/Header';
import Sidebar from '../../assets/component/Sidebar';
import Footer from '../../assets/component/Footer';

function Failed() {
    const notes = useSelector((state)=>state.transaction.notes)
    const amount = useSelector((state)=>state.transaction.amount)
    const balanceleft = useSelector((state)=>state.transaction.balanceleft)
    const time = useSelector((state)=>state.transaction.date)
    const dateOnly = time.slice(0, 10);
    const hours = time.slice(11, 16);
    const name = useSelector((state)=>state.transaction.name)
    const phone = useSelector((state)=>state.transaction.phone)
    const phonenumber = (phone.slice(1))
    const image = useSelector((state)=>state.transaction.image)
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
                <div className="d-flex flex-column gap-5 bg-white">
                <div className="text-center d-flex flex-column gap-3 ">
                    <FcHighPriority className='mx-auto' size={69}/>
                    <p className="font-700">Transfer Failed</p>
                    <p>We can't transfer your money at the moment, we recommend you to check your internet connection and try again.</p>
                </div>
                <div className="d-flex flex-column justify-content-between bg-white-shadow">
                    <p>Amount</p>
                    <h3>Rp{amount}</h3>
                </div>
                <div className="d-flex flex-column justify-content-between bg-white-shadow">
                    <p>Balance Left</p>
                    <h3>Rp{balanceleft}</h3>
                </div>
                <div className="d-flex flex-column justify-content-between bg-white-shadow">
                    <p>Date/Time</p>
                    <h3>{dateOnly} - {hours}</h3>
                </div>
                <div className="d-flex flex-column justify-content-between bg-white-shadow">
                    <p>Notes</p>
                    <h3>{notes}</h3>
                </div>
                
                <div className="d-flex flex-row justify-content-between bg-white-shadow">
                    <div className="d-flex flex-row justify-content-between gap-3">
                        <img className='pict-style3' src={image} alt="pict"/>
                        <div>
                            <p>{name}</p>
                            <p5>+62 {phonenumber}</p5>
                        </div>
                        
                    </div>
                </div>
                <div className=" d-flex justify-content-end">
                <Modals/>
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

export default Failed