import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Pages/Common/Footer';
import Header from './Pages/Common/Header';
import NotFound from './Pages/Common/NotFound';
import Cart from './Pages/Unique/Cart';
import BreakFast from './Pages/Unique/Home/BreakFast';
import Dinner from './Pages/Unique/Home/Dinner';
import Home from './Pages/Unique/Home/Home';
import Lunch from './Pages/Unique/Home/Lunch';
import Login from './Pages/Unique/Login';
import SignUp from './Pages/Unique/SignUp';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}>
          <Route path='/home/breakfast' element={<BreakFast></BreakFast>}/>
          <Route path='/home/lunch' element={<Lunch></Lunch>}/>
          <Route path='/home/dinner' element={<Dinner></Dinner>}/>
        </Route>
        <Route path='/cart' element={<Cart></Cart>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/sign-up' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
