import React from 'react'
import {Row, Col, Button} from 'react-bootstrap'
import { useNavigate} from 'react-router-dom'
import {FiArrowDown, FiArrowUp} from 'react-icons/fi'
import Header from '../../assets/component/Header';
import Sidebar from '../../assets/component/Sidebar';
import Footer from '../../assets/component/Footer';
import {useDispatch, useSelector} from 'react-redux';
import { getimage, getname, getphone, getreceiver } from '../../assets/redux/reducers/transaction'
import {getAllProfile} from '../../assets/redux/asyncActions/transaction'

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
                    <p>{props.phonenumber}</p>
                </div>
            </div>
        </btn>
    )
} 

function Transfer() {
    const allprofile = useSelector(state => state.transaction?.getAllProfile);
    const pagesInfo = useSelector(state => state.transaction.pageInfo)
    // console.log(pagesInfo);
    const msg = useSelector(state => state.transaction.msg)
    console.log(msg);
    const dispatch = useDispatch();
    const [lim, setLim] = React.useState(5)
    const [pages, setPages] = React.useState(1)
    const [seacrhed, setSearched] = React.useState('')
    const [sorted, setSorted] = React.useState('DESC')
    const [sortedBy, setSortedBy] = React.useState('id')
    const [seacrhedBy, setSearchedBy] = React.useState('fullname')
    React.useEffect(() => {
      dispatch(getAllProfile({lim, pages, seacrhed, sorted, sortedBy, seacrhedBy}));
    }, [dispatch, lim, pages, seacrhed, sorted, sortedBy, seacrhedBy]);
  return (
    <div>
        <div>
            <Header/>
        </div>
        <section>
        <Row className='pad-content mw-100'>
            <Sidebar/>
            {/* <Col className='flex gap-6'>
                    <input name="keyword" onChange={(e)=>{setSearched(e.target.value); setPages(1)}} placeholder="search" className='border-2 p-2 rounded-full placeholder:text-center text-center' />
                    <select onChange={(e)=>setSearchedBy(e.target.value)}>
                        <option value="fullname" >fullname</option>
                        <option value="email" >email</option>
                    </select>
                </Col> */}
            <Col className='col-md-10'>
                <div className="flex-column d-flex gap-5 bg-white f400-bck">
                    <p className="font-700">Search Receiver</p>
                    {/* <Form>
                        <Form.Group className="mb-3 d-flex align-items-center fw-input">
                            <FiSearch />
                            <Form.Control name="search"  type="search" placeholder="Search receiver here"  className="no-border2"/>
                            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                        </Form.Group>
                    </Form> */}
                    <Row>
                        <Col className='d-flex gap-3'>
                        <input name="keyword" onChange={(e)=>{setSearched(e.target.value); setPages(1)}} placeholder="search" className='border-2 p-2 rounded-full placeholder:text-center text-center' />
                        <select onChange={(e)=>setSearchedBy(e.target.value)}>
                            <option value="fullname" >fullname</option>
                            <option value="email" >email</option>
                        </select>
                        </Col>
                        <Col className='flex flex-row gap-10'>
                            <Button onClick={()=>setSorted("ASC")}><FiArrowUp/></Button>
                            <select onChange={(e)=>setSortedBy(e.target.value)}>
                                <option value="id" selected>id</option>
                                <option value="fullname" >fullname</option>
                                <option value="email" >email</option>
                            </select>
                            <Button onClick={()=>setSorted("DESC")}><FiArrowDown/></Button>
                        </Col>
                    </Row>
                        {allprofile&&allprofile.map(o=>{
                            return(
                                <Searchtrans iduser={o.iduser} picture={o.picture} fullname={o.fullname} phonenumber={o.phonenumber}/>
                            )
                        })}
                        {msg === 'Request failed with status code 404' && <span>No data found</span>}
                </div>
                <Row>
                <Col className='d-flex flex-row gap-3 align-items-center'>
                    <Button onClick={()=>setPages(pagesInfo?.prevpage)} disabled={pagesInfo?.currentpage<2 || allprofile?.length < 1 || msg === 'there is no data' }>Prev</Button>
                    <div>{pagesInfo?.currentpage}</div>
                    <Button onClick={()=>setPages(pagesInfo?.nextPage)} disabled={pagesInfo?.totalpage === pagesInfo?.currentpage}>Next</Button>
                    <select onChange={(e)=>setLim(e.target.value)}>
                        <option value={5} selected>5</option>
                        <option value={10} >10</option>
                    </select>
                </Col>
                </Row>
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

