import React from 'react'
import {Link} from 'react-router-dom'
import { Form } from 'react-bootstrap';

import pictLogin from '../assets/images/Group-login-phone.png';


function Createpin() {
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
                <Form className='d-flex justify-content-center flex-row pin-input-wrapper gap-3'> {/** INI PENTING */}
                    <Form.Group className="mb-3 d-flex align-items-center pin-inpt">
                        <Form.Control name='pin' maxlength="1" max="9" min="0"  className="pin-inp"/>  {/** INI PENTING */}
                        <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3 d-flex align-items-center pin-inpt">
                        <Form.Control name='pin' maxlength="1" max="9" min="0"  className="pin-inp"/>  {/** INI PENTING */}
                        <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3 d-flex align-items-center pin-inpt ">
                        <Form.Control name='pin' maxlength="1" max="9" min="0"  className="pin-inp"/>  {/** INI PENTING */}
                        <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                    </Form.Group>
                    
                    <Form.Group className="mb-3 d-flex align-items-center pin-inpt ">
                        <Form.Control name='pin' maxlength="1" max="9" min="0"  className="pin-inp"/>  {/** INI PENTING */}
                        <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3 d-flex align-items-center  pin-inpt">
                        <Form.Control name='pin' maxlength="1" max="9" min="0"  className="pin-inp"/>  {/** INI PENTING */}
                        <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="mb-3 d-flex align-items-center pin-inpt ">
                        <Form.Control name='pin' maxlength="1" max="9" min="0"  className="pin-inp"/>  {/** INI PENTING */}
                        <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                    </Form.Group>
                </Form>  {/** INI PENTING */}

                <div class="d-grid">
                    <Link to={"/createsuccess"} class="btn btn-primary">Confirm</Link>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Createpin