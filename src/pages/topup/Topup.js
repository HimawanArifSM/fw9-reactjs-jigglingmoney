import React, { useState } from 'react'
import { Row, Col, Button, Modal, Form} from 'react-bootstrap'
import Header from '../../assets/component/Header';
import Sidebar from '../../assets/component/Sidebar';
import Footer from '../../assets/component/Footer';
import {FiMail, FiPlus} from 'react-icons/fi'
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { topUp } from '../../assets/redux/asyncActions/transaction';
import { resetmsg } from '../../assets/redux/reducers/transaction';

const ValidationTopUp = Yup.object().shape({
    amount: Yup.number().min(10000).max(1000000).required('Required'),
  })

function TopUpForm(props) {
return(
    <Form noValidate onSubmit={props.handleSubmit} className='d-flex flex-column gap-4'> {/** INI PENTING */}
        <Form.Group className="mb-3  input-group">
            <div className='input-group-text input-no-border'>
                <span>Rp </span>
            </div>
            <Form.Control name="amount" onChange={props.handleChange} isInvalid={!!props.errors.amount} type="numeric" placeholder="TopUp Amount"  className="fw-input"/>  {/** INI PENTING */}
            <Form.Control.Feedback type='invalid'>{props.errors.amount}</Form.Control.Feedback>
        </Form.Group>
        <div class="d-grid">
            <Button type='submit' onClick={()=> props.handleClose()} className="btn btn-primary">Confirm</Button>
        </div>
    </Form>
)
}

function Topup() {
    const dispatch = useDispatch();
    const [show, setShow] = useState(false);
    const handleClose = () => {setShow(false)};
    const handleShow = () => setShow(true);
    const token = useSelector(state => state.auth.token);
    const successmsg = useSelector(state => state.transaction.successmsg)
    const onSubmit = (val) => {
        const amount = val.amount
        const request = {amount};
        // console.log(request);
        // console.log(successmsg);
        dispatch(topUp({token, request}))
        // dispatch(resetmsg())
    }
    
    React.useEffect( () => {
        if(successmsg){
            dispatch(resetmsg())
        }
    }, [dispatch, successmsg]);
    
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
                    <div className="d-flex flex-column gap-4 bg-white">
                        <h3>How To Top Up</h3>
                        <div className="bg-white-shadow pad-sec-2">
                            <span  className='f400-main'>1. </span>Go to the nearest ATM or you can use E-Banking.
                        </div>
                        <div className="bg-white-shadow pad-sec-2">
                            <span className='f400-main'>2. </span>   Type your security number on the ATM or E-Banking.
                        </div>
                        <div className="bg-white-shadow pad-sec-2">
                            <span className='f400-main'>3. </span>   Select “Transfer” in the menu
                        </div>
                        <div className="bg-white-shadow pad-sec-2">
                            <span className='f400-main'>4. </span>   Type the virtual account number that we provide you at the top.
                        </div>
                        <div className="bg-white-shadow pad-sec-2">
                            <span className='f400-main'>5. </span>   Type the amount of the money you want to top up.
                        </div>
                        <div className="bg-white-shadow pad-sec-2">
                            <span className='f400-main'>6. </span>   Read the summary details.
                        </div>
                        <div className="bg-white-shadow pad-sec-2">
                            <span className='f400-main'>7. </span>   Press transfer / top up.
                        </div>
                        <div className="bg-white-shadow pad-sec-2">
                            <span className='f400-main'>8. </span>   You can see your money in JMoney within 3 hours.
                        </div>
                        <Button onClick={handleShow} className="d-flex align-items-center justify-content-center">
                            <FiPlus />
                            <span>TopUp</span>
                        </Button>
                    </div>
                </div>
            </Col>
        </Row>
        </section>
        <footer>
                <Footer/>
        </footer>
        <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>TopUp</Modal.Title>
        </Modal.Header>
        <Modal.Body className='d-flex gap-3 flex-col'>
            <span>Insert TopUp Amount You Want to Add</span>
            <Formik onSubmit={onSubmit} initialValues={{amount: 0}}  validationSchema={ValidationTopUp}>
            {(props)=><TopUpForm {...props} handleClose={handleClose}/>}
            </Formik>
        </Modal.Body>
        {/* <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer> */}
        </Modal>
    </div>
  )
}

export default Topup