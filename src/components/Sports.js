import {FaStar} from 'react-icons/fa'
import styled from "styled-components"
function SportsCompo(props) {
  return (
    <div className="text-white   trendmovies">
      <Cards className="card mt-2 w-auto bg-transparent border-0 p-2">
        <div className=" card-body ">
          <img
            src={`${props.strSportThumb}`}
            alt={props.idSport}
            className=" img-fluid"
          />
        </div>
        <div className="footer d-grid">
          <span>{props.strSport}</span>

          <span className="ms-auto d-flex align-items-center gap-1">
            <FaStar /> {props.strFormat}
          </span>
          <img src={props.strSportIconGreen} alt="" />
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

export default SportsCompo
