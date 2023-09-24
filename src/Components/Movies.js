import React, { useState, useEffect } from 'react';
// import './App.css';


function Movies() {
  // State to store cinema data
  const [cinemaData, setCinemaData] = useState(null);

  // State to track if application is loading
  const [loading, setLoading] = useState(true);

  // State to track any error message
  const [error, setError] = useState(null);

  // Fetch the JSON data when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch the JSON data from the local file 'cinema.json'
        const response = await fetch('../movies.json');

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data = await response.json();
        setCinemaData(data.cinema); 
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Check if loading; if true, display a loading message
  if (loading) {
    return <div>Loading...</div>;
  }

  // Check if there is an error; if true, display it
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className='moviesCont'>
      <h2>Movies:</h2>
      <ul className='movieCard'>
        <div className='movie-info'>
        {cinemaData.movies.map((movie, index) => (
          <li key={index}>
            <img src={movie.picture} alt=''/>
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
        </div>
      </ul>
    </div>
  );
}

export default Movies;
