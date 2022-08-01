import React from 'react'
import { Row, Col} from 'react-bootstrap'
import {Link, useNavigate} from 'react-router-dom'
import {FiArrowUp,FiPlus, FiArrowDown} from 'react-icons/fi'
//import { AiOutlineAppstore } from "react-icons/ai";
import Footer from '../../assets/component/Footer';

import graph from '../../assets/images/graphic-travic.png'
import contact1 from '../../assets/images/dsb-prof-1.png'
import contact2 from '../../assets/images/logo.png'
import contact3 from '../../assets/images/7.png'
import contact4 from '../../assets/images/logo2.png'
import Header from '../../assets/component/Header';
import Sidebar from '../../assets/component/Sidebar';
import {useDispatch, useSelector} from 'react-redux';
import { getProfile } from '../../assets/redux/asyncActions/profile';

function Home() {
//   const dispatch = useDispatch();
     const response = useSelector((state) => state.coba.results);

//   React.useEffect(()=>{
//       dispatch(getProfile())
//       //console.log(response?.results?.fullname);
//   }, []);
const dispatch = useDispatch();
//const navigate = useNavigate();
const token = useSelector((state) => state.auth.token);
//const profile = useSelector((state) => state.profile.data);

React.useEffect(() => {
  dispatch(getProfile(token));
}, []);

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
                            <h4>Rp{response?.results?.balance}</h4>
                            <p>+62 {response?.results?.phonenumber.slice(1)}</p>
                        </div>
                        <div class="d-flex flex-column gap-2 ">
                            <Link to={"/transfer"} className="btn blue-button align-items-center d-flex gap-1">
                                <FiArrowUp />
                                <p5>Transfer</p5>
                            </Link>
                            <Link to={"/topup"} className="btn blue-button align-items-center d-flex gap-1">
                                <FiPlus />
                                <p5>Top Up</p5>
                            </Link>
                        </div>
                    </div>
                    <Col className=' d-flex flex-md-row flex-column gap-4'>
                        <Col md={7} className=' bg-white pad-sec-1 '>
                            <div className="d-flex justify-content-between">
                                    <div>
                                    <FiArrowDown/>
                                    <p7>Income</p7>
                                        <p>Rp2.120.000</p>
                                </div>
                                <div>
                                    <FiArrowUp/>
                                    <p7>Expense</p7>
                                    <p>Rp1.560.000</p>
                                </div>
                            </div>
                            <div className='d-flex justify-content-center'>
                                <img className="img-fluid" src={graph} alt="pict"/>
                            </div>
                        </Col>
                        <Col md={5} className='d-flex flex-column bg-white no-flex pad-sec-1 gap-4 '>
                            <div className="d-flex justify-content-between">
                                <p5>Transaction History</p5>
                                <Link className='f400-bck text-decoration-none' to={"/history"}>See all</Link>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="d-flex flex-row gap-2">
                                    <img src={contact1} alt="pict"/>
                                    <div className="d-flex flex-column">
                                        <p5>Samuel Suhi</p5>
                                        <p9>Transfer</p9>
                                    </div>
                                </div>
                                <div>
                                    <p>+Rp50.000</p>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="d-flex flex-row gap-2">
                                    <img src={contact2} alt="pict"/>
                                    <div className="d-flex flex-column">
                                        <p5>Netflix</p5>
                                        <p9>Subscription</p9>
                                    </div>
                                </div>
                                <div>
                                    <p>-Rp149.000</p>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="d-flex flex-row gap-2">
                                    <img src={contact3} alt="pict"/>
                                    <div className="d-flex flex-column">
                                        <p5>Christine Martin</p5>
                                        <p9>Transfer</p9>
                                    </div>
                                </div>
                                <div>
                                    <p>+Rp150.000</p>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between">
                                <div className="d-flex flex-row gap-2a">
                                    <img src={contact4} alt="pict"/>
                                    <div className="d-flex flex-column">
                                        <p5>Adobe Inc.</p5>
                                        <p9>Subscription</p9>
                                    </div>
                                </div>
                                <div>
                                    <p>-Rp249.000</p>
                                </div>
                            </div>
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

