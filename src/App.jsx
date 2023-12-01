import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Sidebar from './components/sidebar';
import About from './components/About';
import Service from './components/Service';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

const App = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Sidebar />} >
                    <Route index path='home' element={<Home />} />
                    <Route index path='about' element={<About/>}/>
                    <Route index path='service' element={<Service/>}/>
                    <Route index path='education' element={<Education/>}/>
                    <Route index path='experience' element={<Experience/>}/>
                    <Route index path='skills' element={<Skills/>}/>
                    <Route index path='portfolio' element={<Portfolio/>}/>
                    <Route index path='contact' element={<Contact/>}/>
                </Route>
            </Routes>

        </div>
    )
}

export default App;
