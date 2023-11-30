import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Sidebar from './components/sidebar';
import About from './components/About';


const App = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Sidebar />} >
                    <Route index path='home' element={<Home />} />
                    <Route index path='about' element={<About/>}/>
                </Route>
            </Routes>

        </div>
    )
}

export default App;
