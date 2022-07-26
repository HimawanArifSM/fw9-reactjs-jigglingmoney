import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import { FiBell } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import user1 from '../../assets/images/profile-pict.png'

function Header() {
  return (
    <div>
            <Navbar className='zwallet-footer mw-100' expand='sm'>
                <Container>
                    <Link className='navbar-brand highlight fw-bold' to='/home'>Zwallet</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <div className="d-flex p-3 p-md-0 flex-column flex-sm-row gap-3 ms-auto align-items-center">
                        <Link to={"/profile"}  className='f400-bck'><img src={user1} alt="pict"/></Link>
                        <Link to={"/profile"} className='text-decoration-none'>
                            <div className="text-center f400-bck ">Robert Chandler</div>
                            <div className="text-center f400-bck text-decoration-none">+62 8139 3877 7946</div>
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