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
        if (Number.isFinite(cash)) {
            if (this.player.wallet >= cash) {
                this.player.wallet -= cash;
                this.player.shares += cash / this.stockdata[this.time].close;
                return true;
            } else {
                console.log("Not enough money to buy stock!");
                return false;
            }
        }
    }

    sell(share) {
        if (Number.isFinite(share)) {
            if (this.player.shares >= share) {
                this.player.shares -= share;
                this.player.wallet += share * this.stockdata[this.time].close;
                return true;
            } else {
                console.log("You cannot sell ", share, " shares!");
                console.log("You only have ", this.player.shares, " shares...");
                return false;
            }
        }
    }

    next_time_step(n = 1) {
        n = Number(n);
        if (!this.is_finished() && Number.isFinite(n) && n >= 1) {
            if (this.time + n >= this.stockdata.length) {
                this.time = this.stockdata.length - 1;
            } else {
                this.time += n;
            }
        }
    }

    is_finished() {
        if (this.time === this.stockdata.length - 1) {
            return true;
        }
        return false;
    }

    total_wealth() {
        let wealth = this.player.wallet;
        let [price] = this.get_stock_price();
        wealth += this.player.shares * price;
        return wealth;
    }

    get_stock_price() {
        let percent_change = 0;
        if (this.time > 0) {
            let last_price = this.stockdata[this.time - 1].close;
            let curr_price = this.stockdata[this.time].close;
            percent_change = (curr_price - last_price) / last_price;

            return [this.stockdata[this.time].close, percent_change];
        } else {
            return [this.stockdata[this.time].close, percent_change];
        }
    }
}
