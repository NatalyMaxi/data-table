import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPosts } from '../../store/post/posts-slice';
import './App.css';
import HomePage from '../HomePage/HomePage';
import PageNotFound from '../PageNotFound/PageNotFound';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/:page' element={<HomePage />} />
          <Route
            path='/'
            element={<Navigate to='/1' replace />}
          />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
