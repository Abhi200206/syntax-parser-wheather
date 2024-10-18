import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CreateRule from './pages/CreateRule';
import RuleListPage from './pages/RuleListPage';
import EvaluatePage from './pages/EvaluatePage';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<CreateRule />} />
                <Route path="/rules" element={<RuleListPage />} />
                <Route path="/evaluate" element={<EvaluatePage />} />
            </Routes>
        </Router>
    );
};

export default App;
