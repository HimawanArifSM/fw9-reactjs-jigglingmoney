import React from 'react'
import { AiOutlineAppstore } from 'react-icons/ai'
import { FiArrowUp, FiLogOut, FiPlus, FiUser } from 'react-icons/fi'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className='col-12 col-md-2 d-flex flex-column justify-content-between sidebar'>
        <div className="d-flex flex-column gap-5 ">
            <Link to={"/home"} className='align-items-center d-flex gap-1 f400-bck text-decoration-none'>
                <AiOutlineAppstore />
                <p5 >Dashboard</p5>
            </Link>
            <Link to={"/transfer"} className='align-items-center d-flex gap-1 f400-bck text-decoration-none'>
                <FiArrowUp />
                <p5>Transfer</p5>
            </Link>
            <Link to={"/topup"} className='align-items-center d-flex gap-1 f400-bck text-decoration-none'>
                <FiPlus />
                <p5>Top Up</p5>
            </Link>
            <Link to={"/profile"} className='align-items-center d-flex gap-1 f400-bck text-decoration-none'>
                <FiUser />
                <p5>Profile</p5>
            </Link>
        </div>
        <div>
            <Link to={"/login"} className='align-items-center d-flex gap-1 f400-bck text-decoration-none'>
                <FiLogOut />
                <p5>Logout</p5>
            </Link>
        </div>
    </div>
  )
}

export default Sidebar