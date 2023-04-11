import React from "react";
import "./Card.css";
import { BsFillCaretLeftFill } from "react-icons/bs";
const Card = (props) => {
  return (
    <div class="card-group">
      {props.movieList.map((movie) => (
        <div class="card">
          <img
            src={movie.profilePicture}
            class="card-img-top"
            alt="movie images"
          />
          <div class="card-body">
            <h5 class="card-title">{movie.title} </h5>
            <h1></h1>
            <a href="/watchlist" class="btn btn-primary">
              Add to WatchList
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
