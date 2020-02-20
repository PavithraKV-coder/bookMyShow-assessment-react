import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import DayPicker from '.././DayPicker/DayPicker';
import { fetchMovie, setLoading } from '../../actions/fetchActions';
import Spinner from '../layout/Spinner';

export class Movie extends Component {

  componentDidMount() {
    this.props.fetchMovie(this.props.match.params.id);
    this.props.setLoading();
  }

  render() {
    const { loading, movie } = this.props;
    const DEFAULT_PLACEHOLDER_IMAGE = "https://m.media-amazon.com/images/M/MV5BZTYxZDU3MWItMDNmMC00YTNlLTlkNDEtN2Q0NmU4NDBjZjhmXkEyXkFqcGdeQXVyMjc4MDczNTg@._V1_SX300.jpg"
    const poster = movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
    
    let movieInfo = (
      <div className="container">
        <div className="row">
          <div className="col-md-12 mb-3">
            <Link to="/" className="btn btn-primary">
                Go Back 
              </Link>
          </div>
          <div className="col-md-3 card card-body h-50 ml-3">
            <img src={poster} className="w-100 thumbnail" alt="Poster" />
          </div>
          <div className="col-md-8">
            <h2 className="mb-4">{movie.Title}</h2>
            <div className="day-picker" ref={(el) => {this.dayPicker = el}}>
              <ReactCSSTransitionGroup transitionName="NoCssTransition" transitionLeave={true} transitionLeaveTimeout={400} transitionEnter={false}>
                {<DayPicker />
                }
              </ReactCSSTransitionGroup>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="card card-body bg-dark my-3 ml-3">
              <div className="col-md-12">
                <h3 className="text-light">About </h3>
                  <p className="text-light">{movie.Plot}</p>
                <ul className="list-group">
                  <li className="list-group-item">
                    <strong>Genre:</strong> {movie.Genre}
                  </li>
                  <li className="list-group-item">
                    <strong>Released:</strong> {movie.Released}
                  </li>
                  <li className="list-group-item">
                    <strong>Rated:</strong> {movie.Rated}
                  </li>
                  <li className="list-group-item">
                    <strong>IMDB Rating:</strong> {movie.imdbRating}
                  </li>
                  <li className="list-group-item">
                    <strong>Director:</strong> {movie.Director}
                  </li>
                  <li className="list-group-item">
                    <strong>Writer:</strong> {movie.Writer}
                  </li>
                  <li className="list-group-item">
                    <strong>Actors:</strong> {movie.Actors}
                  </li>
                </ul>
             
              </div>
            </div>
          </div>
      </div>
    );

    let content = loading ? <Spinner /> : movieInfo;
    return <div>{content}</div>;
  }
}

const mapStateToProps = state => ({
  loading: state.movies.loading,
  movie: state.movies.movie
});

export default connect(
  mapStateToProps,
  { fetchMovie, setLoading }
)(Movie);
