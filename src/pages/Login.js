
import React from 'react'
import { Button, Form } from 'react-bootstrap';
import {Link ,  useNavigate} from 'react-router-dom'
import {FiMail, FiLock} from 'react-icons/fi'

import pictLogin from '../assets/images/Group-login-phone.png';
import { Formik } from 'formik';
import * as Yup from 'yup'
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../assets/redux/asyncActions/auth';

const loginschema = Yup.object().shape({
  email: Yup.string().email('Invalid email address format').required('Required'),
  password: Yup.string().min(8).required('Required')
})

function AuthForm(props){
  return(
    <div class="d-flex gap-5 flex-column">
        <h3>Start Accessing Banking Needs
            With All Devices and All Platforms
            With 30.000+ Users
        </h3>
        <p>Transfering money is eassier than ever, you can access JMoney wherever  you are. Desktop, laptop, mobile phone? we cover all of that for you!                   
        </p>
        <Form noValidate onSubmit={props.handleSubmit} className='d-flex flex-column gap-4'> {/** INI PENTING */}
          <Form.Group className="mb-3  input-group">
            <div className='input-group-text input-no-border'>
            <FiMail />
            </div>
            <Form.Control name="email" onChange={props.handleChange} isInvalid={!!props.errors.email} type="email" placeholder="Enter email"  className="fw-input"/>  {/** INI PENTING */}
            <Form.Control.Feedback type='invalid'>{props.errors.email}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3 input-group">
            <div className='input-group-text input-no-border'> 
            <FiLock />
            </div>
            <Form.Control name="password" onChange={props.handleChange} isInvalid={!!props.errors.password} type="password" placeholder="Password"  className="fw-input"/>  {/** INI PENTING */}
            <Form.Control.Feedback type="invalid">{props.errors.password}</Form.Control.Feedback>
          </Form.Group>
        
        <div class="text-end">
            <Link to={"/resetpassword"}>Forgot password?</Link>
        </div>
        <div class="d-grid">
            <Button type='submit' className="btn btn-primary">Login</Button>
        </div>
        <div class="text-center">
            <p>Don't have an account? Let's <Link to={"/register"}>Sign Up</Link></p>
        </div>
        </Form>  {/** INI PENTING */}
    </div>
  )
}


function Login() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth?.token);
  const navigate = useNavigate();

  const onLogin = (value) => {
    const data = { email: value.email, password: value.password };
    dispatch(login(data));
    console.log(data);
  };

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
            <h1>JMoney</h1>
          </div>
          <div class="d-flex align-items-center flex-column">
            <div>
              <img src={pictLogin} alt='Pict'/>
            </div>
            <div>
              <h1>App that Covering Banking Needs.</h1>
              <p1>JMoney is an application that focussing in banking needs for all users
                in the world. Always updated and always following world trends.
                5000+ users registered in JMoney everyday with worldwide
                users coverage.</p1>
            </div>
          </div>
        </div>
        <div class="col-5 auth-form-wrapper ">
            <Formik 
            onSubmit={onLogin}
            initialValues={{email: '', password:''}} validationSchema={loginschema}>
            {(props)=><AuthForm {...props}/>}
            </Formik>
        </div>
      </div>
    </section>
  )
}

export default Login
