import React from 'react'
import {FaGoogle,FaHome,FaSignOutAlt} from "react-icons/fa"
import { Authication, provider,getauth } from '../firebase';
import Cookies from "universal-cookie"
import {useNavigate} from 'react-router-dom'
const cookies= new Cookies()
const token =cookies.get("token")
function Auth() {
    const Navigate=useNavigate()
  if (Request.name == '/Authication') {
    return <Navigate to="/" />;
  }
const handleauth=(e)=>{
e.preventDefault();
Authication.signInWithPopup(provider).then((result)=>{
  cookies.set("Username",result.user.displayName)
  cookies.set('photoURL', result.user.photoURL);
  cookies.set('token', result.user.uid);
  console.log(result.user.uid);
if (result.user.uid) {
  Navigate("/")
  window.location.reload()
}else{
  alert("Cannot Find a User AND Signwith Google")
}
  
}).catch((error)=>{
  console.log(error.message);
})

// firebase.storage()
}

  return (
    <div className="Authication">
      <img src="./images/cta-logo-one.svg" alt="" className="img-fluid" />
      <br />
      {token ? (
        <button
          className="btn btn-primary btn-lg fw-bold "
          style={{ width: '25rem' }}
          onClick={() => {
            Navigate('/');
          }}
        >
          {cookies.get('Username')} Already Login With <FaGoogle />
          <br />
          <span>Back to Home</span>
          <FaHome />
        </button>
      ) : (
        <button
          className="btn btn-primary btn-lg fw-bold "
          style={{ width: '25rem' }}
          onClick={handleauth}
        >
          Get All There
          <br />
          <span>Link With Google</span>
          <FaGoogle />
        </button>
      )}
      <br/>
      <span className="w-50">
        Get Premier Access to Raya and the Last Dragon for an additional fee
        with a Disney+ subscription. As of 03/26/21, the price of Disney+ and
        The Disney Bundle will increase by $1.
      </span>
      <br />
      <img src="./images/cta-logo-two.png" alt="" className="img-fluid logos" />
    </div>
  );
}

export default Auth