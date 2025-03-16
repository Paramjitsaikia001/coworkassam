import { BrowserRouter, Route, Routes } from 'react-router';
import Navbar from './components/Navbar';
import About from './components/About';
import Landing from './components/Landing';
import Footer from './components/Footer';

function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <div className="mt-20">
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
