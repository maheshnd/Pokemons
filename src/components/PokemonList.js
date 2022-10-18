import { useEffect, useState } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { Link } from "react-router-dom";
import { Container} from "react-bootstrap";
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

  return (
    <Container>
      <ListGroup style={{paddingTop: "3%", width: '20%'}}>
       <h3>Pokemons</h3>
        {pokemonList.map((item,index) => (
          <Link to={`/pokemon/${index + 1}`}>
            <ListGroup.Item variant={ (index + 1) % 2 === 1 ?  "warning" : "secondary"}>{`${index + 1}. ${item.name}`}</ListGroup.Item>
          </Link>
        ))}
      </ListGroup>
    </Container>
  );
};
