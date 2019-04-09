import React, { Component } from "react";

class MovieDetail extends Component {
  render(){
    return (
      <div className ="movie-detail">
        <h4>{this.props.name}</h4>
        <p>{this.props.children}</p>
      </div>
    );
  }


}

export default MovieDetail;
