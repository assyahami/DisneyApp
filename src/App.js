import React,{useState,useContext,createContext} from "react"
import Homepage from "./components/home"
import Rounter from './Rounter/Rounter';
import Cookies from "universal-cookie"
import './App.css';
import { useParams,useNavigate } from 'react-router';
const cookies = new Cookies();
let token=cookies.get("token")
function App() {
  const [Logged, setLogged] = useState({login:false})


  return (
    <div className="App">
      <Rounter />
    </div>
  );
}
export default App;
