import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';
import Resume from './pages/Resume';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta Padre: Aplica el MainLayout a todo lo que esté dentro */}
        <Route path="/" element={<MainLayout />}>
          
          {/* Index Route: Es lo que se ve en "/" */}
          <Route index element={<Home />} />
          
          {/* Ruta CV: Se ve en "/cv", pero mantiene el fondo y navbar */}
          {/* OJO: Si quieres el CV limpio para imprimir sin Navbar, 
              lo sacarías fuera de este Route padre */}
          <Route path="cv" element={<Resume />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;