//keep track of current time
//get price of current stock
//all stock data
// buy stock and add to players share, subtract from balance
//sell stock and
//store player and stock data for game state
import { Player } from "./playerclass";

export class Game {
    constructor(stock, length) {
        this.player = new Player();
        this.time = 0;
        this.gameLength = length;
        this.stockdata = stock;
    }

    get_stock_data() {
        return this.stockdata.slice(0, this.time + 1);
    }

    buy(cash) {
        if (this.player.wallet >= cash) {
            this.player.wallet -= cash;
            this.player.shares += cash / this.stockdata[this.time].closing;
            return true;
        } else {
            console.log("Not enough money to buy stock!");
            return false;
        }
    }

    sell(share) {
        if (this.player.shares >= share) {
            this.player.shares -= share;
            this.player.wallet += share * this.stockdata[this.time].closing;
            return true;
        } else {
            console.log("You cannot sell ", share, " shares!");
            console.log("You only have ", this.player.shares, " shares...");
            return false;
        }
    }

    next_time_step() {
        if (!this.is_finished()) {
            this.time += 1;
        }
    }

    is_finished() {
        if (this.time == this.gameLength - 1) {
            console.log("The next turn is the last turn!");
        }
        if (this.time == this.gameLength) {
            console.log("Game over!");
            if (this.player.wallet < 1000) {
                console.log("You lost ", 1000 - this.player.wallet, " dollars!");
            } else {
                console.log("You gained ", this.player.wallet - 1000, " dollars!");
            }
        }
    }

    get_stock_price() {
        let percent_change = 0;
        if (this.time > 0) {
            let last_price = this.stockdata[this.time - 1].closing;
            let curr_price = this.stockdata[this.time].closing;
            percent_change = (curr_price - last_price) / last_price;

            return [this.stockdata[this.time].closing, percent_change];
        } else {
            return [this.stockdata[this.time].closing, percent_change];
        }
    }
}
