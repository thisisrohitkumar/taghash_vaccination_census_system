import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './views/Home'
import Trend from './views/Trend'

import './stylesheets/app.css'

const App = () => {
    return(
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/trend" element={<Trend/>}/>
                </Routes>
            </Router>
        </>
    )
}

export default App