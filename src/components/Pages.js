import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StarRatings from 'react-star-ratings';
import { BsFillCalendar2CheckFill } from 'react-icons/bs';
import { MdOutlineLiveTv } from 'react-icons/md';
import { useParams,Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaHome } from 'react-icons/fa';
const Api_key = 'ba8fb4370828049b4663cb2b12a1d653';
const ImgKey = 'https://image.tmdb.org/t/p/w300';
function Pages() {
  const { category } = useParams();
  const [Page, setPage] = useState([]);
  const [Loading, setLoading] = useState(false);
  const [SportsOn, setSportsOn] = useState(false);
  const [PageHeading, setPageHeading] = useState('');
 const FetchDatas=async ()=>{
 switch (category) {
   case 'Movies':
     setLoading(true);
     const Respdata = await axios.get(
       `https://api.themoviedb.org/3/discover/movie/?api_key=${Api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2&with_watch_monetization_types=flatrate`
     );
     let Movies = Respdata.data.results;
     setLoading(false);
     setSportsOn(false);
     setPageHeading('Top Picks Movies');
     return setPage(Movies);
   case 'TvSeries':
     setLoading(true);
     const Seriesdata = await axios.get(
       `https://api.themoviedb.org/3/discover/tv?api_key=${Api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
     );
     let TvSeries = Seriesdata.data.results;
     setSportsOn(false);
     setLoading(false);

     setPageHeading('Top Picks Series For You');
     return setPage(TvSeries);

   case 'Sports':
     setLoading(true);
     const Sportsdata = await axios.get(
       `https://www.thesportsdb.com/api/v1/json/2/all_sports.php`
     );
     let Sports = Sportsdata.data.sports;
     setLoading(false);
     setSportsOn(true);
     setPageHeading('Sports Live & Highlights');
     return setPage(Sports);
     default:
     setLoading(false);  
     break
 }
 }
  useEffect(() => {
 FetchDatas()
  },[category]);
  console.log(Page);
  return (
    <aritcle className="pages mt-5">
      <div className="text-white mt-5 "></div>
      <br />
      <br />
      <section className="text-white mt-5 ms-3">
        <div className="">
          <h2>{Loading||PageHeading}</h2>
        </div>
        <div className="d-flex flex-wrap justify-content-between align-items-center pagescontant">
          {Page.map((item) => {
            if (Loading) {
              return (
                <div className="m-5">
                  <span className="spinner-grow text-info m-5 text-center "></span>
                </div>
              );
            } else {
              return (
                <Pagination
                  key={item.id || item.Sport}
                  {...item}
                  SportsMode={SportsOn}
                />
              );
            }
          })}
        </div>
      </section>
        <section>
        <div
        style={{marginBottom:"5rem"}}>
        </div>
        <div
        style={{marginBottom:"5rem"}}
        className="d-flex justify-content-center mt-5">
          <Link to={'/'}>  
          <button className="btn btn-outline-light fw-bolder rounded-pill">Back to Home <FaHome/></button>
            </Link>
          </div>
      <div className="mb-3"></div>
      </section>
    </aritcle>
  );
}

const Pagination = (props) => {
  let {  original_name, vote_average, first_air_date, poster_path } =
    props;
  let { strFormat, strSportThumb, strSport, SportsMode, strSportIconGreen } =
    props;
  return (
    <div className="text-white   trendmovies">
      <Cards className="card mt-2 w-auto bg-transparent border-0 p-2">
        <div className=" card-body ">
          {SportsMode ? (
            <img
              src={`${strSportThumb}`}
              alt={props.original_language}
              className=" img-fluid"
              style={{ width: '250px', height: '300px' }}
            />
          ) : (
            <img
              src={`${ImgKey}/${poster_path}`}
              alt={props.original_language}
              className=" img-fluid"
              style={{ width: '250px', height: '300px' }}
            />
          )}
        </div>
        <div className="footer d-grid">
          <h4>{original_name || props.title || strSport}</h4>

          {SportsMode ? (
            <img
              src={`${strSportIconGreen}`}
              alt={`${strSport}`}
              className="w-50 "
            />
          ) : (
            <StarRatings
              rating={vote_average}
              starDimension="20px"
              starRatedColor="gold"
              starHoverColor="yellow"
              starEmptyColor="white"
              numberOfStars={10}
              starSpacing="2px"
            />
          )}

          <span className="ms-auto d-flex me-auto mt-3 align-items-center gap-1 justify-content-between">
            {SportsMode ? <MdOutlineLiveTv /> : <BsFillCalendar2CheckFill />}
            {first_air_date || props.release_date || strFormat}
          </span>
        </div>
      </Cards>
    </div>
  );
};
const Cards = styled.div`
  &:hover {
    cursor: pointer;
    transform: scale(1);
    transition: 0.5s all ease-in-out;
    .footer {
      padding: 1.5rem;
      transform: translateY(-15%);
      opacity: 1;
    }
  }
  .footer {
    bottom: 15%;
    height: fit-content;
    opacity: 0;
  }
`;
export default Pages;
