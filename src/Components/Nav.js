const Nav = () => {
    return (
      <nav className="navComp">
        <div className="links">
        {/* Creates a link to the Home page */}
          <a href="/" style={{ marginRight: '10px' }}>
            Home
          </a>
          {/* Creates a link to the Movies page */}
          <a href="/Movies" style={{ marginRight: '10px' }}>
            Movies
          </a>
          {/* Creates a link to the Search page */}
          <a href="/search">Search</a>
        </div>
      </nav>
    );
  };
  
  export default Nav;