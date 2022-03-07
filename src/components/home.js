import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ImgSlider from './ImgSlider';
import Viewers from './viewers';
import NewDisney from './NewDisney';
import Recommeded from './Recommeded';
import Footer from './Footer';
import TopHit from './Tophit';
import Series from './Series';
import Sportscompo from './Sports';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';

const Api_key = 'ba8fb4370828049b4663cb2b12a1d653';
function Home() {
  const [TrendData, setTrendData] = useState([]);
  const [RecData, setRecData] = useState([]);
  const [SeriesData, setSeriesData] = useState([]);
  const [TopHitData, setTopHitData] = useState([]);
  const [SportsData, setSportsData] = useState([]);
  const [SliderNo, setSliderNo] = useState(false);
  const [loading, setLoading] = useState(false);

  const TrendingData = async () => {
    setLoading(true);
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/week?api_key=${Api_key}`
    );
    const Respdata = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${Api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=2&with_watch_monetization_types=flatrate`
    );
    const Seriesdata = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=${Api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`
    );
    const TopHit = await axios.get(
      `https://api.themoviedb.org/3/list/5?api_key=${Api_key}&language=en-US`
    );

    setTrendData(data.results);
    setRecData(Respdata.data.results);
    setLoading(false);
    setSeriesData(Seriesdata.data.results);
    setTopHitData(TopHit.data.items);
  };
  const SportsDB = async () => {
    const Sports = await axios.get(
      `https://www.thesportsdb.com/api/v1/json/2/all_sports.php`
    );
    setSportsData(Sports.data.sports);
  };
  window.addEventListener('resize', () => {
    if (window.innerWidth < 780) {
      return setSliderNo(true);
    } else {
      return setSliderNo(false);
    }
  });
  let sliders = SliderNo ? 3 : 5;
  useEffect(() => {
    TrendingData();
    SportsDB();
    if (window.innerWidth < 780) {
      return setSliderNo(true);
    } else {
      return setSliderNo(false);
    }
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: sliders,
    slidesToScroll: 3,
    cssEase: 'linear',
  };

  return (
    <main className="">
      <section>
        <ImgSlider />
      </section>
      <Viewers />
      <article>
        <section className="mt-5">
          {loading ? (
            <div className="m-5 text-center">
              <span className="spinner-grow text-info text-center m-5"></span>
            </div>
          ) : (
            <div className="header ">
              <h2 className="text-white ms-4 header">Latest and Trend</h2>
            </div>
          )}
          <Slider {...settings}>
            {TrendData.map((Data, index) => {
              if (loading) {
                return (
                  <div className="m-5 text-center">
                    <span className="spinner-grow text-info m-5 text-center"></span>
                  </div>
                );
              } else {
                return (
                  <Link to={`/Detail/Trending/${Data.id}`}>
                    <NewDisney key={Data.id} loading={loading} {...Data} />
                  </Link>
                );
              }
            })}
          </Slider>
        </section>
        <section className="mt-5">
          {loading ? (
            <div className="m-5 text-center">
              <span className="spinner-grow text-center text-info m-5"></span>
            </div>
          ) : (
            <div className="header ">
              <h2 className="text-white ms-4 header">Recommeded For You</h2>
            </div>
          )}
          <Slider {...settings}>
            {RecData.map((Data, index) => {
              if (loading) {
                return (
                  <div className="m-5 text-center">
                    <span className="spinner-grow  text-center text-info m-5"></span>
                  </div>
                );
              } else {
                return (
                  <Link to={`/Detail/Recommeded/${Data.id}`}>
                    <Recommeded key={index} {...Data} loading={loading} />
                  </Link>
                );
              }
            })}
          </Slider>
        </section>
        <section className="mt-5">
          {loading ? (
            <div className="m-5 text-center">
              <span className="spinner-grow text-info m-5 text-center"></span>
            </div>
          ) : (
            <div className="header ">
              <h2 className="text-white ms-4 header">Top Series For You</h2>
            </div>
          )}{' '}
          <Slider {...settings}>
            {SeriesData.map((Data, index) => {
              if (loading) {
                return (
                  <div className="m-5 text-center">
                    <span className="spinner-grow text-info text-center m-5"></span>
                  </div>
                );
              } else {
                return (
                  <Link to={`/Detail/Series/${Data.id}`}>
                    <Series {...Data} key={index} loading={loading} />;
                  </Link>
                );
              }
            })}
          </Slider>
        </section>
        <section className="mt-5">
          {loading ? (
            <div className="m-5">
              <span className="spinner-grow text-info m-5"></span>
            </div>
          ) : (
            <div className="header ">
              <h2 className="text-white ms-4 header">
                Top Hit Movies & Series
              </h2>
            </div>
          )}
          <Slider {...settings}>
            {TopHitData.map((Data, index) => {
              if (loading) {
                return (
                  <div className="m-5 text-center">
                    <span className="spinner-grow text-center text-info m-5"></span>
                  </div>
                );
              } else {
                return (
                  <Link to={`/Detail/TopHit/${Data.id}`}>
                    <TopHit {...Data} key={index} loading={loading} />
                  </Link>
                );
              }
            })}
          </Slider>
        </section>
        <section className="mt-5">
          {loading ? (
            <div className="m-5 text-center">
              <span className="spinner-grow text-info text-center text-center m-5"></span>
            </div>
          ) : (
            <div className="header ">
              <h2 className="text-white ms-4 header">
                Live Sports & Hightlights
              </h2>
            </div>
          )}
          <Slider {...settings}>
            {SportsData.slice(0, 12).map((Data, index) => {
              if (loading) {
                return (
                  <div className="m-5 text-center">
                    <span className="spinner-grow text-info text-center m-5 text-center "></span>
                  </div>
                );
              } else {
                return (
                  <Link to={`/Detail/Sports/${Data.idSport}`}>
                    <Sportscompo key={index} {...Data} loading={loading} />;
                  </Link>
                );
              }
            })}
          </Slider>
        </section>
        <section className="mt-5">
          {loading ? (
            <div className="m-5 text-center">
              <span className="spinner-grow text-center text-info m-5 text-center "></span>
            </div>
          ) : (
            <div className="header ">
              <h2 className="text-white ms-4 header">Hight Rated Sports</h2>
            </div>
          )}
          <Slider {...settings}>
            {SportsData.slice(14, 30).map((Data, index) => {
              if (loading) {
                return (
                  <div className="m-5">
                    <span className="spinner-grow text-info m-5 text-center "></span>
                  </div>
                );
              } else {
                return (
                  <Link to={`/Detail/Sports/${Data.idSport}`}>
                    <Sportscompo
                      {...Data}
                      key={Data.idSport}
                      loading={loading}
                    />
                    ;
                  </Link>
                );
              }
            })}
          </Slider>
        </section>
      </article>
      <section>
        <div className="d-flex justify-content-center mt-5">
          <button className="btn btn-outline-light fw-bolder rounded-pill">
            Load More....
          </button>
        </div>
      </section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}

export default Home;
