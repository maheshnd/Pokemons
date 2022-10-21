import { useEffect, useState } from "react";
import { Container, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { PokemonImage } from "./PokemonImage";
import { getPokemonImage } from "./utils";
import { getPokemonList } from "./utils";
export const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const fetchPockeMonList = async (limit) => {
    setLoading(true)
    const url = getPokemonList.replace("count", limit);
    const result = await fetch(url);
    const response = await result.json();
    setPokemonList(response?.results);
    setLoading(false)
  };
  useEffect(() => {
    fetchPockeMonList(151);
  }, []);

  return (
    <Container>
      <h3>Pokemons</h3>
      {isLoading ? (
        <p>Please wait loading ......</p>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            top: "20px",
          }}
        >
          {pokemonList.map((item, index) => (
            <Link to={`/pokemon/${index + 1}`} style={{ flex: 1 }}>
              <Card
                className="cards"
                bg="light"
                style={{ width: "18rem", flex: 3, margin: "10px" }}
              >
                <PokemonImage src={getPokemonImage.replace("id", index + 1)} />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                </Card.Body>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </Container>
  );
};
