import React from 'react'
import { Row, Col, Form, Button} from 'react-bootstrap'
import { useNavigate} from 'react-router-dom'
import { FiEdit2} from 'react-icons/fi'
import tf1 from '../../assets/images/photo-samuel-shusi.png'
import Header from '../../assets/component/Header';
import Sidebar from '../../assets/component/Sidebar';
import Footer from '../../assets/component/Footer';
import { useDispatch } from 'react-redux'

import {notes, amount, getamount} from '../../assets/redux/reducers/transaction'
import { Formik } from 'formik';
import * as Yup from 'yup'

const loginschema = Yup.object().shape({
  amount: Yup.number().min(10000).max(5000000).required('Required')
})

function AuthForm({errors, handleSubmit, handleChange}){
    
const dispatch = useDispatch()
  return(
    <Form noValidate onSubmit={handleSubmit}>
        <div className="d-flex flex-column align-items-center" >
                <Form.Group className="mb-3 d-flex flex-column align-items-center justify-content-center no-border "  >
                    <Form.Control name="amount" onChange={handleChange} isInvalid={!!errors.amount} type="text" placeholder='0.00'  className="fw-input no-border text-align-center width-auto align-items-center place-holder-center"/>  {/** INI PENTING */}
                    <Form.Control.Feedback className='width-auto align-items-center text-align-center' type="invalid">{errors.amount}</Form.Control.Feedback>
                </Form.Group>
            
            <p>Rp120.000 Available</p>
            
                <Form.Group className="mb-3 d-flex align-items-center wd200 input-group-text input-no-border">
                    <FiEdit2 />
                    <Form.Control name="text"  type="text" placeholder='Add notes' onChange={(e)=>{dispatch(notes(e.target.value))}} className=" no-border2"/>  {/** INI PENTING */}
                    <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                </Form.Group>
        </div>
        <div class=" d-flex justify-content-end">
            <Button type='submit' class="btn btn-primary blue-button">Continue</Button>
        </div>
    </Form>
  )
}

function Transferinput() {
    const navigate = useNavigate();
    
    const dispatch = useDispatch()
    const onLoginRequest = (val) => {
        console.log(val.amount);
      if(val.amount === 0){
        window.alert('Login failed! Lol')
      }else{
        localStorage.setItem('amount', 'jumlah uang')
        dispatch(getamount(val.amount))
        navigate("/transferconf");

      }
    }
  return (
    <div>
        <div>
            <Header/>
        </div>
        <section>
        <Row className='pad-content mw-100'>
            <Sidebar/>
            <Col className='col-10'>
                <div>
                <div class=" d-flex flex-column gap-5 bg-white">
                <p class="font-700">Transfer Money</p>
                <div class="d-flex flex-row justify-content-between bg-white-shadow">
                    <div class="d-flex flex-row justify-content-between gap-3">
                        <img src={tf1} alt="pict"/>
                        <div>
                            <p>Samuel Suhi</p>
                            <p5>+62 813-8492-9994</p5>
                        </div>
                    </div>
                </div>
                <div class="d-flex flex-column gap-5">
                    <div>
                        <p>Type the amount you want to transfer and then
                            press continue to the next steps.</p>
                    </div>
                    <Formik 
                    onSubmit={onLoginRequest}
                    initialValues={{amount: ''}} validationSchema={loginschema}>
                    {(props)=><AuthForm {...props}/>}
                    </Formik>
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

export default Transferinput