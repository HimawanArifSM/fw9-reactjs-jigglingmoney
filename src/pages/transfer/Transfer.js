import React from 'react'
import {Row, Col, Form} from 'react-bootstrap'
import {Link, Navigate} from 'react-router-dom'
import {FiSearch} from 'react-icons/fi'
import tf1 from '../../assets/images/photo-samuel-shusi.png'
import Header from '../../assets/component/Header';
import Sidebar from '../../assets/component/Sidebar';
import Footer from '../../assets/component/Footer';
import {useDispatch, useSelector} from 'react-redux';
import { getimage, getname, getphone, getreceiver } from '../../assets/redux/reducers/transaction'
import {getAllProfile} from '../../assets/redux/asyncActions/transaction'

function Searchtrans(props){
    return(
        <Link to={"/transferinput"} className="d-flex flex-column justify-content-between text-decoration-none f400-bck gap-3">
            <div className="d-flex flex-row gap-3 justify-content-start bg-white ">
                <img  src={tf1} alt="pict"/>
                <div>
                    <p>{props.name}</p>
                    <p5>{props.phonenumber}</p5>
                </div>
            </div>
        </Link>
    )
} 

function Transfer() {
    const allprofile = useSelector(state => state.transactions.results);
    const dispatch = useDispatch();
    console.log(allprofile);
    const totalData = useSelector(state => state.transactions.totalData);
    const PassData = item => {
      dispatch(getname(item.fullname));
      dispatch(getimage(item.picture));
      dispatch(getphone(item.phonenumber));
      dispatch(getreceiver(item.iduser));
      Navigate('/Transferinput');
    };
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
                        {allprofile.results&&allprofile.results.map(o=>{
                            return(
                                <Searchtrans pict={o.iduser} name={o.fullname} phonenumber={o.phonenumber}/>
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

