import React, { Component } from "react";
import { getMovies } from "../service/fakeMovieService";

class Movies extends Component {
  state = {
    movies: getMovies(),
  };

  handleDelete = (movie) => {
    console.log(movie);
    const movies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies: movies });
  };
  render() {
    console.log(this.state.movies);

    if (this.state.movies.length === 0)
      return <h1>There are no movies in database</h1>;

    return (
      <>
        <h1 style={{ textAlign: "center" }}>
          Showing {this.state.movies.length} movies in the datebase
        </h1>
        <table className="table">
          <thead>
            <tr>
              {/* <th>Sr</th> */}
              <th>Title</th>
              <th>Genere</th>
              <th>Stock</th>
              <th>Rate</th>
              <th>Action </th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                {/* <td>{abc + 1}</td> */}
                <td>{movie.title}</td>

                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    );
  }
}

export default Movies;
