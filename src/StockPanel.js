import React, { useContext, useState, useEffect } from "react";

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import "./panel.css";

import { GameContext } from "./StockGame";
import StockArray from "./StockArray";
import { isDisabled } from "@testing-library/user-event/dist/utils";

export function StockPanel() {
    const { game, setGame } = useContext(GameContext);
    let [stockprice, percent_change] = game.get_stock_price();
    let share = game.player.shares;
    let balance = game.player.wallet;
    let total_val = balance + share * stockprice;
    let [buyAmt, setBuyAmt] = useState(0);
    let [shareAmt, setShareAmt] = useState(0);

    useEffect(() => {
        setBuyAmt(0);
        setShareAmt(0);
    }, [game]);

    const onBuy = () => {
        game.buy(buyAmt);
        setGame(game);
    };

    const onSell = () => {
        game.sell(shareAmt);
        setGame(game);
    };

    const onBuyEnter = (event) => {
        setBuyAmt(event.target.value * stockprice);
        setShareAmt(event.target.value);
    };

    const onSellEnter = (event) => {
        setBuyAmt(-event.target.value * stockprice);
        setShareAmt(event.target.value);
    };

    const nextDay = () => {
        game.next_time_step();
        setGame(game);
        total_val = balance + share * stockprice;
    };

    return (
        <>
            <h1> Control Panel </h1>
            <h4> Account: </h4>

            <Stack id="accountdisplay" spacing={2}>
                <div> Balance: {balance}</div>
                <div> Shares: {share}</div>
                <div> Total Wealth: {total_val} </div>
            </Stack>
            <h4> Stocks: </h4>

            <Stack spacing={2}>
                <div> Shares: {game.player.shares}</div>
                <div> Current Price: {stockprice}</div>
                <div> Cost: {buyAmt} </div>
                <Stack direction="row" spacing={2}>
                    <Button id="BuyButton" variant="contained" onClick={onBuy}>
                        Buy
                    </Button>
                    <TextField id="buyinput" value={shareAmt} onChange={onBuyEnter}></TextField>
                </Stack>
                <Stack direction="row" spacing={2}>
                    <Button id="SellButton" variant="contained" onClick={onSell}>
                        Sell
                    </Button>
                    <TextField id="sellinput" value={-shareAmt} onChange={onSellEnter}></TextField>
                </Stack>
            </Stack>
            <Button id="nextMove" onClick={nextDay}>
                End Move
            </Button>
        </>
    );
}
