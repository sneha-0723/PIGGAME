'use strict';
/*document.querySelector('.bottom').addEventListener('click', function () {
   let color1=("pink").val();
   let color2=("purple").val(); 
  document.querySelector('.leftbox').style.background =
    'linearGradient(to bottom right,pink,purple)';
});*/
const blur1 = function (blur) {
  document.querySelector('.current1').style.filter = `blur(${blur}px)`;
  document.querySelector('.finalscore1').style.filter = `blur(${blur}px)`;
  document.querySelector('.player1').style.filter = `blur(${blur}px)`;
};
const blur2 = function (blur) {
  document.querySelector('.current2').style.filter = `blur(${blur}px)`;
  document.querySelector('.finalscore2').style.filter = `blur(${blur}px)`;
  document.querySelector('.player2').style.filter = `blur(${blur}px)`;
};

document.querySelector('.dice').style.display = 'None';
let number = Math.trunc(Math.random() * 6) + 1;
let currentscore = 0;
let player = 1;
let finalscore1 = 0;
let finalscore2 = 0;
let currentfinalscore1 = 0;
let currentfinalscore2 = 0;
document.querySelector('.middle').addEventListener('click', function () {
  number = Math.trunc(Math.random() * 6) + 1;
  document.querySelector('.dice').src = `dice-${number}.png`;
  document.querySelector('.dice').style.display = 'flex';
  if (number !== 1) {
    currentscore = currentscore + number;
    document.querySelector(`.score--${player}`).textContent = currentscore;
    if (player == 1) {
      finalscore1 = finalscore1 + number;
    } else {
      finalscore2 = finalscore2 + number;
    }
  } else if (number === 1) {
    currentscore = 0;
    document.querySelector(`.score--${player}`).textContent = currentscore;
    player = player == 1 ? 2 : 1;
    if (player == 2) {
      document.querySelector('.leftbox').style.background =
        'linear-gradient(to bottom right,rgb(214,147,158),rgb(209,83,104))';
      document.querySelector(
        '.rightbox'
      ).style.background = `linear-gradient(to bottom right,rgb(248, 204, 212),
         rgb(228, 141, 156))`;
      blur1(0.9);
      blur2(0);
    } else {
      document.querySelector(
        '.rightbox'
      ).style.background = `linear-gradient(to bottom right,rgb(214, 147, 158),
            rgb(209, 83, 104))`;
      document.querySelector(
        '.leftbox'
      ).style.background = `linear-gradient(to bottom right,rgb(248, 204, 212),
        rgb(228, 141, 156))`;
      blur1(0);
      blur2(0.9);
    }
  }

  /*if (currentfinalscore1 > currentfinalscore2 && currentfinalscore1 > 49) {
    document.querySelector('.leftbox').style.background = 'green';
    document.querySelector('.finalscore1').textContent = 'YOU WIN!!!';
  } else if (
    currentfinalscore1 < currentfinalscore2 &&
    currentfinalscore2 > 49
  ) {
    document.querySelector('.rightbox').style.background = 'green';
    document.querySelector('.finalscore2').textContent = 'YOU WIN!!!';
  }*/
});

document.querySelector('.bottom').addEventListener('click', function () {
  if (player == 1) {
    currentfinalscore1 = currentfinalscore1 + currentscore;
    document.querySelector(`.finalscore1`).textContent = currentfinalscore1;
  } else if (player == 2) {
    currentfinalscore2 = currentfinalscore2 + currentscore;
    document.querySelector(`.finalscore2`).textContent = currentfinalscore2;
  }
  currentscore = 0;
  document.querySelector(`.score--${player}`).textContent = currentscore;
  player = player == 1 ? 2 : 1;
  if (player == 2) {
    document.querySelector('.leftbox').style.background =
      'linear-gradient(to bottom right,rgb(214,147,158),rgb(209,83,104))';
    document.querySelector(
      '.rightbox'
    ).style.background = `linear-gradient(to bottom right,rgb(248, 204, 212),
         rgb(228, 141, 156))`;
    blur1(0.9);
    blur2(0);
  } else {
    document.querySelector(
      '.rightbox'
    ).style.background = `linear-gradient(to bottom right,rgb(214, 147, 158),
            rgb(209, 83, 104))`;
    document.querySelector(
      '.leftbox'
    ).style.background = `linear-gradient(to bottom right,rgb(248, 204, 212),
        rgb(228, 141, 156))`;
    blur1(0);
    blur2(0.9);
  }

  document.querySelector('.dice').src = `dice-1.png`;
  if (currentfinalscore1 > currentfinalscore2 && currentfinalscore1 > 99) {
    document.querySelector('.leftbox').style.background = 'green';
    document.querySelector('.finalscore1').textContent = 'YOU WIN!!!';
    document.querySelector('.finalscore1').style.color = `yellow`;
    document.querySelector('.dice').style.display = 'None';
    document.querySelector('.middle').disabled = true;
    document.querySelector('.bottom').disabled = true;
    document.querySelector('.rightbox').style.background =
      'linear-gradient(to bottom right,rgb(214,147,158),rgb(209,83,104))';

    blur1(0);
    blur2(0.9);
  } else if (
    currentfinalscore1 < currentfinalscore2 &&
    currentfinalscore2 > 99
  ) {
    document.querySelector('.rightbox').style.background = 'green';
    document.querySelector('.finalscore2').textContent = 'YOU WIN!!!';
    document.querySelector('.finalscore2').style.color = `yellow`;
    blur1(0.9);
    blur2(0);
    document.querySelector('.dice').style.display = 'None';
    document.querySelector('.middle').disabled = true;
    document.querySelector('.bottom').disabled = true;
    document.querySelector('.leftbox').style.background =
      'linear-gradient(to bottom right,rgb(214,147,158),rgb(209,83,104))';
  }
});

document.querySelector('.topbutton').addEventListener('click', function () {
  document.querySelector('.middle').disabled = false;
  document.querySelector('.bottom').disabled = false;
  document.querySelector(
    '.rightbox'
  ).style.background = `linear-gradient(to bottom right,rgb(214, 147, 158),
              rgb(209, 83, 104))`;
  document.querySelector(
    '.leftbox'
  ).style.background = `linear-gradient(to bottom right,rgb(248, 204, 212),
          rgb(228, 141, 156))`;
  document.querySelector('.finalscore1').style.color = 'rgb(211, 54, 80)';
  document.querySelector('.finalscore2').style.color = 'rgb(211, 54, 80)';

  document.querySelector('.dice').style.display = 'None';
  number = Math.trunc(Math.random() * 6) + 1;
  currentscore = 0;
  player = 1;
  finalscore1 = 0;
  finalscore2 = 0;
  currentfinalscore1 = 0;
  currentfinalscore2 = 0;
  document.querySelector('.score--1').textContent = 0;
  document.querySelector('.score--2').textContent = 0;
  document.querySelector('.finalscore1').textContent = 0;
  document.querySelector('.finalscore2').textContent = 0;

  blur1(0);
  blur2(0.9);
});
