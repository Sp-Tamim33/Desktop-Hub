import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Blogs from './components/Blogs/Blogs';
import Dashbord from './components/Dashbord/Dashbord';
import Header from './components/Header/Header';
import HomePage from './components/Homepage/HomePage';
import NF404 from './components/NotFound/NF404';
import Reviews from './components/Reviews/Reviews';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}></Route>
        <Route path='/home' element={<HomePage></HomePage>}></Route>
        <Route path='/review' element={<Reviews></Reviews>}></Route>
        <Route path='/dashbord' element={<Dashbord></Dashbord>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='*' element={<NF404></NF404>}></Route>
      </Routes>
    </div>
  );
}

export default App;
