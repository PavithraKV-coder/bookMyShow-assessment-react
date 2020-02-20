import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class MovieCard extends Component {
  render() {
    
    const { movie } = this.props;
    const DEFAULT_PLACEHOLDER_IMAGE = "https://m.media-amazon.com/images/M/MV5BZTYxZDU3MWItMDNmMC00YTNlLTlkNDEtN2Q0NmU4NDBjZjhmXkEyXkFqcGdeQXVyMjc4MDczNTg@._V1_SX300.jpg"
    const poster = movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
    
    return (
      <div className="col-md-3 mb-5">
        <div className="card card-body bg-light text-center h-70">
          <img className="w-100 h-30 mb-2" src={poster} alt="Movie Cover" />
          <h6 className="text-blue card-title">
            {movie.Title} - {movie.Year}
          </h6>
          <Link className="btn btn-secondary btn-sm" to={'/movie/' + movie.imdbID}>
            Book Tickets 
          </Link>
        </div>
      </div>
    );
  }
}

export default MovieCard;
