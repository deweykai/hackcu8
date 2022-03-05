export class Player {
  constructor()
  {
    this.wallet = 1000;
    this.shares = 0;
  }
  // Getter
  get money() {
    return this.wallet;
  }

  get shares() {
    return this.shares;
  }

  // Setters

  // Method
  calcArea() {
    return this.height * this.width;
  }
}

let player = new Player();
let money = player.wallet;

const square = new Rectangle(10, 10);

console.log(square.area); // 100
