import React from 'react'
import {Navbar, Container, Row, Col, Form} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {FiArrowUp,FiPlus,FiBell, FiUser, FiLogOut,FiSearch} from 'react-icons/fi'
import { AiOutlineAppstore } from "react-icons/ai";

import user1 from '../../assets/images/profile-pict.png'
import tf1 from '../../assets/images/photo-samuel-shusi.png'
// import tf2 from '../../assets/images/photo-momo-taro.png'
// import tf3 from '../../assets/images/photo-jessica-keen.png'
// import tf4 from '../../assets/images/photo-michael-le.png'

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
    const [data, setData]=React.useState({})
    React.useEffect(()=>{
        setData({
            "success": true,
            "message": "list all profiles",
            "pageInfo": {
                "totalData": 7,
                "totalpage": 2,
                "currentpage": 1,
                "nextPage": 2,
                "prevpage": null
            },
            "results": [
                {
                    "id": 39,
                    "iduser": 14,
                    "fullname": "coba123",
                    "balance": "0",
                    "picture": "1657201194123.webp",
                    "phonenumber": "081233336666"
                },
                {
                    "id": 40,
                    "iduser": 13,
                    "fullname": "joko nyoba upload",
                    "balance": "200",
                    "picture": "1657201260025.webp",
                    "phonenumber": "081233336633"
                },
                {
                    "id": 42,
                    "iduser": 26,
                    "fullname": "regis3",
                    "balance": "4900",
                    "picture": null,
                    "phonenumber": "081299998888"
                },
                {
                    "id": 43,
                    "iduser": 27,
                    "fullname": "joni",
                    "balance": "1000",
                    "picture": null,
                    "phonenumber": "081122223333"
                },
                {
                    "id": 45,
                    "iduser": 37,
                    "fullname": "regis 5 updated",
                    "balance": "1000",
                    "picture": "1657598654821.webp",
                    "phonenumber": "081122224444"
                }
            ]
        })
    },[])

    console.log(data.results)
    console.log(data)

  return (
    <div>
        <div>
            <Navbar className='zwallet-footer mw-100' expand='sm'>
                <Container>
                    <Link className='navbar-brand highlight fw-bold' to='/home'>Zwallet</Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <div className="d-flex p-3 p-md-0 flex-column flex-sm-row gap-3 ms-auto align-items-center">
                        <a className='f400-bck' href="/profile/profilev2.html"><img src={user1} alt="pict"/></a>
                        <a className='text-decoration-none' href="/profile/profilev2.html" >
                            <div className="text-center f400-bck ">Robert Chandler</div>
                            <div className="text-center f400-bck text-decoration-none">+62 8139 3877 7946</div>
                        </a>
                        <div>
                            <FiBell size={30}/>
                        </div>
                        </div>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>

        <section>
        <Row className='pad-content mw-100 gap-2 d-flex justify-content-between'>
            <Col className='col-12 col-md-2 d-flex flex-column justify-content-between sidebar bg-white'>
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
            </Col>
            <Col className='col-9'>
                <div>
                <div className="row d-flex flex-col gap-5 bg-white f400-bck">
                <p className="font-700">Search Receiver</p>
                <Form>
                    <Form.Group className="mb-3 d-flex align-items-center">
                        <FiSearch />
                        <Form.Control name="search"  type="search" placeholder="Search receiver here"  className="fw-input"/>  {/** INI PENTING */}
                        <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                    </Form.Group>
                </Form>
                
                    {/* <div className="d-flex flex-row justify-content-between gap-3">
                        <img  src={tf1} alt="pict"/>
                        <div>
                            <p>Samuel Suhi</p>
                            <p5>+62 813-8492-9994</p5>
                        </div>
                    </div> */}
                    {data.results&&data.results.map(o=>{
                        return(
                            <Searchtrans pict={o.iduser} name={o.fullname} phonenumber={o.phonenumber}/>
                        )
                    })}

                
                {/* <div className="d-flex flex-row justify-content-between bg-white-shadow">
                    <div className="d-flex flex-row justify-content-between gap-3">
                        <img src={tf2} alt="pict"/>
                        <div>
                            <p>Momo Taro</p>
                            <p5>+62 812-4343-6731</p5>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-between bg-white-shadow">
                    <div className="d-flex flex-row justify-content-between gap-3">
                        <img src={tf3} alt="pict"/>
                        <div>
                            <p>Jessica Keen</p>
                            <p5>+62 811-3452-5252</p5>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-row justify-content-between bg-white-shadow">
                    <div className="d-flex flex-row justify-content-between gap-3">
                        <img src={tf4} alt="pict"/>
                        <div>
                            <p>Michael Le</p>
                            <p5>+62 810-4224-4613</p5>
                        </div>
                    </div>
                </div> */}
                </div>
                </div>
            </Col>
        </Row>
        </section>
        <footer>
                <div className=" d-flex flex-row justify-content-between zwallet-footer mw-100">
                    <div><p5>2020 Zwallet. All right reserved.</p5>
                    </div>
                    <div className='d-flex flex-row gap-3'>
                        <p5>+62 5637 8882 9901</p5>
                        <p5>contact@zwallet.com</p5>
                    </div>
                </div> 
        </footer>
    </div>
  )
}

export default Transfer

