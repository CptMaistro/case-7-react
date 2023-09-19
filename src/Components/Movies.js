import cinemaData from '../movies.json';

  function Movies() {
    // Extract the "movies" array from the imported JSON data
    const movies = cinemaData.cinema.movies;
  
    return (
      <div>
        <h1>Movies</h1>
        <ul>
          {movies.map((movie, index) => (
            <li key={index}>
              <h2>{movie.title}</h2>
              <p>Duration: {movie.duration}</p>
              {movie.shows.length > 0 ? (
                <div>
                  <h3>Showtimes:</h3>
                  <ul>
                    {movie.shows.map((show, showIndex) => (
                      <li key={showIndex}>
                        <p>Time: {show.time}</p>
                        <p>Room: {show.room}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <p>No showtimes available</p>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default Movies;