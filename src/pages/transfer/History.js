import React from 'react'
import { Row, Col} from 'react-bootstrap'
import Header from '../../assets/component/Header';
import Sidebar from '../../assets/component/Sidebar';
import Footer from '../../assets/component/Footer';
import { useDispatch, useSelector } from 'react-redux'
import { getHistory } from '../../assets/redux/asyncActions/history'

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
    console.log(response.results);
    const token = useSelector((state)=> state.auth.token)
    React.useEffect(()=>{
        dispatch(getHistory(token))
    }, []);
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
        </Row>
        </section>
        <footer>
               <Footer/>
        </footer>
    </div>
  )
}

export default History