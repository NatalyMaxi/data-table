import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../store/post/posts-slice';
import './App.css';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const { posts } = useSelector((state) => state.posts);

  console.log(posts);

  return (
    <div className='App'>
      hello
    </div>
  );
}

export default App;
