import './App.css'
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ShowBooks from './components/ShowBooks';
import BookDetails from './components/BookDetails';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <div className='flex justify-center'>
        <Routes>
          <Route path="/" element={<ShowBooks />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="*" element={<h1>404 Error</h1>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
