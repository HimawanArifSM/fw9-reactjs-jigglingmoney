import React from 'react'
import { useNavigate} from 'react-router-dom'
import {Button, Form} from 'react-bootstrap'
import {FiMail} from 'react-icons/fi'
import pictLogin from '../assets/images/Group-login-phone.png';
import * as Yup from 'yup'
import { Formik } from 'formik'
import { useSelector } from 'react-redux';

const loginschema = Yup.object().shape({
  email: Yup.string().email('Invalid email address format').required('Required'),
})


function AuthForm({errors, handleSubmit, handleChange}){
  return(
    <Form noValidate onSubmit={handleSubmit} className='d-flex flex-column gap-4'>
        <Form.Group className="mb-3  input-group">
            <div className='input-group-text input-no-border'>
            <FiMail />
            </div>
            <Form.Control name="email" onChange={handleChange} isInvalid={!!errors.email} type="email" placeholder="Enter email"  className="fw-input"/>  {/** INI PENTING */}
            <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
            <Form.Control.Feedback type='invalid'>{errors.email}</Form.Control.Feedback>
        </Form.Group>
        <div class="d-grid">
                    <Button type='submit' class="btn btn-primary">Confirm</Button>
                </div>
    </Form>
  )
}

function Resetpassword() {
  const navigate = useNavigate();
  const onLoginRequest = (val) => {
    if(val.email === ''){
      window.alert('Login failed! Lol')
    }else{
      navigate("/createpassword");
    }
  }
  const token = useSelector((state) => state.auth.token);
  React.useEffect(() => {
    if (token) {
      navigate("/home");
    }
  }, [navigate, token]);
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
                <h3>Start Accessing Banking Needs
                    With All Devices and All Platforms
                    With 30.000+ Users
                </h3>
                <p>To reset your password, you must type your e-mail and we will send a link to your email and you will be directed to the reset password screens.                 
                </p>
                <Formik onSubmit={onLoginRequest} initialValues={{email: ''}} validationSchema={loginschema}>
                {(props)=><AuthForm {...props}/>}
                </Formik>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Resetpassword