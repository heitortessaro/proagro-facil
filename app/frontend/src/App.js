import { Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={ <Home /> } /> */}
      </Routes>
    </div>
  );
}
