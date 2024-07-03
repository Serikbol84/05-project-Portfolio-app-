import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/scrollToTop";

import Navbar from "./Components/navbar/Navbar";
import Footer from "./Components/footer/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import Project from "./pages/Project";

import "./styles/main.css"

import { ReactLenis, useLenis } from '@studio-freight/react-lenis';



function App() {

    const lenis = useLenis(({ scroll }) => {
        // called every scroll
        console.log('Scrolled:', scroll.y);
    });

    return (
        <div className="App">
            <Router>
                <ScrollToTop />
                <Navbar />

                <ReactLenis root>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/project/:id" element={<Project />} />
                    <Route path="/contacts" element={<Contacts />} />
                </Routes>
                </ReactLenis>

                <Footer />
            </Router>
        
        </div>
    );
}

export default App;
