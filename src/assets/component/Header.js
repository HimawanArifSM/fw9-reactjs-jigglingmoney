import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { FiBell } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
//import user1 from '../../assets/images/profile-pict.png'
import { getProfile } from '../redux/asyncActions/profile'

function Header() {
    // const dispatch = useDispatch()
    // const data = useSelector((state) => state.coba.results)
    // console.log(data);
    // const token = useSelector((state) => state.auth.token);
    // const phone = (data?.results?.phonenumber?.slice(1))

    // React.useEffect(()=>{
    //     dispatch(getProfile(token))
    //     // console.log(data?.results?.fullname);
    // }, [])
    
    const profile= useSelector((state)=> state.coba?.results)
    const phone = (profile?.phonenumber?.slice(1))
  return (
    <div>
        <Navbar className='zwallet-footer mw-100' expand='sm'>
            <Container>
                <Link className='navbar-brand highlight fw-bold' to='/home'>Zwallet</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <div className="d-flex p-3 p-md-0 flex-column flex-sm-row gap-3 ms-auto align-items-center">
                    <Link to={"/profile"}  className='f400-bck'><img className=' pict-style' src={'http://localhost:3333/publik/uploads/'+profile?.picture} alt="pict"/></Link>
                    <Link to={"/profile"} className='text-decoration-none'>
                        <div className="text-center f400-bck ">{profile?.fullname}</div>
                        <div className="text-center f400-bck text-decoration-none">+62 {phone}</div>
                    </Link>
                    <div>
                        <FiBell size={30}/>
                    </div>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default Header