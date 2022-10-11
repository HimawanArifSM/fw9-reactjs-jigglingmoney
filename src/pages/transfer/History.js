import React from 'react'
import { Row, Col, Button} from 'react-bootstrap'
import Header from '../../assets/component/Header';
import Sidebar from '../../assets/component/Sidebar';
import Footer from '../../assets/component/Footer';
import { useDispatch, useSelector } from 'react-redux'
import { getHistory } from '../../assets/redux/asyncActions/history'
import { FiArrowDown, FiArrowUp } from 'react-icons/fi';

function CompHistory(props){
    //const response = useSelector((state) => state.ressHistory?.results);
    //console.log(response.results?.picture);
return(
    <div class="d-flex flex-row justify-content-between">
        <div class="d-flex flex-row justify-content-between gap-3">
            <img className='pict-style3' src={props.pict} alt="pict"/>
            <div>
                <p>{props.name}</p>
                <p>{props.type}</p>
            </div>
        </div>
    <div>
        <p>Rp{props.amount}</p>
    </div>
</div>
)
}




function History() {
    //const [data, setData]=React.useState({})
    const dispatch = useDispatch();
    const response = useSelector(state => state.ressHistory?.results);
    const pagesInfo = useSelector(state => state.ressHistory.pageInfo)
    const msg = useSelector(state => state.ressHistory.msg)
    console.log(response.results);
    const [lim, setLim] = React.useState(5)
    const [pages, setPages] = React.useState(1)
    const [seacrhed, setSearched] = React.useState('')
    const [sorted, setSorted] = React.useState('DESC')
    const [sortedBy, setSortedBy] = React.useState('id')
    const [seacrhedBy, setSearchedBy] = React.useState('fullname')
    const token = useSelector((state)=> state.auth.token)
    React.useEffect(()=>{
        dispatch(getHistory({token, lim, pages, seacrhed, sorted, sortedBy, seacrhedBy}))
    }, [dispatch, token, lim, pages, seacrhed, sorted, sortedBy, seacrhedBy]);
  return (
    <div>
        <div>
            <Header/>
        </div>

        <section>
        <Row className='pad-content mw-100'>
            <Sidebar/>
            <Col className='col-md-10'>
                <Row>
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
                <div>
                    <div class="d-flex flex-column gap-4 bg-white">
                        <p class="font-700">Transaction History</p>
                        {response&&response.map(o=>{
                            return(
                                <CompHistory pict={o.picture} name={o.recipient} type={o.type} amount={o.amount}/>
                            )
                        })}
                    </div>
                </div>
            </Col>
            <Col className='d-flex flex-row gap-3 align-items-center'>
                    <Button onClick={()=>setPages(pagesInfo?.prevpage)} disabled={pagesInfo?.currentpage<2 || response?.length < 1 || msg === 'there is no data' }>Prev</Button>
                    <div>{pagesInfo?.currentpage}</div>
                    <Button onClick={()=>setPages(pagesInfo?.nextPage)} disabled={pagesInfo?.totalpage === pagesInfo?.currentpage}>Next</Button>
                    <select onChange={(e)=>setLim(e.target.value)}>
                        <option value={5} selected>5</option>
                        <option value={10} >10</option>
                    </select>
                </Col>
        </Row>
        </section>
        <footer>
               <Footer/>
        </footer>
    </div>
  )
}

export default History