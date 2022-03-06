function createRow(line) {
    let item = line.split(",");
    let data = {
        date: item[0],
        open: item[1],
        high: item[2],
        low: item[3],
        close: item[4],
        "adj close": item[5],
        volume: item[6],
    };
    return data;
}

export function parseCsv(data) {
    let lines = data.split("\n");

    let rows = [];

    for (let i = 1; i < lines.length; i++) {
        rows.push(createRow(lines[i]));
    }

    return rows;
}
