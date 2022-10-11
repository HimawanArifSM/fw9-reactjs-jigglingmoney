import { Button} from 'react-bootstrap';
import { useNavigate} from 'react-router-dom'
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import {Form} from 'react-bootstrap'

import { Formik } from 'formik';
import * as Yup from 'yup'
import { useSelector, useDispatch } from "react-redux";
import { transfer } from '../../assets/redux/asyncActions/transaction';
import { getbalanceleft, resetmsg } from '../../assets/redux/reducers/transaction';

const loginschema = Yup.object().shape({
  a: Yup.number().required('Required'),
  b: Yup.number().required('Required'),
  c: Yup.number().required('Required'),
  d: Yup.number().required('Required'),
  e: Yup.number().required('Required'),
  f: Yup.number().required('Required'),
})

function AuthForm({errors, handleSubmit, handleChange}){
  return(
    <form onSubmit={handleSubmit}>
      <Modal.Body className='no-border2'>
      <div className='no-border2 d-flex justify-content-center flex-row pin-input-wrapper gap-3'> {/** INI PENTING */}
        <Form.Group className="mb-3 d-flex align-items-center pin-inpt">
            <Form.Control onChange={handleChange} isInvalid={!!errors.a} name='a' maxlength="1" max="9" min="0"  className="pin-inp pin"/>  {/** INI PENTING */}
            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3 d-flex align-items-center pin-inpt">
            <Form.Control onChange={handleChange} isInvalid={!!errors.b} name='b' maxlength="1" max="9" min="0"  className="pin-inp pin"/>  {/** INI PENTING */}
            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3 d-flex align-items-center pin-inpt ">
            <Form.Control onChange={handleChange} isInvalid={!!errors.c} name='c' maxlength="1" max="9" min="0"  className="pin-inp pin"/>  {/** INI PENTING */}
            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group className="mb-3 d-flex align-items-center pin-inpt ">
            <Form.Control onChange={handleChange} isInvalid={!!errors.d} name='d' maxlength="1" max="9" min="0"  className="pin-inp pin"/>  {/** INI PENTING */}
            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3 d-flex align-items-center  pin-inpt">
            <Form.Control onChange={handleChange} isInvalid={!!errors.e} name='e' maxlength="1" max="9" min="0"  className="pin-inp pin"/>  {/** INI PENTING */}
            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3 d-flex align-items-center pin-inpt ">
            <Form.Control onChange={handleChange} isInvalid={!!errors.f} name='f' maxlength="1" max="9" min="0"  className="pin-inp pin"/>  {/** INI PENTING */}
            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
        </Form.Group>
      </div>  {/** INI PENTING */}
      </Modal.Body>
      <Modal.Footer className='no-border2'>
        <Button type='submit' className='btn btn-danger'>Cancel</Button>
        <Button type='submit' className='blue-button'>Continue</Button>
      </Modal.Footer>
    </form>
  )
}

function MyVerticallyCenteredModal(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector(state => state.auth.token);
  const notes = useSelector((state)=>state.transaction.notes)
  const amount = useSelector((state)=>state.transaction.amount)
  const time = useSelector((state)=>state.transaction.date)
  const recipient_id = useSelector(state => state.transaction.receiver)
  const successmsg = useSelector(state => state.transaction.successmsg)
  const type_id = 18;
  const balanceLefted = props.balanceLeft
  // console.log(balanceLefted.balanceLeft);
  const onSubmit = (val) => {
    const pin = val.a + val.b + val.c + val.d + val.e + val.e;
    const request = {amount, notes, recipient_id, time, type_id, pin};
    dispatch(transfer({token, request}))
    dispatch(getbalanceleft(balanceLefted.balanceLeft))
    dispatch(resetmsg())
    successmsg !== "" ? navigate('/Success') : navigate('/Failed')
  }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className='no-border2' closeButton>
        <Modal.Title  id="contained-modal-title-vcenter">
          Insert your pin
        </Modal.Title>
      </Modal.Header>
      <Formik onSubmit={onSubmit} initialValues={{a: '', b: '', c: '', d: '', e: '', f: '', }} validationSchema={loginschema}>
      {(props)=><AuthForm {...props}/>}
      </Formik>
    </Modal>
  );
}

function Modals({balanceLeft}) {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
      Continue
      </Button>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        balanceLeft={balanceLeft}
      />
    </>
  );
}

export default Modals