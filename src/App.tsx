import { BrowserRouter, Route, Routes, useLocation } from 'react-router';
import Navbar from './components/Navbar';
import About from './components/About';
import Landing from './components/Landing';
import Footer from './components/Footer';
import BookTour from './components/bookTour';

function App() {
    const location = useLocation();

    // Check if the current route is "/booktour"
    const isBookTourPage = location.pathname === '/booktour';

    return (
        <>
            {!isBookTourPage && <Navbar />}
            <div className={isBookTourPage ? '' : 'mt-20'}>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/booktour" element={<BookTour />} />
                </Routes>
            </div>
            {!isBookTourPage && <Footer />}
        </>
    );
}

export default function Root() {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
}