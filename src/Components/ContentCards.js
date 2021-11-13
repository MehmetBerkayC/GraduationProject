import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

//const data = require("../data/gamedbfiltered.json");
const gamedata = require("../data/gamedata.json");
let gameinfo = [];
let counter = 0;

let traverse = () => {
  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < gamedata[i].results.length; j++) {
      console.log(gamedata[i].results[j]);
      gameinfo[counter] = gamedata[i].results[j];
      counter++;
    }
  }
};

let renderCard = (gameinfo, index) => {
  return (
    <>
      <Col className="col-3">
        <Card className="border-3" key={index}>
          <Card.Img className="w-100" src={gameinfo.background_image} />
          <Card.Body class="card-body">
            <h5 className="card-title">{gameinfo.name}</h5>
            <p className="card-text">
              Rating: {gameinfo.rating} <br />
              Genres: <br />
              Ratings count: {gameinfo.ratings_count}
            </p>
            <Button className="btn btn-primary">
              Add Href to these buttons or delete
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

function ContentCards() {
  return (
    <div>
      <p className="text-center mt-2">
        This is a special message: Make sure you either duplicate the cards if
        figured how to use the json files or restart the design
      </p>
      <div>{traverse()}</div>

      <Container className="mt-2">
        <div>{gameinfo.map(renderCard)}</div>
      </Container>
    </div>
  );
}

export default ContentCards;
