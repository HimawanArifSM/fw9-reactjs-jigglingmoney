import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { FiBell } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
//import user1 from '../../assets/images/profile-pict.png'
import { getProfile } from '../redux/asyncActions/profile'

function Header() {
    const dispatch = useDispatch()
    const token = useSelector(state => state.auth.token);
    const profile= useSelector(state=> state.profile?.results)
    const phone = (profile?.phonenumber?.slice(1))

    React.useEffect(()=>{
        dispatch(getProfile(token))
    }, [dispatch, token])
    
  return (
    <div>
        <Navbar className='zwallet-footer mw-100' expand='sm'>
            <Container>
                <Link className='navbar-brand highlight fw-bold' to='/home'>JWallet</Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <div className="d-flex p-3 p-md-0 flex-column flex-sm-row gap-3 ms-auto align-items-center">
                    <Link to={"/profile"}  className='f400-bck'><img className='pict-style' src={profile?.picture} alt="pict"/></Link>
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