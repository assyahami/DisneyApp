import { FaStar } from 'react-icons/fa';
import { BsFillCalendar2CheckFill } from 'react-icons/bs';
import styled from 'styled-components';
const ImgKey = 'https://image.tmdb.org/t/p/w300';
function TopHit(props) {
  return (
    <div className="text-white   trendmovies">
      <Cards className="card mt-2 w-auto bg-transparent border-0 p-2">
        <div className=" card-body ">
          <img
            src={`${ImgKey}/${props.poster_path}`}
            alt={props.original_language}
            className=" img-fluid"
            style={{ width: '250px', height: '300px' }}
          />
        </div>
        <div className="footer d-grid">
          <span>{props.original_title || props.title}</span>

          <span className="ms-auto d-flex align-items-center gap-1">
            <FaStar /> {props.vote_average}
          </span>
          <span className="ms-auto d-flex align-items-center gap-1 justify-content-between">
            <BsFillCalendar2CheckFill />
            {props.release_date}
          </span>
        </div>
      </Cards>
    </div>
  );
}
const Cards = styled.div`
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
    transition: 0.5s all ease-in-out;
    .footer {
      transform: translateY(0%);
    }
  }
`;

export default TopHit;
