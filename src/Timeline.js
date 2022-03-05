import React from "react";

export function Timeline({ stockData }) {
    //return <h1>{parseCsv(data)}</h1>;
    return (
        <>
            <h1>Timeline</h1>
            <p>{stockData.length}</p>
        </>
    );
}
