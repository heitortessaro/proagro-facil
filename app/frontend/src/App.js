import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Search from './components/Search';

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={ <Search /> } />
      </Routes>
    </div>
  );
}
