import React from 'react'
import { useSelector } from 'react-redux';
import {Link, useNavigate} from 'react-router-dom'

import pictLogin from '../assets/images/Group-login-phone.png';
import success from '../assets/images/success.png';


function Createsuccess() {
  const navigate = useNavigate();
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
            <div class="d-flex gap-5 flex-column">
                <img className='scs-icon' src={success} alt='Pict'/>
                <h3>Your PIN Was Successfully Created
                </h3>
                <p>Your PIN was successfully created and you can now access all the features in JMoney. Login to your new account and start exploring!                 
                </p>
                <div class="d-grid">
                    <Link to={'/login'} class="btn btn-primary">Login Now</Link>
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default Createsuccess