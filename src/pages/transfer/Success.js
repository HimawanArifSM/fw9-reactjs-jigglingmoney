import React from 'react'
import { Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { FiDownload,FiShare2} from 'react-icons/fi'

import {FcOk} from 'react-icons/fc'

import Header from '../../assets/component/Header';
import Sidebar from '../../assets/component/Sidebar';
import Footer from '../../assets/component/Footer';
import { useSelector } from "react-redux";

function Success() {
    const notes = useSelector((state)=>state.transaction.notes)
    const amount = useSelector((state)=>state.transaction.amount)
    const balanceleft = useSelector((state)=>state.transaction.balanceleft)
    const name = useSelector((state)=>state.transaction.name)
    const phone = useSelector((state)=>state.transaction.phone)
    const phonenumber = (phone.slice(1))
    const image = useSelector((state)=>state.transaction.image)
    const time = useSelector((state)=>state.transaction.date)
    const dateOnly = time.slice(0, 10);
    const hours = time.slice(11, 16);
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
                <div className=" d-flex flex-column gap-5 bg-white">
                <div className="text-center d-flex flex-column gap-3 ">
                    <FcOk className='mx-auto' size={69}/>
                    <p className="font-700">Transfer Success</p>
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
                            <p>+62 {phonenumber}</p>
                        </div>
                        
                    </div>
                </div>
                <div className=" d-flex justify-content-end">
                <div className=" d-flex justify-content-end gap-3">
                    <button className="btn white-button wid-imp2"><FiShare2 /></button>
                    <button className="btn white-button align-items-center d-flex gap-2">
                    <FiDownload />
                    Download PDF
                    </button>
                    <Link to={"/home"} className="btn blue-button wid-imp">Back to Home</Link>
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

export default Success