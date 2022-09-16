
import React from 'react'
import {  Navbar, Container} from 'react-bootstrap'
import {Link, useNavigate} from 'react-router-dom'

import phone1 from '../assets/images/png-phone.png'
import partnerBrand from '../assets/images/group-24.png'
import phone2 from '../assets/images/png-phone2.png'
import user1 from '../assets/images/1.png'
import user2 from '../assets/images/2.png'
import user3 from '../assets/images/Rectangle 25.png'
import { FiDownload, FiLock, FiPhone } from 'react-icons/fi'
import { useSelector } from 'react-redux'

function Landingpage() {
  const navigate = useNavigate();
  const token = useSelector((state) => state.auth.token);
  React.useEffect(() => {
    if (token) {
      navigate("/home");
    }
  }, [navigate, token]);
  return (
    <>
    <section>
      <header className='lp-header'>
        <Navbar>
          <Container className='d-flex justify-content-between'>
              <div>
                <h1>J-Money</h1>
              </div>
              <div className='d-flex gap-2'>
                <Link className='btn blue-button' to={"/login"}>login</Link>
                <Link className='btn white-button' to={"/register"}>Sign Up</Link>
              </div>
            </Container>
        </Navbar>
        <section1>
          <div className="flex-btwn ">
              <div className='flex-col pad-r200'>
                  <h1>
                      <span className='font-700'>Awesome App For Saving </span><span className='main-clr font-700'>Time.</span>
                  </h1>
                  <p className="font-400">We bring you a mobile app for banking problems that
                      oftenly wasting much of your times.</p>
                  <div><a href="/register.html">
                      <Link className='btn blue-button' to={"/register"}>Try It Free</Link></a>
                  </div>
              </div>
              <div className='flex-col'>
                  <img src={phone1} alt="pict"/>
              </div>
          </div>
        </section1>
      </header>
      <section2 >
        <div className='bg-main pad-main'>
          <div className='text-ctr pad-sec-1'>
              <h1>About the Application.</h1>
              <p >We have some great features from the application and it's totally free to use by all users around the world.</p>
          </div>
          <div className="flex-btwn pad-sec-1">
              <div className='text-ctr pad-sec-1 d-flex flex-column gap-4 align-items-center'>
                  <div  className='bg-round align-items-center d-flex justify-content-center'>
                  <FiPhone size={40} color='blue'/>
                  </div>
                  <h2>24/7 Support</h2>
                  <p>We have 24/7 contact support so you can contact us whenever you want and we will respond it.</p>
              </div>
              <div className='text-ctr pad-sec-1 d-flex flex-column gap-4 align-items-center'>
                  <div className='bg-round align-items-center d-flex justify-content-center'>
                    <FiLock size={40} color='blue'/>
                  </div>
                  <h2>Data Privacy</h2>
                  <p>We make sure your data is safe in our database and we will encrypt any data you submitted to us.</p>
              </div>
              <div className='text-ctr pad-sec-1 d-flex flex-column gap-4 align-items-center'>
                  <div className='bg-round align-items-center d-flex justify-content-center'>
                    <FiDownload size={40} color='blue'/>
                  </div>
                  <h2>Easy Download</h2>
                  <p>JMoney is 100% totally free to use it's now available on Google Play Store and App Store.</p>
              </div>
          </div>
        </div>
      </section2>
      <section3>
        <div className='flex-btwn pad-main'>
          <div className='flex-col'>
              <h1>100+ <span >Trusted</span> Partners.</h1>
              <p>We have reached global level and have 100+brand partners around the globe.</p>
          </div>
          <div className='flex-col'>
              <img src={partnerBrand} alt="pict"/>
          </div>
        </div>
      </section3>
      <section4>
        <div className='bg-main flex-btwn pad-main'>
          <div className='flex-col'>
              <img src={phone2} alt="pict"/>
          </div>
          <div className='flex-col'>
              <div className='margin-btm'>
                  <h1>All The <span className='main-clr'>Great</span> JMoney Features.</h1>
              </div>
              <div className='bg-white margin-btm'>
                  <h3>1. Small Fee</h3>
                  <p>We only charge 5% of every success transaction done in JMoney app.</p>
              </div>
              <div className='bg-white margin-btm'>
                  <h3>2. Data Secured</h3>
                  <p>All your data is secured properly in our system and it's encrypted.</p>
              </div>
              <div className='bg-white'>
                  <h3>3. User Friendly</h3>
                  <p>JMoney come up with modern and sleek design and not complicated.</p>
              </div>
          </div>
        </div>
      </section4>
      <section4>
        <div className='text-ctr pad-main'>
          <div className='text-ctr pad-sec-1'>
              <h1>What Users are Saying.</h1>
              <p >We have some great features from the application and it’s totally free to use by all users around the world.</p>
          </div>
          <div className="flex-btwn pad-sec-1">
              <div className='text-ctr pad-sec-1'>
                  <img src={user1} alt="pict"/>
                  <h2>Sherina Chaw</h2>
                  <p>“I use this app since 2 years ago and this is the best app that I've ever use in my entire life”</p>
              </div>
              <div className='text-ctr pad-sec-1'>
                  <img src={user2} alt="pict"/>
                  <h2>Jessica Mera</h2>
                  <p>“I use JMoney to manage all financial needs. It's super easy to use and it's 100% free app”</p>
              </div>
              <div className='text-ctr pad-sec-1'>
                  <img src={user3} alt="pict"/>
                  <h2>Robert Chandler</h2>
                  <p>“Since I'm using this app, I'm not going to move to another similar app. Thank you JMoney!”</p>
              </div>
          </div>
        </div>
      </section4>
      <section5>
        <div className='bg-main pad-main flex-col'>
          <h1>JMoney</h1>
          <p>Simplify financial needs and saving much time in banking needs with one single app.</p>
          <hr/>
          <div className='flex-btwn'>
              <p>2020 JMoney. All right reserved.</p>
              <div >            
                  <p>+62 5637 8882 9901</p>
                  <p>contact@JMoney.com</p>
              </div>
          </div>
        </div>
      </section5>
    </section>
    </>
  )
}

export default Landingpage