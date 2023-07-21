import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Booklist from './components/booklist';
import Categories from './components/categories';
import Navbar from './components/navbar';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <main>

          <Routes>
            <Route path="/" element={<Booklist />} />
            <Route path="/categories" element={<Categories />} />
          </Routes>

        </main>
      </div>
    </BrowserRouter>
  );
}
export default App;
