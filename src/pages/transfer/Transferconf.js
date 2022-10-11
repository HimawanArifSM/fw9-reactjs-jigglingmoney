import React from 'react'
import { Row, Col} from 'react-bootstrap'
import Modals from './Modals'
import { useSelector } from "react-redux";
import Header from '../../assets/component/Header';
import Sidebar from '../../assets/component/Sidebar';
import Footer from '../../assets/component/Footer';

function Transferconf() {
    const response = useSelector(state => state.profile?.results);
    const notes = useSelector((state)=>state.transaction.notes)
    const amount = useSelector((state)=>state.transaction.amount)
    const date = useSelector((state)=>state.transaction.date)
    const dateOnly = date.slice(0, 10);
    const hours = date.slice(11, 16);
    const name = useSelector((state)=>state.transaction.name)
    const image = useSelector((state)=>state.transaction.image)
    // const receiver = useSelector((state)=>state.transaction.receiver)
    const phone = useSelector((state)=>state.transaction.phone)
    const phonenumber = (phone.slice(1))
    const balanceLeft = parseInt(response.balance) - parseInt(amount)
    const bl = {balanceLeft: balanceLeft}
  return (
    <div>
        <div>
            <Header/>
        </div>
        <section>
        <Row className='pad-content mw-100 '>
            <Sidebar/>
            <Col className='col-md-10'>
                <div className="flex-column d-flex gap-5 bg-white">
                    <p className="font-700">Transfer To</p>
                    <div className="d-flex flex-row justify-content-between bg-white-shadow">
                        <div className="d-flex flex-row justify-content-between gap-3">
                            <img className='pict-style3' src={image} alt="pict"/>
                            <div>
                                <p>{name}</p>
                                <p5>+62 {phonenumber}</p5>
                            </div>
                        </div>
                    </div>
                    <p>Details</p>
                    <div className="d-flex flex-column justify-content-between bg-white-shadow">
                        <p>Amount</p>
                        <h3>Rp{amount}</h3>
                    </div>
                    <div className="d-flex flex-column justify-content-between bg-white-shadow">
                        <p>Balance Left</p>
                        <h3>Rp{balanceLeft}</h3>
                    </div>
                    <div className="d-flex flex-column justify-content-between bg-white-shadow">
                        <p>Date/Time</p>
                        <h3>{dateOnly} - {hours}</h3>
                    </div>
                    <div className="d-flex flex-column justify-content-between bg-white-shadow">
                        <p>Notes</p>
                        <h3>{notes}</h3>
                    </div>
                    <div className=" d-flex justify-content-end">
                        <Modals
                        balanceLeft={bl}
                        />
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

export default Transferconf