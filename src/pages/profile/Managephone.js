import React from 'react'
import { Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {FiClipboard} from 'react-icons/fi'
import Header from '../../assets/component/Header';
import Sidebar from '../../assets/component/Sidebar';
import Footer from '../../assets/component/Footer';
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from '../../assets/redux/asyncActions/profile';

// import tf1 from '../../assets/images/dsb-prof-1.png'
// import tf2 from '../../assets/images/logo.png'
// import tf3 from '../../assets/images/7.png'
// import tf4 from '../../assets/images/logo2.png'

function Managephone() {
    //const phoneNumber = useSelector((state)=>state.editValue.phoneNumber)
    const dispatch = useDispatch();
    const response = useSelector((state) => state.profile?.results);
    const token = useSelector((state) => state.auth.token);
    React.useEffect(()=>{
        dispatch(getProfile(token))
    }, [dispatch, token]);
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
                <h3>Manage Phone Number</h3>
                <p>You can only delete the phone number and then you must add another phone number.</p>
                <div class="d-flex justify-content-between bg-white-shadow align-items-center margin-btm-ex" >
                    <div>
                        <p>Primary</p>
                        <h3>+62 {response?.phonenumber.slice(1)}</h3>
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