import React from 'react'
import { Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {FiArrowUp,FiPlus, FiArrowDown} from 'react-icons/fi'
//import { AiOutlineAppstore } from "react-icons/ai";
import Footer from '../../assets/component/Footer';

import graph from '../../assets/images/graphic-travic.png'
import Header from '../../assets/component/Header';
import Sidebar from '../../assets/component/Sidebar';
import {useDispatch, useSelector} from 'react-redux';
import { getProfile } from '../../assets/redux/asyncActions/profile';
import { getHistory } from '../../assets/redux/asyncActions/history';
import { resetmsg } from '../../assets/redux/reducers/transaction';

function CompHistory(props){
    const response = useSelector(state => state.profile?.results);
    //console.log(response.results?.picture);
return(
    <div class="d-flex flex-row justify-content-between">
        <div class="d-flex flex-row justify-content-between gap-3">
            <img className='pict-style3' src={props.pict} alt="pict"/>
            <div>
                {props.recipient_id === response.iduser ? (props.type === 'TopUp' ? (<p>{props.recipient}</p>): (<p>{props.sender}</p>)) :<p>{props.recipient}</p>}
                <p>{props.type}</p>
            </div>
        </div>
        <div>
            {props.recipient_id === response.iduser ? <p className='textgreen'>+Rp{props.amount}</p> : <p className='textred'>-Rp{props.amount}</p>}
        </div>
    </div>
)
}

function Home() {
const response = useSelector(state => state.profile?.results);
const dispatch = useDispatch();
const token = useSelector(state => state.auth.token);
const resHistory = useSelector(state => state.ressHistory?.results);
const phone = response?.phonenumber?.slice(1)

React.useEffect( () => {
    dispatch(getHistory({token}));
    dispatch(getProfile(token));
    dispatch(resetmsg())
}, [dispatch, token]);

  return (
    <div>
        <Header/>
        <section>
        <Row className='pad-content mw-100'>
            <Sidebar/>
            <Col className='col-10'>
                <div className='d-flex flex-column gap-4'>
                    <div className="d-flex justify-content-between bg-main-ct pad-sec-1">
                        <div>
                            <p>Balance</p>
                            <h4>Rp{response?.balance}</h4>
                            <p>+62 {phone}</p>
                        </div>
                        <div class="d-flex flex-column gap-2 ">
                            <Link to={"/transfer"} className="btn blue-button align-items-center d-flex gap-1">
                                <FiArrowUp />
                                <p>Transfer</p>
                            </Link>
                            <Link to={"/topup"} className="btn blue-button align-items-center d-flex gap-1">
                                <FiPlus />
                                <p>Top Up</p>
                            </Link>
                        </div>
                    </div>
                    <Col className=' d-flex flex-md-row flex-column gap-4'>
                        <Col md={7} className=' bg-white pad-sec-1 '>
                            <div className="d-flex justify-content-between">
                                    <div>
                                    <FiArrowDown/>
                                    <p>Income</p>
                                        <p>Rp2.120.000</p>
                                </div>
                                <div>
                                    <FiArrowUp/>
                                    <p>Expense</p>
                                    <p>Rp1.560.000</p>
                                </div>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <img className="img-fluid" src={graph} alt="pict"/>
                            </div>
                        </Col>
                        <Col md={5} className='d-flex flex-column bg-white no-flex pad-sec-1 gap-3 '>
                            <div className="d-flex justify-content-between">
                                <p>Transaction History</p>
                                <Link className='f400-bck text-decoration-none' to={"/history"}>See all</Link>
                            </div>
                            {resHistory&&resHistory?.map(o=>{
                            return(
                                <CompHistory pict={o.picture} name={o.recipient} sender={o.sender} recipient={o.recipient} recipient_id={o.recipient_id} type={o.type} amount={o.amount}/>
                            )
                            })}
                        </Col>
                    </Col>
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

export default Home
