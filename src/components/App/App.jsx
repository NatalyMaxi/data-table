import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPosts } from '../../store/post/posts-slice';
import './App.css';
import HomePage from '../HomePage/HomePage';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path={`/:id`} element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
