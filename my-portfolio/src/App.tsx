// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout.tsx';
import Home from './pages/Home/Home.tsx';
//import About from './pages/About/About';
//import Blog from './pages/Blog/Blog';
//import Notebook from './pages/Notebook/Notebook';

const App: React.FC = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;


//<Route path="/about" element={<About />} />
//<Route path="/blog" element={<Blog />} />
//<Route path="/notebook" element={<Notebook />} />