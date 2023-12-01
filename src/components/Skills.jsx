import React from 'react';
import './skills.css';
import group1 from '../img/group-1.png';
import group2 from '../img/group-2.png';
import group34 from '../img/group-34.png';
import preview1 from '../img/download-removebg-preview-1.png';
import jspreview from '../img/js-logo-removebg-preview-1.png';



const Skills = () => {
  return (
    <div className='desktop6'>
      <div className="overlap6">
      <div className="group-19">
          <div className="overlap-9">
            <div className="my-skills">MY SKILLS</div>
            <p className="text-wrapper-23">Crafting stories through Design and Imagination</p>
            <div className="group-20">
              <div className="group-21">
                <div className="overlap-group-7">
                  <img className="group-22" alt="Group" src={group1} />
                </div>
              </div>
              <div className="group-23">
                <div className="overlap-group-7">
                  <img className="group-22" alt="Group" src={group2} />
                </div>
              </div>
              <div className="group-24">
                <div className="overlap-group-7">
                  <img className="js-logo-removebg" alt="Js logo removebg" src={jspreview} />
                </div>
              </div>
              <div className="group-25">
                <div className="overlap-group-7">
                  <img className="group-26" alt="Group" src={group34} />
                </div>
              </div>
              <div className="group-27">
                <div className="overlap-group-7">
                  <img
                    className="download-removebg"
                    alt="Download removebg"
                    src={preview1}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills