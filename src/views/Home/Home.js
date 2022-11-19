import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import axios from "axios";

import PokemonCard from "../Card/PokemonCard";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  useEffect(() => {
    axios.get("https://pokeapi.co/api/v2/pokemon").then((data) => {
      setPokemons(data.data.results);
    });
  }, []);

  return (
    <React.Fragment>
      <Typography variant="h1" gutterBottom>
        Pokemons
      </Typography>
      {pokemons.map((pokemon, index) => (
        <PokemonCard url={pokemon.url} key={index} />
      ))}
    </React.Fragment>
  );
};

export default Home;
