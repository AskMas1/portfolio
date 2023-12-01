import React from 'react';
import './service.css';

import icon3 from '../img/icons.png';
import vector4 from '../img/vector-4.svg';
import vector5 from '../img/vector-5.svg';


const Service = () => {
  return (
    <div className='desktop3'>
      <div className='overlap2'>
      <div className="my-services">MY SERVICES</div>
      <p className="text-wrapper-9">Bringing your vision to life with precision and passion</p>
        <div className="group-10">
          <div className="group-11">
            <div className="overlap-group-4">
              <div className="rectangle-4" />
              <div className="icons-wrapper">
                <img className="icons" alt="Icons" src={icon3} />
              </div>
              <div className="website-design">WEB Developer</div>
              <p className="text-wrapper-10">
                Beautiful and elegant user interfaces that are intuitive, efficient and pleasant to use for the user.
              </p>
            </div>
          </div>
          <div className="group-12">
            <div className="overlap-6">
              <div className="rectangle-5" />
              <div className="group-13">
                <img className="vector-5" alt="Vector" src={vector4} />
              </div>
              <div className="UI-ux-design">UI/UX DESIGN</div>
              <p className="designing-user">
                Designing user interfaces and experiences for websites, applications&nbsp;&nbsp;to enhance usability and
                overall user satisfaction.
              </p>
            </div>
          </div>
          <div className="group-14">
            <div className="overlap-group-4">
              <div className="rectangle-4" />
              <div className="group-13">
                <img className="vector-6" alt="Vector" src={vector5} />
              </div>
              <div className="app-design">APP Developer</div>
              <p className="text-wrapper-11">
                Design and transform website projects into mobile apps to provide a seamless user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Service