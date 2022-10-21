import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PokemonImage } from "./PokemonImage";
import { getPokemonDeatils } from "./utils";
export const PokemonDetails = () => {
  const { id } = useParams();
  const [pokemonDeatils, setPokemonDeatils] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const fetchDetails = async (id) => {
    setLoading(true);
    const url = getPokemonDeatils.replace("id", id);
    const result = await fetch(url);
    const response = await result.json();
    setPokemonDeatils(response);
    setLoading(false);
  };
  useEffect(() => {
    fetchDetails(id);
  }, []);
  return (
    <Container
      style={{
        paddingTop: "3%",
        maxHeight: "14rem",
      }}
    >
      <Row style={{ maxHeight: "15rem" }}>
        {isLoading ? (
          <p>Please wait loading ......</p>
        ) : (
          <Col>
            <Card className="cards" bg="light" style={{ width: "18rem" }}>
              <PokemonImage src={pokemonDeatils?.sprites?.back_default || ""} />
              <Card.Body>
                <Card.Title>{pokemonDeatils.name}</Card.Title>
                <hr></hr>
                <Card.Text>
                  <h6>Weight: {pokemonDeatils.weight}</h6>
                  <h6>Height: {pokemonDeatils.height}</h6>
                </Card.Text>
              </Card.Body>
              <Link to={"/"}>
                <Card.Footer>Go To Home</Card.Footer>
              </Link>
            </Card>
          </Col>
        )}
      </Row>
    </Container>
  );
};
