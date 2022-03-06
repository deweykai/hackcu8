import React, { useContext, useState } from "react";
import stockdata from "./data";
import { parseCsv } from "./csvParser";
import { LineChart, Line, CartesianGrid, XAxis, YAxis,Tooltip } from 'recharts';
export function Timeline() {

    let [data, setDataAmt] = useState([]);
    console.log(stockdata);
    return (
        <>
        <h1> Timeline </h1>
        <LineChart
            width={1000}
            height={550}
            data={data}
            margin={{ top: 5, right: 20, left: 10, bottom: 5 }}
        >
            <XAxis dataKey="name" />
            <Tooltip />
            <CartesianGrid stroke="#f5f5f5" />
            <Line type="monotone" dataKey="x" stroke="#ff7300" yAxisId={0} />
            <Line type="monotone" dataKey="y" stroke="#387908" yAxisId={1} />
        </LineChart>
        </>
    );  
}
