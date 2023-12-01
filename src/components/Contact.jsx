import React from 'react';
import './contact.css';
import group41 from '../img/group-41.png';
import group45 from '../img/group-45.png';
import group46 from '../img/group-46.png';
import line11 from '../img/line-11.svg';

const Contact = () => {
  return (
    <div className='desktop8'>
      <div className="overlap8">
      <div className="group-30">
          <div className="group-wrapper">
            <div className="group-31">
              <img className="group-32" alt="Group" src={group41} />
              <div className="text-wrapper-25">Phone</div>
              <div className="text-wrapper-26">+91-9074843421</div>
            </div>
          </div>
          <div className="group-33">
            <div className="group-31">
              <div className="text-wrapper-25">Location</div>
              <div className="text-wrapper-26">Bhagirathpura, Indore (M.P)</div>
              <img className="group-34" alt="Group" src={group45} />
            </div>
          </div>
          <div className="group-35">
            <div className="group-36">
              <div className="text-wrapper-27">Monday-Sunday</div>
              <img className="group-37" alt="Group" src={group46} />
              <div className="text-wrapper-28">ankit.mourya.0109@gmail.com</div>
            </div>
          </div>
        </div>
        <div className="group-38">
          <div className="overlap-11">
            <div className="rectangle-11" />
            <div className="text-wrapper-29">YOUR NAME</div>
          </div>
          <div className="phone-number-wrapper">
            <div className="phone-number">PHONE NUMBER</div>
          </div>
          <div className="overlap-12">
            <div className="rectangle-12" />
            <div className="message">MESSAGE</div>
          </div>
          <div className="overlap-13">
            <div className="rectangle-13" />
            <div className="text-wrapper-29">YOUR WEBSITE</div>
          </div>
          <div className="overlap-14">
            <div className="rectangle-14" />
            <div className="text-wrapper-29">YOUR EMAIL</div>
          </div>
          <div className="group-39">
            <div className="overlap-group-8">
              <div className="text-wrapper-30">Submit Now</div>
            </div>
          </div>
        </div>
        <div className="group-40">
          <div className="text-wrapper-31">LinkedIn</div>
          <div className="text-wrapper-32">Instagram</div>
          <div className="text-wrapper-33">Email</div>
          <div className="text-wrapper-34">Dribbe</div>
          <div className="text-wrapper-35">Behance</div>
          <div className="text-wrapper-36">Github</div>
        </div>
        <img className="line-10" alt="Line" src={line11}/>
      </div>
      </div>
  )
}

export default Contact