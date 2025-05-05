import './App.css'
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ShowBooks from './components/ShowBooks';
import BookDetails from './components/BookDetails';
import Error from './components/Error';
import { useSelector } from 'react-redux';
import LoadingPage from './components/LoadingPage';

function App() {
  let error = useSelector((state) => state.bookSlice.error);
  let loading = useSelector((state) => state.bookSlice.loading);

  return (
    <BrowserRouter>
      {error && <Error />}
      {/* {loading && <LoadingPage />} */}
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
