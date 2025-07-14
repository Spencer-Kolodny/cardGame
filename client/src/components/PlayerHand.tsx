import { useEffect, useState } from "react";
import type { Suit } from "../types/Suit";
import Card from "./Card";
import { Grid } from "@mui/material";

function PlayerHand() {
  const [hand, setHand] = useState<Array<{ suit: Suit; rank: number }>>([]);

  useEffect(() => {
    setHand([
      { suit: "hearts", rank: 1 },
      { suit: "spades", rank: 2 },
      { suit: "clubs", rank: 3 },
      { suit: "diamonds", rank: 4 },
    ]);
  }, []);
  return (
    <Grid container direction="column" spacing={1}>
      <Grid>
        <Grid container spacing={1}>
          {hand.slice(0, 2).map((card, index) => (
            <Grid key={index}>
              <Card suit={card.suit} rank={card.rank} />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid>
        <Grid container spacing={1}>
          {hand.slice(2, 4).map((card, index) => (
            <Grid key={index + 2}>
              <Card suit={card.suit} rank={card.rank} />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default PlayerHand;
