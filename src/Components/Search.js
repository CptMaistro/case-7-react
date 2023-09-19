import React, { useState, useEffect } from 'react';

function Search() {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    // Fetch the JSON data from the public directory
    fetch('/movies.json')
      .then((response) => response.json())
      .then((data) => setMovies(data.cinema.movies))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // Function to handle search input changes
  const handleSearchChange = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
  };

  // Filter movies based on the search query
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="search-cont">
      <input
        type="text"
        placeholder="Sök..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      {filteredMovies.map((movie) => (
        <div key={movie.title}>{movie.title}</div>
      ))}
    </div>
  );
}

export default Search;