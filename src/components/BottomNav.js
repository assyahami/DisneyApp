import React,{useState} from 'react'
import {
  FaHome,
} from 'react-icons/fa';
import { BiCameraMovie,   BiMoviePlay } from 'react-icons/bi';
import { MdSportsBasketball, MdOutlineLiveTv } from 'react-icons/md';
import { BottomNavigationAction,BottomNavigation} from '@mui/material';
import {Link} from "react-router-dom"

function BottomNav() {
  const [Value, setValue] = useState(0)
  return (
    <footer className="bottomnavbar">
      <BottomNavigation
        showLabel={true}
        className="bottomnav"
        value={Value}
        style={{ position: 'fixed', bottom: 0, color: '#fff', width: '100%' }}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <Link to={'/'}>
          <BottomNavigationAction
            style={{ color: '#fff' }}
            label="Home"
            icon={<FaHome />}
          />
        </Link>
        <Link to={'/TvSeries'}>
          <BottomNavigationAction
            style={{ color: '#fff' }}
            label="Tv"
            icon={<MdOutlineLiveTv />}
          />
        </Link>

        <img
          src="./images/logo.svg"
          alt=""
          className="img-fluid h-75"
          id="logo"
        />

        <Link to={'/Movies'}>
          <BottomNavigationAction
            style={{ color: '#fff' }}
            label="Movies"
            icon={<BiMoviePlay />}
          />
        </Link>
        <Link to={'/Sports'}>
          <BottomNavigationAction
            style={{ color: '#fff' }}
            label="Sports"
            icon={<MdSportsBasketball />}
          />
        </Link>
      </BottomNavigation>
    </footer>
  );
}

export default BottomNav