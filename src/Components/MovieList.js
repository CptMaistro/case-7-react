import React from 'react';

function MovieList({ cinemaData }) {
  return (
    <ul className='movieCard'>
      {cinemaData.movies.map((movie, index) => (
        <li key={index}>
          <img src={movie.picture} alt='' />
          <h3>{movie.title}</h3>
          <p>Duration: {movie.duration}</p>
          <h4>Showtimes:</h4>
          <ul>
            {movie.shows.map((show, showIndex) => (
              <li key={showIndex}>
                <p>Time: {show.time}</p>
                <p>Room: {show.room}</p>
                <p>Seats:</p>
                <ul>
                  {show.seats.map((seat, seatIndex) => (
                    <li key={seatIndex}>
                      Seat {seat.seatNumber} - {seat.booked ? "Booked" : "Available"}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
}

export default MovieList;
