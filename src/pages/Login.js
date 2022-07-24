
import React from 'react'
import { Form } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import {FiMail, FiLock} from 'react-icons/fi'

import pictLogin from '../assets/images/Group-login-phone.png';

function login() {
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
                <p>Transfering money is eassier than ever, you can access Zwallet wherever  you are. Desktop, laptop, mobile phone? we cover all of that for you!                   
                </p>
                <Form > {/** INI PENTING */}
                  <Form.Group className="mb-3 d-flex align-items-center">
                    <FiMail />
                    <Form.Control name="email"  type="email" placeholder="Enter email"  className="fw-input"/>  {/** INI PENTING */}
                    <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group className="mb-3 d-flex align-items-center">
                    <FiLock />
                    <Form.Control name="password"  type="password" placeholder="Password"  className="fw-input"/>  {/** INI PENTING */}
                    <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                  </Form.Group>
                </Form>  {/** INI PENTING */}
                <div class="text-end">
                    <Link to={"/resetpassword"}>Forgot password?</Link>
                </div>
                <div class="d-grid">
                    <Link to={"/home"} class="btn btn-primary">Login</Link>
                </div>
                <div class="text-center">
                    <p>Don't have an account? Let's <Link to={"/register"}>Sign Up</Link></p>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default login