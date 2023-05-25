
import { useEffect, useState } from "react";
import { Card, Row, Container, Col, Image } from "react-bootstrap";

import duneImage from "../assets/trending/dune.jpeg";
// import everythingImage from "../assets/trending/everything.jpeg"
// import infiniteImage from "../assets/trending/infinite.jpeg"
// import jokerImage from "../assets/trending/joker.jpeg"
// import lightyearImage from "../assets/trending/lightyear.jpeg"
// import morbiusImage from "../assets/trending/morbius.jpeg"
import axios from "axios"


const Trending = () => {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/discover/movie`, {
            params: {
                api_key: process.env.REACT_APP_TMDB_KEY
            }
        }).then((response) => {
            console.log("datas => ", response)
            setMovies(response.data.results)
        })
        
        
    }, []);
  return (
    <div className="trending">
      <Container >
        <br />
        <h1 className="text-white" id="trending">Trending Movies</h1>
       
        <Row>
            {movies.map((result, index) => {
                return (
                    <Col md={4} className="movieWrapper" key={index}>
                    <Card className="movieImage">
                      <Image src={`${process.env.REACT_APP_IMG_URL}/${result.poster_path}`} alt="test" className="images" />
                      <div className="bg-dark">
                        <div className="p-2 m-1 text-white">
                          <Card.Title className="text-center title">{result.title}</Card.Title>
                          <Card.Text className="text-left overview">
                            {result.overview}
                          </Card.Text>
                          <Card.Text className="text-left">
                            {result.release_date}
                          </Card.Text>
                        </div>
                      </div>
                    </Card>
                  </Col>

                )
            })}
         
        </Row>
      </Container>
    </div>
  );
};

export default Trending;
