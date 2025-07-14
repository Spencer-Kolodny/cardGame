import { Stack, Typography } from "@mui/material";
import PlayerHand from "./PlayerHand";
import { useEffect, useState } from "react";
import Card from "./Card";
import type { Suit } from "../types/Suit";
import { useGameContext } from "../hooks/useGameContext";


function GameTable() {
    const [deck, setDeck] = useState<Array<{ suit: Suit; rank: number; }>>([]);
    const { state, dispatch } = useGameContext();
    useEffect(() => {
        //make deck
        const suits: Array<Suit> = ["hearts", "spades", "clubs", "diamonds"];
        const deck: Array<{ suit: Suit; rank: number; }> = [];
        for (const suit of suits) {
            for (let rank = 1; rank <= 13; rank++) {
                deck.push({ suit, rank });
            }
        }
        //shuffle deck
        for (let i = deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [deck[i], deck[j]] = [deck[j], deck[i]];
        }
        setDeck(deck);
    }, []);
  return (
    <>

    <Stack
        direction="column"
        alignItems="center"
        style={{ minHeight: "90vh" }}>
        <div hidden={state.players.length < 2} style={state.players.length === 2 ? { marginBottom: "50px" } : {}}>
            <Typography>Player 2</Typography>
            <PlayerHand />
        </div>
        <Stack direction="row" alignItems="center" justifyContent="center" spacing={state.players.length >= 3 ? 12 : 0}>
            <div style={{ transform: "rotate(90deg)" }} hidden={state.players.length <= 2}>
                <PlayerHand />
                <div style={{ transform: "rotate(180deg)" }}>
                    <Typography>Player 3</Typography>
                </div>
            </div>
            <Stack direction="row" spacing={2} alignItems="center">
                <Card suit="hearts" rank={1} backside />
                <Card suit="hearts" rank={2} />
            </Stack>
            <div style={{ transform: "rotate(90deg)" }} hidden={state.players.length <= 3}>
                <Typography>Player 4</Typography>
                <PlayerHand />
            </div>
        </Stack>
        <div style={state.players.length < 3 ? { marginTop: "50px" } : {}}>
            <PlayerHand />
            <Typography>Player 1</Typography>
        </div>
    </Stack>
    </>
  )
}

export default GameTable
