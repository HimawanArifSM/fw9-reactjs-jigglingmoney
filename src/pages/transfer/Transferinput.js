import React from 'react'
import { Row, Col, Form, Button, Alert} from 'react-bootstrap'
import { useNavigate} from 'react-router-dom'
import { FiEdit2} from 'react-icons/fi'
import tf1 from '../../assets/images/photo-samuel-shusi.png'
import Header from '../../assets/component/Header';
import Sidebar from '../../assets/component/Sidebar';
import Footer from '../../assets/component/Footer';
import { useDispatch } from 'react-redux'
import { useSelector } from "react-redux";
import {getamount, getdate, getimage, getname, getnotes, getphone, getreceiver} from '../../assets/redux/reducers/transaction'
import { Formik } from 'formik';
import * as Yup from 'yup'

const loginschema = Yup.object().shape({
  amount: Yup.number().min(10000).max(5000000).required('Required'),
  notes: Yup.string().max(255).required('Required').optional()
})

function AuthForm({errors, handleSubmit, handleChange}){
  const response = useSelector(state => state.profile?.results);
// const dispatch = useDispatch()
  return(
    <Form noValidate onSubmit={handleSubmit}>
        <div className="d-flex flex-column align-items-center" >
                <Form.Group className="mb-3 d-flex flex-column align-items-center justify-content-center no-border "  >
                    <Form.Control name="amount" onChange={handleChange} isInvalid={!!errors.amount} type="text" placeholder='0.00'  className="fw-input no-border text-align-center width-auto align-items-center place-holder-center"/>  {/** INI PENTING */}
                    <Form.Control.Feedback className='width-auto align-items-center text-align-center' type="invalid">{errors.amount}</Form.Control.Feedback>
                </Form.Group>
            
            <p>Rp{response.balance} Available</p>
            
                <Form.Group className="mb-3 d-flex align-items-center wd200 input-group-text input-no-border">
                    <FiEdit2 />
                    <Form.Control name="notes" isInvalid={!!errors.notes} type="text" placeholder='Add notes' onChange={handleChange} className=" no-border2"/>  {/** INI PENTING */}
                    <Form.Control.Feedback type="invalid">{errors.notes}</Form.Control.Feedback>
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
  const dispatch = useDispatch();
  const response = useSelector(state => state.profile?.results);
  const name = useSelector(state => state.transaction.name)
  const image = useSelector(state => state.transaction.image)
  const phone = useSelector(state => state.transaction.phone)
  const phonenumber = (phone.slice(1))
  const receiver = useSelector(state => state.transaction.receiver)
  const date = new Date().toISOString()
  const onSubmit = (val) => {
    if (parseInt(val.amount) <= parseInt(response.balance)){
      dispatch(getamount(val.amount));
      dispatch(getnotes(val.notes));
      dispatch(getname(name));
      dispatch(getimage(image));
      dispatch(getphone(phone));
      dispatch(getreceiver(receiver));
      dispatch(getdate(date));
      navigate('/Transferconf')
    }
    else {
      alert('insuficent fund');
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
                        <img className='pict-style3' src={image} alt="pict"/>
                        <div>
                            <p>{name}</p>
                            <p5>+62 {phonenumber}</p5>
                        </div>
                    </div>
                </div>
                <div class="d-flex flex-column gap-5">
                    <div>
                        <p>Type the amount you want to transfer and then
                            press continue to the next steps.</p>
                    </div>
                    <Formik 
                    onSubmit={onSubmit}
                    initialValues={{amount: '', notes: ''}} validationSchema={loginschema}>
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