import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./Movie.css";

function Movie({ id, title, year, genres, poster, summary }) {
  return (
    <Link
      to={{
        pathname: `/movie-detail/${id}`,
        state: {
          title,
          year,
          genres,
          poster,
          summary
        }
      }}
    >
      <div>
        <img src={poster} alt={title} title={title} />
        <h3>{title}</h3>
        <h6>{year}</h6>
        <p>{summary}</p>
        <ul>
          {genres.map((genre, index) => (
            <li key={index}>{genre}</li>
          ))}
        </ul>
      </div>
    </Link>
  );
}

export default Movie;
