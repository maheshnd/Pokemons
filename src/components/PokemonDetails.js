import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
export const PokemonDetails = (props) => {
  const { id } = useParams();
  const [pokemonDeatils, setPokemonDeatils] = useState([]);
  const fetchDetails = async (id) => {
    const result = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    const response = await result.json();
    setPokemonDeatils(response);
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
        <Col>
          <Card className="cards" bg="light"  style={{ width: "18rem" }}>
            <div style={{ height: "120px", textAlign: "center" }}>
              <Image
                src={pokemonDeatils?.sprites?.back_default || ""}
                style={{ objectFit: "none", marginTop: "10px" }}
                alt="talkie"
              />
            </div>
            <Card.Body>
              <Card.Title>{pokemonDeatils.name}</Card.Title>
              <hr></hr>
              <Card.Text>
                <h6>Weight: {pokemonDeatils.weight}</h6>
                <h6>Height: {pokemonDeatils.height}</h6>
              </Card.Text>
            </Card.Body>
            <Link to={'/'}>
            <Card.Footer>Go To Home</Card.Footer>
            </Link>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};
