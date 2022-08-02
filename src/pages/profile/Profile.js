import React from 'react'
import { Row, Col} from 'react-bootstrap'
import {Link, useNavigate} from 'react-router-dom'
import { FiArrowRight,FiEdit2} from 'react-icons/fi'

// import user1 from '../../assets/images/profile-pict.png'
import Header from '../../assets/component/Header';
import Sidebar from '../../assets/component/Sidebar';
import Footer from '../../assets/component/Footer';
import { useDispatch, useSelector } from 'react-redux'
// import { getProfile } from '../../assets/redux/asyncActions/profile'
import { logout } from '../../assets/redux/reducers/auth'
import { getProfile } from '../../assets/redux/asyncActions/profile';
// import tf1 from '../../assets/images/dsb-prof-1.png'
// import tf2 from '../../assets/images/logo.png'
// import tf3 from '../../assets/images/7.png'
// import tf4 from '../../assets/images/logo2.png'

function Profile() {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.auth.token);
    const navigate = useNavigate()
    const onLogout= () =>{
        dispatch(logout(()=>{
            navigate('/')}))
    }
    //const dispatch = useDispatch();
    //const response = useSelector((state) => state.coba?.results);
    //const fullName= response?.results?.fullname
    // const splitName = response?.results?.fullname.split(' ')
    // const firstName = splitName[0];
    // const lastName = fullName.slice(`${firstName.length}`)
    // console.log(lastName);
    const profile= useSelector((state)=> state.coba?.results)
    console.log('profile: '+profile.phonenumber);
    
    React.useEffect(()=>{
        dispatch(getProfile(token))
        //console.log(response?.results?.fullname);
    }, []);
  return (
    <div>
        <div>
            <Header/>
        </div>

        <section>
        <Row className='pad-content mw-100  d-flex justify-content-between'>
            <Sidebar/>
            <Col className='col-md-10'>
                <div>
                <div className="bg-white text-center d-flex justify-content-center flex-column gap-2 pad-content" >
                <div className="justify-content-center d-flex"><img  className='pict-style2' src={'http://localhost:3333/publik/uploads/'+profile.picture} alt="pict"/>
                </div>
                <div className='d-flex gap-2 align-items-center justify-content-center'><FiEdit2 />Edit</div>
                <h3>{profile.fullName}</h3>
                <h5 >+62 {profile.phonenumber?.slice(1)}</h5>
                <Link to={"/personalinfo"} className="btn d-flex justify-content-between bg-gray">
                    <h>Personal Information</h>
                    <FiArrowRight size={25}/>
                </Link>
                <Link to={"/changepassword"} className="btn d-flex justify-content-between bg-gray">
                    <h>Change Password</h>
                    <FiArrowRight size={25}/>
                </Link>
                <Link to={"/changepin"} className="btn d-flex justify-content-between bg-gray">
                    <h>Change PIN</h>
                    <FiArrowRight size={25}/>
                </Link>
                <div type='submit' className="btn bg-gray justify-content-start d-flex" onClick={onLogout}>
                    <h>Logout</h>
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

export default Profile