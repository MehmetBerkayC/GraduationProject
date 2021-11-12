import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

function ContentCards() {
  return (
    <div>
      <p className="text-center mt-2">
        This is a special message: Make sure you either duplicate the cards if
        figured how to use the json files or restart the design
      </p>
      <Container className="mt-2">
        <Row>
          <Col className="col-3">
            <Card className="border-3">
              <img
                className="w-100"
                src="https://media.rawg.io/media/games/da1/da1b267764d77221f07a4386b6548e5a.jpg"
              ></img>
              <Card.Body class="card-body">
                <h5 class="card-title">Game Titles</h5>
                <p class="card-text">
                  Game Info maybe? make img tag after h5 to display game image
                </p>
                <Button class="btn btn-primary">
                  Add Href to these buttons or delete
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="col-3">
            <Card className="border-3">
              <Card.Body class="card-body">
                <h5 class="card-title">Game Titles</h5>
                <p class="card-text">
                  Game Info maybe? make img tag after h5 to display game image
                </p>
                <Button class="btn btn-primary">
                  Add Href to these buttons or delete
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="col-3">
            <Card className="border-3">
              <Card.Body class="card-body">
                <h5 class="card-title">Game Titles</h5>
                <p class="card-text">
                  Game Info maybe? make img tag after h5 to display game image
                </p>
                <Button class="btn btn-primary">
                  Add Href to these buttons or delete
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col className="col-3">
            <Card className="border-3">
              <Card.Body class="card-body">
                <h5 class="card-title">Game Titles</h5>
                <p class="card-text">
                  Game Info maybe? make img tag after h5 to display game image
                </p>
                <Button class="btn btn-primary">
                  Add Href to these buttons or delete
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContentCards;
