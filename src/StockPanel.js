import React, { useContext, useState, useEffect } from "react";

import Button from "@mui/material/Button";
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
    let [sellAmt, setSellAmt] = useState(0);
    let [shareAmt, setShareAmt] = useState(0);

    useEffect(() => {
        setBuyAmt(0);
        setShareAmt(0);
    }, [game]);

    useEffect(() => {
        if (!Number.isFinite(buyAmt)) {
            setBuyAmt(0);
            setShareAmt(0);
        }
    }, [buyAmt]);

    const onBuy = () => {
        game.buy(buyAmt);
        setGame(game);
    };

    const onSell = () => {
        console.log(shareAmt);
        game.sell(1);
        setGame(game);
    };

    const onBuyEnter = (event) => {
        setBuyAmt(event.target.value * stockprice);
        setShareAmt(event.target.value);
    };

    const onSellEnter = (event) => {
        setBuyAmt(-event.target.value * stockprice);
        setShareAmt(-event.target.value);
    };

    const nextDay = () => {
        game.next_time_step();
        setGame(game);
    };

    return (
        <>
            <h1> Control Panel </h1>
            <h4> Account: </h4>

            <Stack id="accountdisplay" spacing={2}>
                <div> Balance: {balance}</div>
                <div> Shares: {share}</div>
                <div> Total Wealth: {game.total_wealth()} </div>
            </Stack>
            <h4> Stocks: </h4>

            <Stack spacing={2}>
                <div> Shares: {game.player.shares}</div>
                <div> Current Price: {stockprice}</div>
                <div> Cost: {buyAmt} </div>
                <div> Pct Change: {percent_change}</div>
                <Stack direction="row" spacing={5}>
                    <Button id="BuyButton" variant="contained" onClick={onBuy}>
                        Buy
                    </Button>
                    <TextField id="buyinput" value={shareAmt} onChange={onBuyEnter}></TextField>
                    <Button id="SellButton" variant="contained" onClick={onSell}>
                        Sell
                    </Button>
                </Stack>
            </Stack>
            <Button id="nextMove" onClick={nextDay}>
                End Move
            </Button>
        </>
    );
}
