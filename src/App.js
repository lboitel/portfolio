import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import ReactGA from 'react-ga';
import NavBar from './components/NavBar/NavBar';
import Home from './pages/Home/Home';
import Projects from './pages/Projects';
import Skills from './pages/Skills/Skills';
import Blogs from './pages/Blogs';
import Footer from './components/Footer/Footer';
import Project1 from './pages/ProjectsDetails/Project1';
import Project2 from './pages/ProjectsDetails/Project2';
import ChessPage from './pages/ProjectsDetails/ChessPage';

import './App.css';

import React from 'react';

if (typeof process.env.REACT_APP_TRACKING_ID !== 'undefined') {
    ReactGA.initialize(process.env.REACT_APP_TRACKING_ID);
}

function App() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Router>
                <NavBar />
                <Container sx={{ flex: 1, py: 3 }}>
                    <Routes>
                        <Route path="/portfolio" exact element={<Home />} />
                        <Route path="/projects" exact element={<Projects />} />
                        <Route path="/blogs" exact element={<Blogs />} />
                        <Route path="/skills" exact element={<Skills />} />
                        <Route path = "/projects/chess-me" exact element={<Project1 />} />
                        <Route path="/play/:username" element={<ChessPage />} />
                        <Route path="/projects/geoguess" exact element = {<Project2 />} />

                    </Routes>
                </Container>
                <Footer />
            </Router>
        </Box>
    );
}

export default App;
