import React, { Component } from 'react';

import { connect } from 'react-redux';

import {
  searchMovie,
  fetchMovies,
  setLoading
} from '../../actions/fetchActions';

export class SearchForm extends Component {
  onChange = e => {
    this.props.searchMovie(e.target.value);
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.fetchMovies(this.props.text);
    this.props.setLoading();
  };

  render() {
    return (
      <div className="mb-4">
        <form id="searchForm" className="row" onSubmit={this.onSubmit}>
            <div className="col-md-4">
                <input
                    type="text"
                    className="form-control"
                    name="searchText"
                    placeholder="Search for Movies ..."
                    onChange={this.onChange}
                />
            </div>
            <div className="col-md-4">
                <button type="submit" className="btn btn-primary btn-bg">
                    Search
                </button>
            </div>
            
        </form>
    </div>
    );
  }
}

const mapStateToProps = state => ({
  text: state.movies.text
});

export default connect(
  mapStateToProps,
  { searchMovie, fetchMovies, setLoading }
)(SearchForm);
