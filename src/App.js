import ContentCards from "./Components/ContentCards";
import Navbar from "./Components/Navbar";
import gameData from "./data/gamedbfiltered";

//import { Card, Container, Col, Row } from "react-bootstrap";
//import Games from "./data/games";

console.table(gameData[0].name);
function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <ContentCards />
      </div>
    </>
  );
}

export default App;
