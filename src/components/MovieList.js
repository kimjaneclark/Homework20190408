import React, { Component} from "react";
import MovieDetail from "./MovieDetail";

class MovieList extends Component {
  render(){
    const movieNodes = this.props.data.map(movie => {
      return (
        <MovieDetail name={movie.name} key={movie.id}> {movie.url}</MovieDetail>



      );
    });




    return(
      <div className="movie-list">
        {movieNodes}
      </div>

    )
  }
}

export default MovieList;
