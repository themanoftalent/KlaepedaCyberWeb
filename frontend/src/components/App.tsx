import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// Import other pages...

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                {/* Add more routes */}
            </Routes>
        </Router>
    );
}

export default App;