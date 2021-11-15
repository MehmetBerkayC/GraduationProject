import { render } from "@testing-library/react";
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

//const data = require("../data/gamedbfiltered.json");
const gamedata = require("../data/gamedatafinal.json");
let gameinfo = [];
let counter = 0;

let traverse = () => {
  // Make the JSON data 1 Dimensional
  for (let i = 0; i < 20; i++) {
    gameinfo[counter] = gamedata[i];
    counter++;
  }

  //   // Display what you did
  //   for (let i = 0; i < gameinfo.length; i++) {
  //     console.log(gameinfo[i]);
  //   }
};

// // Render 4 Cards each row
// let renderCols = (gamedata, index) => {
//   return (
//     <>
//       <Col sm={4}>
//         <Card className="border-3" key={index}>
//           <Card.Img className="w-100" src={gamedata.background_image} />
//           <Card.Body class="card-body">
//             <h5 className="card-title">{gamedata.name}</h5>
//             <p className="card-text">
//               Rating: {gamedata.rating} <br />
//               Genres: <br />
//               Suggestions count: {gamedata.suggestions_count}
//             </p>
//             <Button className="btn btn-primary">
//               Add Href to these buttons or delete
//             </Button>
//           </Card.Body>
//         </Card>
//       </Col>
//     </>
//   );
// };

// let renderCard = (gameinfo, index) => {
//   return (
//     <>
//       <Col className="col-3">
//         <Card className="border-3" key={index}>
//           <Card.Img className="w-100" src={gameinfo.background_image} />
//           <Card.Body class="card-body">
//             <h5 className="card-title">{gameinfo.name}</h5>
//             <p className="card-text">
//               Rating: {gameinfo.rating} <br />
//               Genres: <br />
//               Ratings count: {gameinfo.ratings_count}
//             </p>
//             <Button className="btn btn-primary">
//               Add Href to these buttons or delete
//             </Button>
//           </Card.Body>
//         </Card>
//       </Col>
//     </>
//   );
// };

function ContentCards() {
  return (
    <div>
      <p className="text-center mt-2">
        This is a special message: Make sure you either duplicate the cards if
        figured how to use the json files or restart the design
      </p>
      <div>{traverse()}</div>

      <Container className="mt-2">
        <div>
          <Row>
            {gameinfo.map((gamedata, index) => {
              return (
                <>
                  <Col className="mt-3 col-3">
                    <Card className="border-3" key={index}>
                      <Card.Img
                        className="w-100"
                        src={gamedata.background_image}
                      />
                      <Card.Body class="card-body">
                        <h5 className="card-title">{gamedata.name}</h5>
                        <p className="card-text">
                          Rating: {gamedata.rating} <br />
                          Genres: <br />
                          Suggestions count: {gamedata.suggestions_count}
                        </p>
                        <Button className="btn btn-primary">
                          Add Href to these buttons or delete
                        </Button>
                      </Card.Body>
                    </Card>
                  </Col>
                </>
              );
            })}
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default ContentCards;
