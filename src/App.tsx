import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Thanks from './pages/Thanks';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Obrigado" element={<Thanks />} />
        {/* Outras rotas */}
      </Routes>
    </Router>
  );
}
