import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {FiMail, FiLock, FiUser} from 'react-icons/fi'
import { Alert, Button, Form } from 'react-bootstrap';
import { register } from '../assets/redux/asyncActions/auth';
import pictLogin from '../assets/images/Group-login-phone.png';
import * as Yup from 'yup'
import { Formik } from 'formik'
import { useDispatch, useSelector } from 'react-redux';
import { setEmail } from '../assets/redux/reducers/auth';

const loginschema = Yup.object().shape({
  username: Yup.string().min(4).required('Required'),
  email: Yup.string().email('Invalid email address format').required('Required'),
  password: Yup.string().min(4).required('Required')
})

function AuthForm({errors, handleSubmit, handleChange}){
  const navigate = useNavigate();
  const successMsg = useSelector((state) => state.auth.successMsg);
  const errorMsg = useSelector((state) => state.auth.errorMsg);

  React.useEffect(() => {
    if (successMsg) {
      navigate("/createpin", { state: { successMsg } });
    }
  }, [navigate, successMsg]);

  return(
    <div class="d-flex gap-5 flex-column">
        <h3>Start Accessing Banking Needs
            With All Devices and All Platforms
            With 30.000+ Users
        </h3>
        <p>Transfering money is eassier than ever, you can access JMoney wherever  you are. Desktop, laptop, mobile phone? we cover all of that for you!                   
        </p>
        {errorMsg && <Alert variant="danger">{errorMsg}</Alert>}
        <Form noValidate onSubmit={handleSubmit} className='d-flex flex-column gap-4'> {/** INI PENTING */}
            <Form.Group className="mb-3  input-group">
              <div className='input-group-text input-no-border'>
              <FiUser />
              </div>
              <Form.Control name="username" onChange={handleChange} isInvalid={!!errors.username} type="username" placeholder="Enter your username"  className="fw-input"/>  {/** INI PENTING */}
              <Form.Control.Feedback type="invalid">{errors.username}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3  input-group">
              <div className='input-group-text input-no-border'>
              <FiMail />
              </div>
              <Form.Control name="email" onChange={handleChange} isInvalid={!!errors.email} type="email" placeholder="Enter email"  className="fw-input"/>  {/** INI PENTING */}
              <Form.Control.Feedback type='invalid'>{errors.email}</Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3 input-group">
              <div className='input-group-text input-no-border'> 
              <FiLock />
              </div>
              <Form.Control name="password" onChange={handleChange} isInvalid={!!errors.password} type="password" placeholder="Password"  className="fw-input"/>  {/** INI PENTING */}
            <Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
          </Form.Group>
          <div class="d-grid">
            <Button type='submit' class="btn btn-primary">Sign Up</Button>
        </div>
        <div class="text-center">
            <p>Already have an account? Let's <Link to={"/login"}>Login</Link></p>
        </div>
        </Form>  {/** INI PENTING */}
        
    </div>
  )
}

function Register() {
  const dispatch = useDispatch();
  const token = useSelector((state) => state.auth.token);
  const navigate = useNavigate();
  const onLoginRequest = (val) => {
    // if(val.email === '' || val.password === '' || val.username===''){
    //   window.alert('Login failed! Lol')
    // }else{
      
      
    // }
    dispatch(register(val))
    dispatch(setEmail(val.email))
  }
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
        <Formik onSubmit={onLoginRequest} initialValues={{username:'',email: '',password:''}} validationSchema={loginschema}>
        {(props)=><AuthForm {...props}/>}
        </Formik>
        </div>
      </div>
    </section>
  )
}

export default Register