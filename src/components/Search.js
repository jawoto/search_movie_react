import { Button, Col, Container, Row } from "react-bootstrap";
import { getMovieList, searchMovie } from "./api";
import { useEffect, useState } from "react";

const Search = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [isNotif, setIsNotif] = useState([false])

  useEffect(() => {
    getMovieList().then((response) => {
      setPopularMovies(response);
    });
  }, []);

  const PopularMovieList = () => {
    return popularMovies.map((movie, i) => {
      return (
        <Col md={3} className="Movie-container" key={i}>
          <div className="Movie-wrapper">
            <div className="Movie-title">{movie.title}</div>
            <img
              className="Movie-image"
              src={`${process.env.REACT_APP_IMG_URL}/${movie.poster_path}`}
            />
            <div className="Movie-date">Release Date: {movie.release_date}</div>
            <div className="Movie-rate">Vote Average: {movie.vote_average}</div>
            <div className="Movie-popularity">
              Popularity: {movie.popularity}
            </div>
          </div>
        </Col>
      );
    });
  };

  const search = async (q) => {
    if (q.length > 3) {
      const query = await searchMovie(q);
      setPopularMovies(query.results);
    }
  };

  const notif = () => {
    setIsNotif(!isNotif)
    setTimeout(() => {
      setIsNotif((state) => !state)
    },2000)
  }
  return (
    <div className="search">
      {/* {isNotif && <h3>TERIMAKASIH! HORE</h3>} */}
      {/* <button onClick={notif} className="btn" > 
      {isNotif ? "notifikasi OFF" : "Notifikasi ON"}
      </button> */}
    <Container >
      <Row className="content" id="search">
        <Col>
          <input
            placeholder="Cari Movie ..."
            className="Movie-search"
            onChange={({ target }) => search(target.value)}
          />
        </Col>
      </Row>
      <Row className="">
        <PopularMovieList />
      </Row>
    </Container>
    </div>
  );
};

export default Search;
