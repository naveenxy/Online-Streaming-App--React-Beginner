import React, { useReducer } from "react";
import "./MovieCards.css";
import Card from "./UI/Card";
import { AiFillCaretRight } from "react-icons/ai";
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
const movies = [
  {
    title: "Master 1",
    profilePicture:
      "https://images.unsplash.com/photo-1606829192980-9a547ffc918c?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=800&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTEyMjE0Ng&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1900",
    description: "a small description about the movie",
  },
  {
    title: "Master 2",
    profilePicture:
      "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg",
    description: "a small description about the movie",
  },
  {
    title: "Master 3",
    profilePicture:
      "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg",
    description: "a small description about the movie",
  },
  {
    title: "Master 4",
    profilePicture:
      "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg",
    description: "a small description about the movie",
  },
  {
    title: "Master 5",
    profilePicture:
      "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg",
    description: "a small description about the movie",
  },
  {
    title: "Master 6",
    profilePicture:
      "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg",
    description: "a small description about the movie",
  },
  {
    title: "Master 7",
    profilePicture:
      "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg",
    description: "a small description about the movie",
  },
  {
    title: "Master 8",
    profilePicture:
      "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg",
    description: "a small description about the movie",
  },
  {
    title: "Master 9",
    profilePicture:
      "https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg",
    description: "a small description about the movie",
  },
];
const Categories = [
  "Latest Movies",
  "New release movies",
  "Movies from the last Decade",
];
const pagination = (state, action) => {
  if (action.type === "RIGHT") {
    console.log("right");
    return { start: state.start + 6, end: state.end + 6 };
  } else if (action.type === "LEFT") {
    console.log("left");
    return { start: state.start - 6, end: state.end - 6 };
  }
  return { start: 0, end: 4 };
};

const MovieCards = (props) => {
  const [movieState, movieDispatch] = useReducer(pagination, {
    start: 0,
    end: 6,
  });
  function right_btn() {
    movieDispatch({ type: "RIGHT" });
  }
  function left_btn() {
    movieDispatch({ type: "LEFT" });
  }

  return (
    <div className="movie-list">



      
      <div className="movie-header">
        <h1>Latest Movies </h1>
     {props.isLoggedIn ? <a href="/movies">
          See More <AiFillCaretRight />
        </a> :<a href="/login">
          See More <AiFillCaretRight />
        </a> }


        
      </div>
      <Card movieList={movies.slice(movieState.start, movieState.end)} />
      {movieState.start == 0 ? (
        <div className=".btn_hidden"></div>
      ) : (
        <div className="forward_btn">
          <BsFillCaretLeftFill onClick={left_btn} />
        </div>
      )}
      {movieState.end >= movies.length ? (
        <div className=".btn_hidden"></div>
      ) : (
        <div className="backward_btn">
          <BsFillCaretRightFill onClick={right_btn} />
        </div>
      )}
    </div>
  );
};
/*
onClick={movieDispatch({type:"LEFT"})}
onClick={movieDispatch({type:"RIGHT"})}
*/
export default MovieCards;
