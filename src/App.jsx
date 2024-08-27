import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Users from './pages/Users';
import Posts from './pages/Posts';
import './App.css';
import {useEffect} from "react";
import {useDispatch} from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_USERS' });
    dispatch({ type: 'FETCH_POSTS' });
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<Home />}></Route>
            <Route path='/users' element={<Users />}></Route>   
            <Route path='/posts' element={<Posts />}></Route>               
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;