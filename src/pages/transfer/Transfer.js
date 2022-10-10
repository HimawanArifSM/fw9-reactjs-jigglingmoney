import React from 'react'
import {Row, Col, Form} from 'react-bootstrap'
import {Link, Navigate, useNavigate} from 'react-router-dom'
import {FiSearch} from 'react-icons/fi'
import tf1 from '../../assets/images/photo-samuel-shusi.png'
import Header from '../../assets/component/Header';
import Sidebar from '../../assets/component/Sidebar';
import Footer from '../../assets/component/Footer';
import {useDispatch, useSelector} from 'react-redux';
import { getimage, getname, getphone, getreceiver } from '../../assets/redux/reducers/transaction'
import {getAllProfile} from '../../assets/redux/asyncActions/transaction'

import qs from 'qs';

function Searchtrans(props){
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const PassData = () => {
        // console.log(item);
        dispatch(getname(props.fullname));
        dispatch(getimage(props.picture));
        dispatch(getphone(props.phonenumber));
        dispatch(getreceiver(props.iduser));
        navigate('/Transferinput');
    };
    return(
        <btn onClick={PassData} className="d-flex flex-column justify-content-between text-decoration-none f400-bck gap-3">
            <div className="d-flex flex-row gap-3 justify-content-start bg-white ">
                <img className='pict-style3' src={props.picture} alt="pict"/>
                <div>
                    <p>{props.fullname}</p>
                    <p5>{props.phonenumber}</p5>
                </div>
            </div>
        </btn>
    )
} 

function Transfer() {
    const allprofile = useSelector(state => state.transaction?.getAllProfile);
    const dispatch = useDispatch();
    // console.log(allprofile);
    // const totalData = useSelector(state => state.transactions?.totalData);
    React.useEffect(() => {
      dispatch(getAllProfile());
    }, [dispatch]);
  return (
    <div>
        <div>
            <Header/>
        </div>
        <section>
        <Row className='pad-content mw-100'>
            <Sidebar/>
            <Col className='col-md-10'>
                <div className="flex-column d-flex gap-5 bg-white f400-bck">
                    <p className="font-700">Search Receiver</p>
                    <Form>
                        <Form.Group className="mb-3 d-flex align-items-center fw-input">
                            <FiSearch />
                            <Form.Control name="search"  type="search" placeholder="Search receiver here"  className="no-border2"/>  {/** INI PENTING */}
                            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                        </Form.Group>
                    </Form>
                        {allprofile&&allprofile.map(o=>{
                            return(
                                <Searchtrans iduser={o.iduser} picture={o.picture} fullname={o.fullname} phonenumber={o.phonenumber}/>
                            )
                        })}
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

export default Transfer

