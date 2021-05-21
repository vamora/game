'use strict';


let state = 'title';
let cnv;
let points = 0;
let w = 600;
let h = 600;
let fontRegular;

let player;
let paletasB = [];
let paletasBad = [];
let paletasP = [];
let paletasG = [];
let paletasR = [];
let paletasY = [];
let playerImg;
let paletaBlueImg;
let paletaBlueBadImg;
let paletaGreenImg;
let paletaPurpleImg;
let paletaRedImg;
let paletaYellowImg;

function preload(){
  fontRegular = loadFont('assets/PixelGameFont.ttf');
  playerImg = loadImage('assets/hand.png');
  paletaBlueImg = loadImage('assets/paleta_blue.png');
  paletaBlueBadImg = loadImage('assets/paleta_blue_bad.png');
  paletaGreenImg = loadImage('assets/paleta_green.png');
  paletaPurpleImg = loadImage('assets/paleta_purple.png');
  paletaRedImg = loadImage('assets/paleta_red.png');
  paletaYellowImg = loadImage('assets/paleta_yellow.png');
}

function setup() {
  cnv = createCanvas(w, h);

  textFont(fontRegular);

  player = new Player();

  paletasB[0] = new PaletaB();
  paletasBad[0] = new PaletaBad();
  paletasP[0] = new PaletaP();
  paletasG[0] = new PaletaG();
  paletasR[0] = new PaletaR();
  paletasY[0] = new PaletaY();

}

function draw() {

  switch (state) {
    case 'title':
      title();
      cnv.mouseClicked(titleMouseClicked);
      break;
    case 'level 1':
      level1();
      cnv.mouseClicked(level1MouseClicked);
      break;
    case 'you win':
      youWin();
      cnv.mouseClicked(youWinMouseClicked);
    default:
      break;
  }
}

function keyPressed(){
  if (keyCode == LEFT_ARROW){
    player.direction = 'left'
  } else if (keyCode == RIGHT_ARROW) {
    player.direction = 'right'
  } else if (keyCode == UP_ARROW) {
    player.direction = 'up'
  } else if (keyCode == DOWN_ARROW) {
    player.direction = 'down'
  }
}

function title() {
  background(188, 217, 236);
  textSize(70);
  //stroke(255);

  image(paletaBlueImg, 85, 350, 80, 80);
  image(paletaGreenImg, 170, 350, 80, 80);
  image(paletaPurpleImg, 255, 350, 80, 80);
  image(paletaRedImg, 340, 350, 80, 80);
  image(paletaYellowImg, 425, 350, 80, 80);



  textAlign(CENTER);
  fill(255);
  text('POP FACTORY', w/2, h/2);

  textSize(20);
  text('* CLICK TO START *', w/2, h - 100);
}

function titleMouseClicked() {
  console.log('canvas is clicked on title page');
  state = 'level 1'
}


function level1() {
  background(221, 212, 232);

  if (random(1) <= 0.01){
    paletasB.push(new PaletaB());
    paletasBad.push(new PaletaBad());
    paletasP.push(new PaletaP());
    paletasG.push(new PaletaG());
    paletasR.push(new PaletaR());
    paletasY.push(new PaletaY());
  }


  player.display();
  player.move();

  paletasB[0].display();
  paletasB[0].move();

  paletasBad[0].display();
  paletasBad[0].move();

  paletasP[0].display();
  paletasP[0].move();

  paletasG[0].display();
  paletasG[0].move();

  paletasR[0].display();
  paletasR[0].move();

  paletasY[0].display();
  paletasY[0].move();



  for (let i = 0; i < paletasB.length; i++){
    paletasB[i].display();
    paletasB[i].move();

    paletasP[i].display();
    paletasP[i].move();

    paletasG[i].display();
    paletasG[i].move();

    paletasR[i].display();
    paletasR[i].move();

    paletasY[i].display();
    paletasY[i].move();
  }
  // check for collision, if there is a collision increase points by 1
 for (let i = paletasBad.length - 1; i >= 0; i--) {
  if (dist(player.x, player.y, paletasBad[i].x, paletasBad[i].y) <= (player.r + paletasBad[i].r) / 2) {
    points++;
    console.log(points);
    paletasBad.splice(i, 1);
    }
  }
  text('SCORE: ' + points, 500, h - 550);

  // if (points >= 1) {
  //   state = 'check in'
  // } else if (points >= 3){
  //   state = 'you win';
  // }

  if (points >= 35) {
    state = 'you win'
  }

}
function level1MouseClicked() {
  // points ++;
  // console.log('points = ' + points);
  //
  // if (points >= 10){
  //   state = 'you win';
  // }
  //if (state === 'check in' || state === 'you win')
}


function checkIn(){
  background(254, 200, 201);
  textSize(50);
  stroke(255);
  fill(255);
  text('BREAK TIME?', w/2, h/2);

  textSize(35);
  text('YES', 200, 380);
  text('NO', 400, 380);

  textSize(20);
  text('* PLEASE SELECT *', w/2, h * 3/4);
  // paletasG.splice(1);
  // paletasG[0].reset();
}

function youWin(){
  background(254, 200, 201);
  textSize(50);
  stroke(255);
  fill(255);
  text('YOU WIN?', w/2, h/2);

  image(paletaBlueImg, 85, 350, 80, 80);
  image(paletaGreenImg, 170, 350, 80, 80);
  image(paletaPurpleImg, 255, 350, 80, 80);
  image(paletaRedImg, 340, 350, 80, 80);
  image(paletaYellowImg, 425, 350, 80, 80);


  textSize(20);
  text('* CLICK TO DO IT ALL OVER AGAIN! *',w/2, h - 100);

  textSize(13);
  text('I ADMIRE YOUR PATIENCE :)', 300, 550);

}

function youWinMouseClicked(){
  state = 'level 1';
  points = 0;
  // paletasG.splice(1);
  // paletas[0].reset();
}
