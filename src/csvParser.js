export function parseCsv(data) {
    let lines = data.split("\n");

    let closing = [];

    for (let i = 1; i < lines.length; i++) {
        let col = lines[i].split(",");
        closing.push(col[4]);
    }

    return closing;
}
