import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Pages/Common/Header';
import Home from './Pages/Unique/Home';
import Login from './Pages/Unique/Login';
import SignUp from './Pages/Unique/SignUp';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/sign-in' element={<SignUp></SignUp>}></Route>
      </Routes>
    </div>
  );
}

export default App;
