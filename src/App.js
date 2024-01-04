import './App.css';
import LoginForm from './component/LoginForm/LoginForm';
import SignUp from './component/SignUP/SignUp';
import {BrowserRouter,Link,Routes,Route} from "react-router-dom";
import Navigate from './Navigate';
import Home from './component/Land/Home'
function App() {
  return (
    <div className="App">

        <BrowserRouter>

        <Routes>
          <Route path="/" element= <LoginForm/> > </Route>
          <Route path="/signup" element= <SignUp/> > </Route>
          <Route path="/home" element=<Home/> ></Route>
        </Routes>
        </BrowserRouter> 

    </div>
  );
}

export default App;
