import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaPlayCircle, FaHome } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';
import StarRatings from 'react-star-ratings';
const Api_key = 'ba8fb4370828049b4663cb2b12a1d653';
const ImgKey = 'https://image.tmdb.org/t/p/w300';

function Detail() {
  const { id, category } = useParams();
  const [CurrentData, setCurrentData] = useState({});
  const [SportsCombo, setSportsCombo] = useState(false);
  const GetIdData = async () => {
    // const Respdata = await axios.get(
    // `https://api.themoviedb.org/3/discover/movie/?api_key=${Api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2&with_watch_monetization_types=flatrate`
    // );
    //   const GetIdDataInRec = Respdata.data.results.find((x) => x.id==id);
    //         const TopHit = await axios.get(
    // `https://api.themoviedb.org/3/list/5?api_key=${Api_key}&language=en-US`
    //   );
    //   const Seriesdata = await axios.get(
    //     );
    //   const GetIdDataInSeries = Seriesdata.data.results.find((x) => x.id==id);
    switch (category) {
      case 'Trending':
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/trending/movie/week?api_key=${Api_key}`
        );
        const GetIdDatas = data.results.find((x) => x.id == id);

        return setCurrentData(GetIdDatas);
        break;
      case 'Recommeded':
        const Respdata = await axios.get(
          `https://api.themoviedb.org/3/discover/movie/?api_key=${Api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2&with_watch_monetization_types=flatrate`
        );
        const GetIdDataInRec = Respdata.data.results.find((x) => x.id == id);

        return setCurrentData(GetIdDataInRec);
        break;
      case 'Series':
        const Seriesdata = await axios.get(
          `https://api.themoviedb.org/3/discover/tv?api_key=${Api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
        );
        const GetIdDataInSeries = Seriesdata.data.results.find(
          (x) => x.id == id
        );

        return setCurrentData(GetIdDataInSeries);
        break;
      case 'TopHit':
        const TopHit = await axios.get(
          `https://api.themoviedb.org/3/list/5?api_key=${Api_key}&language=en-US`
        );
        const GetIdDataInTH = TopHit.data.items.find((x) => x.id == id);
        // console.log(TopHit)
        return setCurrentData(GetIdDataInTH);
        break;

      case 'Sports':
        const Sports = await axios.get(
          `https://www.thesportsdb.com/api/v1/json/2/all_sports.php`
        );
        const GetIdDataInSports = Sports.data.sports.find(
          (x) => x.idSport == id
        );

        setSportsCombo(true);
        return setCurrentData(GetIdDataInSports);
        break;
      default:
        setSportsCombo(false);

        break;
    }

    // console.log(GetIdDataInSeries)
  };
  useEffect(() => {
    GetIdData();
  }, [id]);

  const desc = `${CurrentData.strSportDescription}`;
  return SportsCombo ? (
    <Iconmsg
      className="text-white Detail"
      style={{
        backgroundImage: `url(${CurrentData.strSportThumb})`,
      }}
      id={'Detail'}
    >
      <div
        className="d-flex sportsicon justify-content-center ms-auto me-auto"
        data-container={'body'}
        data-toggle={'popover'}
        data-placement={'top'}
        data-content={'Live On Going'}
        style={{ backgroundImage: `url(${CurrentData.strSportIconGreen})` }}
      >
        <button className="btn">
          <FaPlayCircle />
        </button>
      </div>
      <div className="text-white sportscontant">
        <h2 className="display-1 m-md-2">{CurrentData.strSport}</h2>
        <h4 className="m-md-4">{CurrentData.strFormat}</h4>
        <div className="m-md-4">
          <span>{desc.substring(0, 1000)}...More</span>
        </div>
      </div>
    </Iconmsg>
  ) : (
    <div
      className="text-white Detail"
      style={{
        backgroundImage: `url(${ImgKey}/${CurrentData.poster_path})`,
      }}
      id={'Detail'}
    >
      <div className="d-flex gap-3 m-md-4 align-items-center ">
        <button className="btn btn-outline-light  rounded-pill  fw-bold">
          <FaPlayCircle /> Play
        </button>
        <button className="btn btn-outline-light rounded-pill p-2 fw-bold">
          +Watchlist
        </button>
      </div>
      <div className="text-white m-md-3">
        <h2 className="display-1 moviehead">
          {CurrentData.original_title ||
            CurrentData.title ||
            CurrentData.name ||
            CurrentData.original_name}
        </h2>
        <div className="d-flex  align-items-center  gap-2 footer">
          <h5 className="mt-3  text-dark fw-bold bg-warning rounded-circle p-3">
            {CurrentData.vote_average}
          </h5>
          <StarRatings
            rating={CurrentData.vote_average}
            starDimension="20px"
            starRatedColor="gold"
            starHoverColor="yellow"
            starEmptyColor="white"
            numberOfStars={10}
            starSpacing="5px"
          />
        </div>
        <div className="d-flex m-md-3 flex-column moviecontent">
          <span className="">{CurrentData.overview}</span>
          <br />
          {/* <span>{CurrentData.popularity}</span> */}
          <span>{CurrentData.release_date || CurrentData.first_air_date}</span>
        </div>
      </div>
      <div
        style={{ marginBottom: '5rem' }}
        className="d-flex justify-content-center mt-5"
      >
        <Link to={'/'}>
          <button className="btn btn-outline-light fw-bolder rounded-pill">
            Back to Home <FaHome />
          </button>
        </Link>
      </div>
    </div>
  );
}

const Iconmsg = styled.div`
  .sportsicon:hover {
    button {
      transform: scale(1.5);
      color: #fff;

      opacity: 1;
      transition: 0s all ease-in-out;
    }
    #Detail {
      background-color: rgba(0, 0, 0, 0);
    }
  }
  button {
    font-size: 2.5rem;
    color: #fff;
    opacity: 0;
  }
`;
export default Detail;
