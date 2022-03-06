import React, { useContext } from "react";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";
import { GameContext } from "./StockGame";

export function Timeline() {
    const { game } = useContext(GameContext);
    let stockdata = game.get_stock_data();

    let body;

    debugger;
    if (game.is_finished()) {
        body = <h1>You completed the game, your final value is {game.total_wealth()}</h1>;
    } else {
        body = (
            <>
                <h1> Timeline </h1>
                <LineChart
                    width={1000}
                    height={550}
                    data={stockdata}
                    margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
                >
                    {console.log("here", stockdata)}
                    <YAxis dataKey="close" />
                    <XAxis dataKey="date" />
                    <Tooltip />
                    <CartesianGrid stroke="#f5f5f5" />
                    <Line type="monotone" dataKey={"close"} stroke="#8884d8" />
                </LineChart>
            </>
        );
    }

    return body;
}
