import { BrowserRouter, Route, Routes } from 'react-router';
import Navbar from './components/Navbar';
import About from './components/About';
import Landing from './components/Landing';
import Footer from './components/Footer';
import BookTour from './components/bookTour';
function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <div className="mt-20">
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/booktour" element={<BookTour />} />
                </Routes>
            </div>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
