import { Image } from "react-bootstrap";
export const PokemonImage = ({ src }) => {
  return (
    <div style={{ height: "120px", textAlign: "center" }}>
      <Image
        src={src}
        style={{ objectFit: "none", marginTop: "10px" }}
        alt="pokemon_image"
      />
    </div>
  );
};
