import React,{useState,useEffect} from 'react'
import {ImBell} from "react-icons/im"
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from "react-slick"
function  ImgSlider() {
  const [TimerDay, setTimerDay] = useState();  
  const [TimerHour, setTimerHour] = useState()  
  const [TimerMin, setTimerMin] = useState()  
  const [TimerSec, setTimerSec] = useState()  
  const [UclTimerDay, setUclTimerDay] = useState();  
  const [UclTimerHour, setUclTimerHour] = useState()  
  const [UclTimerMin, setUclTimerMin] = useState()  
  const [UclTimerSec, setUclTimerSec] = useState()  
  const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay:true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed:5000,
      cssEase:"linear"

    }
let interval;
const TimerFn=()=>{
const IplDate=new Date("March 26,2022 00:00:00").getTime()
const UclDate = new Date('May 26,2022 00:00:00').getTime();


  interval=setInterval(()=>{
const now=new Date().getTime()
const distance=IplDate-now
const UCLdistance=UclDate-now

const days=Math.floor(distance/(1000*24*60*60))
const hours=Math.floor((distance%(1000*24*60*60))/(1000*60*60))
const minutes=Math.floor((distance%(1000*60*60))/(1000*60))
const secounds=Math.floor((distance%(1000*60))/(1000))
const UCLdays=Math.floor(UCLdistance/(1000*24*60*60))
const UCLhours=Math.floor((UCLdistance%(1000*24*60*60))/(1000*60*60))
const UCLminutes=Math.floor((UCLdistance%(1000*60*60))/(1000*60))
const UCLsecounds=Math.floor((UCLdistance%(1000*60))/(1000))
if (distance<0) {
  clearInterval(interval.current)

} else {
  setTimerDay(days)
  setTimerHour(hours)
  setTimerMin(minutes)
  setTimerSec(secounds)
  setUclTimerDay(UCLdays)
  setUclTimerHour(UCLhours)
  setUclTimerMin(UCLminutes)
  setUclTimerSec(UCLsecounds)

}
},1000)
}


useEffect(() => {
  TimerFn()
return () => TimerFn();
},[])


    return (
      <div className=" carousel">
        <Slider {...settings} className="slider">
          <div className="slider-inner ">
            <a href="">
              <img src="./images/slider-scale.jpg" alt="" className="" />
            </a>
          </div>
          <div className="slider-inner ">
            <a href="">
              <img src="./images/slider-badag.jpg" alt="" className="" />
            </a>
          </div>
          <div className="slider-inner ">
            <a href="">
              <img src="./images/spider.jpeg" alt="" className="" />
            </a>
          </div>
          <div className="slider-inner ">
            <a href="">
              <img src="./images/disney-plus.jpg" alt="" className="" />
            </a>
          </div>
          <div className="slider-inner overlay">
            <img src="./images/IPLbanner.jpg" alt="" className="img-fluid" />

            <div className="  overlaycontent">
              <div className=" d-flex align-items-center gap-2 justify-content-between">
                <span id="yellow">
                  {TimerDay}
                  <br />
                  <p style={{ fontSize: '1rem' }}>Day</p>
                </span>
                <span id="yellow">
                  {TimerHour}
                  <br />
                  <p style={{ fontSize: '1rem' }}>Hour</p>
                </span>
                <span>
                  {TimerMin}
                  <br />
                  <p style={{ fontSize: '1rem' }}>Minutes</p>
                </span>
                <span>
                  {TimerSec}
                  <br />
                  <p style={{ fontSize: '1rem' }}>Secounds</p>
                </span>
              </div>
            </div>
            <div className="btn">
              <button id="btn">
                Book a Remainder Now
                <br />
                Live On Free <ImBell />
              </button>
            </div>
          </div>
          <div className="slider-inner overlaytwo">
            <img src="./images/ucl.jfif" alt="" className="img-fluid" />

            <div className="  overlaycontenttwo   ">
              <div className=" d-flex align-items-center gap-2 justify-content-between">
                <span id="yellow">
                  {UclTimerDay}
                  <br />
                  <p style={{ fontSize: '1rem' }}>Day</p>
                </span>
                <span id="yellow">
                  {UclTimerHour}
                  <br />
                  <p style={{ fontSize: '1rem' }}>Hour</p>
                </span>
                <span id="yellow">
                  {UclTimerMin}
                  <br />
                  <p style={{ fontSize: '1rem' }}>Minutes</p>
                </span>
                <span id="yellow">
                  {UclTimerSec}
                  <br />
                  <p style={{ fontSize: '1rem' }}>Secounds</p>
                </span>
              </div>
            </div>
            <div className="btn">
              <button id="btn">
                Book a Remainder Now
                <br />
                Live On Free <ImBell />
              </button>
            </div>
          </div>
        </Slider>
      </div>
    );
  
}

export default ImgSlider