import React, { useEffect, useState } from "react";

import axios from "axios";
import { useParams } from "react-router-dom";

export default function Movie(props) {
  const { movies } = props;
  const [movie, setMovie] = useState();

  const { movieID } = useParams();
  console.log({ movieID });
  // const individualMovie =
  //   movies.find((movie) => {
  //     console.log(movie.id);
  //     console.log({ movieID });
  //     return movie.id == movieID;
  //   }) || {};
  // Change ^^^ that line and use a hook to obtain the :id parameter from the URL
  // console.log({ movies });
  // console.log(individualMovie);
  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/movies/${movieID}`) // Study this endpoint with Postman
      .then((res) => {
        // Study this response with a breakpoint or log statements
        // and set the response data as the 'movie' slice of state
        setMovie(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
    // This effect should run every time time
    // the `id` changes... How could we do this?
  }, [movieID]);

  // Uncomment this only when you have moved on to the stretch goals
  // const saveMovie = evt => { }

  if (!movie) {
    return <div>Loading movie information...</div>;
  }

  const { title, director, metascore, stars } = movie;
  console.log(movie);
  return (
    <div className="save-wrapper">
      <div className="movie-card">
        <h2>{title}</h2>
        <div className="movie-director">
          Director: <em>{director}</em>
        </div>
        <div className="movie-metascore">
          Metascore: <strong>{metascore}</strong>
        </div>
        <h3>Actors</h3>

        {stars.map((star) => (
          <div key={star} className="movie-star">
            {star}
          </div>
        ))}
      </div>
      <div className="save-button">Save</div>
    </div>
  );
}
