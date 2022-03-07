import {BrowserRouter,Router,Route,Routes,Switch} from 'react-router-dom';
import Navbar from "../components/Header"
import Auth from "../components/Auth"
import Home from "../components/home"
import Detail from '../components/Detail'
import BottomNav from '../components/BottomNav'
import Pages from '../components/Pages';
import Cookies from "universal-cookie"
import {createBrowserHistory} from "history"
const cookies=new Cookies()
const token=cookies.get('token');

function Rounter(){
    const history=createBrowserHistory()
    return (
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/:category" element={<Pages />}></Route>
          <Route path="/Authication" element={<Auth />}></Route>
          <Route path="/Detail/:category/:id" element={<Detail />}></Route>
        </Routes>

        <BottomNav />
      </BrowserRouter>
    );
}

export default Rounter