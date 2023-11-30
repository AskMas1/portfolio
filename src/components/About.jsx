import React from 'react';
import './about.css';
import about11 from '../img/about-1-1.png';
import about21 from '../img/about-2-1.png';


const About = () => {
  return (
    <>
    <div className="desktop2">
    <div className="overlap1">
    <div className="about-me">ABOUT ME</div>
        <p className="p">Crafting stories through design and Innovation</p>
        <div className="overlap-3">
          <img className="about-2" alt="About" src={about11} />
          <div className="text-wrapper-6">My Ambition</div>
          <p className="text-wrapper-7">
            Eager to merge artistic creativity with functional efficiency, my ambition as a UI/UX designer is to
            cultivate digital experiences that seamlessly integrate aesthetics and user interaction. .
          </p>
        </div>
        <img className="about-3" alt="About" src={about21}/>
        <div className="overlap-4">
          <div className="text-wrapper-8">My Purpose</div>
          <p className="my-purpose-is-to">
            My purpose is to leverage my design skills to create meaningful and accessible solutions that positively
            impact everyone. Through my work, I aim to contribute to positive societal change, making a difference in
            people&#39;s lives through thoughtful and inclusive design.
          </p>
        </div>
        </div>
    </div>
    </>
  )
}

export default About;