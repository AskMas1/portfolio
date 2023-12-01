import React from 'react';
import './portfolio.css';
import rectangle18 from '../img/rectangle-18.png';
import rectangle19 from '../img/rectangle-19.png';
import rectangle20 from '../img/rectangle-20.png';
import rectangle21 from '../img/rectangle-21.png';




const Portfolio = () => {
  return (
    <div className='desktop7'>
      <div className="overlap7">
      <div className="group-28">
          <div className="my-projects">MY PROJECTS</div>
          <p className="text-wrapper-24">
            Step into a realm where code and creativity converge—my canvas of captivating UI/UX tales.
          </p>
          <img className="rectangle-7" alt="Rectangle" src={rectangle18} />
          <img className="rectangle-8" alt="Rectangle" src={rectangle19} />
          <div className="overlap-10">
            <div className="group-29">
              <img className="rectangle-9" alt="Rectangle" src={rectangle20} />
            </div>
            <img className="rectangle-10" alt="Rectangle" src={rectangle21} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio