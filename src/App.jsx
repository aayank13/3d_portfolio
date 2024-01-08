import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Home, Contact } from "./Pages";

const App = () => {
    return (
        <main>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Router>
        </main>
    );
};

export default App;