import React from 'react';
import { Outlet } from 'react-router-dom';
import './home.css';
import line2 from '../img/line-2.svg';
import line3 from '../img/line-3.svg';
import line1 from '../img/line-1.svg';
import line4 from '../img/line-4.svg';
import line5 from '../img/line-5.svg';
import rectangle6 from '../img/rectangle-6.svg';
import rectangle5 from '../img/rectangle-5.png';
import arrow1 from '../img/arrow-1.svg';


const Home = () => {
  return (
    <div className='desktop1'>
      <div className="overlap1">
          <img className="line" alt="Line" src={line3}/>
          <p className="hi-i-m-manishi">
            <span className="text-wrapper">
              Hi, i’m Ankit!
              <br />
              Software{" "}
            </span>
            <span className="span">Engineer</span>
          </p>
          <img className="rectangle" alt="Rectangle" src={rectangle6} />
          <img className="img" alt="Rectangle" src={rectangle6} />
          <img className="line-2" alt="Line" src={line1} />
          <img className="line-3" alt="Line" src={line2} />
          <p className="i-m-a-passionate">
            I&#39;m a passionate Product designer with a mission to create delightful and intuitive digital experiences.
            With a strong foundation in design principles and a keen eye for detail, I specialize in translating complex
            ideas into user-friendly interfaces that captivate and engage.
          </p>
          <img className="line-4" alt="Line" src={line4} />
          <div className="group">
            <div className="overlap-group">
              <div className="text-wrapper-2">Download CV</div>
              <img className="arrow" alt="Arrow" src={arrow1} />
              <img className="line-5" alt="Line" src={line5} />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Home