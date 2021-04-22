'use strict';


let state = 'title';
let cnv;
let points = 0;
let w = 600;
let h = 600;
let fontRegular;

function preload(){
  fontRegular = loadFont('assets/PixelGameFont.ttf');
}

function setup() {
  cnv = createCanvas(w, h);

  textFont(fontRegular);

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
  // if (state === 'title') {
  //   title();
  //   cnv.mouseClicked(titleMouseClicked);
  // } else if (state === 'level 1'){
  //   level1();
  //   cnv.mouseClicked(level1MouseClicked);
  // } else{
  //
  // }
}


function title() {
  background(204, 236, 255);
  textSize(70);
  //stroke(255);
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
  text('* CLICK FOR POINTS *', w/2, h - 30);
}

function level1MouseClicked() {
  points ++;
  console.log('points = ' + points);

  if (points >= 10){
    state = 'you win';
  }
}

function youWin(){
  background(254, 200, 201);
  textSize(50);
  stroke(255);
  fill(255);
  text('YOU WIN!', w/2, h/2);

  textSize(20);
  text('* CLICK TO RESTART *', w/2, h * 3/4);
}

function youWinMouseClicked(){
  state = 'level 1';
  points = 0;
}
