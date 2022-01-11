import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroller";
import { Navigate, useNavigate } from "react-router-dom";

function ContentCards() {
  /* This part is for fetching games */
  const [games, setGames] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(2);

  const key = "72b10aa7e29d4f42b8b083d2e208b77b";

  /* This part is for ML results */
  const [ratingsML, setRatingsML] = useState(
    require("../data/rfjsonOrdered.json")
  );
  const [more, setMore] = useState(true);
  const [ratings, setRating] = useState([]);
  const [countedLast, setCountedLast] = useState(0);

  useEffect(() => {
    const getRatings = () => {
      let rating = [];

      for (let i = 0; i < 10; i++) {
        rating[i] = ratingsML[i];
      }
      setCountedLast(countedLast + 10);

      setRating(rating);
    };

    getRatings();
  }, []);

  const recommendMore = () => {
    let rating = [];
    if (ratingsML[countedLast + 7] != null) {
      for (let i = 0; i < 7; i++) {
        rating[i] = ratingsML[i + countedLast];
      }
      setCountedLast(countedLast + 7);
    } else {
      while (ratingsML[countedLast] != null) {
        rating[countedLast] = ratingsML[countedLast];
        countedLast++;
      }
      setMore(false);
    }
    setRating((ratings) => [...ratings, ...rating]);
  };

  /* games from API */
  useEffect(() => {
    const getGames = async () => {
      const res = await fetch(`https://api.rawg.io/api/games?key=${key}&page=1`)
        .then((res) => {
          if (!res.ok) {
            throw Error("Couldn't fetch data for that resource");
          }
          res.json().then((data) => {
            const results = data.results;
            setGames(results);
          });
        })
        .catch((error) => {
          console.log(error.message);

          return <useNavigate to="/404" />; /* This doesn't work for now*/
        });
    };

    getGames();
  }, []);

  const fetchGames = async () => {
    const res = await fetch(
      `https://api.rawg.io/api/games?key=${key}&page=${page}`
    );

    const data = await res.json();
    const results = data.results;
    return results;
  };

  const fetchData = async () => {
    await fetchGames()
      .then((gamesFromServer) => {
        setGames((games) => [...games, ...gamesFromServer]);
        if (gamesFromServer.length === 0 || gamesFromServer.length < 20) {
          setHasMore(false);
        }
        setPage(page + 1);
      })
      .catch((error) => {
        console.log(error.message);

        return <Navigate to="/404" />; /* This doesn't work for now*/
      });
  };

  return (
    <>
      <div className="m-auto bg-success mt-5 pt-3">
        <div className="d-flex mt-2 m-auto">
          <Container style={{ width: "28rem" }} className="mt-1 m-auto">
            <h3 className="text-center text-light">Our Recommendations</h3>
            <InfiniteScroll
              dataLength={ratings.length} //This is important field to render the next data
              loadMore={recommendMore}
              hasMore={more}
              loader={
                <h4 className="text-center text-light">Loading More..</h4>
              }
              endMessage={
                <h3 className="text-center text-light">
                  Those were all we had to offer!
                </h3>
              }
            >
              <Row className="m-auto">
                {ratings.map((ratings, index) => {
                  return (
                    <>
                      <Col className="my-1 col-9 m-auto">
                        <Card
                          className="border-3 shadow m-auto bg-light"
                          key={index}
                        >
                          <Card.Body className="card-text">
                            <div className="d-flex justify-content-center m-auto">
                              <h5 className="card-title text-dark text-center">
                                {ratings.name}
                              </h5>
                            </div>
                            <div className="d-flex m-auto">
                              <p className="card-text">
                                <strong>Rating: </strong>
                                {ratings.Label}
                                <br />
                                <strong>Total rated: </strong>
                                {ratings.ratings_count}
                                <br />
                                <strong>Total suggested: </strong>
                                {ratings.suggestions_count}
                              </p>
                              <Button
                                className="btn btn-danger m-auto shadow rounded-pill"
                                href={
                                  "https://store.steampowered.com/search/?term=" +
                                  ratings.name
                                }
                                target="_blank"
                              >
                                Store
                              </Button>
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                    </>
                  );
                })}
              </Row>
            </InfiniteScroll>
          </Container>

          <Container className="m-auto">
            <InfiniteScroll
              dataLength={games.length} //This is important field to render the next data
              loadMore={fetchData}
              hasMore={hasMore}
              loader={
                <h4 className="text-center text-light">Loading More..</h4>
              }
              endMessage={
                <h3 className="text-center text-light">
                  This is the end, my only friend, the end... (*The Doors)
                </h3>
              }
            >
              <Row className="m-auto">
                {console.log(games)}
                {games.map((games, index) => {
                  return (
                    <>
                      <Col className="my-2 col-3 m-auto">
                        <Card className="border-3 shadow m-auto" key={index}>
                          <Card.Img
                            style={{ height: "10.5rem" }}
                            src={games.background_image}
                          />
                          <Card.Body class="card-body my-1">
                            <div className="d-flex justify-content-center m-auto">
                              <h5 className="card-title">{games.name}</h5>
                            </div>
                            <p className="card-text">
                              Rating: {games.rating} <br />
                              <p className="card-text overflow-hidden">
                                Genres:
                                {games.genres.map((games) => {
                                  return <>{" " + games.name}</>;
                                })}
                              </p>
                            </p>

                            <div className="d-flex justify-content-center m-auto">
                              <Button
                                className="btn btn-secondary m-auto shadow rounded-pill"
                                href="/GamePage"
                              >
                                Details
                              </Button>
                              <Button
                                className="btn btn-primary m-auto shadow rounded-pill"
                                href={
                                  "https://www.youtube.com/results?search_query=" +
                                  games.name
                                }
                                target="_blank"
                              >
                                Videos
                              </Button>
                              <Button
                                className="btn btn-success m-auto shadow rounded-pill"
                                href={
                                  "https://store.steampowered.com/search/?term=" +
                                  games.name
                                }
                                target="_blank"
                              >
                                Store
                              </Button>
                            </div>
                          </Card.Body>
                        </Card>
                      </Col>
                    </>
                  );
                })}
              </Row>
            </InfiniteScroll>
          </Container>
        </div>
      </div>
    </>
  );
}

export default ContentCards;
