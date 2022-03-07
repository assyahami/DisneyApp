import React from 'react'
import styled from "styled-components"
function Viewers() {
  return (
    <section id="viewers">
      <Anime className="inner-view">
        <img src="./images/viewers-disney.png" alt="" />
        <video
          autoPlay={true}
          loop={true}
          playsInline={true}
          muted={true}
          type="video/mp4"
        >
          <source src="./videos/1564674844-disney.mp4" />
        </video>
      </Anime>

      <Anime className="inner-view">
        <img src="./images/viewers-pixar.png" alt="" />
        <video
          autoPlay={true}
          loop={true}
          playsInline={true}
          muted={true}
          type="video/mp4"
        >
          <source src="./videos/1564676714-pixar.mp4" />
        </video>
      </Anime>

      <Anime className="inner-view">
        <img src="./images/viewers-marvel.png" alt="" />
        <video
          autoPlay={true}
          loop={true}
          playsInline={true}
          muted={true}
          type="video/mp4"
        >
          <source src="./videos/1564676115-marvel.mp4" />
        </video>
      </Anime>

      <Anime className="inner-view">
        <img src="./images/viewers-starwars.png" alt="" />
        <video
          autoPlay={true}
          loop={true}
          playsInline={true}
          muted={true}
          type="video/mp4"
        >
          <source src="./videos/1608229455-star-wars.mp4" />
        </video>
      </Anime>

      <Anime className="inner-view">
        <img src="./images/viewers-national.png" alt="" />
        <video
          muted={true}
          autoPlay={true}
          loop={true}
          type="video/mp4"
          playsInline={true}
        >
          <source src="./videos/1564676296-national-geographic.mp4" />
        </video>
      </Anime>
    </section>
  );
}
const Anime=styled.div`
&:hover{
  cursor:pointer;
  video{
    opacity:1;
  }
}
`
export default Viewers