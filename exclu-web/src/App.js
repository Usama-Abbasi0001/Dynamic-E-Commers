
import Login from './pages/Login'
import {Routes,Route} from 'react-router-dom'
import SingUp from './pages/SingUp';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import WislishtPage from './pages/WislishtPage';
import ShoppingPage from './pages/ShoppingPage';
function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<SingUp />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/wish" element={<WislishtPage />} />
        <Route path="/shopping" element={<ShoppingPage />} />
      </Routes>
    </>
  );
}

export default App;
