import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import { store } from '@store/store'
import MainLayout from './components/layout/MainLayout';
import Home from './pages/Home';
import Resume from './pages/Resume';

function App() {
  return (
    <BrowserRouter>
     <Provider store={store}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="resume" element={<Resume />} />
        </Route>
      </Routes>
     </Provider>
    </BrowserRouter>
  );
}

export default App;