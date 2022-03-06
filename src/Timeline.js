import React, { useContext, useState } from "react";
import stockdata from "./data";
import { parseCsv } from "./csvParser";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";
import StockArray from "./StockArray";
import { GameContext } from "./StockGame";
export function Timeline() {
    const { game, setGame } = useContext(GameContext);
    let stockdata = game.get_stock_data();

    return (
        <>
            <h1> Timeline </h1>
            <LineChart
                width={1000}
                height={550}
                data={stockdata}
                margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
            >
                {/* <XAxis dataKey="date" /> */}
                <YAxis />
                <Tooltip />
                <CartesianGrid stroke="#f5f5f5" />
                <Line type="monotone" dataKey="closing" stroke="#8884d8" />
                {/* <Line type="monotone" datakey = "y" stroke="#387908" yAxisId={1} /> */}
            </LineChart>
        </>
    );
}
