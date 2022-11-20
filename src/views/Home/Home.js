import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import axios from "axios";
import IconButton from "@mui/material/IconButton";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";

import PokemonCard from "../Card/PokemonCard";

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [paginationUrl, setPaginationUrl] = useState({
    next: "",
    previous: "",
  });
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon");

  useEffect(() => {
    getPokemons();
  }, [url]);

  const getPokemons = () => {
    axios.get(url).then((data) => {
      setPokemons(data.data.results);
      setPaginationUrl({ next: data.data.next, previous: data.data.previous });
    });
  };

  return (
    <React.Fragment>
      <Typography variant="h1" gutterBottom>
        Pokemons
      </Typography>
      <div className="container text-center">
        <div className="row">
          {pokemons.map((pokemon, index) => (
            <PokemonCard url={pokemon.url} key={index} />
          ))}
        </div>
      </div>
      {paginationUrl.previous ? (
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
          onClick={() => setUrl(paginationUrl.previous)}
        >
          <KeyboardDoubleArrowLeftIcon />
        </IconButton>
      ) : null}
      {paginationUrl.next ? (
        <IconButton
          color="primary"
          aria-label="upload picture"
          component="label"
          onClick={() => setUrl(paginationUrl.next)}
        >
          <KeyboardDoubleArrowRightIcon />
        </IconButton>
      ) : null}
    </React.Fragment>
  );
};

export default Home;
