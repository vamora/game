class PaletaG {
  constructor() {
    this.r = 70;
    this.x = random(w);
    this.y = 0 - this.r;
    this.speed = 8;
  }

  display() {
    image(paletaGreenImg, this.x, this.y, this.r, this.r);

  }

  move() {
    this.y++;
    this.speed;
  }

  reset() {
    this.r = 70;
    this.x = random(w);
    this.y = 0 - this.r;
    this.speed = 8;
}
}
