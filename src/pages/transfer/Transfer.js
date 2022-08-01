import React from 'react'
import {Row, Col, Form} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {FiSearch} from 'react-icons/fi'
import tf1 from '../../assets/images/photo-samuel-shusi.png'
import Header from '../../assets/component/Header';
import Sidebar from '../../assets/component/Sidebar';
import Footer from '../../assets/component/Footer';

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
            <Header/>
        </div>
        <section>
        <Row className='pad-content mw-100'>
            <Sidebar/>
            <Col className='col-md-10'>
                <div className="flex-column d-flex gap-5 bg-white f400-bck">
                    <p className="font-700">Search Receiver</p>
                    <Form>
                        <Form.Group className="mb-3 d-flex align-items-center fw-input">
                            <FiSearch />
                            <Form.Control name="search"  type="search" placeholder="Search receiver here"  className="no-border2"/>  {/** INI PENTING */}
                            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                        </Form.Group>
                    </Form>
                        {data.results&&data.results.map(o=>{
                            return(
                                <Searchtrans pict={o.iduser} name={o.fullname} phonenumber={o.phonenumber}/>
                            )
                        })}
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

export default Transfer

