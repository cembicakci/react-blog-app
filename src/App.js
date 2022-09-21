import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home';
import CreatePost from './pages/CreatePost'
import Login from './pages/Login'
import './App.css'
import { useState } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from './firebase';

function App() {

  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'));

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      //Router varken useNavigate kullanılamıyor. Ama window.location.pathmame ile yönledirme yapılabilir.
      window.location.pathname = '/login'

    })
  }

  return (

    <Router>

      <nav>
        <Link to='/'>Home</Link>
        {
          !isAuth
            ? <Link to='/login'>Login</Link>
            :
            <>
              <Link to='/createpost'>Create Post</Link>
              <button onClick={signUserOut}>Log Out</button>
            </>
        }
      </nav>

      <Routes>
        <Route path='/' element={<Home isAuth={isAuth}/>} />
        <Route path='/createpost' element={<CreatePost isAuth={isAuth}/>} />
        <Route path='/login' element={<Login setIsAuth={setIsAuth} />} />
      </Routes>
    </Router>
  );
}

export default App;
