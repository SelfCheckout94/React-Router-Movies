import { Link, Route, Switch } from "react-router-dom";
import React, { useEffect, useState } from "react";

import Movie from "./Movies/Movie";
import MovieList from "./Movies/MovieList";
import SavedList from "./Movies/SavedList";
import axios from "axios";

export default function App() {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get("http://localhost:5000/api/movies") // Study this endpoint with Postman
        .then((res) => {
          // Study this response with a breakpoint or log statements
          // and set the response data as the 'movieList' slice of state
          setMovieList(res.data);
        })
        .catch((error) => {
          console.error("Server Error", error);
        });
    };
    getMovies();
  }, []);
  const addToSavedList = (id) => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };
  return (
    <div>
      <SavedList
        list={
          [
            /* This is stretch */
          ]
        }
      />

      {/* <div>Replace this Div with your Routes</div> */}
      <Switch>
        <Route path="/movies/:movieID">
          <Link to="/movies/:movieID">
            <Movie movies={movieList} />
          </Link>
        </Route>
        <Route path="/">
          <MovieList movies={movieList} />
        </Route>
      </Switch>
    </div>
  );
}
