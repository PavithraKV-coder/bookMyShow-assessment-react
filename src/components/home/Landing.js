import React, { Component } from 'react';
import { connect } from 'react-redux';
import MoviesContainer from './MoviesContainer';
import { fetchMovies} from '../../actions/fetchActions';
import Spinner from '../layout/Spinner';


export class Landing extends Component {
  
  componentWillMount(){
    this.props.fetchMovies('movie');
  }
  
  render() {
    const { loading } = this.props;
    return (
      <div className="container">
        {loading ? <Spinner /> : <MoviesContainer />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.movies.loading,
});

export default connect(mapStateToProps, { fetchMovies })(Landing);
