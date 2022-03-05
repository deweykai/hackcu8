import React from "react";
import data from "./data";
import { parseCsv } from "./csvParser";

export function Timeline() {
    return <h1>{parseCsv(data)}</h1>;
}
