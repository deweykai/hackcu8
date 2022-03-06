import React, { useContext, useState } from "react";

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import "./panel.css";

import { GameContext } from "./StockGame";

export function StockPanel() {
    const { game, setGame } = useContext(GameContext);
    let [stockprice, percent_change] = game.get_stock_price();
    let share = game.player.shares;
    let balance = game.player.wallet;
    let [buyAmt, setBuyAmt] = useState(0);
    const onBuy = () => {
        alert("buy");
    };

    return (
        <>
            <h1> Control Panel </h1>
            <h4> Account: </h4>

            <Stack id="accountdisplay" spacing={2}>
                <div> Balance: {balance}</div>
                <div> Shares: {share}</div>
            </Stack>
            <h4> Stocks: </h4>

            <Stack container spacing={2}>
                <div> Shares: {game.player.shares}</div>
                <div> Current Price: {stockprice}</div>
                <div> Cost </div>
                <Stack direction="row" spacing={2}>
                    <Button id="BuyButton" variant="contained" onClick={onBuy}>
                        Buy
                    </Button>
                    <TextField id="buyinput"></TextField>
                </Stack>
                <Stack direction="row" spacing={2}>
                    <Button id="SellButton" variant="contained">
                        Sell
                    </Button>
                    <TextField id="sellinput"></TextField>
                </Stack>
            </Stack>
            <Button id="nextMove">End Move</Button>
        </>
    );
}
