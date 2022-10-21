import { useEffect, useState } from "react";
import { Container,Card, Image, } from "react-bootstrap";
import { Link } from "react-router-dom";
export const PokemonList = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const fetchPockeMon = async () => {
    const result = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
    const response = await result.json();
    setPokemonList(response?.results);
  };
  useEffect(() => {
    fetchPockeMon();
  }, []);

  const baseUrl =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/id.png";

  return (
    <Container>
      <h3>Pokemons</h3>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: 'wrap', top:'20px' }}>
        {pokemonList.map((item, index) => (
          <Link to={`/pokemon/${index + 1}`} style={{ flex: 1 }}>
            <Card className="cards" bg="light" style={{ width: "18rem", flex: 3,margin:'10px' }}>
              <div style={{ height: "120px", textAlign: "center" }}>
                <Image
                  src={baseUrl.replace("id", index + 1)}
                  style={{ objectFit: "none", marginTop: "10px" }}
                  alt="pokemon_image"
                />
              </div>
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
              </Card.Body>
            </Card>
          </Link>
        ))}
      </div>
    </Container>
  );
};
