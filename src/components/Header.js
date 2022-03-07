import React, { useState } from 'react';
import { Avatar } from 'stream-chat-react';
import {Link} from "react-router-dom"
import {
  FaHome,
  FaSearch,
  FaPlus,
  FaThList,
  FaSignOutAlt,
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import {MdSportsBasketball} from 'react-icons/md';
import { BiCameraMovie, BiMove, BiMovie, BiMoviePlay } from 'react-icons/bi';
import Cookies from "universal-cookie"
import '../App.css';
import 'stream-chat-react/dist/css/index.css';

const cookies= new Cookies()
const token=cookies.get("token")
console.log(token);
function Header() {
  const [NavToggle, setNavToggle] = useState(false);
  const [Login, setLogin] = useState(false);
  const [SearchToggle, setSearchToggle] = useState(false);
  const LogoutFn=()=>{
cookies.remove("token")
cookies.remove('Username');
cookies.remove('photoUrl');
window.location.href="http://localhost:3000/Authication"
window.location.reload()
  }
  return (
    <header className="navbarHead">
      <nav className="d-flex navbar ">
        <a href="" id="logo">
          <img src="./images/logo.svg" className="img-fluid" alt="" />
        </a>

        <div className="navlinks mb-4">
          <ul
            className={`"d-flex navitem gap-3  list-unstyled align-items-center `}
            style={NavToggle ? { right: '0.5rem' } : { right: '-40rem' }}
          >
            <li>
              <FaHome />
              <Link to={'/'} className="text-decoration-none text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to={'/Movies'}>
                <BiMovie /> Movies
              </Link>
            </li>
            <li>
              <FaThList /> watchlist
            </li>
            <li>
              <Link to={'/TvSeries'}>
                <BiMoviePlay /> Series
              </Link>
            </li>
            <li>
              <Link to={'/Sports'}>
              <MdSportsBasketball />Sports
              </Link>
            </li>
            <li
              className="d-flex align-items-center"
              style={{ textDecoration: 'none', borderBottom: 'none' }}
            >
              {SearchToggle ? (
                <div className="d-flex">
                  <div className="">
                    <label htmlFor="">Search:</label>
                    <input
                      type="text"
                      className="form-control bg-transparent border-info border-2 rounded-top text-white"
                      placeholder="Search a Movies,Seris MORE.."
                    />
                  </div>
                  <button className="btn mt-4 btn-primary  ">
                    <FaTimes
                      onClick={() => {
                        setSearchToggle(!SearchToggle);
                        console.log('click');
                      }}
                      style={{ color: '#fff !important', opacity: '1' }}
                    />
                  </button>
                </div>
              ) : (
                <div className="">Search</div>
              )}
              {SearchToggle ? null : (
                <button className="btn text-white">
                  <FaSearch
                    onClick={() => {
                      setSearchToggle(!SearchToggle);
                      console.log('click');
                    }}
                  />
                </button>
              )}
            </li>
          </ul>
        </div>
        <div className=""></div>
        <div className="d-flex flex-column gap-2 p-2 mb-5 align-items-center">
          <div className="d-flex gap-2 align-items-center">
            {token ? (
              <div className="align-items-center">
                <div className="cursor">
                  <Avatar
                    name={cookies.get('Username')}
                    image={cookies.get('photoUrl')}
                    size={45}
                    onClick={() => setLogin(!Login)}
                  />
                </div>
                <div
                  className="text-white"
                  id="userinfo"
                  style={Login ? { right: '0.5rem' } : { right: '-10rem' }}
                >
                  <ul className="list-unstyled">
                    <li>{cookies.get('Username')}</li>
                    <li onClick={LogoutFn}>
                      LogOut <FaSignOutAlt />
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <button className="btn btn-primary">
                <Link
                  to={'/Authication'}
                  className="text-decoration-none text-white"
                >
                  Login
                </Link>
              </button>
            )}
            <div className="toggle">
              <button
                className="btn"
                onClick={() => {
                  setNavToggle(!NavToggle);
                  NavToggle ? console.log('click') : console.log('click me');
                }}
              >
                {NavToggle ? (
                  <FaTimes className="text-white" />
                ) : (
                  <FaBars className="text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
