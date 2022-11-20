import axios from "axios";
import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";

const PokemonCard = ({ url }) => {
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    axios.get(url).then((data) => {
      setPokemon(data);
    });
  }, [url]);

  return (
    <Card sx={{ maxWidth: 345 }} className="col-3 mt-2">
      <CardMedia
        component="img"
        height="140"
        image={pokemon?.data.sprites.front_default}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {pokemon?.data.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
  );
};

export default PokemonCard;
