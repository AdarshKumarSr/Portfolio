import { useState, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/nav';
import Experience from './pages/Experiencepage';
import Contact from './pages/contact';
import Footer from './components/footer';
// import VisitorCounter from './components/visit';

// Lazy load pages
const Home = lazy(() => import('./pages/home'));
const Project = lazy(() => import('./pages/ProjectPage'));

// Optional: Loading component with blur + shimmer
const Loading = () => (
  <div className="flex items-center justify-center h-screen bg-white">
    <div className="w-16 h-16 rounded-full bg-gray-300 animate-pulse blur-sm" />
    <span className="ml-4 text-gray-600 animate-pulse">Loading page...</span>
  </div>
);

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <NavBar />
      {/* <VisitorCounter/> */}

      <Suspense fallback={<Loading />}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                {/* Optional Aurora only for Home */}
                <div className="fixed inset-0 -z-10">{/* <Aurora /> */}</div>
                <Home />
              </>
            }
          />
          <Route path="/Projects" element={<Project />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Suspense>

      <Footer />
    </Router>
  );
}

export default App;
