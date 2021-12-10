import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroller";
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
  for (let i = 0; i < gameinfo.length; i++) {
    console.log(gameinfo[i]);
  }
};

let responsiveTraverse = () => {
  for (let i = 0; i < 20; i++) {
    gameinfo[counter] = gamedata[counter];
    counter++;
  }
}; // fill the load more algorithm

let renderCards = () => {
  return (
    <>
      {gameinfo.map((gamedata, index) => {
        return (
          <>
            <Col className="my-2 col-3 m-auto">
              <Card className="border-3 shadow m-auto" key={index}>
                <Card.Img
                  style={{ height: "10.5rem" }}
                  src={gamedata.background_image}
                />
                <Card.Body class="card-body my-1">
                  <div className="d-flex justify-content-center m-auto">
                    <h5 className="card-title">{gamedata.name}</h5>
                  </div>
                  <p className="card-text">
                    Rating: {gamedata.rating} <br />
                    How many rated: {gamedata.ratings_count} <br />
                    How many suggested: {gamedata.suggestions_count}
                    <br />
                    <p className="card-text">
                      Genres:
                      {gamedata.genres.map((gamedata) => {
                        return <>{" " + gamedata.name}</>;
                      })}
                    </p>
                  </p>

                  <div className="d-flex justify-content-center m-auto">
                    <Button className="btn btn-secondary m-auto shadow rounded-pill">
                      Add Href to these buttons
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </>
        );
      })}
    </>
  );
};

function ContentCards() {
  return (
    <div className="m-auto bg-success">
      <p className="text-center mt-2">
        This is a special message: Make sure you either duplicate the cards if
        figured how to use the json files or restart the design
      </p>
      <div>{traverse()}</div>
      <div className="d-flex m-auto">
        <Container style={{ width: "28rem" }} className="mt-4 m-auto">
          <Row className="m-auto">
            {mlRes.map((mlRes, index) => {
              return (
                <>
                  <Col key={index} className="col-12 m-auto">
                    <Card>
                      <Card.Img />
                      <Card.Body>
                        <p className="card-text">{mlRes.name}</p>
                      </Card.Body>
                    </Card>
                  </Col>
                </>
              );
            })}
          </Row>
        </Container>
        <Container className="mt-auto">
          <div>
            <InfiniteScroll
              dataLength={gameinfo.length}
              endMessage={<p className="">Thats All!</p>}
            >
              <Row className="m-auto">{renderCards()}</Row>
            </InfiniteScroll>
          </div>
          <div className="d-flex justify-content-center m-auto">
            <Button
              className="btn btn-dark m-auto w-100 rounded-0"
              onClick={responsiveTraverse}
            >
              <span>
                <h5 className="d-flex justify-content-center m-auto">
                  Show More Games
                </h5>
              </span>
            </Button>
          </div>
        </Container>
      </div>
    </div>
  );
}

export default ContentCards;
