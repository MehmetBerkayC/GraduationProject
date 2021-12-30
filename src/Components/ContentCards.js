import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroller";
import { Link, Navigate } from "react-router-dom";

const mlResults = require("../data/csvjson.json");
let mlRes = [];
const gamedata = require("../data/gamedatafinal.json");
let gameinfo = [];
let counter = 0;

let traverse = () => {
  // Cut the JSON data into N games
  for (let i = 0; i < 50; i++) {
    gameinfo[i] = gamedata[i];
    mlRes[i] = mlResults[i];
    counter++;
  }

  // Display what you did
  // for (let i = 0; i < gameinfo.length; i++) {
  //   console.log(gameinfo[i]);
  // }
};

function ContentCards() {
  const [games, setGames] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(2);
  const key = "72b10aa7e29d4f42b8b083d2e208b77b";

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

          return <Navigate to="/404" />; /* This doesn't work for now*/
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
        <div>{traverse()}</div>

        <div className="d-flex m-auto">
          <Container style={{ width: "28rem" }} className="mt-4 m-auto">
            <Link className="text-light" to="/404">
              404 Page
            </Link>
            <Row className="m-auto">
              {mlRes.map((mlRes, index) => {
                return (
                  <>
                    <Col key={index} className="col-12 m-auto">
                      <p className="card-text text-light">{mlRes.name}</p>
                    </Col>
                  </>
                );
              })}
            </Row>
          </Container>

          <Container className="mt-auto">
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
                                Show more
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
