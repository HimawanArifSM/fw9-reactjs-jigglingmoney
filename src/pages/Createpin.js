import React from 'react'
import { useNavigate} from 'react-router-dom'
import { Button, Form } from 'react-bootstrap';

import pictLogin from '../assets/images/Group-login-phone.png';
import { Formik } from 'formik';
import * as Yup from 'yup'

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
    <Form onSubmit={handleSubmit} className='d-flex flex-column gap-3'> {/** INI PENTING */}
        <div className='d-flex justify-content-center flex-row pin-input-wrapper gap-3'>
        <Form.Group className="mb-3 d-flex align-items-center pin-inpt">
            <Form.Control onChange={handleChange} isInvalid={!!errors.a} name='a' maxlength="1" max="9" min="0"  className="pin-inp"/>  {/** INI PENTING */}
            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3 d-flex align-items-center pin-inpt">
            <Form.Control onChange={handleChange} isInvalid={!!errors.b} name='b' maxlength="1" max="9" min="0"  className="pin-inp"/>  {/** INI PENTING */}
            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3 d-flex align-items-center pin-inpt ">
            <Form.Control onChange={handleChange} isInvalid={!!errors.c} name='c' maxlength="1" max="9" min="0"  className="pin-inp"/>  {/** INI PENTING */}
            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group className="mb-3 d-flex align-items-center pin-inpt ">
            <Form.Control onChange={handleChange} isInvalid={!!errors.d} name='d' maxlength="1" max="9" min="0"  className="pin-inp"/>  {/** INI PENTING */}
            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3 d-flex align-items-center  pin-inpt">
            <Form.Control onChange={handleChange} isInvalid={!!errors.e} name='e' maxlength="1" max="9" min="0"  className="pin-inp"/>  {/** INI PENTING */}
            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3 d-flex align-items-center pin-inpt ">
            <Form.Control onChange={handleChange} isInvalid={!!errors.f} name='f' maxlength="1" max="9" min="0"  className="pin-inp"/>  {/** INI PENTING */}
            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
        </Form.Group>
        </div>
        <div class="d-grid">
        <Button type='submit' class="btn btn-primary">Confirm</Button>
    </div>
    </Form> 
  )
}

function Createpin() {
  const navigate = useNavigate();
  const onLoginRequest = (val) => {
    if(val.a === '' || val.b === '' || val.c===''||val.d===''||val.e===''||val.f===''){
      window.alert('Login failed! Lol')
    }else{
      navigate("/createsuccess");
    }
  }
  return (
    <section>
      <div className='d-flex flex-row'>
        <div class="col-md-7 auth-intro auth-form-wrapper display-none">
          <div>
            <h1>Zwallet</h1>
          </div>
          <div class="d-flex align-items-center flex-column">
            <div>
              <img src={pictLogin} alt='Pict'/>
            </div>
            <div>
              <h1>App that Covering Banking Needs.</h1>
              <p1>Zwallet is an application that focussing in banking needs for all users
                in the world. Always updated and always following world trends.
                5000+ users registered in Zwallet everyday with worldwide
                users coverage.</p1>
            </div>
          </div>
        </div>
        <div class="col-5 auth-form-wrapper ">
            <div class="d-flex gap-5 flex-column">
                <h3>Secure Your Account, Your Wallet,
                    and Your Data With 6 Digits PIN
                    That You Created Yourself.
                </h3>
                <p>Create 6 digits pin to secure all your money and your data in Zwallet app. Keep it secret and don't tell anyone about your Zwallet account password and the PIN.                  
                </p>
                <Formik onSubmit={onLoginRequest} initialValues={{a: '', b: '', c: '', d: '', e: '', f: '', }} validationSchema={loginschema}>
                {(props)=><AuthForm {...props}/>}
                </Formik>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Createpin